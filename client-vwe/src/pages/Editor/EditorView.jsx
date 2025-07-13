import React from "react";
import TinyEditor from "../../components/TinyEditor";
import Aurora from "../../components/Aurora";
import { Editor } from "@tinymce/tinymce-react";

function EditorView() {
  return (
    <div className="relative min-h-screen">
      <div className="h-full bg-gray-900 absolute w-screen">
        <Aurora className="landing-bg_comp" />
      </div>

      <div className="absolute z-10 p-10 h-screen w-screen overflow-y-scroll">
        <div className="m-10 rounded-4xl">
          <TinyEditor />
        </div>

        {/* <div className="rounded-4xl bg-slate-400 h-full"></div> */}
      </div>
    </div>
  );
}

export default EditorView;
