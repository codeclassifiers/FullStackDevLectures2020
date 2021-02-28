// Step 1: Import HTTP and URL module
const http = require("http");
const url = require("url");
const areaOfCircleFile = require("./routes/areaOfCircle");
const areaOfTriangleFile = require("./routes/areaOfTriangle");
const fruitsDataFile = require("./routes/fruitsData");
// create server function
http
  .createServer(function (req, res) {
    // path variables
    const path = req.url;

    // query params from path
    const queryParamsObject = url.parse(path, true).query;

    // creating routes
    if (path.includes("calculateAreaOfCircle")) {
      const radius = queryParamsObject.radius;
      areaOfCircleFile.areaOfCircleRoute(radius, res);
    } else if (path.includes("calculateAreaOfTriangle")) {
      const base = queryParamsObject.base;
      const height = queryParamsObject.height;
      console.log("base and height is: ", base, height);
      areaOfTriangleFile.areaOfTriangle(base, height, res);
    } else if (path.includes("fruitsData")) {
      // address of JSON file
      const pathString = `${__dirname}/data/fruitsData.json`;
      //   console.log(pathString);
      fruitsDataFile.fruitsDataRoute(pathString, res);
      // read a file from local project directory
    } else {
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>Hello World<h1>");
      res.write("<h2>Site description</h2>");
      res.end();
    }
  })
  .listen(8080);
