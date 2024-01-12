---
title: Testing Routes
date: 2023-03-28
weight: 25
---


## Todo
1. Fullcode

# Testing Routes in fastify

This falls into the category of integration testing. And is the most common form of
test you will write while developing a Fastify applications.

The caveat here is the REST only make sense on a HTTP server, so we need to "run" our
code in a HTTP server to test it. This is where the `fastify.inject()` method comes in.
This way we can simulate HTTP calls to our application, and test the responses.

## fastify.inject()

We can test our routes using the `fastify.inject()` method. This method fakes HTTP 
calls to our application, and returns the response. This is a very powerful method
that allows us to test our routes in a very flexible way.

Let's see how it works.

When we generated a new fastify project in the previous section, we got a file `root.js`
in the `routes` directory. This corresponds to the root route `/` of our application.

What we also got is a file `root.test.js` in the `test` directory. The code in this file:

```js
import { test } from 'tap'
import { build } from '../helper.js'

test('default root route', async (t) => {
  const app = await build(t)

  const res = await app.inject({
    url: '/'
  })
  t.same(JSON.parse(res.payload), { root: true })
})
```

**Notes:**

1. By default fastify uses the `tap` testing framework. Learn more about it [here](https://node-tap.org/).

2. The `build` function is a helper function that is provided by fastify. It is used to
   build the application, and return it. This is the function that we will use to test
   our routes.

3. The `app.inject()` method is the method that we use to simulate HTTP calls to our
    application. It takes an object as an argument, and returns a response object.

4. We test against the response object, as it was returned by a HTTP server.


## Testing the greet route

Now let's build test for our greet route. We have two endpoints in this route:

1. GET `/greet` - This endpoint returns a generic greeting.
2. POST `/greet` - This endpoint returns a greeting for the name provided in the POST body.

So we need at least two tests for this route. Let's write them.

```js
// Test 1: GET /greet
test('GET /greet', async (t) => {
    const app = await build(t)

    const res = await app.inject({
        url: '/greet'
    })

    // Check for 200 OK status code
    t.equal(res.statusCode, 200)

    // Check if the response is correct
    t.same(JSON.parse(res.payload), { message: 'Hello from Fastify!' })
})


// Test 2: POST /greet
test('POST /greet', async (t) => {
    const app = await build(t)

    const res = await app.inject({
        method: 'POST',
        url: '/greet',
        payload: { name: 'World' }
    })

    // Check for 200 OK status code
    t.equal(res.statusCode, 200)

    // Check if the response is correct
    t.same(JSON.parse(res.payload), { message: 'Hello, World!' })
})
```

That's the basics of developer testing in fastify. We'll get to more real world examples
in the "Testing REST APIs" section.


{{<pagebottomnav>}}