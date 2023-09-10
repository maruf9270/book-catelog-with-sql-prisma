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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../middlewares/ApiError"));
const prisma_1 = require("../../shared/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../../config"));
const jwtHelper_1 = require("../../../helper/jwtHelper");
const postUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const isExists = yield prisma_1.prisma.user.findFirst({
        where: {
            email: user.email,
        },
    });
    if (isExists) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, "Email Already exists");
    }
    const hashedPassword = yield bcrypt_1.default.hash(user.password, Number(config_1.default.bycrypt_salt_rounds));
    const result = yield prisma_1.prisma.user.create({
        data: Object.assign(Object.assign({}, user), { password: hashedPassword }),
    });
    const { password } = result, dataWithoutPass = __rest(result, ["password"]);
    return dataWithoutPass;
});
// FOr logging in
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const doesExists = yield prisma_1.prisma.user.findFirst({
        where: {
            email: payload.email,
        },
        select: {
            email: true,
            id: true,
            password: true,
            role: true,
        },
    });
    if (!doesExists) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Email is incorrect");
    }
    const doesPasswordMatch = yield bcrypt_1.default.compare(payload.password, doesExists.password);
    if (!doesPasswordMatch) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Incorrect password");
    }
    const accessToken = jwtHelper_1.jwtHelpers.createToken({ role: doesExists.role, id: doesExists.id }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    const refreshToken = jwtHelper_1.jwtHelpers.createToken({ id: doesExists.id, role: doesExists.role }, config_1.default.jwt.refresh_secret, config_1.default.jwt.refresh_expires_in);
    return {
        accessToken,
        refreshToken,
    };
});
exports.AuthService = { postUser, login };
