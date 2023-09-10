import httpStatus from "http-status";
import ApiError from "../../middlewares/ApiError";
import { prisma } from "../../shared/prisma";

const postCategory = async (param: { title: string }) => {
  const doesExists = await prisma.category.findFirst({
    where: {
      title: param.title,
    },
  });
  if (doesExists) {
    throw new ApiError(httpStatus.CONFLICT, "Category already exists");
  }
  const result = await prisma.category.create({
    data: param,
  });
  return result;
};

// For updating category
const update = async (param: { title: string }, id: string) => {
  const result = await prisma.category.update({
    where: {
      id: id,
    },
    data: param,
  });
  return result;
};

// For getting all
const getAll = async () => {
  const result = await prisma.category.findMany();
  return result;
};
// For getting single
const getSingle = async (params: string) => {
  const result = await prisma.category.findFirst({
    where: {
      id: params,
    },
    include: {
      Book: true,
    },
  });
  return result;
};
// For deleting single
const deleteSinlge = async (params: string) => {
  const result = await prisma.category.delete({
    where: {
      id: params,
    },
  });
  return result;
};

export const CategoryService = {
  postCategory,
  update,
  getAll,
  getSingle,
  deleteSinlge,
};
