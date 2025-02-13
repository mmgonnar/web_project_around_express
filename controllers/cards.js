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

const deleteCard = async () => {};

module.exports = { getCards, getCardById, deleteCard };
