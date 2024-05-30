import express from 'express'
import * as catogoryControlller from "./categories.controller.js"
const categoryRouter= express.Router();
categoryRouter.get("/",catogoryControlller.getAllCategory)
categoryRouter.post("/",catogoryControlller.createCategory)


categoryRouter.get("/:id",catogoryControlller.getCategoryById)
categoryRouter.put("/:id",catogoryControlller.updateCategory)
categoryRouter.delete("/:id",catogoryControlller.deleteCategory)
export default categoryRouter;
