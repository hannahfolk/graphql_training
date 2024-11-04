import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query Countries($name: String) {
    countries(name: $name) {
      id
      name
    }
  }
`;

export const GET_TRIPS = gql`
  query Trips {
    trips {
      id
      destination
      numTravelers
      travelers {
        name
      }
      countries {
        name
      }
      rate
    }
  }
`;

export const GET_BOOKS = gql`
  query Books($title: String) {
    books(title: $title) {
      id
      title
      pages
    }
  }
`;
