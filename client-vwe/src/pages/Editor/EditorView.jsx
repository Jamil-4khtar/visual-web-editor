import React, { Suspense } from "react";
import TinyEditor from "../../components/TinyEditor";
// import Aurora from "../../components/Aurora";
const Aurora = React.lazy(() => import("../../components/Aurora"));
import { Editor } from "@tinymce/tinymce-react";
import { Save, FileText } from "lucide-react";
import PageLoader from "../../components/Loading";
import LiveView from "../../components/LiveView";

function EditorView({
  editorRef,
  initialContent,
  templateName,
  setTemplateName,
  onSave,
  isEditMode,
  loading,
  htmlOutput,
  setHtmlOutput,
}) {
  // console.log(initialContent)
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10 bg-gray-900">
        <Suspense fallback={<PageLoader />}>
          <Aurora className="landing-bg_comp" />
        </Suspense>
      </div>

      <div className="">
        {loading ? (
          <PageLoader />
        ) : (
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

              <div className="bg-transparent rounded-lg shadow-sm">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <TinyEditor
                      editorRef={editorRef}
                      initialContent={initialContent}
                      isEditMode={isEditMode}
                      setHtmlOutput={setHtmlOutput}
                    />
                  </div>
                  <div>
                    <LiveView htmlOutput={htmlOutput} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditorView;
