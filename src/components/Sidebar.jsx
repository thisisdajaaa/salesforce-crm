import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-72 bg-gray-100 overflow-y-auto border-r border-gray-300">
      <div className="p-3">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold text-gray-700">
              Recently Viewed
            </h2>
          </div>
          <button className="text-gray-400">
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

        <div className="text-sm text-gray-500 mb-2">
          4 items • Updated 2 minutes ago
        </div>

        <div className="flex items-center justify-between text-xs uppercase font-semibold text-gray-500 mb-2 border-b border-gray-300 pb-1">
          <span>Recently Viewed</span>
          <svg
            className="w-3 h-3"
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

        <div className="space-y-1">
          {/* Case item 1 */}
          <div className="p-2 hover:bg-blue-100 rounded cursor-pointer">
            <div className="flex justify-between">
              <span className="font-medium">00001001</span>
              <span className="text-xs text-gray-500">2/23/2017 2:24 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">
                Sample Case 2: Widgets are wrong size
              </span>
              <span className="text-xs bg-gray-200 px-1 rounded text-center flex items-center">
                On Hold
              </span>
            </div>
          </div>

          {/* Case item 2 */}
          <div className="p-2 hover:bg-blue-100 rounded cursor-pointer">
            <div className="flex justify-between">
              <span className="font-medium">00001002</span>
              <span className="text-xs text-gray-500">2/23/2017 2:24 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Sample Case 3: Cannot track order</span>
              <span className="text-xs bg-gray-200 px-1 rounded text-center flex items-center">
                On Hold
              </span>
            </div>
          </div>

          {/* Case item 3 */}
          <div className="p-2 hover:bg-blue-100 rounded cursor-pointer">
            <div className="flex justify-between">
              <span className="font-medium">00001003</span>
              <span className="text-xs text-gray-500">4/6/2017 7:36 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">
                Sample Case 4: Package contained broken widget
              </span>
              <span className="text-xs bg-gray-200 px-1 rounded text-center flex items-center">
                New
              </span>
            </div>
          </div>

          {/* Case item 4 */}
          <div className="p-2 hover:bg-blue-100 rounded cursor-pointer">
            <div className="flex justify-between">
              <span className="font-medium">00001000</span>
              <span className="text-xs text-gray-500">2/23/2017 2:24 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">
                Sample Case 1: Widgets haven't been delivered
              </span>
              <span className="text-xs bg-gray-200 px-1 rounded text-center flex items-center">
                Escalated
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
