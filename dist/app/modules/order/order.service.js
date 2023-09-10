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
exports.OrderService = void 0;
const prisma_1 = require("../../shared/prisma");
const postOrder = (bookDate, userID) => __awaiter(void 0, void 0, void 0, function* () {
    const orderDate = {
        userId: userID,
        orderedBooks: bookDate,
    };
    const result = yield prisma_1.prisma.order.create({
        data: orderDate,
    });
    return result;
});
// For getting all orders
const getALlOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.order.findMany();
    return result;
});
// Get a specific Order
const getsingleById = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.order.findMany({
        where: {
            userId: params,
        },
    });
    return result;
});
// Get a specific order for admin
const getSpecificOrderAdmin = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.order.findFirst({
        where: {
            id: id,
        },
    });
    return result;
});
// Get specific for custome
const getSpecificOrdercustomer = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.order.findFirst({
        where: {
            id: id,
            userId: userId,
        },
    });
    return result;
});
exports.OrderService = {
    postOrder,
    getALlOrders,
    getsingleById,
    getSpecificOrderAdmin,
    getSpecificOrdercustomer,
};
