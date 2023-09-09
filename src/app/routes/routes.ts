import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
const router = express.Router();
// Routes for auth
router.use("/auth", AuthRoutes.routes);

export const RootRoute = { router };
