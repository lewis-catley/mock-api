const jsonServer = require("json-server");
const bodyParser = require("body-parser");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Import the DB file
const db = require("./db.json");
// Import a UUID package not really required
const { v4 } = require("uuid");

// Local imports
// TODO needs fixing
// const { isAuthorised } = require("./auth/authorization");

// DB import important to create the mock Data first
// JSON-Server can use the root keys in this file to build it's endpoints
// eg {"todo": [{....}], "user":[{...}]} will allow /todo and /user to be valid endpoints.
const router = jsonServer.router(db);

// Allows JSON-SERVER to accept JSONAPI standards
// This is an array so can be expanded to allow multiple Content-Types.
server.use([bodyParser.json({ type: "application/vnd.api+json" })]);

server.use(middlewares);

// Add this before server.use(router)
server.use(jsonServer.rewriter({}));

// Apply logic that should effect every request in this method.
// E.g. Authorization
server.use((req, resp, next) => {
  // TODO: Temp disabled due to a bug with validating against wild card routes
  // if (!isAuthorised(req.header("Authorization"), req.path)) {
  //   return resp.status(403).send("Unauthorized");
  // }

  // Always set the Content Type to the JSON API Header
  resp.setHeader("Content-Type", "application/vnd.api+json");

  // Set the request body ID to UUID. Not required as JSON Server will generate an ID just not a UUID
  if (req.method === "POST") {
    req.body.id = req.body.type + ":" + v4();
  }
  next();
});

/**
 * !!! NOTE !!!
 * If you want to capture a request and carry out custom logic
 * It's important to do it before server.use(router)
 * Otherwise your logic will be ingored.
 */
server.use(router);

server.listen(3001, () => {
  console.log("Mock Server is running on http://localhost:3001");
});
