const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
// Connecting the client with the server
const corsOptions = {
  origin: "https://localhost:5175",
};

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(8081, () => {
  console.log("Server at post: " + 8081);
});
