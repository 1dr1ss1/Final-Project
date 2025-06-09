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
      console.log(`Found ${data.length} packages`);
      console.log(
        "First package:",
        data[0] ? JSON.stringify(data[0], null, 2) : "No packages found"
      );
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Error has occured",
      });
    });
};

// Get single package
exports.findOne = (req, res) => {
  const id = req.params.id;

  Package.findByPk(id, {
    include: [
      {
        model: Agency,
        as: "agency",
      },
    ],
  })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Package with id=${id}`,
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: "Error retrieving Package with id=" + id,
      });
    });
};
