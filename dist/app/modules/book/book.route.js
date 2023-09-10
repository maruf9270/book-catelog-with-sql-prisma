"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_enum_1 = require("../user/user.enum");
const book_controller_1 = require("./book.controller");
const routes = express_1.default.Router();
// For creating new book
routes.post("/", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN), book_controller_1.BookController.createNewBook);
// For getting all the books with paginated data
routes.get("/", book_controller_1.BookController.getAllWithPaginated);
// For updating single book
routes.patch("/:id", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN), book_controller_1.BookController.updateBOok);
// For finding book by cat id
routes.get("/:categoryId/category", book_controller_1.BookController.findBookByCatId);
// For getting single book by id
routes.get("/:id", book_controller_1.BookController.getSingleBookByID);
// for deleting single book
routes.delete("/:id", (0, auth_1.default)(user_enum_1.ENUM_USER_ROLE.ADMIN), book_controller_1.BookController.deleteSIngleBOok);
exports.BookRoutes = { routes };
