---
title: Routing
date: 2023-03-28
weight: 23
---
# Routing

Let's dig a little deeper into Fastify's routing system. Since fastify is minimalistic,
the routes can be organized in a variety of ways. 

In this tutorial, we will follow the convention provided by the `fastify-cli` tool. The
following conventions are used:

1. Routes are defined in the `routes` directory.
2. Each route is defined in a separate file. So if you have a route `/users`, it will
   be defined in the `routes/users.js` file.
3. Each route file exports a function that accepts a `fastify` instance and a `options`
   object as parameters. The `fastify` instance is used to define the route and the
   `options` object can be used to pass configuration to the route.

## Add a new (simple) route

**NOTE:** The code routes reside in the `routes` directory. 
**NOTE:** `app.js` is the entry point for the application. We can ignore this file for now.

Let's add a new route to the application. We'll add a route that responds with the
current time.

Create a new file called `time.js` in the `routes` directory. Add the following code:

```js

// This router has one route, which is a GET request to /time.
export default async function (fastify, opts) {
    fastify.get('/time', async function (request, reply) {
        return { time: new Date() }
    })
}
```

Now open `http://localhost:3000/time` in postman. You should see the following response:

```json
{
    "time": "2021-01-01T12:00:00.000Z"
}
```

## What's happening?

A route consists of a path and a handler function.

The path defines the URL pattern that the route will match against, and the handler 
function is a function that gets called when an HTTP request matches the defined path. 
The handler function is responsible for generating the response to the request.

The the code snippet above, we define a route that matches the path `/time` and responds
with the current time.

## The greet route

Let's explore routes by creating another route, this time with two *endpoints*. An endpoint
is a combination of a path and a HTTP method. So a route can have multiple endpoints.

1. `GET /greet` - Returns a greeting message.
2. `POST /greet` - Accepts a name and returns a greeting message.

## Code

Let's create a new file called `greet.js` in the `routes` directory. 

Next let define the router code, with greet handler that responds to the `GET` methods
of the `/greet` url

```js
```

Now our app should be able to respond to the `GET` method of the `/greet` url.

## testing routes

Go ahead and test the `/greet` route using `postman`. You should see the following

```json
{
  "message": "Hello World!"
}
```

## POST /greet

Now let's explore the `POST` method of the `/greet` url. The `POST` method is generally
used to create a new resource. In our case, we will use it to accept a name and return
a greeting message.

Let's update the `greet.js` file to add the `POST` method.

```js
```

Now let's test the `POST` method using `postman`. You should see the following

```json
{
  "message": "Hello Mukund!"
}
```


## Exercise 1

Add a new route that responds with the current date. The path should be `/date`. The 
date should have a human readable format like `01 Jan 2021`.

## Exercise 2

2. Create a new route `POST /dateplus` that accepts a number. The route should return
   the current date plus the number of days passed in the request body.
3. Test the route using `postman`. Use postman collections to test the route.
4. Export the postman collection into a folder called `postman` in the root of the
   project. 
5. Commit the changes and push to github. And submit the link to the github repo
   in the LMS.


{{<pagebottomnav>}}