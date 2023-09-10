"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalErrorHandler = void 0;
const config_1 = __importDefault(require("../../config"));
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const ApiError_1 = __importDefault(require("./ApiError"));
const ValidationErrorHandler_1 = require("../../error/ValidationErrorHandler");
const ZodErrorHandler_1 = require("../../error/ZodErrorHandler");
const ClientErrorHandler_1 = require("../../error/ClientErrorHandler");
const globalErrorHandler = (error, req, res, next) => {
    config_1.default.env === "development"
        ? console.log(`Error from GlobalErrorHandler ~~`, { error })
        : console.error(`Error from GlobalErrorHandler ~~`, error);
    let statusCode = 500;
    let message = "Something went wrong !";
    let errorMessages = [];
    if (error instanceof client_1.Prisma.PrismaClientValidationError) {
        const simplifiedError = ValidationErrorHandler_1.ValidationErrorHandler.validationErrorHanlder(error);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    }
    else if (error instanceof zod_1.ZodError) {
        const simplifiedError = ZodErrorHandler_1.ZodErrorHandler.handleZodError(error);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    }
    else if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        const simplifiedError = ClientErrorHandler_1.ClientErrorHandler.clentErrorHandler(error);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    }
    else if (error instanceof ApiError_1.default) {
        statusCode = error === null || error === void 0 ? void 0 : error.statusCode;
        message = error.message;
        errorMessages = (error === null || error === void 0 ? void 0 : error.message)
            ? [
                {
                    path: "",
                    message: error === null || error === void 0 ? void 0 : error.message,
                },
            ]
            : [];
    }
    else if (error instanceof Error) {
        message = error === null || error === void 0 ? void 0 : error.message;
        errorMessages = (error === null || error === void 0 ? void 0 : error.message)
            ? [
                {
                    path: "",
                    message: error === null || error === void 0 ? void 0 : error.message,
                },
            ]
            : [];
    }
    res.status(statusCode).json({
        success: false,
        message,
        errorMessages,
        stack: config_1.default.env !== "production" ? error === null || error === void 0 ? void 0 : error.stack : undefined,
    });
};
exports.GlobalErrorHandler = { globalErrorHandler };
