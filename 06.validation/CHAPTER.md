# Data validation

In a web API application, data both comes in and goes out. We obviously have to
be more careful about the data that comes in, as we someone else is sending it to
us. We have to make sure that the data is valid, and that it is in the format that
we expect etc. 

We don't have to be as careful about the data that goes out, as we are the ones 
sending it. But, it is still a good idea to make sure that the data is in the format
that we expect, more a sanity check.

## Data (JSON) validation

Fastify has a built in json schema validator. This can be used to validate both
incoming and outgoing json data.

By default we `JSON Schema Draft 7` to specify our schemas.

