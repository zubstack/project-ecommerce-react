import { useEffect } from "react";
import { useState } from "react";

const useFetch = (urlApi) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlApi);
        const item = await response.json();
        setData(item);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return data;
};

export default useFetch;
