import React, { useEffect, useRef, useState } from "react";
import EditorView from "./EditorView";
import {
  createTemplate,
  updateTemplate,
  fetchTemplateById,
} from "../../redux/slice/TemplateThunk";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import beautify from "js-beautify";

function EditorContainer() {
  const [htmlOutput, setHtmlOutput] = useState("");
  const { id } = useParams();
  // console.log(id)
  const isEditMode = Boolean(id);

  console.log(uuidv4());

  const dispatch = useDispatch();
  const editorRef = useRef(null);

  const [name, setName] = useState("");

  const loading = useSelector((state) => state.template.loading);

  var template = useSelector((state) =>
    state.template.list.find((tpl) => tpl.id === id)
  );

  useEffect(() => {
    if (isEditMode && !template) {
      // console.log("is editmode and no template")
      dispatch(fetchTemplateById(id));
    }
  }, [id, dispatch, isEditMode, template]);

  useEffect(() => {
    if (template) {
      setName(template.name);
      const formattedHtml = beautify.html(template.content, {
        indent_size: 2,
        wrap_line_length: 80,
      });
      setHtmlOutput(formattedHtml);
    }
  }, [template]);

  // console.log(template);

  const handleSave = () => {
    if (!name.trim()) {
      alert("Template name is required");
      return;
    }
    const content = editorRef.current?.getContent?.() || "";

    if (isEditMode) {
      dispatch(updateTemplate({ id, template: { name, content } })).then(() =>
        alert("Template updated successfully")
      );
    } else {
      const newId = uuidv4();
      dispatch(createTemplate({ id: newId, name, content })).then(() =>
        alert("Template created")
      );
    }
  };

  return (
    <div>
      <EditorView
        editorRef={editorRef}
        initialContent={template?.content}
        templateName={name}
        setTemplateName={setName}
        onSave={handleSave}
        isEditMode={isEditMode}
        loading={loading}
        htmlOutput={htmlOutput}
        setHtmlOutput={setHtmlOutput}
      />
    </div>
  );
}

export default EditorContainer;
