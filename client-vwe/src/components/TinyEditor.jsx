import { Editor } from "@tinymce/tinymce-react";
import { useEffect } from "react";

function TinyEditor({ editorRef, initialContent, isEditMode, setHtmlOutput }) {
  useEffect(() => {
    if (editorRef.current && initialContent) {
      editorRef.current.setContent(initialContent);
    }
  }, [initialContent, editorRef]);

  // console.log("Rendering TinyEditor with initialContent:", initialContent);

  // if (isEditMode && (initialContent === undefined || initialContent === null)) {
  //   return <div>Loading editor...</div>; // or spinner
  // }

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
          skin: "oxide-dark",
          // content_css: "dark",
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
            " styles bold italic forecolor underline | quicklink h1 h2 h3 h4 h5 h6 blockquote",
          toolbar:
            "undo redo | blocks |" +
            "bold italic forecolor backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:16px; }",
          style_formats: [
            {
              title: "Section with Padding",
              block: "div",
              wrapper: true,
              styles: {
                padding: "20px",
                "background-color": "#333333", // Dark background for the section
                "border-radius": "8px",
                "margin-bottom": "15px",
              },
            },
            {
              title: "Callout Box",
              block: "div",
              wrapper: true,
              styles: {
                padding: "15px",
                margin: "20px 0",
                "background-color": "#556b2f", // Dark olive green background
                color: "white", // Ensure text is readable on dark background
                "border-left": "5px solid #8fbc8f", // A lighter green border
                "font-style": "italic",
              },
            },
            {
              title: "Highlighted Text (Yellow)",
              inline: "span",
              styles: {
                "background-color": "yellow",
                color: "black", // Ensure text is visible
                padding: "2px 5px",
                "border-radius": "3px",
              },
            },
            {
              title: "Section Header with Margin",
              block: "h3",
              styles: {
                "margin-top": "40px",
                "margin-bottom": "10px",
                color: "#ADD8E6", // Light blue color for header in dark theme
              },
            },
          ],
        }}
      />
    </>
  );
}

export default TinyEditor;
