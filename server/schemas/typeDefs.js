const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    id: ID!
    title: String
    pages: Int
  }

  type Author {
    id: ID!
    name: String
    numBooksPublished: Int
    books: [Book]
  }

  type Trip {
    id: ID!
    countries: [Country]
    destination: String
    numTravelers: Int
    rate: Float
    travelers: [Traveler]
  }

  type Traveler {
    id: ID!
    name: String
  }

  type Country {
    id: ID!
    name: String
  }

  type Mutation {
    createCountry(name: String!): Country
    updateCountry(id: ID!, name: String!): Country
    deleteCountry(id: ID!): [Country]
  }

  type Query {
    books(title: String): [Book]
    authors: [Author]
    trips: [Trip]
    travelers: [Traveler]
    countries(name: String): [Country]
  }
`;

module.exports = typeDefs;
