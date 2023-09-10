import { Book, Prisma } from "@prisma/client";
import { prisma } from "../../shared/prisma";
import { IgenericReqParam } from "./book.interface";
import { IPaginationOptions } from "../../../interfaces/paginations";
import { paginationHelpers } from "../../../helper/paginationHelper";
import { BookSearchAbleFields } from "./book.constant";
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

// For getting all the books with paginated data
const fetchWIthPaginated = async (
  filters: any,
  paginationOptions: IPaginationOptions
) => {
  const { size, page, skip } =
    paginationHelpers.calculatePagination(paginationOptions);

  const { search, category, minPrice, maxPrice, ...filtersData }: any = filters;

  const andConditions = [];

  if (search) {
    andConditions.push({
      OR: BookSearchAbleFields.map((field) => ({
        [field]: {
          contains: search,
          mode: "insensitive",
        },
      })),
    });
  }
  if (Object.keys(filtersData).length > 0) {
    andConditions.push({
      AND: Object.keys(filtersData).map((key) => ({
        [key]: {
          equals: (filtersData as any)[key],
        },
      })),
    });
  }

  // Convert minPrice and maxPrice to floats
  const minPriceFloat = parseFloat(minPrice);
  const maxPriceFloat = parseFloat(maxPrice);
  if (!isNaN(minPriceFloat)) {
    andConditions.push({
      price: {
        gte: minPriceFloat,
      },
    });
  }

  if (!isNaN(maxPriceFloat)) {
    andConditions.push({
      price: {
        lte: maxPriceFloat,
      },
    });
  }

  if (category !== undefined) {
    andConditions.push({
      categoryId: {
        equals: category,
      },
    });
  }
  const whereConditions: Prisma.BookWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.book.findMany({
    include: {
      category: true,
    },
    where: whereConditions,
    skip,
    take: size,
    orderBy:
      paginationOptions.sortBy && paginationOptions.sortOrder
        ? { [paginationOptions.sortBy]: paginationOptions.sortOrder }
        : { publicationDate: "desc" },
  });
  const total = await prisma.book.count({
    where: whereConditions,
  });
  const totalPage = Math.ceil(total / size);
  return {
    meta: {
      total,
      page,
      size,
      totalPage,
    },
    data: result,
  };
};
export const BookService = {
  postNewBook,
  updateBook,
  findByCatId,
  getSingleByid,
  deleteSIngleByID,
  fetchWIthPaginated,
};
