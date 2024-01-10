---
title: Testing Routes
date: 2023-03-28
weight: 25
---

# Testing Routes in fastify

This fall into the category of integration testing. And is the most common form of
test you will write while developing a Fastify applications.

The caveat here is the REST only make sense on a HTTP server, so we need to "run" our
code in a HTTP server to test it. This is where the `fastify.inject()` method comes in.
This way we can simulate HTTP calls to our application, and test the responses.

### fastify.inject()

We can test our routes using the `fastify.inject()` method. This method fakes HTTP 
calls to our application, and returns the response. This is a very powerful method
that allows us to test our routes in a very flexible way.

Let's see how it works.

The example code in this chapter will use a simple fastify application this is 
coded in three files:

- app.js - the main application file
- server.js - takes care of running the application
- app.test.js - takes care of testing the application

In the next chapter, we will see how testing is done with a `fastify-cli` generated
project.

```js
```
{{<pagebottomnav>}}