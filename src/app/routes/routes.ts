import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRouter } from "../modules/user/user.route";
const router = express.Router();
// Routes for auth
router.use("/auth", AuthRoutes.routes);
// Routes for user
router.use("/users", UserRouter.routes);

export const RootRoute = { router };
