"use client"

import React from "react"

export default function Navbar() {
    return (
        <div className="relative">

            <h1
                className="text-[40px] font-semibold leading-[100%] tracking-[0%]
                   bg-linear-to-r from-[#CCD1E9] to-[#CACFE7]
                   bg-clip-text text-transparent font-museoModerno
                   absolute top-[23px] left-[46px] opacity-100"
            >
                xCombinator
            </h1>


            <div
                className="absolute top-[100px] left-[46px] w-[1636px] h-0
                   border border-[#FFFFFF1A] opacity-100"
            />


            <p
                className="absolute top-[46px] left-[1162px] text-right
                   text-[14px] font-medium leading-[100%]
                   text-[#636475] font-robotoMono opacity-100"
            >
                ambassador
            </p>


            <p
                className="absolute top-[46px] left-[1314px] text-right
                   text-[14px] font-medium leading-[100%]
                   text-[#636475] font-robotoMono opacity-100"
            >
                our products
            </p>


            <p
                className="absolute top-[46px] left-[1474px] text-right
                   text-[14px] font-medium leading-[100%]
                   text-[#636475] font-robotoMono opacity-100"
            >
                $X
            </p>

            <p
                className="absolute top-[46px] left-[1527px] text-right
                   text-[14px] font-medium leading-[100%]
                   text-[#636475] font-robotoMono opacity-100"
            >
                contact us
            </p>
        </div>
    )
}
