import { gql } from "@apollo/client";

export const CREATE_COUNTRY = gql`
  mutation createCountry($name: String!) {
    createCountry(name: $name) {
      name
    }
  }
`;
