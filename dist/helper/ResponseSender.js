"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseSender = void 0;
const responseSender = (res, data) => {
    const responseData = {
        statusCode: data.statusCode,
        success: data.success,
        message: data.message || null,
        meta: data.meta || null || undefined,
        data: data.data || null,
    };
    res.status(data.statusCode).json(responseData);
};
exports.ResponseSender = { responseSender };
