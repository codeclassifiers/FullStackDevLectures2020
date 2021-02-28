/**
 * Function to calculate area of circle
 * and send back the response to client
 * @param {*} radius
 * @param {*} res
 */
function areaOfCircleRoute(radius, res) {
  // calculate area of circle
  const areaOfCircle = Math.PI * radius * radius;
  const responseObject = {
    area: areaOfCircle,
  };
  // response object
  // header: either html Data or json data
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(responseObject));
  res.end();
}

module.exports.areaOfCircleRoute = areaOfCircleRoute;
