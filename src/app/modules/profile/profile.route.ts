import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../user/user.enum";
import { ProfileController } from "./profile.controller";
const routes = express.Router();
// For getting single profile
routes.get(
  "/",
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  ProfileController.getSIngle
);
export const ProfileRoutes = { routes };
