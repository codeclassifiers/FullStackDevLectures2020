// Step 1: Import http module
const http = require("http");

// Step 2:creation of http server
http
  .createServer(function (request, response) {
    console.log("server started successfully");
    // Step 3: Set the header
    response.setHeader("Content-Type", "application/json");
    const data = {
      characterName: "Captain America",
      movie: "Captain America: The First Avenger",
    };
    const dataIntoString = JSON.stringify(data);
    // Step 4: Send the data using response.write
    response.write(dataIntoString);
    response.end();
  })
  .listen(8080);

// const data = { characterName: "Captain America" };
// const dataIntoString = JSON.stringify(data);
// console.log("type of data variable", typeof data);
// console.log("type of dataIntoString variable", typeof dataIntoString);

// console.log(dataIntoString);
