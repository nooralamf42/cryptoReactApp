import axios from "axios";
import { useEffect, useState } from "react";
const API = "5YvgJt8TPbNZoHFgP8rhUg==Q7QeIklHj019il7q";

export default function useData(getAll, currencyName = "adausdt") {
  let [currency, setCurrency] = useState(getAll? {} : { name: "", price: "" });
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState({});

  async function getPrice(currency) {
    setLoading(true);
    const url2 = `https://api.api-ninjas.com/v1/cryptoprice?symbol=${currency}`;
    const url1 =
      "https://api.coincap.io/v2/assets";

     try{
      let response = await axios({
        url: getAll ? url1 : url2,
        method: "get",
        headers: getAll
          ? {
              "Content-Type": "application/json",
            }
          : {
              "X-Api-Key": API,
              "Content-Type": "application/json",
            },
      });
      let data = await response.data;
      setApiData(data);
      if(!getAll)
        setCurrency((pre) => {
          return {
            ...pre,
            name: data.symbol,
            price: data.price,
          };
        })
        else{
          setCurrency(data.data)
        }
      setLoading(false);
     }
    catch(e){
      setLoading(false)
      setApiData({error: e})
    }
  }
  useEffect(() => {
    getPrice(currencyName);
  }, []);

  return { getPrice, loading, apiData, currency, setCurrency};
}
