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

function EditorContainer() {
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const dispatch = useDispatch();
  const editorRef = useRef(null);

  const [name, setName] = useState("");

  const template = useSelector((state) =>
    state.template.list.find((tpl) => tpl.id === id)
  );

  useEffect(() => {
    if (isEditMode && !template) {
      dispatch(fetchTemplateById(id));
    }
  }, [id, dispatch, isEditMode, template]);

  useEffect(() => {
    if (template) {
      setName(template.name);
    }
  }, [template]);

  const handleSave = () => {
    if (!name.trim()) {
      alert("Template name is required");
      return;
    }
    const content = editorRef.current?.getContent();

    if (isEditMode) {
      console.log(content)
      dispatch(updateTemplate({ id, template: { name, content } })).then(() => alert("Template updated successfully"))
    } else {
      const newId = uuidv4();
      dispatch(createTemplate({ id: newId, name, content})).then(() => alert("Template created"));
    }
  };

  return (
    <div>
      <EditorView 
        editorRef={editorRef}
        initialContent = {template?.content || ''}
        templateName = {name}
        setTemplateName = {setName}
        onSave={handleSave}
        isEditMode={isEditMode}
      />
    </div>
  );
}

export default EditorContainer;
