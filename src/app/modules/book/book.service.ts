import { Book } from "@prisma/client";
import { prisma } from "../../shared/prisma";
// For creating a new Book
const postNewBook = async (params: Book) => {
  const result = await prisma.book.create({
    data: params,
  });

  return result;
};

// FOr updaing
const updateBook = async (params: Partial<Book>, id: string) => {
  const result = await prisma.book.update({
    where: {
      id: id,
    },
    data: params,
  });

  return result;
};

export const BookService = { postNewBook, updateBook };
