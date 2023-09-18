import React from "react";
import useData from "../hooks/useData";

let coinData = {
  ETH: [
    "Ethereum, initiated by Vitalik Buterin in 2015, is a decentralized blockchain facilitating smart contracts and DApps. Its native cryptocurrency, Ether (ETH), powers transactions and gas fees. Ethereum's hallmark is programmable, self-executing contracts, enabling diverse decentralized applications. Ongoing upgrades like Ethereum 2.0 aim to enhance scalability and sustainability, shaping its future.",
    "https://s32659.pcdn.co/wp-content/uploads/2021/10/ethereum-fees-lowest.png",
  ],
  BTC: [
    "Bitcoin, created in 2009 by an anonymous entity named Satoshi Nakamoto, is a decentralized digital currency powered by blockchain technology. It enables peer-to-peer transactions without intermediaries, fostering financial freedom and privacy. Bitcoin's limited supply of 21 million coins and its volatile nature have attracted investors and sparked debates about its future.",
    "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Yml0Y29pbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  ],
  ADA: [
    "Cardano (ADA) is a blockchain platform founded by Charles Hoskinson, focusing on security and scalability. It employs a layered architecture, separating settlement and computation layers, enhancing flexibility. ADA serves as its native cryptocurrency for transactions and staking in the proof-of-stake consensus model, supporting the platform's development and governance.",
    "https://public.bnbstatic.com/static/academy/uploads-original/6628e286df1f461a86d25314c7204525.png",
  ],
};

let coinsNames = Object.keys(coinData);

export default function Card() {
  let { apiData, loading } = useData(true);

  return (
    <div className="flex justify-center gap-8 mb-8 flex-wrap">
      {!loading ? (
        coinsNames.map((coin) => {
          return (
            <div className="w-[350px] h-fit rounded-xl overflow-hidden shadow-2xl hover:cursor-pointer hover:box hover:drop-shadow-2xl hover:scale-105">
              
                <img
                  className="h-[45%] w-full bg-contain"
                  src={coinData[coin][1]}
                  alt=""
                  srcset=""
                />

              <div className="p-6 space-y-4">
                <h1 className="text-2xl font-bold">{coin}</h1>
                <p className="text-gray-600">{coinData[coin][0]}</p>
                <p className="font-semibold">Price {apiData.rates[coin]}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p>data is loading</p>
      )}
    </div>
  );
}
