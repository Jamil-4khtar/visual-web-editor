import React from "react";
import DOMPurify from "dompurify";

function TemplateCard({ template, onEdit, openModal }) {
  return (
    <div>
      <div className="relative shadow-2xl">
        <div className="relative w-full h-60 overflow-hidden border bg-white rounded-md">
          <iframe
            title={`template-preview-${template.id}`}
            srcDoc={template.content}
            className="scale-[0.25] origin-top-left pointer-events-none w-[1400px] lg:w-[1600px] h-[1200px]"
            sandbox=""
          />
        </div>

        <div className="bg-black/30  sm:opacity-0 hover:opacity-100 absolute inset-0 hover:bg-black/50 flex flex-col sm:flex-row items-center justify-center gap-2 rounded-md transition-colors">
          <button
            onClick={() => onEdit(template.id)}
            className="px-4 py-2 text-sm font-medium text-gray-700 shadow w-20 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => openModal(template.content)}
            className="px-4 py-2 text-sm font-medium text-white bg-gray-800 shadow w-20 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
          >
            Preview
          </button>
        </div>
      </div>
      <div className="p-1">
        <h3 className="text-lg font-semibold text-gray-200 truncate">
          {template.name}
        </h3>
        <p className="text-xs text-gray-500 ">
          {new Date(template.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default TemplateCard;
