## Brewman Web - API - BETA

** The API schema and documentation is in beta and subject to change until final release. We may make changes to API 
definitions that could cause client code to break. We will inform all customers via our ApiUsers chat room if this is 
likely.**

This repository contains the necessary resources and information to make API requests to the Brewman brewery and 
distillery management web product.

*Note. This API is not for the Brewman 6 desktop application.*

### Overview
You must use the [gRPC](https://grpc.io/) protocol to make requests to the Brewman API. gRPC has wide range support for 
many platforms including (but not limited to):
- .NET
- NodeJS
- Java
- Go
- Python

Typically, you will need to compile our service proto files into a client library targeting your platform of choice. 
The instructions for doing so vary by platform. We have provided generated client libraries for some frameworks in the 
`./generated` folder. Please see `tools/Dockerfile` for some tips on how to generate code for other platforms.

#### Authentication
The API is designed to make requests as a Brewman user. We recommend creating a user in Brewman specifically for your 
API so you able to see in the web application what entities are created/updated by the API.

You need to generate a token from within the user administration pages of the Brewman application. The generated token
needs to be supplied on every API request as metadata on a key called `API_TOKEN`.

### Documentation
Our proto files contain some documentation. Our plan is to improve the documentation over time - especially on our most 
critical services. We recommend looking at our NodeJS unit test that creates an order as a starting point for making
your own requests.

We will also shortly be publishing documentation to a web portal.

### Rate Limiting / Pricing
This API has been requested by our customers to help with some back office tasks and performing ecommerce integrations. 
We do not expect a heavy load from API requests, as such we do not currently anticipate the requirement for any rate 
limiting or passing any increased hosting costs to our customers.

API requests also do not currently occupy a concurrent license and will not prevent real users logging in.

### Support
While in BETA, support is limited to best-effort. Please contact support for details on joining our BETA testing program.
