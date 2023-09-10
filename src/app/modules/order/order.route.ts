import expresss from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../user/user.enum";
import { OrderController } from "./order.controller";
const routes = expresss.Router();

// For creating new order
routes.post(
  "/create-order",
  auth(ENUM_USER_ROLE.CUSTOMER, ENUM_USER_ROLE.ADMIN),
  OrderController.createOrder
);
// For getting all the order
routes.get(
  "/",
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  OrderController.getallorder
);

export const OrderRoutes = { routes };
