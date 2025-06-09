module.exports = (connex, Sequelize) => {
  const Agency = connex.define("agency", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    contactEmail: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    companyDescription: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  });
  return Agency;
};
