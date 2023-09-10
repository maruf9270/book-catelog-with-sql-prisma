import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../user/user.enum";
import { BookController } from "./book.controller";
const routes = express.Router();

// For creating new book
routes.post("/", auth(ENUM_USER_ROLE.ADMIN), BookController.createNewBook);
// For updating single book
routes.patch("/:id", auth(ENUM_USER_ROLE.ADMIN), BookController.updateBOok);

export const BookRoutes = { routes };
