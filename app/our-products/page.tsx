"use client"
import Image from "next/image"
import Navbar from "@/components/Navbar"

export default function OurProducts() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-[#0D0D12] overflow-hidden text-white">
      <div
        className="absolute w-[2343px] h-[995px] top-[750px] left-[-345px] opacity-60 blur-[116px] bg-[radial-gradient(50%_50%_at_50%_50%,#D9D9D9_0%,rgba(115,115,115,0)_100%)] z-0 pointer-events-none"
      ></div>

      <div
        className="absolute w-[612px] h-14 top-[203px] left-[231px] opacity-35 rotate-180 border border-transparent z-10 pointer-events-none rounded-[58px]"
        style={{
          background:
            "linear-gradient(90deg, #1B1B25 0%, rgba(101, 101, 139, 0) 72%)",
          borderImage:
            "linear-gradient(104.67deg, rgba(255,255,255,0.1) -0.91%, rgba(153,153,153,0) 103.51%) 1",
        }}
      ></div>

      <div className="absolute flex items-center gap-4 top-[210px] left-[226px] z-20">
        <Image
          src="/beach.png"
          alt="Beach Logo"
          width={39}
          height={39}
          className="opacity-100 rotate-0"
        />
        <h2 className="text-[40px] leading-[100%] tracking-[-0.02em] opacity-90 font-museo">
          Products under{" "}
          <span className="bg-linear-to-r from-[#CCD1E9] to-[#CCD1E9] text-transparent bg-clip-text font-semibold">
            xCombinator
          </span>
        </h2>
      </div>

      <p className="absolute w-[623px] top-[266px] left-[228px] text-[16px] leading-[100%] tracking-[-0.02em] opacity-60 font-museo">
        xCombinator serves as an umbrella organization for our suite of{" "}
        <span className="bg-linear-to-r from-[#CCD1E9] to-[#CCD1E9] text-transparent bg-clip-text font-semibold">
          products
        </span>
        .
      </p>

      <div
        className="absolute z-20 rounded-[15px] border opacity-35"
        style={{
          width: "409px",
          height: "211px",
          top: "328px",
          left: "228px",
          background: "#1B1B25",
          borderWidth: "2px",
          borderImage:
            "linear-gradient(104.67deg, rgba(255,255,255,0.1) -0.91%, rgba(153,153,153,0.1) 103.51%) 1",
        }}
      >
        <Image
          src="/x.png"
          alt="X Logo"
          width={37}
          height={29}
          className="absolute"
          style={{
            top: "14px",
            left: "20px",
            opacity: 1,
          }}
        />

        <p
          className="absolute text-white font-bold xapple-text"
          style={{
            top: "62px",
            left: "20px",
            width: "231px",
            height: "24px",
          }}
        >
          xApple
        </p>

        <p
          className="absolute launchpad-text"
          style={{
            top: "62px",
            left: "90px",
            width: "231px",
            height: "24px",
          }}
        >
          Launchpad
        </p>

        <p
          className="absolute xapple-desc"
          style={{
            top: "100px",
            left: "20px",
            width: "348px",
            height: "42px",
          }}
        >
          xApple—fair launches, real liquidity, and rewards that put traders first.
        </p>

        {/* Three boxes below the text */}
        <div className="absolute flex gap-3" style={{ top: "160px", left: "16px" }}>
          <div
            style={{
              width: "38px",
              height: "25px",
              borderRadius: "10px",
              background: "#FFFFFF16",
              opacity: 1,
            }}
          ></div>
          <div
            style={{
              width: "37px",
              height: "25px",
              borderRadius: "10px",
              background: "#FFFFFF16",
              opacity: 1,
            }}
          ></div>
          <div
            style={{
              width: "38px",
              height: "25px",
              borderRadius: "10px",
              background: "#FFFFFF16",
              opacity: 1,
            }}
          ></div>
        </div>
      </div>


      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-60 z-30">
        <p className="text-white text-lg font-museo">powered by</p>
        <Image
          src="/Main.png"
          alt="Solana Logo"
          width={86}
          height={16}
          className="object-contain"
        />
      </div>

      <Navbar />
    </div>
  )
}