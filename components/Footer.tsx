"use client"

import React from "react"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-full flex justify-center items-end z-10 pb-5">
            <div className="absolute left-[299px] bottom-[100px] flex items-start gap-25">
                <div className="flex items-start gap-3">
                    <Image src="/eye.png" alt="Eye Logo" width={24} height={24} className="opacity-100 object-contain" />
                    <div className="flex flex-col justify-center leading-[18px] text-[13px]">
                        <p>
                            <span className="text-white font-medium">Expert guidance</span>{" "}
                            <span className="text-[#CCD1E9] font-normal">Industry leaders</span>
                        </p>
                        <p className="text-[#CCD1E9] font-normal">help scale your project</p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <Image src="/Star.png" alt="Star Logo" width={24} height={24} className="opacity-100 object-contain" />
                    <div className="flex flex-col justify-center leading-[18px] text-[13px]">
                        <p>
                            <span className="text-white font-medium">Full launch support</span>{" "}
                            <span className="text-[#CCD1E9] font-normal">From token</span>
                        </p>
                        <p className="text-[#CCD1E9] font-normal">creation to marketing</p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <Image src="/Road.png" alt="Rocket Logo" width={24} height={24} className="opacity-100 object-contain" />
                    <div className="flex flex-col justify-center leading-[18px] text-[13px]">
                        <p className="leading-[18px] text-[13px]">
                            <span className="text-white font-medium">
                                Solana-native Leverage our best
                            </span>
                            <br />
                            <span className="text-[#CCD1E9] font-normal">
                                tools for effortless launches.
                            </span>
                        </p>


                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <Image src="/tick.png" alt="" width={24} height={24} className="opacity-100 object-contain" />
                    <div className="flex flex-col justify-center leading-[18px] text-[13px]">
                        <p className="leading-[18px] text-[13px]">
                            <span className="text-white font-medium">
                                Whale connections Instant traction
                            </span>
                            <br />
                            <span className="text-[#CCD1E9] font-normal">
                                with top traders and investors.
                            </span>
                        </p>

                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 opacity-60">
                <p className="text-white text-lg font-museo">powered by</p>
                <Image
                    src="/Main.png"
                    alt=""
                    width={86}
                    height={16}
                    className="object-contain"
                />
            </div>

        </footer>
    )
}
