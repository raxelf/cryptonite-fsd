import MarketCard from "./MarketCard";

const MarketCardContainer = () => {
  return (
    <div className="overflow-x-auto scrollbar-none mt-4">
      <div className="flex gap-4 pb-4 min-w-min">
        <div className="shrink-0 w-[calc(35%-8px)]">
          <MarketCard
            coin="Bitcoin"
            shortName="BTC"
            price="$ 38.769,45"
            image="/bitcoin.png"
            status="down"
            percent="3,7%"
          />
        </div>
        <div className="shrink-0 w-[calc(35%-8px)]">
          <MarketCard
            coin="Ethereum"
            shortName="ETH"
            price="$ 2.769,85"
            image="/ethereum.png"
            status="up"
            percent="1,8%"
          />
        </div>
        <div className="shrink-0 w-[calc(35%-8px)]">
          <MarketCard
            coin="Nitecoin"
            shortName="NTC"
            price="$ 102,89"
            image="/nitecoin.png"
            status="up"
            percent="1,9%"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketCardContainer;
