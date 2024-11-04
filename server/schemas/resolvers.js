const {
  books,
  authors,
  travelers,
  trips,
  countries,
} = require("../seeders/seeds2.js");
// const { Book } = require("../models");

const resolvers = {
  Query: {
    books: (parent, arg) => {
      const { title } = arg;
      if (!title) return books;
      return books.filter((book) => book.title === title);
    },
    authors: () => authors,
    trips: () => trips,
    travelers: () => travelers,
    countries: (parent, arg) => {
      const { name } = arg;
      if (!name) return countries;
      return countries.filter((country) => country.name === name);
    },
  },
  Trip: {
    countries: (parent) => {
      return countries.filter(
        (country) => country.name === parent.countries[0].name
      );
    },
  },
  Mutation: {
    createCountry: (parent, arg) => {
      const { name } = arg;
      const id = countries.length + 1;
      const newCountry = { id, name };
      countries.push(newCountry);
      return newCountry;
    },
    updateCountry: (parent, arg) => {
      const { id, name } = arg;
      const countryToUpdate = countries.find((country) => country.id == id);
      if (!countryToUpdate) return null;
      countryToUpdate.name = name;
      return countryToUpdate;
    },
    deleteCountry: (parent, arg) => {
      const { id } = arg;
      const index = countries.findIndex((country) => country.id == id);
      if (index === -1) return null;
      countries.splice(index, 1);
      return countries;
    },
  },
};

module.exports = resolvers;
