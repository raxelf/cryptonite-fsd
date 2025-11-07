import Image from "next/image";

const MarketCard = ({
  image,
  coin,
  shortName,
  price,
}: {
  image: string;
  coin: string;
  shortName: string;
  price: string;
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
    </div>
  );
};

export default MarketCard;
