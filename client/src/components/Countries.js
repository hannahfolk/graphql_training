import { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import { GET_COUNTRIES } from "../graphQL/queries";
import { CREATE_COUNTRY } from "../graphQL/mutations";

import Loader from "./loaders/Loader";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [countryInput, setCountryInput] = useState("");
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const [createCountry] = useMutation(CREATE_COUNTRY);

  // const countries = data?.countries || []
  useEffect(() => {
    if (data) setCountries(data.countries);
  }, [countries]);

  console.log(loading);
  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  const handleInputChange = (event) => {
    const { value } = event.target;

    setCountryInput(value);
  };

  const handleCreateCountry = async (event) => {
    event.preventDefault();

    const { data } = await createCountry({
      variables: {
        name: countryInput,
      },
    });

    console.log(data);
  };

  return (
    <div className="countries">
      <h1>List of Available Countries</h1>
      <div className="countries-list">
        {!!loading &&
          countries.map((country) => <h4 key={country.id}>{country.name}</h4>)}
      </div>

      <form onSubmit={handleCreateCountry}>
        <label htmlFor="add-country">Add a Country</label>
        <input
          id="add-country"
          onChange={handleInputChange}
          value={countryInput}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Countries;
