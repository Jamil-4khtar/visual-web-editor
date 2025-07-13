import React from "react";

export default function LiveView({ htmlOutput }) {
  return (
    <div className="border-gray-200 rounded-lg p-2 h-full bg-gray-100">
      <h4 className="font-semibold mb-2 p-1">Live HTML Output</h4>
      <pre className="overflow-auto text-sm bg-white p-2 rounded h-[410px] whitespace-pre-wrap">
        {htmlOutput}
      </pre>
      <button
        onClick={() => navigator.clipboard.writeText(htmlOutput)}
        className="mt-2 bg-blue-500 text-white px-2 py-0.5 rounded"
      >
        Copy HTML
      </button>
    </div>
  );
}