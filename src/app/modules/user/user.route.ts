import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "./user.enum";
import { UserController } from "./user.controller";
const routes = express.Router();

// For getting all the users for admin
routes.get("/", auth(ENUM_USER_ROLE.ADMIN), UserController.getAllUser);

// For single get
routes.get("/:id", auth(ENUM_USER_ROLE.ADMIN), UserController.singleGet);

// FOr updaing single
routes.patch("/:id", auth(ENUM_USER_ROLE.ADMIN), UserController.updateSingle);

// For deleting single
routes.delete("/:id", auth(ENUM_USER_ROLE.ADMIN), UserController.deleteSingle);

export const UserRouter = { routes };
