import MainHeader from "@/components/MainHeader";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    // outside container
    <div className="grid grid-cols-12 w-full h-screen overflow-hidden">
      {/* sidebar */}
      <aside className="col-span-2 bg-linear-to-b/srgb from-black via-green-800 to-black w-full h-full px-4 py-8 overflow-y-auto scrollbar-none">
        <SideBar />
      </aside>

      {/* main content */}
      <main className="col-span-10 w-full h-full overflow-y-auto p-9">
        <MainHeader />
      </main>
    </div>
  );
}
