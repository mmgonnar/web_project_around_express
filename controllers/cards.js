const Card = require("../models/card");

const getCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCardById = async (req, res) => {
  try {
    const card = await Card.findById(req.params.cardId);
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.json(card);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const newCard = async (req, res) => {
  const { title, description } = req.body;
  const newCard = new Card({
    title,
    description,
  });

  try {
    const savedCard = await newCard.save();
    res.status(201).json(savedCard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.cardId);
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
  } catch (err) {}
};

module.exports = { getCards, getCardById, newCard, deleteCard };
