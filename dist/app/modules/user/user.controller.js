"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("./user.service");
const ResponseSender_1 = require("../../../helper/ResponseSender");
const http_status_1 = __importDefault(require("http-status"));
const getAllUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserService.fetchUsers();
        ResponseSender_1.ResponseSender.responseSender(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: "Users featched successfylly",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// For single get
const singleGet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield user_service_1.UserService.fetchSingle(id);
        ResponseSender_1.ResponseSender.responseSender(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: "User featched successfylly",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// For updating
const updateSingle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield user_service_1.UserService.update(req.body, id);
        ResponseSender_1.ResponseSender.responseSender(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: "User updated successfylly",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// For deleting single user
const deleteSingle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield user_service_1.UserService.deleteUser(id);
        ResponseSender_1.ResponseSender.responseSender(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: "User deleted successfylly",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.UserController = {
    getAllUser,
    singleGet,
    updateSingle,
    deleteSingle,
};
