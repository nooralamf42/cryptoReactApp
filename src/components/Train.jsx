import React, { useEffect } from "react";
import useData from "../hooks/useData";
import "./loader.css";

export default function Train() {
  let {loading, currency} = useData(true)

    return (
      <div className='w-full text-center'>{
          loading ?  (
              <div className="dots w-[90%] mx-auto my-5"></div>
          ) :
          (
            <div className="relative w-full h-20 overflow-hidden">
            <div className="flex absolute gap-6 animate-train whitespace-nowrap">
              {
              currency.map((coin) => (
                <p className="text-gray-900 font-bold" key={coin}>
                  {coin.name} : {coin.priceUsd.slice(0,8)}$
                </p>
              )) 
            }
            </div>
          </div>
          )
      }</div>
    )
}
