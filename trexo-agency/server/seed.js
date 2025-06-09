const db = require("./app/models");
const fs = require("fs");
const path = require("path");

const seedDatabase = async () => {
  try {
    // Read JSON file
    const seedData = JSON.parse(
      fs.readFileSync(path.join((__dirname, "../pkgData.json")), "utf8")
    );

    // Sync database
    await db.sequelize.sync({ force: true });
    console.log("Database synced");

    // Create Agencies Table
    for (const packageData of seedData) {
      const agency = await db.agencies.create({
        name: packageData.agency.name,
        contactEmail: packageData.agency.contactEmail,
        companyDescription: packageData.agency.companyDescription,
      });

      // create package table
      await db.packages.create({
        destination: packageData.destination,
        country: packageData.country,
        image: packageData.country,
        price: parseFloat(packageData.price.replace(",", "")),
        description: packageData.description,
        agencyId: agency.id,
      });
    }

    console.log("Database seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
