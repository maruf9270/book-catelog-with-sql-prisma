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
exports.CategoryController = void 0;
const category_service_1 = require("./category.service");
const ResponseSender_1 = require("../../../helper/ResponseSender");
const http_status_1 = __importDefault(require("http-status"));
const createCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_service_1.CategoryService.postCategory(req.body);
        ResponseSender_1.ResponseSender.responseSender(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: "Category created succssfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// FOr updata
const updateCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.params.id);
        const result = yield category_service_1.CategoryService.update(req.body, req.params.id);
        ResponseSender_1.ResponseSender.responseSender(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: "Category Updated successfylly",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//For getting all
const getAllCAt = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_service_1.CategoryService.getAll();
        ResponseSender_1.ResponseSender.responseSender(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: "Categories featched successfylly",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//For getting single
const getSingleCAt = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield category_service_1.CategoryService.getSingle(id);
        ResponseSender_1.ResponseSender.responseSender(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: "category featched successfylly",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
//For delet
const deleteCat = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_service_1.CategoryService.deleteSinlge(req.params.id);
        ResponseSender_1.ResponseSender.responseSender(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: "Category deleted successfylly",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.CategoryController = {
    createCategory,
    updateCategory,
    getAllCAt,
    deleteCat,
    getSingleCAt,
};
