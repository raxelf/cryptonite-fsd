import Image from "next/image";

const TransactionComponent = ({
  image,
  coin,
  price,
  status,
}: {
  image: string;
  coin: string;
  price: string;
  status: string;
}) => {
  return (
    <div className="flex justify-between items-center">
      <span className="flex gap-4 items-center">
        <Image src={image} width={32} height={32} alt={coin} />
        <p>{coin}</p>
      </span>
      {status === "up" ? (
        <i className="ri-arrow-right-up-long-line drop-shadow-md drop-shadow-up text-up text-2xl"></i>
      ) : (
        <i className="ri-arrow-left-down-long-line drop-shadow-md drop-shadow-down text-down text-2xl"></i>
      )}

      <p className="text-sm">{price}</p>
    </div>
  );
};

export default TransactionComponent;
