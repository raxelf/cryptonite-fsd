const BalanceCard = () => {
  return (
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
  );
};

export default BalanceCard;
