const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const users = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/users.json"))
);

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/users/:id", (req, res) => {
  console.log(req);
  const userId = req.params.id;
  const user = users.find((user) => user.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404).json({ message: "ID not found" });
  }
});

module.exports = router;
