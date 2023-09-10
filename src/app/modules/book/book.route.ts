import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../user/user.enum";
import { BookController } from "./book.controller";
const routes = express.Router();

// For creating new book
routes.post("/", auth(ENUM_USER_ROLE.ADMIN), BookController.createNewBook);
// For getting all the books with paginated data
routes.get("/", BookController.getAllWithPaginated);
// For updating single book
routes.patch("/:id", auth(ENUM_USER_ROLE.ADMIN), BookController.updateBOok);
// For finding book by cat id
routes.get("/:categoryId/category", BookController.findBookByCatId);
// For getting single book by id
routes.get("/:id", BookController.getSingleBookByID);
// for deleting single book
routes.delete(
  "/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  BookController.deleteSIngleBOok
);

export const BookRoutes = { routes };
