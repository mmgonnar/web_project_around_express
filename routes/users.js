const express = require("express");
const router = express.Router();
//const fsPromises = require("node:fs/promises");
//const fs = require("fs");
//const path = require("path");

const {
  getUsers,
  getUserById,
  createUser,
  updateProfile,
} = require("../controllers/users");

// router.get("/", (req, res) => {
//   fsPromises
//     .readFile(path.join(__dirname, "../data/users.json"))
//     .then((data) => {
//       const users = JSON.parse(data);
//       res.send(users);
//     });
// });
router.get("/users", getUsers);
router.get("/users/:userId", getUserById);
router.post("/users", createUser);
router.patch("/users", updateProfile);

// router.get("/:id", (req, res) => {
//   const users = JSON.parse(
//     fs.readFileSync(path.join(__dirname, "..", "data", "users.json"))
//   );

//   const { id } = req.params;

//   const user = users.find((user) => user._id === id);

//   if (!user) {
//     return res.status(404).send({
//       message: "User not found",
//     });
//   }
//   res.send({
//     user,
//   });
// });

module.exports = router;
