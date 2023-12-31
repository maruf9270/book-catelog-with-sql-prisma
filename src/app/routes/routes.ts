import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRouter } from "../modules/user/user.route";
import { CategoryRoutes } from "../modules/category/category.route";
import { BookRoutes } from "../modules/book/book.route";
import { OrderRoutes } from "../modules/order/order.route";
import { ProfileRoutes } from "../modules/profile/profile.route";
const router = express.Router();
// Routes for auth
router.use("/auth", AuthRoutes.routes);
// Routes for user
router.use("/users", UserRouter.routes);
// ROutes for categories
router.use("/categories", CategoryRoutes.routes);
// Routes for Book
router.use("/books", BookRoutes.routes);
// ROutes for order
router.use("/orders", OrderRoutes.routes);
// Routes for profile
router.use("/profile", ProfileRoutes.routes);

export const RootRoute = { router };
