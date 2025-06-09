const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const app = express();
const db = require("./app/models");

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Middleware
const corsOptions = {
  origin: "http://localhost:5170",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Serve static files from uploads directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// force sync database
db.sequelize.sync({ force: false }).then(() => {
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
