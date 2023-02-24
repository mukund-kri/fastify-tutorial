# Using the fastify-cli tool

Fastify-cli is a command line tool that eases developing fastify applications. Let's
explore by generating and running a basic fastify application.

## Install fastify-cli

Install the fastify-cli tool globally. This will make the `fastify` command available:

```
$> npm install --global fastify-cli
```

## Generate a basic fastify application

The fastify generate command is used to generate a new Fastify application. It creates 
a basic project structure with some starter code and a few example routes. This can 
save you time and effort when starting a new project, as you don't need to set up the 
basic file structure and configuration yourself.

Run the following command to generate a new Fastify application:


```
$> fastify generate hello --esm
```

The `--esm` flag is used to generate the project using the ESM module system. This is
generally a good idea for new projects written in es6.

A new directory called `hello` will be created. This is the root directory of the
application. The project structure will look like this:

```
hello
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

## Run the application

Change into the `hello` directory and install the dependencies:

```
$> cd hello
$> npm install
```

Start the application:

```
$> npm start
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