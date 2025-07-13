import React from "react";
import TinyEditor from "../../components/TinyEditor";
import Aurora from "../../components/Aurora";
import { Editor } from "@tinymce/tinymce-react";
import { Save, FileText } from "lucide-react";

function EditorView({
  editorRef,
  initialContent,
  templateName,
  setTemplateName,
  onSave,
  isEditMode,
}) {
  // console.log(initialContent)
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="relative min-h-screen">
      <div className="h-full bg-gray-900 absolute w-screen">
        <Aurora className="landing-bg_comp" />
      </div>

      <div className="absolute z-10 h-screen w-screen overflow-y-scroll">
        <div className="min-h-screen w-full bg-transparent p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-6">
              <button
                onClick={handleGoBack}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors mr-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <div className="relative flex-grow">
                <input
                  type="text"
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                  placeholder="Untitled"
                  className="w-full text-2xl font-bold text-gray-400 bg-transparent border-none focus:ring-0 focus:outline-none placeholder-gray-400/30"
                />
              </div>
              <button
                onClick={onSave}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-gray-400 font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Save</span>
              </button>
            </div>

            {/* Main Content Area (Editor) */}
            <div className="bg-transparent rounded-lg shadow-sm">
              <TinyEditor
                editorRef={editorRef}
                initialContent={initialContent}
                isEditMode={isEditMode}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorView;
