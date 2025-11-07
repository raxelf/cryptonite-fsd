"use client";

import MainHeader from "@/components/MainHeader";
import MarketCardContainer from "@/components/MarketCardContainer";
import SideBar from "@/components/SideBar";
import TradingViewChart from "@/components/TradingViewChart";
import TransactionList from "@/components/TransactionList";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [coinQty, setCoinQty] = useState(10);
  const [usdQty, setUsdQty] = useState(1028.9);

  return (
    // outside container
    <div className="grid grid-cols-12 w-full h-screen overflow-hidden">
      {/* sidebar */}
      <aside className="col-span-2 bg-linear-to-b/srgb from-black via-green-800 to-black w-full h-full px-4 py-8 overflow-y-auto scrollbar-none">
        <SideBar />
      </aside>

      {/* main content */}
      <main className="col-span-10 w-full h-full overflow-y-auto p-9">
        {/* Header (title = Dashboard, Profile, etc) */}
        <MainHeader />

        <section className="mt-8 grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-6">
          {/* Balance */}
          <div className="w-full h-full bg-[#2A2A2D] p-4 rounded-xl">
            {/* card Header */}
            <div className="flex justify-between">
              <p className="text-xl">Balance</p>

              <span className="flex gap-2 text-up text-lg">
                <i className="ri-arrow-right-up-long-line drop-shadow-md drop-shadow-up"></i>
                <p className="drop-shadow-md drop-shadow-up">4,8%</p>
              </span>
            </div>
            <p className="mt-2 text-xl">$ 68.789,44</p>

            {/* Card body */}
            <div className="flex justify-between mt-8">
              {/* Income */}
              <div className="flex flex-col gap-2 w-full">
                <span className="flex gap-2 text-lg">
                  <i className="ri-arrow-right-up-long-line drop-shadow-md drop-shadow-up text-up"></i>
                  <p>Income</p>
                </span>
                <p>$ 21.548,44</p>
              </div>

              <div className="border-l border-gray-300 h-16 mx-4"></div>

              {/* Expense */}
              <div className="flex flex-col gap-2 w-full">
                <span className="flex gap-2 text-lg">
                  <i className="ri-arrow-left-down-long-line drop-shadow-md drop-shadow-down text-down"></i>
                  <p>Expenses</p>
                </span>
                <p>$ 8.769,04</p>
              </div>
            </div>
          </div>

          {/* Currencies */}
          <div className="w-full h-full bg-[#2A2A2D] p-4 rounded-xl">
            <p className="text-xl">Currencies</p>
          </div>

          {/* Transactions */}
          <div className="row-span-2 w-full h-full bg-[#2A2A2D] p-4 rounded-xl">
            {/* card Header */}
            <div className="flex justify-between items-center">
              <p className="text-xl">Transactions</p>

              <span className="flex gap-2 text-sm cursor-pointer">
                <p>View all</p>
                <i className="ri-arrow-right-s-line"></i>
              </span>
            </div>

            {/* Transaction List */}
            <TransactionList />
          </div>

          {/* Market */}
          <div className="col-span-2 w-full h-full">
            {/* header (section title) */}
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-semibold">Market</h2>

              <span className="flex gap-2 text-sm cursor-pointer">
                <p>View all</p>
                <i className="ri-arrow-right-s-line"></i>
              </span>
            </div>

            {/* Market Cards*/}
            <MarketCardContainer />
          </div>
        </section>

        {/* trading chart */}
        <section className="grid grid-cols-7 mt-6 gap-4">
          <div className="col-span-4 w-full h-full">
            <TradingViewChart />
          </div>

          {/* Exchange Card */}
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
        </section>
      </main>
    </div>
  );
}
