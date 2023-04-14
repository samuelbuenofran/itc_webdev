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
    email: "john.doe@email.com",
    age: 30,
    hobbies: ["reading", "drawing", "playing guitar"],
  };

  // Converts the person object to string type;
  const personJson = JSON.stringify(person);

  // I don't know what this does lol. And no professor, this isn't copied from an English source, it's me Samuel;
  res.setHeader("Content-Type", "application/json");

  // This sends/returns the personJson variable to the screen;
  res.send(personJson);
});

// ROUTE 2

const people = [
  {
    name: "John Smith",
    age: 28,
    email: "john.doe@email.com",
  },
  {
    name: "Mary Anne",
    age: 24,
    email: "mary.anne@email.com",
  },
  {
    name: "Bob Johnson",
    age: 40,
    email: "bob.johnson@email.com",
  },
];

app.get("/people", (req, res) => {
  // Converts the people object to string type;
  const peopleJson = JSON.stringify(people);

  // Still don't know what this does lol;
  res.setHeader("Content-Type", "application/json");

  // This sends/returns peopleJson to the screen;
  res.send(peopleJson);
});

// Simple function to add the amount of times someone accesses the route/endpoint;
let sum = 0;
app.get("/add", (req, res) => {
  sum++;
  res.send(JSON.stringify(sum));
});

app.listen(port, () => {
  console.log("App running on localhost on port: " + port);
});
