const fs = require("fs");

/**
 * Function to read a file from local project directory
 * and send it back to client side
 * @param {*} pathString
 * @param {*} res
 */
function fruitsDataRoute(pathString, res) {
  fs.readFile(pathString, function (err, data) {
    // console.log(err, data);
    // console.log(JSON.parse(data));

    // converting buffer data in JSON object
    const dataFromFile = JSON.parse(data);
    console.log(dataFromFile.results);
    // send data back to client end
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(dataFromFile));
    res.end();
  });
}

module.exports.fruitsDataRoute = fruitsDataRoute;
