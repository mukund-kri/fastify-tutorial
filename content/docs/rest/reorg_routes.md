---
title: Reorganizing our routes with declarative routes
weight: 34
---

# Reorganizing our routes with declarative routes

We have covered a lot in the previous chapters. Our `books.js` file is getting bigger 
and bigger. It is time to reorganize our routes into separate files. We will also use
 the declarative routes feature of Fastify to make our code more readable.

## What are these `declarative routes`?

Fastify does not have any thing called `declarative routes`. It a term I coined to
describe `Full declaration` routes. In Fastify, we can declare routes in two ways:

- [Full declaration](https://www.fastify.io/docs/latest/Routes/#full-declaration)
- [Shorthand declaration](https://www.fastify.io/docs/latest/Routes/#shorthand-declaration)

We have been using the shorthand declaration so far. In this chapter, we will use the
full declaration to reorganize our routes into many files, the idea is to make our code
more readable.

## [Side Note] What is declarative programming?

**Declarative Programming**: This is a programming paradigm where you describe what you want to achieve without necessarily detailing how to achieve it. It focuses on what the program should accomplish. 

So in this case our route is not a function that tell us what to do when a request comes
in. 

Instead it is a description of what we want to do when a request comes in object form.
We'll see how this works in a bit.

## Reorganizing our routes
Previously each `resource` had its own file. This single file contained all the routes
for that resource. 

In the new approach, each `resource` will have its own folder. This folder will contain
3 files:

- `index.js` - This will contain the declarative descriptions for routes for the
 resource.
- `handlers.js` - This will contain the handlers (running code) for the routes.
- `schemas.js` - This will contain the schemas (structure of incoming and outgoing
 urls, json, headers etc.) for the routes.

### 1. index.js. 

Let's look at the `GET /books` route, to better understand the declaration.

```js
    fastify.route({
        method: 'GET',
        url: '/',
        schema: allBooksSchema,
        handler: getBooks
    })
```

Notes:

- The `route` in now a plain object which declares how the route should be handled.
- The `method` parameter is the http method for the route. Here its `GET`.
- The `url` parameter describes to which url this route will handle. Here its `/`.
- The `schema` parameter describes the schema for the route. This takes care of the validation.
- Finally the `handler` parameter is the function that will be called when the route is matched.

### 2. handlers.js

TODO

### 3. schemas.js

TODO

## Exercise

Do the same reorganization for the `authors` routes.




{{<pagebottomnav>}}