const {
  books,
  authors,
  travelers,
  trips,
  countries,
} = require("../seeders/seeds.js");

const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
    trips: () => trips,
    travelers: () => travelers,
    countries: () => countries,
  },
  Trips: {
    countries: (parent) => {
      console.log("parent");
      return countries.filter(
        (country) => country.name === parent.country.name
      );
    },
  },
};

module.exports = resolvers;
