import { Editor } from "@tinymce/tinymce-react";

function TinyEditor({editorRef, initialContent}) {
  // const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };

  return (
    <>
      <Editor
        apiKey="q8mnbqrbqu2rku7e9m74xeraen7mybc0v0r7w3l4vkk5omid"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue={initialContent || "<p>This is the initial content of the editor.</p>"}
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
            "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
        }}
      />
      {/* <button className="rounded mt-1 px-2 py-1 bg-white" onClick={log}>Log editor content</button> */}
    </>
  );
}

export default TinyEditor;
