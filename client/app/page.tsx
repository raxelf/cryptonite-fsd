import BalanceCard from "@/components/BalanceCard";
import CurrencyChart from "@/components/CurrencyChart";
import CurrencyList from "@/components/CurrencyList";
import ExchangeCard from "@/components/ExchangeCard";
import MainHeader from "@/components/MainHeader";
import MarketCardContainer from "@/components/MarketCardContainer";
import SideBar from "@/components/SideBar";
import TradingViewChart from "@/components/TradingViewChart";
import TransactionList from "@/components/TransactionList";

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
          <BalanceCard />

          {/* Currencies */}
          <div className="w-full h-full bg-[#2A2A2D] p-4 rounded-xl">
            <p className="text-xl">Currencies</p>

            <div className="flex gap-4 mt-2">
              {/* pie chart */}
              <div>
                <CurrencyChart />
              </div>

              {/* currency list */}
              <CurrencyList />
            </div>
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
          <ExchangeCard />
        </section>
      </main>
    </div>
  );
}
