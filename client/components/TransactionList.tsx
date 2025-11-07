import TransactionComponent from "./TransactionComponent";

const TransactionList = () => {
  return (
    <div className="flex flex-col gap-10 mt-4">
      <TransactionComponent
        image="/bitcoin.png"
        coin="Bitcoin"
        price="$ 11.795,85"
        status="up"
      />
      <TransactionComponent
        image="/ethereum.png"
        coin="Ethereum"
        price="$ 5.248,75"
        status="down"
      />
      <TransactionComponent
        image="/nitecoin.png"
        coin="Nitecoin"
        price="$ 8.457,40"
        status="up"
      />
      <TransactionComponent
        image="/litecoin.png"
        coin="Litecoin"
        price="$ 5.245,54"
        status="up"
      />
      <TransactionComponent
        image="/dogecoin.png"
        coin="Dogecoin"
        price="$ 6.795,85"
        status="down"
      />
    </div>
  );
};

export default TransactionList;
