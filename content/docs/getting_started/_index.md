---
weight: 10
title: Getting started
---

# Getting started

In this section we create a fully functional web server in one file, with a few lines
of code. It won't do much, just return "hello world". But it will be a good starting
point for our journey.

## Pre-requisites

1. A fairly recent node install (version 14 and above)
2. npm, which pretty much comes bundled with node

**Note:** we use Linux exclusively in our boot-camps, so the commands through out this
tutorial are Linux. Your milage may vary for other OSes.

## Installation

```
npm install fastify
```

## fastify hello world

Let's start with a trivial example, the *hello world* of fastify. Create a file
called `hello-fastify.js` and add the following code to it.

```js
import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
```

You can run this minimal server with the following command ...

```shell
> node hello-fastify.js
```

Then, just point your browser to the url - http://localhost:3000/

The above code exposes a single url "/" an this returns a very simple json.

```json
{"message":"hello world"}
```


## How the hell did the browser get a JSON?

This requires a bit of explanation. We'll cover the `http architecture` in class. This
is going to be the core of your knowledge in developing web applications. 
 
## Exercise

Add anther *route* `/bye' that returns the following json.

```json
{"message": "Good bye world"}
```

{{<pagebottomnav>}}