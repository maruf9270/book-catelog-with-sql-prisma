import { Order, Prisma, User } from "@prisma/client";
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
// For getting all orders
const getALlOrders = async () => {
  const result = await prisma.order.findMany();
  return result;
};

// Get a specific Order
const getsingleById = async (params: string) => {
  const result = await prisma.order.findMany({
    where: {
      userId: params,
    },
  });
  return result;
};

// Get a specific order for admin

const getSpecificOrderAdmin = async (id: string) => {
  const result = await prisma.order.findFirst({
    where: {
      id: id,
    },
  });
  return result;
};

// Get specific for custome
const getSpecificOrdercustomer = async (id: string, userId: string) => {
  const result = await prisma.order.findFirst({
    where: {
      id: id,
      userId: userId,
    },
  });
  return result;
};
export const OrderService = {
  postOrder,
  getALlOrders,
  getsingleById,
  getSpecificOrderAdmin,
  getSpecificOrdercustomer,
};
