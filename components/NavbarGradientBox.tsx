"use client"

import React from "react"
import Image from "next/image"

export default function GradientBox() {
  return (
    <div
      className="absolute w-[434px] h-[72px] top-[121px] left-[1248px] opacity-50 rounded-[10px]"
      style={{
        background: "linear-gradient(270deg, #1B1B25 0%, rgba(101,101,139,0) 72%)",
      }}
    >
      <div className="absolute top-3 left-[35px]">
        <Image src="/x.png" alt="X Logo" width={45} height={35} />
      </div>

      <p className="absolute top-3 left-[90px] xapple-text">
        xApple
      </p>

      <p className="absolute top-7 left-[90px] meet-text">
        Meet our latest Product!
      </p>
    </div>
  )
}
