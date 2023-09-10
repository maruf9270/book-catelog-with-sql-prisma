"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const routes = express_1.default.Router();
// For creating new user
routes.post("/signup", auth_controller_1.AuthController.createUser);
// For logging in
routes.post("/login", auth_controller_1.AuthController.loginUser);
exports.AuthRoutes = { routes };
