"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.BookController = void 0;
const book_service_1 = require("./book.service");
const ResponseSender_1 = require("../../../helper/ResponseSender");
const http_status_1 = __importDefault(require("http-status"));
const pick_1 = __importDefault(require("../../shared/pick"));
const book_constant_1 = __importStar(require("./book.constant"));
// For new book
const createNewBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_service_1.BookService.postNewBook(req.body);
        ResponseSender_1.ResponseSender.responseSender(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: "Book Created successfylly",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// For updating
const updateBOok = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield book_service_1.BookService.updateBook(req.body, id);
        ResponseSender_1.ResponseSender.responseSender(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: "Book updated successfylly",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// For finding book by category id
const findBookByCatId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.categoryId;
        const result = yield book_service_1.BookService.findByCatId(id);
        ResponseSender_1.ResponseSender.responseSender(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: "Books with associated category data fetched successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// Get sngle by id
const getSingleBookByID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield book_service_1.BookService.getSingleByid(id);
        ResponseSender_1.ResponseSender.responseSender(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: "Book fetched successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// Delete book by id
const deleteSIngleBOok = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield book_service_1.BookService.deleteSIngleByID(id);
        ResponseSender_1.ResponseSender.responseSender(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: "Books deleted successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// For gtting all the books with paginated data
const getAllWithPaginated = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filters = (0, pick_1.default)(req.query, book_constant_1.BookFilterAbleFileds);
        const paginationOptions = (0, pick_1.default)(req.query, book_constant_1.default);
        const result = yield book_service_1.BookService.fetchWIthPaginated(filters, paginationOptions);
        ResponseSender_1.ResponseSender.responseSender(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Book retrieved successful",
            meta: result.meta,
            data: result.data,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.BookController = {
    createNewBook,
    updateBOok,
    findBookByCatId,
    getSingleBookByID,
    deleteSIngleBOok,
    getAllWithPaginated,
};
