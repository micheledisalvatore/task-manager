import { useCallback, useEffect, useState } from 'react';

export default (endpoint) => {
  const [result, setResult] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const getData = useCallback(async () => {
    const loading = false;
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setResult((r) => ({
        ...r,
        loading,
        data,
      }));
    } catch (error) {
      setResult((r) => ({
        ...r,
        loading,
        error: error.message,
      }));
    }
  }, [endpoint, setResult]);

  useEffect(() => {
    getData();
  }, [getData]);

  return result;
};
