import React, { useRef, useState } from "react";
import useData from "../hooks/useData";

export default function Price() {
  let { loading, apiData, getPrice, setCurrency, currency} = useData(false);
  async function submitHandler(e) {
    e.preventDefault();
    let inputCurrencyName =(e.target[0].value + 'usdt')
    setCurrency(inputCurrencyName)
    getPrice(currency)
  }
  return !loading ? (
    <form className="w-[450px] mx-auto mb-16 space-y-4"
      onSubmit={submitHandler}
      >
      <div className="relative">
        <input
        required
        minLength={2}
          className=" rounded-lg border border-gray-400 py-3 -mt-1 px-4 w-full"
          placeholder="sol"
        />
        <button
          type="submit"
          className="right-2 py-2 px-4 bg-black text-white font-semibold rounded-xl absolute z-40 whitespace-nowrap"
        >
          Check Price
        </button>
      </div>
      <h1 className="text-center text-2xl">
        Current price of {currency.toUpperCase()} is {apiData.price}
      </h1>
    </form>
  ) : (
    <p className="text-center my-20">data is loading</p>
  );
}
