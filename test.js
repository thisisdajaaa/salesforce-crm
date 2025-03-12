/**
 * PureBlue Chat Widget
 * Embeddable chat widget for third-party websites
 */

(function () {
  // Configuration defaults
  const DEFAULT_CONFIG = {
    personaSlug: "default",
    prospectSlug: "default",
    chatServerUrl: "http://localhost:5173",
    position: "bottom-right",
    primaryColor: "#1a5cff",
    width: 400,
    height: 600,
  };

  // Store widget instance
  let widgetInstance = null;

  // Chat widget class
  class PureBlueChat {
    constructor(config) {
      this.config = { ...DEFAULT_CONFIG, ...config };
      this.isOpen = false;
      this.iframeReady = false;
      this.button = null;
      this.container = null;
      this.iframe = null;
      this.authToken = null;

      // Try to get auth token from localStorage if available
      try {
        this.authToken = localStorage.getItem("pureblue_auth_token");
      } catch (e) {
        console.warn("PureBlue Chat: Unable to access localStorage");
      }

      this.init();
    }

    init() {
      this.createStyles();
      this.createButton();
      this.createChatWindow();
      this.setupEventListeners();

      // Check for existing session
      if (this.checkSessionStatus()) {
        console.log("Found existing session");
        // You could potentially auto-open the chat here if desired
        // this.toggleChat();
      }
    }

    createStyles() {
      const styleEl = document.createElement("style");
      styleEl.innerHTML = `
          .pureblue-chat-button {
            position: fixed;
            z-index: 9999;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: ${this.config.primaryColor};
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
          }
          
          .pureblue-chat-button:hover {
            transform: scale(1.05);
          }
          
          .pureblue-chat-window {
            position: fixed;
            z-index: 9998;
            width: ${this.config.width}px;
            height: ${this.config.height}px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 40px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
          }
          
          .pureblue-chat-window.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }
          
          .pureblue-chat-iframe {
            width: 100%;
            height: 100%;
            border: none;
          }
        `;

      // Positioning styles based on config
      if (this.config.position === "bottom-right") {
        styleEl.innerHTML += `
            .pureblue-chat-button {
              bottom: 20px;
              right: 20px;
            }
            
            .pureblue-chat-window {
              bottom: 90px;
              right: 20px;
            }
          `;
      } else if (this.config.position === "bottom-left") {
        styleEl.innerHTML += `
            .pureblue-chat-button {
              bottom: 20px;
              left: 20px;
            }
            
            .pureblue-chat-window {
              bottom: 90px;
              left: 20px;
            }
          `;
      }

      document.head.appendChild(styleEl);
    }

    createButton() {
      this.button = document.createElement("div");
      this.button.className = "pureblue-chat-button";
      this.button.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        `;
      document.body.appendChild(this.button);
    }

    createChatWindow() {
      this.container = document.createElement("div");
      this.container.className = "pureblue-chat-window";

      this.iframe = document.createElement("iframe");
      this.iframe.className = "pureblue-chat-iframe";

      // Construct the iframe URL with query parameters - IMPORTANT CHANGE
      const queryParams = new URLSearchParams();

      // Make sure these values are explicitly set from config
      queryParams.set("personaSlug", this.config.personaSlug);
      queryParams.set("prospectSlug", this.config.prospectSlug);

      // Log for debugging
      console.log("Creating chat iframe with params:", {
        personaSlug: this.config.personaSlug,
        prospectSlug: this.config.prospectSlug,
      });

      // Build the complete URL with parameters explicitly set
      const iframeUrl = `${
        this.config.chatServerUrl
      }/chat-auth?${queryParams.toString()}`;
      this.iframe.src = iframeUrl;
      this.iframe.title = "PureBlue Chat";

      this.container.appendChild(this.iframe);
      document.body.appendChild(this.container);
    }

    setupEventListeners() {
      // Toggle chat window on button click
      this.button.addEventListener("click", () => {
        this.toggleChat();
      });

      try {
        const parentDomain = window.location.hostname;
        localStorage.setItem("pureblue_parent_domain", parentDomain);
        console.log("Parent domain stored:", parentDomain);
      } catch (e) {
        console.warn("Unable to store parent domain information");
      }

      // Listen for storage events (changes in other tabs)
      window.addEventListener("storage", (event) => {
        if (event.key === "pureblue_auth_token") {
          console.log("Auth token changed in another tab");

          // Token was removed (logout in another tab)
          if (!event.newValue && this.authToken) {
            console.log("User logged out in another tab");
            this.authToken = null;

            // If the chat is open, refresh the iframe
            if (this.isOpen) {
              this.refreshIframe();
            }
          }
          // Token was added or changed (login in another tab)
          else if (event.newValue) {
            console.log("User logged in or token changed in another tab");
            this.authToken = event.newValue;

            // If the chat is open, send the new token
            if (this.isOpen && this.iframeReady) {
              this.sendAuthTokenToIframe();
            }
          }
        }
      });

      // Listen for messages from the iframe
      window.addEventListener("message", (event) => {
        // Verify the origin for security
        if (event.origin !== this.config.chatServerUrl) {
          return;
        }

        // Handle iframe ready event
        if (event.data.type === "IFRAME_READY") {
          this.iframeReady = true;
          console.log("Iframe is ready, sending auth token if available");
          this.sendAuthTokenToIframe();
        }

        // Handle auth events from iframe (e.g., user logged in inside iframe)
        if (event.data.type === "AUTH_TOKEN_UPDATED" && event.data.token) {
          console.log("Received updated auth token from iframe");
          this.authToken = event.data.token;

          // Store additional parameters if provided
          if (event.data.personaSlug) {
            this.config.personaSlug = event.data.personaSlug;
          }

          if (event.data.prospectSlug) {
            this.config.prospectSlug = event.data.prospectSlug;
          }

          try {
            localStorage.setItem("pureblue_auth_token", this.authToken);
          } catch (e) {
            console.warn(
              "PureBlue Chat: Unable to store token in localStorage"
            );
          }
        }
      });
    }

    refreshIframe() {
      console.log("Refreshing iframe");

      // Remove old iframe
      this.container.removeChild(this.iframe);

      // Create new iframe
      this.iframe = document.createElement("iframe");
      this.iframe.className = "pureblue-chat-iframe";

      // Build query parameters
      const queryParams = new URLSearchParams();
      queryParams.set("personaSlug", this.config.personaSlug);
      queryParams.set("prospectSlug", this.config.prospectSlug);
      queryParams.set("refresh", Date.now().toString()); // Add timestamp to force refresh

      // Build URL with query parameters
      const iframeUrl = `${
        this.config.chatServerUrl
      }/chat-auth?${queryParams.toString()}`;
      this.iframe.src = iframeUrl;
      this.iframe.title = "PureBlue Chat";

      // Add iframe to container
      this.container.appendChild(this.iframe);

      // Reset ready state
      this.iframeReady = false;
    }

    toggleChat() {
      this.isOpen = !this.isOpen;

      if (this.isOpen) {
        // Check if we need to refresh the iframe due to session issues
        if (this.iframe && this.refreshNeeded) {
          console.log("Refreshing iframe to ensure session continuity");
          // Remove old iframe
          this.container.removeChild(this.iframe);

          // Create new iframe
          this.iframe = document.createElement("iframe");
          this.iframe.className = "pureblue-chat-iframe";

          // Build query parameters
          const queryParams = new URLSearchParams();
          queryParams.set("personaSlug", this.config.personaSlug);
          queryParams.set("prospectSlug", this.config.prospectSlug);

          // Build URL with query parameters
          const iframeUrl = `${
            this.config.chatServerUrl
          }/chat-auth?${queryParams.toString()}`;
          this.iframe.src = iframeUrl;
          this.iframe.title = "PureBlue Chat";

          // Add iframe to container
          this.container.appendChild(this.iframe);

          // Reset ready state
          this.iframeReady = false;
          this.refreshNeeded = false;
        }

        this.container.classList.add("active");

        // If iframe is ready, send token
        if (this.iframeReady) {
          this.sendAuthTokenToIframe();
        }
      } else {
        this.container.classList.remove("active");
      }
    }

    sendAuthTokenToIframe() {
      if (!this.iframe.contentWindow) {
        return;
      }

      // Always send parameters and parent domain info
      const parentDomain =
        localStorage.getItem("pureblue_parent_domain") ||
        window.location.hostname;

      const message = {
        type: "AUTH_TOKEN",
        personaSlug: this.config.personaSlug,
        prospectSlug: this.config.prospectSlug,
        parentDomain: parentDomain, // Add parent domain info
      };

      // Add token if available
      if (this.authToken) {
        message.token = this.authToken;
      }

      console.log("Sending to iframe:", message);

      this.iframe.contentWindow.postMessage(message, this.config.chatServerUrl);
    }

    // Public method to set auth token programmatically
    setAuthToken(token) {
      this.authToken = token;
      try {
        localStorage.setItem("pureblue_auth_token", token);
      } catch (e) {
        console.warn("PureBlue Chat: Unable to store token in localStorage");
      }

      if (this.isOpen && this.iframeReady) {
        this.sendAuthTokenToIframe();
      }
    }

    checkSessionStatus() {
      try {
        // Check if token exists and try to verify it's still valid
        const token = localStorage.getItem("pureblue_auth_token");
        if (token) {
          // If you have a way to check token validity, do it here
          // For now, we'll just assume it's valid if it exists
          return true;
        }
        return false;
      } catch (e) {
        console.warn("PureBlue Chat: Unable to check session status");
        return false;
      }
    }
  }

  // Public API
  window.PureBlueChat = {
    init: function (config) {
      if (widgetInstance) {
        console.warn("PureBlue Chat widget already initialized");
        return widgetInstance;
      }

      widgetInstance = new PureBlueChat(config);
      return widgetInstance;
    },

    // Allow setting auth token programmatically
    setAuthToken: function (token) {
      if (!widgetInstance) {
        console.error("PureBlue Chat widget not initialized");
        return;
      }

      widgetInstance.setAuthToken(token);
    },

    // Open the chat programmatically
    open: function () {
      if (!widgetInstance) {
        console.error("PureBlue Chat widget not initialized");
        return;
      }

      if (!widgetInstance.isOpen) {
        widgetInstance.toggleChat();
      }
    },

    // Close the chat programmatically
    close: function () {
      if (!widgetInstance) {
        console.error("PureBlue Chat widget not initialized");
        return;
      }

      if (widgetInstance.isOpen) {
        widgetInstance.toggleChat();
      }
    },
  };
})();
