module.exports = (connex, Sequelize) => {
  const Package = connex.define("package", {
    destination: {
      type: Sequelize.STRING,
    },
    country: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.REAL,
    },
    description: {
      type: Sequelize.STRING,
    },
    agency: {
      name: {
        type: Sequelize.STRING,
      },
      contactEmail: {
        type: Sequelize.STRING,
      },
      companyDescription: {
        type: Sequelize.STRING,
      },
    },
  });
  return Package;
};
