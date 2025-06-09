module.exports = (app) => {
  const packages = require("../controllers/package.controller.js");
  const router = require("express").Router();

  // Create a new package
  router.post("/", packages.create);
  // get all packages
  router.get("/", packages.findAll);

  // get single package
  router.get("/:id", packages.findOne);

  // delete package
  router.delete("/:id", packages.delete);

  app.use("/api/packages", router);
};
