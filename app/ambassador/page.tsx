"use client"

import React from "react"
import Navbar from "@/components/Navbar"

export default function XPage() {
  return (
    <div className="relative min-h-screen bg-[#0D0D12] text-white overflow-hidden">
      <div
        className="absolute w-[2343px] h-[995px] top-[750px] left-[-345px] opacity-60 blur-[116px]
                   bg-[radial-gradient(50%_50%_at_50%_50%,#D9D9D9_0%,rgba(115,115,115,0)_100%)]
                   pointer-events-none z-0"
      ></div>

      <Navbar />

      <section className="flex flex-col items-center justify-center h-[80vh] text-center px-5 relative z-10">
        <h1 className="text-[40px] sm:text-[60px] font-museoModerno bg-linear-to-r from-[#CCD1E9] to-[#CACFE7] bg-clip-text text-transparent font-semibold">
          $X Token
        </h1>
        <p className="text-[#A0A1B0] mt-6 max-w-[600px] text-[16px] sm:text-[18px]">
          Learn more about the $X ecosystem and upcoming token utilities.
        </p>
      </section>
    </div>
  )
}
