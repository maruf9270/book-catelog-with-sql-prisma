"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = require("./app/routes/routes");
const globalErrorHandler_1 = require("./app/middlewares/globalErrorHandler");
const NotFoundHandler_1 = require("./error/NotFoundHandler");
exports.app = (0, express_1.default)();
exports.port = process.env.PORT || 5000;
// Using cors
exports.app.use((0, cors_1.default)());
// Using parser
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
// Using Cookie parser
exports.app.use((0, cookie_parser_1.default)());
// Using root route for routing
exports.app.use("/api/v1", routes_1.RootRoute.router);
// Using Global error handler
exports.app.use(globalErrorHandler_1.GlobalErrorHandler.globalErrorHandler);
// For not found route
exports.app.use(NotFoundHandler_1.NotFoundHandler.handle);
