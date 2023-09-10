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
exports.CategoryService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../middlewares/ApiError"));
const prisma_1 = require("../../shared/prisma");
const postCategory = (param) => __awaiter(void 0, void 0, void 0, function* () {
    const doesExists = yield prisma_1.prisma.category.findFirst({
        where: {
            title: param.title,
        },
    });
    if (doesExists) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, "Category already exists");
    }
    const result = yield prisma_1.prisma.category.create({
        data: param,
    });
    return result;
});
// For updating category
const update = (param, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.category.update({
        where: {
            id: id,
        },
        data: param,
    });
    return result;
});
// For getting all
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.category.findMany();
    return result;
});
// For getting single
const getSingle = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.category.findFirst({
        where: {
            id: params,
        },
        include: {
            Book: true,
        },
    });
    return result;
});
// For deleting single
const deleteSinlge = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.category.delete({
        where: {
            id: params,
        },
    });
    return result;
});
exports.CategoryService = {
    postCategory,
    update,
    getAll,
    getSingle,
    deleteSinlge,
};
