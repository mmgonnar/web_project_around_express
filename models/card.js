const mongoose = require("mongoose");
const validator = required("validator");

const cardSchema = new mongoose.Schema({
  nname: {
    type: String,
    required: [true, "Name required"],
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator: (str) => {
        return validator.isURL(str);
      },
      message: "Invalid url",
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "owner",
    required: true,
  },
});

// name: nombre de la tarjeta, string de 2 a 30 caracteres, campo obligatorio.
// link: enlace a la imagen, string, campo obligatorio. Utiliza la expresión regular del esquema user para validar los datos de entrada.
// owner: enlace al modelo del autor de la tarjeta, tipo ObjectId, campo obligatorio.
// likes: una lista de usuarios que dieron like a la publicación, un array ObjectId, un array vacío por defecto (default field)
// createdAt: fecha de creación, tipo Date, valor por defecto Date.now
