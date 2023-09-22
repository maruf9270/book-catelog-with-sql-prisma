"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_enum_1 = require("../user/user.enum");
const category_controller_1 = require("./category.controller");
const routes = express_1.default.Router();
// For creating
routes.post("/create-category", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN), category_controller_1.CategoryController.createCategory);
// For gettng all the catch
routes.get("/", category_controller_1.CategoryController.getAllCAt);
// For updating
routes.patch("/:id", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN), category_controller_1.CategoryController.updateCategory);
// for getting single
routes.get("/:id", category_controller_1.CategoryController.getSingleCAt);
// For deleting
routes.delete("/:id", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN), category_controller_1.CategoryController.deleteCat);
exports.CategoryRoutes = { routes };
