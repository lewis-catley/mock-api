# Mock Data Implementation Details

The current mock data implementation is fairly simple and creates some javascript objects which is then converted to json and stored in a db.json file.

To create unique and different data it implements an npm package called [casual](https://www.npmjs.com/package/casual).

To generate the mock data you can run the command `npm run presstart`. However it is also generated when running the mock API by default which command is `npm run start`.
