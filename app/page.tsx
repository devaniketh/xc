import Image from "next/image";
import Navbar from "../components/Navbar";
import NavbarGradientBox from "@/components/NavbarGradientBox";
import HeroText from "@/components/HeroText";

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-[#0D0D12]">
      <div
        className="absolute w-[2343px] h-[995px] top-[700px] left-[-345px] opacity-60 blur-[116px]
                   bg-[radial-gradient(50%_50%_at_50%_50%,#D9D9D9_0%,rgba(115,115,115,0)_100%)] 
                   z-0 pointer-events-none"
      ></div>

      <div className="relative z-10">
        <Navbar />
        <NavbarGradientBox />
        <HeroText />
      </div>
    </div>
  );
}
