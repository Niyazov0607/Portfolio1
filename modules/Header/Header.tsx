"use client";
import JumpingTextInstagram from "@/components/.JumpingTextInstagram";
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
        <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800/50">
            <div className="w-[1280px] m-auto py-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-[#58FFDA] font-bold text-[32px]">
                            <Link href="/">
                                {" "}
                                <JumpingTextInstagram
                                    text="NiyazovDev"
                                    mode="character"
                                    className="inline-block"
                                />
                            </Link>
                        </h1>
                    </div>
                    <div className="flex items-center gap-[30px]">
                        <ul className="flex items-center gap-[30px] text-white text-[16px] font-bold cursor-pointer">
                            {[
                                { label: "Home", href: "/" },
                                { label: "About", href: "#about" },
                                { label: "Work", href: "#work" },
                                { label: "Contact", href: "#contact" },
                            ].map(({ label, href }) => (
                                <li
                                    key={label}
                                    className="hover:text-[#58FFDA] transition-colors duration-300"
                                >
                                    <Link href={href}>
                                        <JumpingTextInstagram
                                            text={label}
                                            mode="character"
                                            className="inline-block"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <DrawOutlineButton
                            className="text-[#58FFDA] text-[14px] font-bold"
                            onClick={() => {
                                window.open("/niyazov shohjahon.pdf", "_blank");
                            }}
                        >
                            <span className="text-[#58FFDA]">
                                <JumpingTextInstagram
                                    text="Resume"
                                    mode="character"
                                    className="inline-block"
                                />
                            </span>
                        </DrawOutlineButton>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
