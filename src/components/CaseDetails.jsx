import React from "react";

const CaseDetails = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center px-4 py-3 border-b border-gray-300">
        <h2 className="text-lg font-semibold text-gray-700">Case Details</h2>
        <button className="ml-auto text-gray-500">
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

      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Case Number
            </label>
            <div className="text-sm">00001001</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Case Owner
            </label>
            <div className="text-sm text-blue-600">Admin User</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Status
            </label>
            <div className="text-sm">On Hold</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Priority
            </label>
            <div className="text-sm">Medium</div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Subject
            </label>
            <div className="text-sm">Sample Case 2: Widgets are wrong size</div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Description
            </label>
            <div className="text-sm">Widgets don't fit in implementation.</div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center mb-3">
            <svg
              className="w-6 h-6 text-purple-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
            <h3 className="text-base font-semibold text-gray-700">
              Contact Details
            </h3>
            <button className="ml-auto text-gray-500">
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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Name
              </label>
              <div className="text-sm">Edward Stamos</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Account Name
              </label>
              <div className="text-sm text-blue-600">Acme</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Title
              </label>
              <div className="text-sm">President and CEO</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone
              </label>
              <div className="text-sm">(212) 555-5555</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <div className="text-sm text-blue-600">
                info@salesforc
                <wbr />
                e.com
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center mb-3">
            <svg
              className="w-6 h-6 text-yellow-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            <h3 className="text-base font-semibold text-gray-700">
              Cases for Parent Contact (2)
            </h3>
            <button className="ml-auto text-gray-500">
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
        </div>
      </div>
    </div>
  );
};

export default CaseDetails;
