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
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const ResponseSender_1 = require("../../../helper/ResponseSender");
const http_status_1 = __importDefault(require("http-status"));
// For creating order
const createOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookdata = req.body;
        const user = req.user;
        const result = yield order_service_1.OrderService.postOrder(bookdata, user === null || user === void 0 ? void 0 : user.id);
        ResponseSender_1.ResponseSender.responseSender(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: "Order created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
// For getting order
const getallorder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        if ((user === null || user === void 0 ? void 0 : user.role) == "admin") {
            const result = yield order_service_1.OrderService.getALlOrders();
            ResponseSender_1.ResponseSender.responseSender(res, {
                success: true,
                statusCode: http_status_1.default.OK,
                message: "Orders retived successfully",
                data: result,
            });
            if ((user === null || user === void 0 ? void 0 : user.role) == "customer") {
                const result = yield order_service_1.OrderService.getsingleById(user.id);
                ResponseSender_1.ResponseSender.responseSender(res, {
                    success: true,
                    statusCode: http_status_1.default.OK,
                    message: "Order retived successfully",
                    data: result,
                });
            }
        }
    }
    catch (error) {
        next(error);
    }
});
// For gettingsingle order
const getSingleOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const id = req === null || req === void 0 ? void 0 : req.params.id;
        if (((_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.role) == "admin") {
            const result = yield order_service_1.OrderService.getSpecificOrderAdmin(id);
            ResponseSender_1.ResponseSender.responseSender(res, {
                success: true,
                statusCode: http_status_1.default.OK,
                message: "Order fetched successfully",
                data: result,
            });
        }
        if (((_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b.role) == "customer") {
            const result = yield order_service_1.OrderService.getSpecificOrdercustomer(id, (_c = req.user) === null || _c === void 0 ? void 0 : _c.id);
            ResponseSender_1.ResponseSender.responseSender(res, {
                success: true,
                statusCode: http_status_1.default.OK,
                message: "Order data fetched successfully",
                data: result,
            });
        }
    }
    catch (error) {
        next(error);
    }
});
exports.OrderController = { createOrder, getallorder, getSingleOrder };
