const { error } = require("console");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
  try {
    const cards = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/cards.json"))
    );
    res.json(cards);
  } catch (error) {
    return res.status(500).send({
      message: "Internal server error",
    });
  }
});

//cards by id
router.get("/:id", (req, res) => {
  const cards = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/cards.json"))
  );
  const { id } = req.params;
  const card = cards.find((card) => card._id === id);

  if (!card) {
    return res.status(404).send({
      message: "Card not found",
    });
  }
  res.send({
    card,
  });
});

module.exports = router;
