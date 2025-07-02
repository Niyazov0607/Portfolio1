"use client";
import Link from "next/link";
import React from "react";

const DrawOutlineButton = ({
    children,
    ...rest
}: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>) => {
    return (
        <button
            {...rest}
            className="group cursor-pointer relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
        >
            <span>{children}</span>
            {/* TOP */}
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />
            {/* RIGHT */}
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />
            {/* BOTTOM */}
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />
            {/* LEFT */}
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
        </button>
    );
};

const Header = () => {
    return (
        <div className="w-[1280px] m-auto py-4">
            <div className="flex items-center justify-between ">
                <div>
                    <h1 className="text-[#58FFDA] font-bold text-[32px]">
                        <Link href="/"> NiyazovDev</Link>
                    </h1>
                </div>
                <div className="flex items-center gap-[30px] ">
                    <ul className="flex items-center gap-[30px] text-white  text-[16px] font-bold cursor-pointer">
                        <li className="hover:text-[#58FFDA] transition-colors duration-300">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:text-[#58FFDA] transition-colors duration-300">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="hover:text-[#58FFDA] transition-colors duration-300">
                            <Link href="/work">Work</Link>
                        </li>
                        <li className="hover:text-[#58FFDA] transition-colors duration-300">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                    <DrawOutlineButton
                        className="text-[#58FFDA] text-[14px] font-bold"
                        onClick={() => {
                            window.open("/niyazov shohjahon.pdf", "_blank");
                        }}
                    >
                        <span className="text-[#58FFDA]">Resume</span>
                    </DrawOutlineButton>
                </div>
            </div>
        </div>
    );
};

export default Header;
