"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationErrorHandler = void 0;
const validationErrorHanlder = (error) => {
    const errors = [
        {
            path: "",
            message: error.message,
        },
    ];
    const statusCode = 400;
    return {
        success: false,
        statusCode,
        message: "Validation Error",
        errorMessages: errors,
    };
};
exports.ValidationErrorHandler = { validationErrorHanlder };
