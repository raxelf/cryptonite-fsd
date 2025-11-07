import MainHeader from "@/components/MainHeader";
import MarketCard from "@/components/MarketCard";
import MarketCardContainer from "@/components/MarketCardContainer";
import SideBar from "@/components/SideBar";
import TransactionComponent from "@/components/TransactionComponent";
import TransactionList from "@/components/TransactionList";
import Image from "next/image";

export default function Home() {
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
        <section></section>
      </main>
    </div>
  );
}
