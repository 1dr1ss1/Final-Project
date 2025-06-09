const db = require("../models");
const Package = db.packages;
const Agency = db.agencies;

// req methods for router
exports.findAll = (req, res) => {
  Package.findAll({
    include: [
      {
        model: Agency,
        as: "agency",
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Error has occured",
      });
    });
};
