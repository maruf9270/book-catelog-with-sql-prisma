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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const prisma_1 = require("../../shared/prisma");
// For getting all the user
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma_1.prisma.user.findMany({
        select: {
            name: true,
            role: true,
            id: true,
            email: true,
            contactNo: true,
            address: true,
            profileImg: true,
        },
    });
    return users;
});
// For getting single user
const fetchSingle = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.user.findFirst({
        where: {
            id: payload,
        },
        select: {
            name: true,
            role: true,
            id: true,
            email: true,
            contactNo: true,
            address: true,
            profileImg: true,
        },
    });
    return result;
});
// For updating single user
const update = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.user.update({
        where: {
            id: id,
        },
        data: payload,
    });
    const { password } = result, withoutPass = __rest(result, ["password"]);
    return withoutPass;
});
// For deleting a single
const deleteUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.user.delete({
        where: {
            id: payload,
        },
    });
    const { password } = result, withoutPass = __rest(result, ["password"]);
    return withoutPass;
});
exports.UserService = { fetchUsers, fetchSingle, update, deleteUser };
