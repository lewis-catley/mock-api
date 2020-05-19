# Mocking API's to decouple UI and API development.

## Why?

One of the big issues with developing against micro services.
Is that it's not feesable to wait on API's to be fully developed before you can work on the UI side of an application.

This wiki is here to provide an example of how you can spin up mock API's to help prevent UI development slowdown.

**NOTE:** This is only a Mock API it does not contain all features that a real API will contain. At some point in the development process the actual API and UI should be tested/validated together.

## What?

The current tool of choice for mocking an API is to use the NPM pakcage [json-server](https://github.com/typicode/json-server).
This has many benefits some being:

- It uses the same technologies that we will be using for UI development. Node + JS.
- It's incredibly quick and easy to spin up a local server.
- It can be run headless to help with other tests in CI environments.
- With other NPM packages such as [casual](https://www.npmjs.com/package/casual) we can quickly spin up as much mock data we could need.

## Run

To run this API first clone locally, run `npm i` and finally `npm run start`.

The API should now be running at `localhost:3001` to make sure it is working navigate to `localhost:3001/cars` in your browser and you should be presented with some data.
You can also naviage to `GET /cars/:id` to get a specific car record.

Using a tool such as POSTMAN, you will now be able to send a `PATCH /cars/:id` to update a car record. Or even send a `POST /cars` with an object to create a new car record. All changes will be saved to the db.json file so the data will be retained.

## Future Work:

- [ ] Add API slow down, to demonstrate UI loading elements.
- [ ] Example of basic body validation.
- [ ] Convert mock API to an NPM package for easier consumption.
- [ ] Investigate how wildcard routing could work.
- [ ] Implement rudimentary Authorisation.
- [ ] Enforce a stricter implementation of JSONAPI.
