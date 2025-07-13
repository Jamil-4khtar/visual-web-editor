import React from "react";
import Aurora from "../../components/Aurora";
import { ArrowLeft } from "lucide-react";
import PageLoader from "../../components/Loading";

function LibraryView({ templates, loading, onEdit, onCreate }) {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="relative min-h-screen">
      <div className="h-full bg-gray-900 absolute w-screen">
        <Aurora className="landing-bg_comp" />
      </div>

      <div className="absolute z-10 p-5 h-screen w-screen overflow-y-scroll">
        {loading && <PageLoader />}
        <div className="min-h-full bg-gray-400/10 backdrop-blur-3xl rounded-2xl">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <button
                  onClick={handleGoBack}
                  className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="Go back to previous page"
                >
                  <ArrowLeft className="w-6 h-6 text-gray-400" />
                </button>
                <h1 className="text-3xl font-bold text-gray-400">
                  Template Library
                </h1>
              </div>
              <button
                onClick={onCreate}
                className="bg-blue-600 text-gray-400 px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Create New</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="bg-gray-400 border border-gray-600 rounded-lg shadow-sm overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out group"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 truncate">
                      {template.name}
                    </h3>
                    <div className="flex items-center justify-end space-x-3">
                      <button
                        onClick={() => onEdit(template.id)}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          const win = window.open("", "_blank");
                          if (win) {
                            win.document.body.innerHTML = template.content;
                            win.document.close();
                          }
                        }}
                        className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                      >
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LibraryView;
