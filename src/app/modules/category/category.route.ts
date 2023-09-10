import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../user/user.enum";
import { CategoryController } from "./category.controller";
const routes = express.Router();
// For creating
routes.post("/", auth(ENUM_USER_ROLE.ADMIN), CategoryController.createCategory);
// For gettng all the catch
routes.get("/", CategoryController.getAllCAt);
// For updating
routes.patch(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.updateCategory
);
// for getting single
routes.get("/:id", CategoryController.getSingleCAt);

// For deleting
routes.delete("/:id", auth(ENUM_USER_ROLE.ADMIN), CategoryController.deleteCat);

export const CategoryRoutes = { routes };
