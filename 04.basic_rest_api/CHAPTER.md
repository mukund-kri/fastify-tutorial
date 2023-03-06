# Basic REST API with fastify

In this chapter, we will build a basic REST API using `fastify`. We will use the 
`fastify-cli` tool to generate the project. We will also use the `postman` tool to test
the API.

We will build a rest API around the 'book' resource.

## What is REST?

REST stands for REpresentational State Transfer. It is a popular architectural style for
building web APIs. 

BOOTCAMP NOTE: You are required to know the basics of REST. The following is a good 
resource to get started:

https://www.youtube.com/watch?v=lsMQRaeKNDk

## The Book API

We will build a REST API around the 'book' resource. The API will support the following
urls:

- `GET /books` - get all books
- `GET /books/:id` - get a book by id
- `POST /books` - create a new book
- `PUT /books/:id` - update a book by id
- `DELETE /books/:id` - delete a book by id

So we need to implement the above routes / endpoints.

## Implementation

### 1. Generate a new project
First we need to generate a new project using the `fastify-cli` tool. Like in section
2, generate a new project using `fastify-cli` called books. Remember to use --esm 
option.


### 2. Create books.js and add basic router

Now let's create a new file called `books.js` in the `routes` folder. This file will
   contain the routes for the `books` resource.

```js
```

Well add all the routes for the `books` resource in this file in the following sections.

### 3. `GET /books` route

Let's add the first route. The `GET /books` route will return all the books. Add the
following code to the `books.js` file.

```js
```

Note: the books here represented in a simple array. In a real world application, you
will use a database to store the books. We will do this in a later chapter.

`GET /books` should return all the books. The resulting JSON should look like this:

```json
[
    {
        "isbn": "978-0544003415",
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien"
    },
    {
        "isbn": "978-0261102219",
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien"
    },
]
```

### 4. `GET /books/:isbn` route

Let's add the second route. The `GET /books/:isbn` route will return a book by isbn. Add the
following code to the `books.js` file.

```js
```

The request `http://localhost:3000/books/978-0544003415` should return the following
JSON:

```json
{
    "isbn": "978-0544003415",
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien"
}
```

### 5. `POST /books` route

Let's add the third route. The `POST /books` route will create a new book. Add the
following code to the `books.js` file.

```js
```

The request `http://localhost:3000/books` with the following JSON in the request body:

```json
{
    "isbn": "978-0553384611",
    "title": "A Game of Thrones",
    "author": "George R.R. Martin"
}
```

This should create a new book and return the following JSON:

```json
{
    "isbn": "978-0553384611",
    "title": "A Game of Thrones",
    "author": "George R.R. Martin"
}
```

### 6. `PUT /books/:isbn` route

Let's add the fourth route. The `PUT /books/:isbn` route will update a book by isbn. Add the
following code to the `books.js` file.

```js
```

The request `http://localhost:3000/books/978-0553384611` with the following JSON in the request body:

```json
{
    "title": "A Song of Ice and Fire",
    "author": "George R.R. Martin"
}
```

This should update the book and return the following JSON:

```json
{
    "isbn": "978-0553384611",
    "title": "A Song of Ice and Fire",
    "author": "George R.R. Martin"
}
```

### 7. `DELETE /books/:isbn` route

Let's add the fifth route. The `DELETE /books/:isbn` route will delete a book by isbn. Add the
following code to the `books.js` file.

```js
```

The request `http://localhost:3000/books/978-0553384611` should delete the book and
return the following JSON:

```json
{
    "message": "Book deleted"
}
```

## Exercise

Create REST api for the `authors` resource. The API should support the following

- `GET /authors` - get all authors
- `GET /authors/:id` - get an author by id
- `POST /authors` - create a new author
- `PUT /authors/:id` - update an author by id
- `DELETE /authors/:id` - delete an author by id

The `authors` resource should have the following properties:

- `id` - unique id of the author
- `name` - name of the author
- `age` - age of the author
- `bio` - biography of the author

## What's next?

Now that we have built a basic REST API, can we start working on production code already?

NO! this is just the very basics, to get to production level code, we need ...
1. Error handling
2. Validation
3. Authentication
4. Logging
5. Testing

and many more. We will cover all these topics in the next chapters.


