import { useQuery } from "@apollo/client";

import { GET_TRIPS } from "../graphQL/queries";

import Loader from "./loaders/Loader";

const Trips = () => {
  const { loading, error, data } = useQuery(GET_TRIPS);

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  if (!data) return <p>No data</p>;

  return (
    <div>
      <h1>Trips</h1>

      <div>
        {data?.trips.map((trip) => (
          <div key={trip.id}>
            <h4>{trip.destination}</h4>
            <p>Rate: ${trip.rate}</p>
            <p>Country: {trip.countries[0].name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trips;
