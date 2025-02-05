const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
//load data
const users = JSON.parse(fs.readFileSync(path.join(__dirname, "users.json")));
const cards = JSON.parse(fs.readFileSync(path.join(__dirname, "cards.json")));
//route 4 users
app.get("/users", (req, res) => {
  res.jnson(users);
});
//route 4 cards
app.get("/users", (req, res) => {
  res.jnson(cards);
});

app.get("/users/id", (req, res) => {
  const userID = "";
  const user = "";
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404).json({ message: "ID not found" });
  }
});

app.use.apply((req, res) => {
  res.status(404).json({ message: "Resource not found" });
});

app.get("/", (req, res) => {
  res.send("It works!");
});

app.listen(PORT, () => {
  console.log("Server listening");
});
