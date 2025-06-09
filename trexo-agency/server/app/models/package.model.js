module.exports = (sequelize, Sequelize) => {
  const Package = sequelize.define("package", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    destination: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    agencyId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "agencies",
        key: "id",
      },
    },
  });

  return Package;
};
