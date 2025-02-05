const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
//load data
//const users = JSON.parse(fs.readFileSync(path.join(__dirname, "users.json")));
//const cards = JSON.parse(fs.readFileSync(path.join(__dirname, "cards.json")));

const userRoutes = require("./routes/users");
//app.use("/users");

app.get("/users", userRoutes);
//route 4 cards
//app.get("/cards");

// app.get("/users/id", (req, res) => {
//   console.log(req);
//   const userID = "";
//   const user = "";
//   if (user) {
//     res.json(user);
//   } else {
//     res.sendStatus(404).json({ message: "ID not found" });
//   }
// });

//root
app.get("/", (req, res) => {
  res.send("It works!");
});

// not existing routes
app.use((req, res) => {
  res.status(404).json({ message: "Resource not found" });
});

//start server
app.listen(PORT, () => {
  console.log("Server listening");
});
