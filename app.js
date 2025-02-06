const express = require("express");
const userRoutes = require("./routes/users");
const cardRoutes = require("./routes/cards");
//const fs = require("fs");
//const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//root
app.get("/", (req, res) => {
  res.send("It works!");
});

app.use("/users", userRoutes);
app.use("/cards", cardRoutes);

// not existing routes
app.use((req, res) => {
  res.status(404).json({ message: "Page not found" });
});

//start server
app.listen(PORT, () => {
  console.log("Server listening");
});
