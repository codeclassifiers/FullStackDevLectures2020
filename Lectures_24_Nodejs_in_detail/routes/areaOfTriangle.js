function areaOfTriangle(base, height, res) {
  const areaOfTriangle = 0.5 * base * height;
  const responseObject = {
    areaOfTriangle,
  };
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(responseObject));
  res.end();
}

module.exports.areaOfTriangle = areaOfTriangle;
