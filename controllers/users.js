const User = require("../models/user");

const getUsers = async (req, res) => {
  console.log("get users");
  try {
    const users = await User.find();
    res.json(users);
    //res.send({ data: users });
  } catch (err) {
    res.status(500).json({ message: err.message });
    //res.status(500).send({ message: 'Error'})
  }
};

const getUserById = async (req, res) => {
  console.log("GET /users/" + req.params.userId);
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createUser = async (req, res) => {
  const { name, about, avatar } = req.body;
  const newUser = new User({
    name,
    about,
    avatar,
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getUsers, getUserById, createUser };
