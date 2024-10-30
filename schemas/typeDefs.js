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

  type Trips {
    trips: [Trip]
    countries: [Country]
  }

  type Traveler {
    id: ID!
    name: String
  }

  type Country {
    id: ID!
    name: String
  }

  type Query {
    books: [Book]
    authors: [Author]
    trips: [Trip]
    travelers: [Traveler]
    countries: [Country]
  }
`;

module.exports = typeDefs;
