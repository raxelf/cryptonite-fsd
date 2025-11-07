"use client";

import Image from "next/image";
import { useState } from "react";

const ExchangeCard = () => {
  const [coinQty, setCoinQty] = useState(10);
  const [usdQty, setUsdQty] = useState(1028.9);

  return (
    <div className="col-span-3 w-full h-full bg-[#2A2A2D] p-6 rounded-xl">
      <p className="text-xl">Exchange</p>

      <div className="flex gap-2 items-center justify-center text-xl mt-6">
        <p>1</p>
        <p className="text-gray-400">NTC</p>
        <i className="ri-arrow-right-line"></i>
        <p>$ 102.89</p>
        <p className="text-gray-400">USD</p>
      </div>

      <div className="px-8 mt-4 flex flex-col gap-2">
        <div className="w-full bg-[#645F5F] rounded-2xl px-4 py-2 text-black flex gap-2 justify-between">
          <input
            type="number"
            name="buy"
            value={coinQty}
            onChange={(e) => setCoinQty(Number(e.target.value))}
            className="w-full"
          />
          <span className="flex items-center cursor-pointer">
            <Image
              src={"/nitecoin.png"}
              width={32}
              height={32}
              alt={"Nitecoin"}
              className="flex"
            />
            <i className="ri-arrow-down-s-line"></i>
          </span>
        </div>

        <div className="w-full bg-[#645F5F] rounded-2xl px-4 py-2 text-black flex gap-2 justify-between">
          <input
            type="number"
            name="buy"
            value={usdQty}
            onChange={(e) => setUsdQty(Number(e.target.value))}
            className="w-full"
          />
          <span className="flex items-center cursor-pointer">
            <Image
              src={"/usd.png"}
              width={32}
              height={32}
              alt={"USD"}
              className="flex"
            />
            <i className="ri-arrow-down-s-line"></i>
          </span>
        </div>

        <button className="bg-secondary w-full mt-4 rounded-2xl font-semibold px-4 py-3 cursor-pointer text-black">
          EXCHANGE
        </button>
      </div>
    </div>
  );
};

export default ExchangeCard;
