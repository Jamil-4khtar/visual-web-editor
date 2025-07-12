import Template from "../model/TemplateModel.js";
import AppError from "../utils/AppError.js";

const getAllTemplates = async (req, res) => {
  const templates = await Template.find().sort({ createdAt: -1 });
  if (templates.length === 0) {
    res.status(204).send();
  }
  res.json(templates);
}

const editTemplate = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const template = await Template.findOne({ id });
  if (!template) {
    throw new AppError("No template found", 404)
  }
  template.content = content
  await template.save();

  res.json({ message: "Template edited successfully"})
}

const getTemplate = async (req, res) => {
  const template = await Template.find({ id: req.params.id });
  if (!template) {
    throw new AppError("No template found", 404);
  }
  res.json(template)
}

const createTemplate = async (req, res) => {
  const { id, name, content } = req.body;
  const template = await Template.create({
    id, name, content
  });

  res.status(201).json({ message: "Created a template successfully", template});
}

export { getAllTemplates, editTemplate, getTemplate, createTemplate }