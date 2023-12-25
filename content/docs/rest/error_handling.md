---
title: Error handling
weight: 32
---

# Error handling

In this chapter we'll explore how to handle errors in our REST API. We'll start by 
looking at HTTP error codes and how to use them to communicate errors to the client. 

## HTTP error codes

HTTP defines a set of standard error codes that can be used to communicate errors to 
the client. The whole list of error codes can be found 
[here](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

In this chapter we'll discuss the 400 series of error codes. This is where the 
server is telling the client that there was an error with the request. This is in 
contrast to the 500 series of error codes, which is where the server is telling us there
was error on the server.

The most common ones, that we cover in this tutorial are:

- 400 - Bad Request :: indicates that the request was malformed.
  we'll visit this on in the request validation chapter.

- 401 - Unauthorized :: indicates that the request was not authorized.
- 403 - Forbidden :: indicates that the request was not authorized.
  we'll cover these two in the Auth chapter

- 404 - Not Found :: indicates that the `resource` was not found.
  Let's take a look at this here ...


## 200 - OK primer

Before we look at the errors, let's briefly look at the 200 - OK status code. This is the
most common status code. It indicates that the request was successful. All the while
in the previous chapters, we have been returning a 200 - OK status code. Fastify was
doing this for us behind the scenes so we didn't have to worry about it. For example
if we make a `GET /books/978-0553384611` request, and the book exists, then we
return a 200 - OK response with the book details. 


## The 404 error

This happens when the client requests a resource that does not exist on the server. For 
example, if the client requests a book with isbn `978-0553384611` and the book does not 
exist, we should return a 404 error.

Let's fix the code from the previous chapter where we need to check for and return a 
404 error.

{{<fullcode "https://github.com/mukund-kri/fastify-tutorial-code-bookapi/tree/05-error-handling">}}

### Case 1 - `GET /books`

Here, there is no need for 404. Let's look at the edge case were there are no books
in database. Well in this case it is not a error, and returns an empty list, that's 
all. So no 404's here.

### Case 2 - `GET /books/:isbn`

Now we come to the a situation where a book with an isbn say `978-0553384611` is 
requested but the book is not stored in the server, then the server should return
a 404 - Resource not found. And here's the code to do it ...

```js
```

### Case 3 - `POST /books`

No 404 here. We are creating a new book, so there is no need to check if the book
already exists. There are other errors like ...
* 400 - Bad Request :: indicates that the request was malformed.
  we'll visit this on in the request validation chapter.
* 409 - Conflict error, if the book already exists.

etc. But we'll cover them in the next chapters.

### Case 4 - `PUT /books/:isbn`

Here we need to check if the book exists. If it does not exist, then we return a 404
error. If it does exist, then we update the book and return a 200 - OK.

```js
```

### Case 5 - `DELETE /books/:isbn`

Here we need to check if the book exists. If it does not exist, then we return a 404
error. If it does exist, then we delete the book and return a 200 - OK.

```js
```