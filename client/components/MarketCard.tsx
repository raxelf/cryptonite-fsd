import Image from "next/image";
import LineChart from "./LineChart";

const MarketCard = ({
  image,
  coin,
  shortName,
  price,
  status,
  percent,
}: {
  image: string;
  coin: string;
  shortName: string;
  price: string;
  status: string;
  percent: string;
}) => {
  return (
    <div className="w-full h-full bg-[#2A2A2D] p-4 rounded-xl">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <span>
            <Image
              src={image}
              width={32}
              height={32}
              alt={coin}
              className="flex"
            />
          </span>
          <span className="flex flex-col gap-1">
            <p>{coin}</p>
            <p>{price}</p>
          </span>
        </div>

        <p className="text-xs text-gray-400">{shortName}</p>
      </div>

      {/* Line Chart */}
      {status === "up" ? (
        <LineChart
          color="#38bdf8"
          chartData={[10, 12, 11, 13, 14, 16, 18, 19, 21, 22]}
        />
      ) : (
        <LineChart
          color="#fbbf24"
          chartData={[20, 18, 25, 22, 19, 15, 16, 15, 14, 13]}
        />
      )}

      <div className="flex justify-end w-full">
        {status === "up" ? (
          <span className="text-up text-sm flex">
            <i className="ri-arrow-right-up-long-line drop-shadow-md drop-shadow-up"></i>
            <p className="drop-shadow-md drop-shadow-up">{percent}</p>
          </span>
        ) : (
          <span className="text-down text-sm flex">
            <i className="ri-arrow-left-down-long-line drop-shadow-md drop-shadow-down"></i>
            <p className="drop-shadow-md drop-shadow-down">{percent}</p>
          </span>
        )}
      </div>
    </div>
  );
};

export default MarketCard;
