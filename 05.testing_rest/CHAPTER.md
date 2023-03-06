# Testing with fastify-cli generated apps

As we covered the fastify-cli generated apps provide a structure to fastify 
applications. It is good for medium sized applications. Along with organizing routes,
plugins etc. it also provides a structure for testing.

In this chapter, we will see how testing is done with a `fastify-cli` generated
projects.

## Testing with fastify-cli generated apps

Features of fastify-cli generated apps related to testing:

1. All testing code goes in the `test` folder.
2. All test files must end with `.test.js`.
3. There is a seperate folder for route tests.
4. There is a seperate folder for plugin tests. (Not covered in this tutorial)
5. The organization of routes tests mirrors the organization of routes in the `routes` 
   folder.


## Testing books REST api

We will use the books REST api that we created in the previous chapter to test the
fastify-cli generated apps.

First let's copy the books project from the previous chapter into the current chapter
and then add tests to it.

