const express = require("express");
const router = express.Router();

const {
  getCards,
  getCardById,
  createCard,
  deleteCard,
  addLike,
  removeLike,
} = require("../controllers/cards");

router.get("/cards", getCards);
router.get("/cards/:cardsId", getCardById);
router.post("/cards", createCard);
router.delete("/cards", deleteCard);
router.patch("/cards/:cardId/likes", addLike);
router.delete("/cards/:cardId/likes", removeLike);

module.exports = router;
