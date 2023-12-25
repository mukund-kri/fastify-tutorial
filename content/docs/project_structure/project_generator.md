---
title: Project Generator
weight: 21
---

# Using the fastify-cli tool

Fastify-cli is a command line tool that eases developing fastify applications. Let's
explore by generating and running a basic fastify application.

{{<fullcode "https://github.com/mukund-kri/fastify-tutorial-code-bookapi/tree/02-project-generator">}}

## Install fastify-cli

Install the fastify-cli tool globally. This will make the `fastify` command available:

```shell
> npm install --global fastify-cli
```

## Generate a basic fastify application

The fastify generate command is used to generate a new Fastify application. It creates 
a basic project structure with some starter code and a few example routes. This can 
save you time and effort when starting a new project, as you don't need to set up the 
basic file structure and configuration yourself.

Run the following command to generate a new Fastify application:


```shell
> fastify generate book-api --esm
```

The `--esm` flag is used to generate the project using the ESM module system. This is
generally a good idea for new projects written in es6.

A new directory called `book-api` will be created. This is the root directory of the
application. The project structure will look like this:

```
book-api
├── app.js
├── package.json
├── plugins
│   ├── README.md
│   ├── sensible.js
│   └── support.js
├── README.md
├── routes
│   ├── example
│   │   └── index.js
│   ├── README.md
│   └── root.js
└── test
    ├── helper.js
    ├── plugins
    │   └── support.test.js
    └── routes
        ├── example.test.js
        └── root.test.js
```

The rest of this tutorial will be spent exploring the generated files and directories.
But here's a quick overview:

1. `app.js` - The entry point for the application. This file is responsible for starting
   the application and loading the routes.
2. `routes` - This directory contains the route definitions for the application.
3. `plugins` - This directory contains the plugin definitions for the application.
4. `test` - This directory contains the test files for the application.

In this chapter we'll cover the basics of routes.

Be sure to read the [fastify-cli documentation](https://github.com/fastify/fastify-cli/blob/master/README.md)
## Run the application

Change into the `book-api` directory and install the dependencies:

```shell
> cd book-api
> npm install
```

Start the application:

```shell
> npm run dev
```

The application will start and listen on port 3000. You can test it by opening a browser
and navigating to `http://localhost:3000/`. You should see the following response:

```
{"root":true}
```

## Add a new route

NOTE: The code routes reside in the `routes` directory. 
NOTE: `app.js` is the entry point for the application. We can ignore this file for now.

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

Now the url `http://localhost:3000/time` will respond with the current time, something
like this:

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


## Exercise 1

Add a new route that responds with the current date. The path should be `/date`. The 
date should have a human readable format like `01 Jan 2021`.