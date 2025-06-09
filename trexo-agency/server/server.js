const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./app/models");

// Simple database test
db.connex.sync();

require("./app/routes/package.route")(app);

const corsOptions = {
  origin: "https://localhost:5175",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(8081, () => {
  console.log("Server at post: " + 8081);
});
