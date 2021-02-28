// Step 1: require express
const express = require("express");

// Step 2: Create an instance of expressjs
const app = express();

const port = 8080;
// Step 3: Handling primary route
app.get("/", function (request, response) {
  response.send("Backend apis");
});

// Step 4: Start the server on a port
app.listen(8080, function () {
  console.log("local server started on localhost");
});
