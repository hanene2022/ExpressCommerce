import express from 'express'
import * as categoryControlller from "./categories.controller.js"
const categoryRouter= express.Router();
// categoryRouter.get("/",catogoryControlller.getAllCategory)
// categoryRouter.post("/",catogoryControlller.createCategory)

categoryRouter.route('/')
.get(categoryControlller.getAllCategory)
.post(categoryControlller.createCategory)
categoryRouter.route('/:id')
.get(categoryControlller.getCategoryById)
.put(categoryControlller.updateCategory)
.delete(categoryControlller.deleteCategory)
// categoryRouter.get("/:id",categoryControlller.getCategoryById)
// categoryRouter.put("/:id",categoryControlller.updateCategory)
// categoryRouter.delete("/:id",categoryControlller.deleteCategory)
export default categoryRouter;
