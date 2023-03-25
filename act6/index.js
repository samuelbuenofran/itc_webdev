import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Working Express Server");
});

// ROUTE 1

app.get("/person", (req, res) => {
  const person = {
    name: "John Doe",
    version: 1,
    libraries: ["Express", "React"],
  };

  // Converts the person object to string type;
  const personJson = JSON.stringify(person);

  // I don't know what this does lol;
  res.setHeader("Content-Type", "application/json");

  // This sends/returns the personJson variable to the screen;
  res.send(librariesJson);
});

// ROUTE 2

app.get("/persons", (req, res) => {
    const person = {
      name: "Test-Express",
      version: 1,
      libraries: ["Express", "React"],
    };
  
    // Converts the person object to string type;
    const personJson = JSON.stringify(person);
  
    // I don't know what this does lol;
    res.setHeader("Content-Type", "application/json");
  
    // This sends/returns the personJson variable to the screen;
    res.send(librariesJson);
  });

// Simple function to add the amount of times someone accesses the route/endpoint;
let sum = 0;
app.get("/add", (req, res) => {
  sum++;
  res.send(JSON.stringify(sum));
});

app.listen(port, () => {
  console.log("App running on port " + port);
});
