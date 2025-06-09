const db = require("../models");
const Package = db.packages;
const Agency = db.agencies;
const multer = require("multer");
const path = require("path");

// Configuring multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../uploads/"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
}).single("image");

// Create new package
exports.create = async (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      console.error("Upload error:", err);
      return res.status(400).send({
        message: "Error uploading file: " + err.message,
      });
    }
    try {
      console.log("Request body:", req.body);
      console.log("Request file:", req.file);

      // First, create or find the agency
      const [agency, created] = await Agency.findOrCreate({
        where: { contactEmail: req.body.agency.contactEmail },
        defaults: {
          name: req.body.agency.name,
          contactEmail: req.body.agency.contactEmail,
          companyDescription: req.body.agency.companyDescription,
        },
      });
      // Then create the package with the agency ID
      const package = await Package.create({
        destination: req.body.destination,
        country: req.body.country,
        price: req.body.price,
        description: req.body.description,
        image: req.file ? `/uploads/${req.file.filename}` : null,
        agencyId: agency.id,
      });
      // Return the created package with its agency
      const createdPackage = await Package.findByPk(package.id, {
        include: [
          {
            model: Agency,
            as: "agency",
          },
        ],
      });

      res.status(201).send(createdPackage);
    } catch (error) {
      console.error("Error creating package:", error);
      res.status(500).send({
        message:
          error.message || "Some error occurred while creating the package.",
      });
    }
  });
};

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

// Delete a package
exports.delete = (req, res) => {
  const id = req.params.id;

  Package.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Package was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Package with id=${id}. Maybe Package was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Package with id=" + id,
      });
    });
};
