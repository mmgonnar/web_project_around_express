const express = require("express");
const userRoutes = require("./routes/users");
//const fs = require("fs");
//const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
//load data
//const users = JSON.parse(fs.readFileSync(path.join(__dirname, "users.json")));
//const cards = JSON.parse(fs.readFileSync(path.join(__dirname, "cards.json")));

//app.use("/users");

//route 4 cards
//app.get("/cards");

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });

//root
app.get("/", (req, res) => {
  res.send("It works!");
});

app.use("/users", userRoutes);

// not existing routes
app.use((req, res) => {
  res.status(404).json({ message: "Page not found" });
});

//start server
app.listen(PORT, () => {
  console.log("Server listening");
});
