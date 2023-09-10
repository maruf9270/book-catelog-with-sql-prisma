import { Book } from "@prisma/client";
import { prisma } from "../../shared/prisma";
// For creating a new Book
const postNewBook = async (params: Book) => {
  const isoDate = params.publicationDate + "T00:00:00.000Z";
  params.publicationDate = isoDate as unknown as Date;
  console.log(isoDate);
  const result = await prisma.book.create({
    data: params,
    include: {
      category: true,
    },
  });

  return result;
};

// FOr updaing
const updateBook = async (params: Partial<Book>, id: string) => {
  if (params.publicationDate) {
    const isoDate = params.publicationDate + "T00:00:00.000Z";
    params.publicationDate = isoDate as unknown as Date;
  }
  const result = await prisma.book.update({
    where: {
      id: id,
    },
    data: params,
    include: {
      category: true,
    },
  });

  return result;
};

// For finding a single book by category id
const findByCatId = async (id: string) => {
  const result = await prisma.book.findMany({
    where: {
      categoryId: id,
    },
    include: {
      category: true,
    },
  });
  return result;
};
// Get single by id
const getSingleByid = async (id: string) => {
  const result = await prisma.book.findFirst({
    where: {
      id: id,
    },
    include: {
      category: true,
    },
  });

  return result;
};

// Delete single by id
const deleteSIngleByID = async (id: string) => {
  const result = await prisma.book.delete({
    where: {
      id: id,
    },
    include: {
      category: true,
    },
  });
  return result;
};

export const BookService = {
  postNewBook,
  updateBook,
  findByCatId,
  getSingleByid,
  deleteSIngleByID,
};
