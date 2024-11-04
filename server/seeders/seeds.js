const faker = require("faker");
const db = require("../config/connection.js");
const { Book } = require("../models");
const Country = require("../models/Country.js");

db.once("open", async () => {
  await Book.deleteMany({});

  const dbLibrary = [];

  for (let i = 0; i < 30; i++) {
    const title = faker.company.catchPhrase();
    const pages = faker.datatype.number();

    dbLibrary.push({
      title,
      author,
      pages,
    });
  }

  await Book.insertMany(dbLibrary);

  console.log("faker has complete data migration");
  console.table(dbLibrary);
  process.exit();
});
