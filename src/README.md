# Mock API Implementation details

The mock API uses [json-server](https://github.com/typicode/json-server) as a base to create an API that can mimic our production API.

There are certain things that have been changed so that we can use the JSON API format for all requests.
Please see the comments inside the index.js file.

## Authentication - IGNORE

### TODO: This is temporarily disabled, due to a bug in the mock implementation with dealing with wildcard routes

By default this mock API supports a very rudimentary form of Authentication.
It only checks if the JWT contains the correct authorizations claims to access a route.

You can define the required authorizations for which routes inside the [auth-route.json file](./auth/auth-route.json).

The format of this is similar to how the Authoriser maps routes and authorizations.

```JSON
{
    "/route": ["route.access"]
}
```
