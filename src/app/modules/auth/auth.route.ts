import express from "express";
import { AuthController } from "./auth.controller";

const routes = express.Router();
// For creating new user
routes.post("/signup", AuthController.createUser);
// For logging in
routes.post("/login", AuthController.loginUser);

export const AuthRoutes = { routes };
