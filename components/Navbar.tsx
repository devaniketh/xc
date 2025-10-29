"use client"

import React from "react"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between relative z-20">
      <h1 className="text-[32px] sm:text-[40px] font-semibold bg-linear-to-r from-[#CCD1E9] to-[#CACFE7] bg-clip-text text-transparent font-museoModerno">
        xCombinator
      </h1>
      <div className="flex flex-wrap gap-6 sm:gap-10 text-[14px] font-robotoMono text-[#636475] mt-4 sm:mt-0">
        <Link href="/ambassador" className="cursor-pointer hover:text-white">ambassador</Link>
        <Link href="/our-products" className="cursor-pointer hover:text-white">our products</Link>
        <Link href="/x" className="cursor-pointer hover:text-white">$X</Link>
        <Link href="/contact" className="cursor-pointer hover:text-white">contact us</Link>
      </div>
      <div className="absolute bottom-0 left-0 w-full border border-[#FFFFFF1A]" />
    </nav>
  )
}
