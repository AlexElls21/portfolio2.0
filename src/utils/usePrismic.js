import { useEffect, useState } from "react";
import Prismic from "prismic-javascript";

import PrismicConfig from "../prismic.config";

const usePrismic = query => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFromPrismic = async () => {
      try {
        setLoading(true);
        const api = await Prismic.getApi(PrismicConfig.apiEndpoint);
        const result = await api.query(query);
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFromPrismic();
  }, [query]);

  return { data, loading, error };
};

export default usePrismic;
