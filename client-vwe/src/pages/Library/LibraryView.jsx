import React, { Suspense, useState } from "react";
// import Aurora from "../../components/Aurora";
const Aurora = React.lazy(() => import("../../components/Aurora"));
import { ArrowLeft } from "lucide-react";
import PageLoader from "../../components/Loading";
import Modal from "../../components/Modal";
import DOMPurify from 'dompurify'
import TemplateCard from "../../components/TemplateCard";

function LibraryView({ templates, loading, onEdit, onCreate }) {
  const handleGoBack = () => {
    window.history.back();
  };

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState("");

  const openModal = (content) => {
    setSelectedContent(content);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setSelectedContent("");
  };

  return (
    <div>
      <div className="fixed inset-0 -z-10 bg-gray-900">
        <Suspense fallback={<PageLoader />}>
          <Aurora className="landing-bg_comp" />
        </Suspense>
      </div>

      <div className="z-10">
        {loading && <PageLoader />}
        <div className="min-h-screen bg-gray-400/10 backdrop-blur-3xl">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  onEdit={onEdit}
                  openModal={openModal}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {
        <Modal isOpen={isOpen} closeModal={closeModal}>
          <iframe
            srcDoc={DOMPurify.sanitize(selectedContent)} // Sanitize before putting in srcDoc
            style={{ width: "100%", height: "100%", border: "none", }}
            title="Template Preview"
          />
        </Modal>
      }
    </div>
  );
}

export default LibraryView;
