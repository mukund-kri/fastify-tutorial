---
title: Validation
weight: 35
---

# Data validation

In a web API application, data both comes in and goes out. We obviously have to
be more careful about the data that comes in, as we someone else is sending it to
us. We have to make sure that the data is valid, and that it is in the format that
we expect etc. 

We don't have to be as careful about the data that goes out, as we are the ones 
sending it. But, it is still a good idea to make sure that the data is in the format
that we expect, more a sanity check.

Fastify has a built in json schema validator. This can be used to validate both
incoming and outgoing json data.

By default we `JSON Schema Draft 7` to specify our schemas. So we'll use JSON to
specify our schemas (format of data).


## URL validation

Let's explore the case of `GET /books/:isbn` route. 

The **ISBN** format is universal and well defined, so is a good candidate for 
validation to catch bad data from entering our system.

Looking at the wikipedia page for [ISBN](https://en.wikipedia.org/wiki/International_Standard_Book_Number)
it is well defined, but is pretty complex. We'll use a simplified version to make
development easier.

The simplified version is as follows:
1. ISBN-10: 10 digits

That's it. We'll tackle more complex cases in the exercises.

The most ergonomic way to validate the ISBN is to use a regular expression. If you 
don't how to write regular expressions, STOP EVERYTHING and go learn it.

The regular expression for ISBN-10 is: `^\d{10}$`. So in the schema we'll write:

```js

const isbnSchema = {
  params: {
    type: 'object',
    properties: {
      isbn: { type: 'string', pattern: '^[0-9]{10}$' }
    }
  }
}

```

Error message:

```js
{"statusCode":400,"code":"FST_ERR_VALIDATION","error":"Bad Request","message":"params/isbn must match pattern \"^[0-9]{10}$\""}
```

## Data (JSON) validation


TODO

## Others


Though we use only the url and json Validation, the schema validator can also be used 
to validate headers, query parameters, and pretty much everything coming in and going 
out of our API. Please refer to the [Fastify documentation](https://www.fastify.io/docs/latest/Validation-and-Serialization/) for the rest. 


## Exercise 1

New rule for ISBN validation:
1. 10 digits
2. optional hyphens after the 1st, 5th, and 9th digits
3. 10th digit can be a number or an X 


{{<pagebottomnav>}}