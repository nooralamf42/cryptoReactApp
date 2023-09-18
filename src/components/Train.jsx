import React, { useEffect } from "react";
import useData from "../hooks/useData";
import "./train.css";

export default function Train() {
  let { apiData, loading, getPrice} = useData(true)

  let coinsData = []
  if(!loading){
    console.log(apiData)
    let coins = ["THETA", "BTC", "ADA", "BAT", "XRP", "TRX", "IOST", "OK", "LINK", "LTC", "MANA", "AVAX", "DASH", "DOGE", "ETH"]
    coinsData = coins.map(coin=>{
      return `${coin} : ${apiData.rates[coin]}`
    })
    console.log(coinsData)
  }
  
    return (
      <div className='w-full text-center'>{
          loading ? (
              <div className="progress w-[90%] mx-auto my-5"></div>
          ) :
          (
            <div className="relative w-full h-20 overflow-hidden">
            <div className="flex absolute gap-6 animate-train whitespace-nowrap">
              {coinsData.map((coin) => (
                <p className="text-gray-900 font-bold" key={coin}>
                  {coin}
                </p>
              ))}
            </div>
          </div>
          )
      }</div>
    )
}
