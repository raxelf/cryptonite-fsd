const NavigationList = () => {
  return (
    <nav className="mt-4 px-4 flex flex-col gap-2">
      {/* profile */}
      <div className="flex gap-6 text-md items-center hover:bg-primary delay-75 transition rounded-lg p-2 cursor-pointer">
        <i className="ri-user-fill text-xl"></i>
        <p>Profile</p>
      </div>
      <div className="flex justify-between text-md items-center bg-primary rounded-lg p-2 cursor-pointer">
        <span className="flex items-center gap-6">
          <i className="ri-dashboard-fill text-xl"></i>
          <p>Dashboard</p>
        </span>
        <i className="ri-arrow-right-fill"></i>
      </div>
      <div className="flex gap-6 text-md items-center hover:bg-primary delay-75 transition rounded-lg p-2 cursor-pointer">
        <i className="ri-wallet-fill text-xl"></i>
        <p>Wallet</p>
      </div>
      <div className="flex gap-6 text-md items-center hover:bg-primary delay-75 transition rounded-lg p-2 cursor-pointer">
        <i className="ri-arrow-left-right-line text-xl"></i>
        <p>Trade</p>
      </div>
      <div className="flex gap-6 text-md items-center hover:bg-primary delay-75 transition rounded-lg p-2 cursor-pointer">
        <i className="ri-notification-3-fill text-xl"></i>
        <p>Notifications</p>
      </div>
    </nav>
  );
};

export default NavigationList;
