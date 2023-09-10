"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_enum_1 = require("./user.enum");
const user_controller_1 = require("./user.controller");
const routes = express_1.default.Router();
// For getting all the users for admin
routes.get("/", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN), user_controller_1.UserController.getAllUser);
// For single get
routes.get("/:id", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN), user_controller_1.UserController.singleGet);
// FOr updaing single
routes.patch("/:id", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN), user_controller_1.UserController.updateSingle);
// For deleting single
routes.delete("/:id", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN), user_controller_1.UserController.deleteSingle);
exports.UserRouter = { routes };
