const express = require("express");
const router = express.Router();
const fsPromises = require("node:fs/promises");
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
  fsPromises
    .readFile(path.join(__dirname, "../data/users.json"))
    .then((data) => {
      const users = JSON.parse(data);
      res.send(users);
    });
});

// router.get("/", (req, res) => {
//   res.json(users);
// });

router.get("/:id", (req, res) => {
  const users = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "data", "users.json"))
  );

  const { id } = req.params;
  //console.log("user w/id");

  //const users = JSON.parse(data);
  const user = users.find((user) => user._id === id);

  if (!user) {
    return res.status(404).send({
      message: "User not found",
    });
  }
  res.send({
    user,
  });
});

// router.post("/", (req, res) => {
//   const { name, age } = req.body;

//   if (!name || !age) {
//     massage: "Name & age required";
//   }

//   const newUser = {
//     id: user.lenght + 1,
//     name,
//     age,
//   };
//   res.status(201).send({
//     message: "User created",
//   });
// });

module.exports = router;
