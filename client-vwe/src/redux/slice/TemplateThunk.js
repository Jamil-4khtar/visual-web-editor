import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3000/api/template";

export const fetchTemplates = createAsyncThunk(
  "template/fetchAll",
  async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
  }
);

export const fetchTemplateById = createAsyncThunk(
  "template/fetchById",
  async (id) => {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
  }
);

export const updateTemplate = createAsyncThunk(
  "template/update",
  async ({ id, template }) => {
    const res = await axios.put(`${BASE_URL}/${id}`, template);
    return res.data;
  }
);

export const createTemplate = createAsyncThunk(
  "template/create",
  async ({ id, name, content }) => {
    const res = await axios.post(BASE_URL, { id, name, content });
    return res.data.template;
  }
);
