const express = require("express");
const graphqlHTTP = require("express-graphql");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
const schema = require("./graphql/schema");

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
);

app.listen(port, () => {
    console.log("Brown Essentials server listening on port", port);
});
