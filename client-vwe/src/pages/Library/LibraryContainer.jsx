import React, { useEffect } from 'react'
import LibraryView from './LibraryView'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTemplates } from '../../redux/slice/TemplateThunk';
import { useNavigate } from 'react-router-dom';

function LibraryContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const templates = useSelector((state) => state.template.list);
  const loading =  useSelector((state) => state.template.loading);

  useEffect(() => {
    dispatch(fetchTemplates())
  }, [dispatch]);

  const handleEdit = (id) => {
    navigate(`/editor/${id}`)
  }

  const handleCreate = () => {
    navigate(`/editor`)
  }

  return (
    <div>
      <LibraryView
        templates={templates}
        loading={loading}
        onEdit={handleEdit}
        onCreate={handleCreate}
      />
    </div>
  )
}

export default LibraryContainer