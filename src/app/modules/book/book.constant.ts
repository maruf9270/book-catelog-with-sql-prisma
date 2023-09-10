export const BookSearchAbleFields = ["title", "author", "genre"];

export const BookFilterAbleFileds = [
  "search",
  "category",
  "minPrice",
  "maxPrice",
];
// export const BookRelationalFields: string[] = ['categoryId'];
// export const BookRelationalFieldsMapper: { [key: string]: string } = {
//   categoryId: 'category',
// };
const paginationFields = ["page", "size", "sortBy", "sortOrder"];
export default paginationFields;
