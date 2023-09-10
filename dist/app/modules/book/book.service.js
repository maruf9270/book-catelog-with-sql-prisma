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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const prisma_1 = require("../../shared/prisma");
// For creating a new Book
const postNewBook = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const isoDate = params.publicationDate + "T00:00:00.000Z";
    params.publicationDate = isoDate;
    console.log(isoDate);
    const result = yield prisma_1.prisma.book.create({
        data: params,
        include: {
            category: true,
        },
    });
    return result;
});
// FOr updaing
const updateBook = (params, id) => __awaiter(void 0, void 0, void 0, function* () {
    if (params.publicationDate) {
        const isoDate = params.publicationDate + "T00:00:00.000Z";
        params.publicationDate = isoDate;
    }
    const result = yield prisma_1.prisma.book.update({
        where: {
            id: id,
        },
        data: params,
        include: {
            category: true,
        },
    });
    return result;
});
// For finding a single book by category id
const findByCatId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.findMany({
        where: {
            categoryId: id,
        },
        include: {
            category: true,
        },
    });
    return result;
});
// Get single by id
const getSingleByid = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.findFirst({
        where: {
            id: id,
        },
        include: {
            category: true,
        },
    });
    return result;
});
// Delete single by id
const deleteSIngleByID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.delete({
        where: {
            id: id,
        },
        include: {
            category: true,
        },
    });
    return result;
});
exports.BookService = {
    postNewBook,
    updateBook,
    findByCatId,
    getSingleByid,
    deleteSIngleByID,
};
