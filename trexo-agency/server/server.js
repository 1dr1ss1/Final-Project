const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./app/models");

// // Simple database test
// db.connex.sync();

// Middleware
const corsOptions = {
  origin: "https://localhost:5170",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// force sync database
db.sequelize.sync().then(() => {
  console.log("Database synced");
});

// routes
require("./app/routes/package.route")(app);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(8081, () => {
  console.log("Server at port: " + 8081);
});
