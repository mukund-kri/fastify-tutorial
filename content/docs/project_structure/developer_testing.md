---
title: Developer testing
weight: 24
---

# Developer testing

## What is developer testing?

Developer testing is the process of testing software during the development process,
usually by the developers themselves. It is in the form of code that is written to
test the code that is being written. It comprises of unit tests, integration tests,
etc..


This is opposed to end-to-end testing, which is the process of testing the software
from the user's perspective. This is usually done by the QA team.

## Why is developer testing important?

Developer testing has a lot of advantages, and is universally recommended you do it in
most projects. Here is why:

- Helps developers reason about their code. This is one of the most under appreciated
  aspects of developer testing. When you write tests, you are forced to reason about
  the code you write.

- since it is code it can run in an automated way. This tends to save a lot of QA
  time.

- we make changes to our code with confidence that it will effect the other parts of
  the codebase, as the tests will pick up any issues that arise.

and many more...

## What are the different types of developer testing?

There are many different types of developer testing. Here are some of the most common
ones:

- Unit testing
- Integration testing
- End-to-end testing

### Unit testing

Unit testing is the process of testing a single unit of code. This is usually a
function, or a class. It is the most basic form of testing, and is usually the first
form of testing that developers learn.

### Integration testing

Integration testing is the process of testing how different units of code interact
with each other. This is usually done by mocking the dependencies of the code, and
then testing the code.

### End-to-end testing

End-to-end testing is the process of testing the software from the user's perspective.

## Testing for Fastify

Fastify being a more modern framework, it has a lot of support for developer testing 
built in. It built on top of the `tap` testing framework.

{{<pagebottomnav>}}