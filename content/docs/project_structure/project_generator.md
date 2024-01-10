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





{{<pagebottomnav>}}