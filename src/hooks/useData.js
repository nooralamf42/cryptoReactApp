import axios from "axios";
import { useEffect, useState } from "react";
const API = '5YvgJt8TPbNZoHFgP8rhUg==Q7QeIklHj019il7q'

export default function useData(getAll) {
  let [currency, setCurrency] = useState("adausdt");

  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState({})
  async function getPrice() {
    setLoading(true)
    const url2 = `https://api.api-ninjas.com/v1/cryptoprice?symbol=${currency}`;
    const url1 = 'http://api.coinlayer.com/live?access_key=d68745a8a41a61b7ea5a1fb184d36fbe'
    let response = await axios({
      url: getAll? url1 : url2,
      method: 'get',
      headers: getAll? {
        "Content-Type": "application/json"
      } : {
        "X-Api-Key": API,
        "Content-Type": "application/json"
      }
    });
    let data = await response.data
    setApiData(data)
    setLoading(false)
  };
  useEffect(()=>{
    getPrice()
  }, [])

  return {getPrice, loading, apiData, setCurrency, currency}
}
