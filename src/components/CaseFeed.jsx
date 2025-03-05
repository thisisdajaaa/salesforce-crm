import React from "react";

const CaseFeed = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center px-4 py-3 border-b border-gray-300">
        <h2 className="text-lg font-semibold text-gray-700">
          Sample Case 2: Widgets are wrong size
        </h2>
        <div className="ml-auto flex items-center space-x-2">
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            Follow
          </button>
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>

      <div className="border-b border-gray-300">
        <div className="flex">
          <button className="px-4 py-2 border-b-2 border-blue-500 text-blue-600 font-medium">
            FEED
          </button>
          <button className="px-4 py-2 text-gray-600">DETAILS</button>
        </div>
      </div>

      <div className="p-4 border-b border-gray-300">
        <div className="flex space-x-2 mb-4">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            Post
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            Log a Call
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            Email
          </button>
        </div>

        <div className="relative">
          <textarea
            className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none"
            rows="3"
            placeholder="Share an update..."
          ></textarea>
          <button className="absolute right-2 bottom-2 px-4 py-1 bg-blue-600 text-white rounded-md text-sm">
            Share
          </button>
        </div>
      </div>

      <div className="flex items-center px-4 py-3 border-b border-gray-300">
        <h2 className="text-base font-semibold text-gray-700">
          Recent Activity
        </h2>
        <button className="ml-2 text-gray-500">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div className="ml-auto">
          <div className="relative">
            <input
              type="text"
              className="w-64 border border-gray-300 rounded-md pl-8 pr-2 py-1 text-sm"
              placeholder="Search this feed"
            />
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex border-b border-gray-300">
        <button className="px-4 py-2 border-b-2 border-blue-500 text-blue-600 font-medium text-sm">
          All Updates
        </button>
        <button className="px-4 py-2 text-gray-600 text-sm">Emails</button>
        <button className="px-4 py-2 text-gray-600 text-sm">Call Logs</button>
        <button className="px-4 py-2 text-gray-600 text-sm">Text Posts</button>
        <button className="px-4 py-2 text-gray-600 text-sm">More</button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Feed Item 1 */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex mb-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
            <div>
              <div className="flex items-center">
                <span className="font-medium text-sm">Admin User</span>
                <span className="ml-auto text-xs text-gray-500">
                  April 4, 2017 at 1:06 PM
                </span>
                <button className="ml-2 text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="text-xs text-yellow-600 flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Case status updated
              </div>
            </div>
          </div>
          <div className="ml-11">
            <p className="text-sm">
              <span className="font-medium">Status:</span> New to On Hold
            </p>
            <button className="mt-2 text-blue-600 text-sm">Comment</button>
          </div>
        </div>

        {/* Feed Item 2 */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex mb-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
            <div>
              <div className="flex items-center">
                <span className="font-medium text-sm">Admin User</span>
                <span className="ml-auto text-xs text-gray-500">
                  April 4, 2017 at 1:05 PM
                </span>
                <button className="ml-2 text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="text-xs text-yellow-600 flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Case updated
              </div>
            </div>
          </div>
        </div>

        {/* Feed Item 3 */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex mb-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
            <div>
              <div className="flex items-center">
                <span className="font-medium text-sm">Admin User</span>
                <span className="ml-auto text-xs text-gray-500">
                  Edited March 22, 2017 at 9:28 AM
                </span>
                <button className="ml-2 text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="text-xs text-yellow-600 flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                Talked with Edward and the second shipment we sent still has the
                wro...
              </div>
            </div>
          </div>
        </div>

        {/* Feed Item 4 */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex mb-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
            <div>
              <div className="flex items-center">
                <span className="font-medium text-sm">Admin User</span>
                <span className="ml-auto text-xs text-gray-500">
                  March 22, 2017 at 1:48 PM
                </span>
                <button className="ml-2 text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseFeed;
