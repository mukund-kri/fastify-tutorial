---
title: Reorganizing our routes with declarative routes
weight: 7
---

# Reorganizing our routes with declarative routes

We have covered a lot in the previous chapters. Our `books.js` file is getting bigger and bigger. It is time to reorganize our routes into separate files. We will also use the declarative routes feature of Fastify to make our code more readable.

## What are these `declarative routes`?

Fastify does not have any thing called `declarative routes`. It a term I coined to
describe `Full declaration` routes. In Fastify, we can declare routes in two ways:

- [Full declaration](https://www.fastify.io/docs/latest/Routes/#full-declaration)
- [Shorthand declaration](https://www.fastify.io/docs/latest/Routes/#shorthand-declaration)

We have been using the shorthand declaration so far. In this chapter, we will use the
full declaration to reorganize our routes into many files, the idea is to make our code
more readable.

## Reorganizing our routes

Instead of having all the routes in a single file, let's make a folder called `books`
with `index.js` as our entry point. The plan is to split this way:

## 1. index.js. 

This will be the entry point for the `books` routes. It will have the exported
portions of the routes. 

## 2. Separate the db code

We have been using the `books` array to store the books. Lets just move this array to a
separate file called `db.js`. 

## 3. separate out the handlers

Handlers are the functions that are called when a route is matched. We will move the
handlers to a separate file called `handlers.js`.

## 4. separate out the schemas

We will move the schemas to a separate file called `schemas.js`.

Then we'll bring it all together in `index.js`.


The code looks much cleaner now, right? 

## Exercise

Do the same reorganization for the `authors` routes.



