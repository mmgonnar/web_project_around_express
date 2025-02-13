const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/users");
const cardRoutes = require("./routes/cards");

const app = express();
const PORT = process.env.PORT || 3000;

const mongose = require("mongoose");

const dataBase = "mongodb://localhost:27017/aroundb";
// 4 cors
const settings = {
  origin: "https:localhost/3000",
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type",
};

mongoose.connect(dataBase, {});
//Cors Middleware
app.use(cors(settings));
//Middleware to parse JSON
app.use(express.json());
//Middleware to get info
app.use((req, res) => {
  console.log(`${new Date().toLocaleString()}, ${req.method}, ${req.url}`);
});

//root
app.get("/", (req, res) => {
  res.send("It works!");
});

app.use("/users", userRoutes);
app.use("/cards", cardRoutes);

// not existing routes
app.use((req, res) => {
  res.status(404).json({ message: "Page not found" });
});

//start server
app.listen(PORT, () => {
  console.log("Server listening");
});
