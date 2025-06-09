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

  Agency.associate = (models) => {
    Agency.hasMany(models.packages, {
      foreignKey: "agencyId",
      as: "packages",
    });
  };
  return Agency;
};
