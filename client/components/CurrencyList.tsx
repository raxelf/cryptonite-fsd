import Image from "next/image";

const CurrencyList = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* ETH */}
      <div className="flex gap-2 w-full">
        <span>
          <Image
            src={"/ethereum.png"}
            width={32}
            height={32}
            alt={"Ethereum"}
          />
        </span>
        <span className="flex flex-col">
          <p>Ethereum</p>
          <span className="flex gap-4 justify-between">
            <p className="text-gray-400 text-xs">ETH</p>
            <span className="flex gap-2 text-up text-xs">
              <i className="ri-arrow-right-up-long-line drop-shadow-md drop-shadow-up"></i>
              <p className="drop-shadow-md drop-shadow-up">1,8%</p>
            </span>
          </span>
        </span>
      </div>

      {/* Bitecoin */}
      <div className="flex gap-2 w-full">
        <span>
          <Image src={"/bitcoin.png"} width={32} height={32} alt={"Bitcoin"} />
        </span>
        <span className="flex flex-col">
          <p>Bitcoin</p>
          <span className="flex gap-4 justify-between">
            <p className="text-gray-400 text-xs">BTC</p>
            <span className="flex gap-2 text-up text-xs">
              <i className="ri-arrow-right-up-long-line drop-shadow-md drop-shadow-up"></i>
              <p className="drop-shadow-md drop-shadow-up">2,1%</p>
            </span>
          </span>
        </span>
      </div>

      {/* Nitecoin */}
      <div className="flex gap-2 w-full">
        <span>
          <Image
            src={"/nitecoin.png"}
            width={32}
            height={32}
            alt={"Nitecoin"}
          />
        </span>
        <span className="flex flex-col">
          <p>Nitecoin</p>
          <span className="flex gap-4 justify-between">
            <p className="text-gray-400 text-xs">NTC</p>
            <span className="flex gap-2 text-up text-xs">
              <i className="ri-arrow-right-up-long-line drop-shadow-md drop-shadow-up"></i>
              <p className="drop-shadow-md drop-shadow-up">1,9%</p>
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default CurrencyList;
