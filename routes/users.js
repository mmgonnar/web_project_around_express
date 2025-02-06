const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const users = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/users.json"))
);
console.log(users);

// let users;
// try {
//     users = JSON.parse(fs.readFileSync(path.join(__dirname, '../users.json')));
//     console.log("Usuarios cargados:", users); // Verifica que los usuarios se carguen correctamente
// } catch (error) {
//     console.error("Error al cargar el archivo users.json:", error);
// }

router.get("/", (req, res) => {
  console.log("X");
  res.json(users);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log("user w/id");
  const user = users.find((user) => user._id === parseInt(id));

  if (!user) {
    res.status(404).send({
      message: "User not found",
    });
  }
  res.send({
    user,
  });
});

router.post("/", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    massage: "Name & age required";
  }

  const newUser = {
    id: user.lenght + 1,
    name,
    age,
  };
  res.status(201).send({
    message: "User created",
  });
});

module.exports = router;
