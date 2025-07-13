import { Editor } from "@tinymce/tinymce-react";
import { useEffect } from "react";

function TinyEditor({ editorRef, initialContent, isEditMode, setHtmlOutput }) {
  useEffect(() => {
    if (editorRef.current && initialContent) {
      editorRef.current.setContent(initialContent);
    }
  }, [initialContent, editorRef]);

  // console.log("Rendering TinyEditor with initialContent:", initialContent);

  if (isEditMode && (initialContent === undefined || initialContent === null)) {
    return <div>Loading editor...</div>; // or spinner
  }

  return (
    <>
      <Editor
        apiKey={import.meta.env.VITE_API_KEY}
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue={isEditMode ? initialContent : "<p>Write here...</p>"}
        onEditorChange={(newContent) => setHtmlOutput(newContent)}
        // inline={true}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
            "quickbars",
          ],
          quickbars_selection_toolbar:
            "bold italic forecolor underline | quicklink h1 h2 h3 h4 h5 h6 blockquote",
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:16px, background-color: #4a5565; color: #000; }",
        }}
      />
    </>
  );
}

export default TinyEditor;
