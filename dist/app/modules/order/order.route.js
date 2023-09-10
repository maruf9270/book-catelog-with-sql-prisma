"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_enum_1 = require("../user/user.enum");
const order_controller_1 = require("./order.controller");
const routes = express_1.default.Router();
// For creating new order
routes.post("/create-order", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.CUSTOMER, user_enum_1.ENUM_USER_ROLE.ADMIN), order_controller_1.OrderController.createOrder);
// For getting all the order
routes.get("/", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN, user_enum_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.OrderController.getallorder);
// ROutes for getting single order
routes.get("/:id", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN, user_enum_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.OrderController.getSingleOrder);
exports.OrderRoutes = { routes };
