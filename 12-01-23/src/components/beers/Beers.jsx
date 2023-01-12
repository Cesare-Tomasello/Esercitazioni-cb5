import React from "react";
import useFetch from "../usefetch/Usefetch";
const URL = "https://random-data-api.com/api/v2/beers";

function Beers() {
  const { data, error, loading, refetch } = useFetch(URL);

  if (loading) return <h1 className="loading">Loading</h1>;
  if (error) return "Error";

  return (
    <div className="container">
      <h1>Beer Brand --- {data?.brand}</h1>
      <h3>Beer Name --- {data?.name}</h3>
      <h2>Alcohol Percentage --- {data?.alcohol}</h2>
      <button onClick={refetch}>Refresh</button>
    </div>
  );
}

export default Beers;
