import React from "react";
import { useState, useEffect } from "react";

function useFetch(urlToFetch) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setData(null);
    setError(null);
    setLoading(true);

    try {
      const data = await fetch(urlToFetch).then((r) => r.json());
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    error,
    loading,
    refetch: fetchData,
  };
}

export default useFetch;
