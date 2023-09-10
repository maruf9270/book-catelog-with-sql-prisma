"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_enum_1 = require("../user/user.enum");
const profile_controller_1 = require("./profile.controller");
const routes = express_1.default.Router();
// For getting single profile
routes.get("/", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN, user_enum_1.ENUM_USER_ROLE.CUSTOMER), profile_controller_1.ProfileController.getSIngle);
exports.ProfileRoutes = { routes };
