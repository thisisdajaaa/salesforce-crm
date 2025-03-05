import React from "react";

const KnowledgePanel = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex border-b border-gray-300">
        <button className="px-6 py-3 text-gray-600 font-medium">RELATED</button>
        <button className="px-6 py-3 border-b-2 border-blue-500 text-blue-600 font-medium">
          KNOWLEDGE
        </button>
      </div>

      <div className="flex items-center px-4 py-3 border-b border-gray-300">
        <h2 className="text-lg font-semibold text-gray-700">Knowledge</h2>
      </div>

      <div className="p-4 border-b border-gray-300">
        <div className="relative mb-4">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md pl-9 pr-2 py-2"
            placeholder="Search Knowledge"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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

        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-gray-700">
            Suggested Articles
          </h3>
          <button className="text-gray-500">
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
        </div>

        <div className="text-xs text-gray-500 mb-4">
          3 Results • Sorted by Relevance
        </div>

        <div className="space-y-4">
          {/* Knowledge Article 1 */}
          <div className="border border-gray-300 rounded-md bg-white">
            <div className="flex justify-between items-center p-3 cursor-pointer">
              <h4 className="text-blue-600 font-medium">What are widgets?</h4>
              <button className="text-gray-500">
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
            </div>
            <div className="px-3 pb-3">
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span>00001001</span>
                <span className="mx-2">•</span>
                <span>Not Validated</span>
                <span className="mx-2">•</span>
                <span>Last Published 9/22/2016</span>
              </div>
              <p className="text-sm text-gray-600">
                Explanation about widgets and their common uses
              </p>
            </div>
          </div>

          {/* Knowledge Article 2 */}
          <div className="border border-gray-300 rounded-md bg-white">
            <div className="flex justify-between items-center p-3 cursor-pointer">
              <h4 className="text-blue-600 font-medium">
                Standard Widget Sizes
              </h4>
              <button className="text-gray-500">
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
            </div>
            <div className="px-3 pb-3">
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span>00001002</span>
                <span className="mx-2">•</span>
                <span>Validated</span>
                <span className="mx-2">•</span>
                <span>Last Published 11/8/2016</span>
              </div>
              <p className="text-sm text-gray-600">Details about sizes</p>
            </div>
          </div>

          {/* Knowledge Article 3 */}
          <div className="border border-gray-300 rounded-md bg-white">
            <div className="flex justify-between items-center p-3 cursor-pointer">
              <h4 className="text-blue-600 font-medium">
                How To Track Your Order
              </h4>
              <button className="text-gray-500">
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
            </div>
            <div className="px-3 pb-3">
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span>00001003</span>
                <span className="mx-2">•</span>
                <span>Work In Progress</span>
                <span className="mx-2">•</span>
                <span>Last Published 11/21/2016</span>
              </div>
              <p className="text-sm text-gray-600">
                Using a widget purchase order
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgePanel;
