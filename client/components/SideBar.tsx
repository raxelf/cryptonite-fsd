import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="flex flex-col justify-between">
      {/* upper part */}
      <div>
        {/* Logo */}
        <Link href={"/"} className="flex px-4 gap-2 items-center">
          <Image
            src={"/logo.png"}
            width={42}
            height={42}
            alt="CryptoNite Logo"
          />
          <p className="text-xl font-semibold text-white">CryptoNite</p>
        </Link>

        {/* Navigation */}
        <nav className="mt-4 px-4 flex flex-col gap-2">
          {/* profile */}
          <div className="flex gap-6 text-md items-center hover:bg-primary rounded-lg p-2 cursor-pointer">
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
          <div className="flex gap-6 text-md items-center hover:bg-primary rounded-lg p-2 cursor-pointer">
            <i className="ri-wallet-fill text-xl"></i>
            <p>Wallet</p>
          </div>
          <div className="flex gap-6 text-md items-center hover:bg-primary rounded-lg p-2 cursor-pointer">
            <i className="ri-arrow-left-right-line text-xl"></i>
            <p>Trade</p>
          </div>
          <div className="flex gap-6 text-md items-center hover:bg-primary rounded-lg p-2 cursor-pointer">
            <i className="ri-notification-3-fill text-xl"></i>
            <p>Notifications</p>
          </div>
        </nav>

        <div className="justify-center items-center flex flex-col mt-4">
          <Image
            src={"/ethCoin.png"}
            width={320}
            height={320}
            alt="Etherium Coin"
            className="drop-shadow-[0_10px_30px_rgba(0,255,0,0.5)]"
          />
          <div className="px-8 flex flex-col gap-4">
            <p className="text-left text-md">
              Nitecoin: The New Crptocurrency in town!
            </p>
            <button className="bg-primary w-full rounded-md py-1 cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* bottom part */}
      <div className="mt-8 px-4 flex flex-col gap-2">
        <div className="flex gap-6 text-md items-center hover:bg-primary rounded-lg p-2 cursor-pointer">
          <i className="ri-settings-3-fill text-xl"></i>
          <p>Settings</p>
        </div>

        <div className="flex gap-6 text-md items-center hover:bg-primary rounded-lg p-2 cursor-pointer">
          <i className="ri-logout-box-r-line text-xl"></i>
          <p>LogOut</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
