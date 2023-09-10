import { Order, User } from "@prisma/client";
import { prisma } from "../../shared/prisma";
const postOrder = async (bookDate: Partial<Order>, userID: string) => {
  const orderDate = {
    userId: userID,
    orderedBooks: bookDate,
  };
  const result = await prisma.order.create({
    data: orderDate,
  });
  return result;
};

export const OrderService = { postOrder };
