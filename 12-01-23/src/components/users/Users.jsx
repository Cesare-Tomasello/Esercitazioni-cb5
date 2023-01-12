import React from "react";
import useFetch from "../usefetch/Usefetch";
const URL = "https://random-data-api.com/api/v2/users";

function Beers() {
  const { data, error, loading, refetch } = useFetch(URL);

  if (loading) return <h1 className="loading">Loading</h1>;
  if (error) return "Error";

  return (
    <div className="container">
      <h1>
        Name & Surname --- {data?.first_name} {data?.last_name}
      </h1>
      <h3>
        Address --- {data?.address.city} - {data?.address.state}
      </h3>
      <h2>Country --- {data?.address.country}</h2>
      <button onClick={refetch}>Refresh</button>
    </div>
  );
}

export default Beers;
