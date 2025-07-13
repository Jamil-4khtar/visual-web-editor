import React from "react";
import TinyEditor from "../../components/TinyEditor";
import Aurora from "../../components/Aurora";
import { Editor } from "@tinymce/tinymce-react";

function EditorView({
  editorRef,
  initialContent,
  templateName,
  setTemplateName,
  onSave,
  isEditMode,
}) {
  return (
    <div className="relative min-h-screen">
      <div className="h-full bg-gray-900 absolute w-screen">
        <Aurora className="landing-bg_comp" />
      </div>

      <div className="absolute z-10 p-5 h-screen w-screen overflow-y-scroll">
        <div className="mx-10 rounded-4xl">
          
          <div className="flex justify-between items-center mb-2">
            {/* <h2 className="text-xl font-bold mb-2">
              {isEditMode ? "Edit Template" : "Create Template"}
            </h2> */}

            <input
              type="text"
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              placeholder="Enter template name"
              className="border px-4 py-2"
            />

            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={onSave}
              // onClick={() => console.log(editorRef.current.getContent())}
            >
              {/* {isEditMode ? "Update Template" : "Create Template"} */}
              Save
            </button>
          </div>

          <TinyEditor 
            editorRef={editorRef}
            initialContent={initialContent}
          />

        </div>

        {/* <div className="rounded-4xl bg-slate-400 h-full"></div> */}
      </div>
    </div>
  );
}

export default EditorView;
