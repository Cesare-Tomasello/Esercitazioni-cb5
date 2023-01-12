import React from "react";
import useFetch from "../usefetch/Usefetch";
const URL = "https://random-data-api.com/api/v2/credit_cards";

function Beers() {
  const { data, error, loading, refetch } = useFetch(URL);

  if (loading) return <h1 className="loading">Loading</h1>;
  if (error) return "Error";

  return (
    <div className="container">
      <h1>Card ID --- {data?.id}</h1>
      <h3>Card Number --- {data?.credit_card_number}</h3>
      <h2>Expire Date --- {data?.credit_card_expiry_date}</h2>
      <button onClick={refetch}>Refresh</button>
    </div>
  );
}

export default Beers;
