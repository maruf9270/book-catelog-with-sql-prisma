"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootRoute = void 0;
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const user_route_1 = require("../modules/user/user.route");
const category_route_1 = require("../modules/category/category.route");
const book_route_1 = require("../modules/book/book.route");
const order_route_1 = require("../modules/order/order.route");
const router = express_1.default.Router();
// Routes for auth
router.use("/auth", auth_route_1.AuthRoutes.routes);
// Routes for user
router.use("/users", user_route_1.UserRouter.routes);
// ROutes for categories
router.use("/categories", category_route_1.CategoryRoutes.routes);
// Routes for Book
router.use("/books", book_route_1.BookRoutes.routes);
// ROutes for order
router.use("/orders", order_route_1.OrderRoutes.routes);
exports.RootRoute = { router };
