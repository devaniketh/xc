"use client"

import React from "react"
import Navbar from "@/components/Navbar"

export default function OurProducts() {
    return (
        <div className="relative min-h-screen flex flex-col justify-between bg-[#0D0D12] overflow-hidden text-white">
            <div
                className="absolute w-[2343px] h-[995px] top-[750px] left-[-345px] opacity-60 blur-[116px]
                   bg-[radial-gradient(50%_50%_at_50%_50%,#D9D9D9_0%,rgba(115,115,115,0)_100%)] 
                   z-0 pointer-events-none"
            ></div>

            <Navbar />

            <section className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative z-10">
                <h1 className="text-5xl font-museoModerno mb-6">Our Products</h1>
                <p className="text-[#CCD1E9] text-lg max-w-2xl text-center">
                    Explore our suite of Solana-native tools designed to help builders and founders ship faster.
                </p>
            </section>
        </div>
    )
}
