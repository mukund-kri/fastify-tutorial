// The classic "Hello World" example with Fastify
// Note: This example uses ESM syntax, which is supported in Node.js 12+
// Note: In this code we use the async/await syntax. 

// Import Fastify (ESM)
import Fastify from 'fastify'
const fastify = Fastify({ logger: true })

// Declare a route :: Connect a path to a function
fastify.get('/', async (request, reply) => {
    return { message: 'hello world' }
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()