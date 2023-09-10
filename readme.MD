## Live URL: https://assignment-8-liart.vercel.app

## API Endpoints

## User

1. api/v1/auth/signup (POST)
2. /api/v1/auth/login (POST)
3. api/v1/users (GET)
4. api/v1/users/a35b58c3-24fe-4e83-833c-6e3431e8d9e9 (Single GET)
5. api/v1/users/api/v1/users/a35b58c3-24fe-4e83-833c-6e3431e8d9e9 (PATCH)
6. api/v1/users/174ce924-8d42-46a4-90ee-dcde0952dbff(DELETE)
7. api/v1/profile (GET)

## Category

1. api/v1/categories/create-category (POST)
2. api/v1/categories (GET)
3. api/v1/categories/2277d42d-35fc-430c-9fc4-88a2ef672789 (Single GET)
4. api/v1/categories/2277d42d-35fc-430c-9fc4-88a2ef672789 (PATCH)
5. api/v1/categories/44a846be-eb73-4cba-832c-27092ca9b182 (DELETE)

## Books

1. api/v1/books/create-book (POST)
2. api/v1/books (GET)
3. api/v1/books/469ac343-3dbd-431b-994f-15851fc378c5/category (GET)
4. api/v1/books/5c022620-897b-4a81-ac7a-f5fa8a47dd7c (GET SINGLE BOOK)
5. api/v1/books/5c022620-897b-4a81-ac7a-f5fa8a47dd7c (PATCH)
6. api/v1/books/5c022620-897b-4a81-ac7a-f5fa8a47dd7c (DELETE)

## Orders

1. api/v1/orders/create-order (POST)
2. api/v1/orders (GET)
3. api/v1/orders/5d0abb97-3373-4acb-819d-23b746a2a742 (GET)

{
"orderedBooks": [
{
"bookId": "5c022620-897b-4a81-ac7a-f5fa8a47dd7c",
"quantity": 3
}
]
}
