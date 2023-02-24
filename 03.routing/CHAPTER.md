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

## The greet route

Let's explore routes by creating a simpler router the has the following routes:

1. `GET /greet` - Returns a greeting message.
2. `POST /greet` - Accepts a name and returns a greeting message.

## Code

Let's create a new file called `greet.js` in the `routes` directory. 

Next let define the router code, with greet handler that responds to the `GET` methods
of the `/greet` url

```js
```

Now our app should be able to respond to the `GET` method of the `/greet` url.

## Postman

Start using the `postman` tool to test your routes. It is a great tool for
testing HTTP APIs. Download and install the free version from:


https://www.postman.com/


**BOOTCAMP NOTE**: You are required to use the `postman` tool in the bootcamp. All the 
demos/exercises etc. have been tested using `postman`.

**BOOTCAMP NOTE**: I know that there are dozens of tools that can be used to test
HTTP APIs. But we will use `postman` to standardize the evaluation of demos/exercises 
etc.

You should invest some time in learning how to use `postman`. The following is
a good resource to get started:

https://www.youtube.com/watch?v=VywxIQ2ZXw4&t=1622s

Note: this a full tutorial on `postman`. Though you need to master the entire video,
the first ~20 minutes are enough for this section.

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
  "message": "Hello World!"
}
```

## Exercise

1. Generate a new project using the `fastify-cli` tool.
2. Create a new route `POST /dateplus` that accepts a number. The route should return
   the current date plus the number of days passed in the request body.
3. Test the route using `postman`. Use postman collections to test the route.
4. Export the postman collection into a folder called `postman` in the root of the
   project. 
5. Commit the changes and push to github. And submit the link to the github repo
   in the bootcamp.*

