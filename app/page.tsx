
import Navbar from "../components/Navbar";
import NavbarGradientBox from "@/components/NavbarGradientBox";
import HeroText from "@/components/HeroText";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-[#0D0D12] overflow-hidden">
      {/* Radial Glow Background */}
      <div
        className="absolute w-[2343px] h-[995px] top-[750px] left-[-345px] opacity-60 blur-[116px]
                   bg-[radial-gradient(50%_50%_at_50%_50%,#D9D9D9_0%,rgba(115,115,115,0)_100%)] 
                   z-0 pointer-events-none"
      ></div>

      {/* Foreground content */}
      <div className="relative z-10">
        <Navbar />
        <NavbarGradientBox />
      <HeroText />
        <Footer /> 
      </div>
    </div>
  );
}
