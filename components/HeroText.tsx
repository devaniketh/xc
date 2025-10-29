"use client"

import React from "react"

export default function HeroSection() {
    return (
        <div
            className="absolute top-[277px] left-[317px] w-[1093px] opacity-90
                 flex flex-col items-start justify-center"
        >
            <h2
                className="text-left text-[48px] leading-[100%] tracking-[5%]
                   bg-linear-to-r from-[#CCD1E9] to-[#CCD1E9]
                   bg-clip-text text-transparent font-museo font-normal"
            >
                Currently, helping people launch on{" "}
                <span className="font-bold">Solana</span>
            </h2>

            <div className="flex items-center gap-2 mt-5 ml-[5px]">
                <img src="/dot.png" width={24} height={24} alt="Dot" className="opacity-100" />
                <p className="text-[16px] font-akshar font-semibold text-[#7F7F7F]">$X Marketcap</p>
                <p className="text-[16px] font-ibm font-bold text-[#94A3B8]">$7,789,567.45</p>
            </div>

            <div
                className="mt-5 ml-[5px] w-[350px] h-14 opacity-[0.35] rounded-[58px] border
                   flex items-center pl-6"
                style={{
                    background: "linear-gradient(90deg, #1B1B25 0%, rgba(101,101,139,0) 72%)",
                    borderImageSource:
                        "linear-gradient(104.67deg, rgba(255,255,255,0.1) -0.91%, rgba(153,153,153,0) 103.51%)",
                    borderImageSlice: 1,
                }}
            >
                <p className="text-[16px] font-roboto font-normal text-[#CCD1E9]/50 leading-[18px]">
                    View our{" "}
                    <span className="font-semibold bg-linear-to-r from-[#CCD1E9] to-[#CCD1E9] bg-clip-text text-transparent">
                        suite of products
                    </span>
                </p>
            </div>
        </div>
    )
}
