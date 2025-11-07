import Image from "next/image";

const MainHeader = () => {
  return (
    <section className="flex justify-between items-center">
      <h1 className="text-3xl font-semibold">Dashboard</h1>

      <div className="flex gap-8">
        {/* Mail & etc */}
        <div className="flex gap-4">
          <i className="ri-folder-open-fill text-4xl cursor-pointer"></i>
          <i className="ri-mail-fill text-4xl cursor-pointer"></i>
        </div>

        {/* Profile */}
        <div className="flex gap-4 items-center text-xl">
          <Image
            src={"/avatars.jpg"}
            width={42}
            height={42}
            alt="Avatar Icon"
            className="cursor-pointer"
          />
          <div className="cursor-pointer flex gap-2">
            <p>Zaigam Akhtar</p>
            <i className="ri-arrow-down-s-line"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
