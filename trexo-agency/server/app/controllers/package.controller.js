const db = require("../models");
const Package = db.packages;

// req methods for router
exports.findAll = (req, res) => {
  Package.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Error has occured",
      });
    });
};
