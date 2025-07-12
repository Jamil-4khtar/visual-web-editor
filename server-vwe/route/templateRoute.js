import { Router } from "express";
import { createTemplate, editTemplate, getAllTemplates, getTemplate } from "../controller/templateController.js";

const templateRouter = Router();

templateRouter.get("/", getAllTemplates)
templateRouter.get("/:id", getTemplate)
templateRouter.put("/:id", editTemplate)
templateRouter.post("/", createTemplate)

export default templateRouter