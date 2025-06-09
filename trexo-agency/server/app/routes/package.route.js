module.exports = (app) => {
  const packages = require("../controllers/package.controller.js");
  const router = require("express").Router();
  router.get("/", packages.findAll);

  app.use("/api/packages", router);
};
