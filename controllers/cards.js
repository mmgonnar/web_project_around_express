const Card = require("../models/card");

const getCards = async (req, res) => {
  try {
    const cards = await Card.find().orFail(new Error("document not found"));
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCardById = async (req, res) => {
  try {
    const card = await Card.findById(req.params.cardId).orFail(
      new Error("No card with that id has been found.")
    );
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.json(card);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const newCard = async (req, res) => {
  const { name, link } = req.body;

  const newCard = new Card({
    name,
    link,
    owner: req.user._id,
  });

  if (!name || !link) {
    return res.status(400).json({ message: "Name & link required" });
  }

  try {
    const savedCard = await newCard.save();
    res.status(201).json(savedCard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteCard = async (req, res) => {
  try {
    const card = await Card.findByIdDelete(req.params.cardId).orFail(
      new Error("document not found")
    );
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.json({ message: "Card deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getCards, getCardById, newCard, deleteCard };
