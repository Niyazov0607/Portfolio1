"use client";

import JumpingTextInstagram from "@/components/.JumpingTextInstagram";
import Link from "next/link";
import React, { useState } from "react";

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
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
        </button>
    );
};

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800/50">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-[#58FFDA] font-bold text-2xl sm:text-3xl lg:text-[32px]">
                            <Link href="/">
                                <JumpingTextInstagram
                                    text="NiyazovDev"
                                    mode="character"
                                    className="inline-block"
                                />
                            </Link>
                        </h1>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-[30px]">
                            <ul className="flex items-center gap-[30px] text-white text-[16px] font-bold cursor-pointer">
                                {["Home", "About", "Work", "Contact"].map(
                                    (label) => (
                                        <li
                                            key={label}
                                            className="hover:text-[#58FFDA] transition-colors duration-300"
                                        >
                                            <Link
                                                href={
                                                    label === "Home"
                                                        ? "/"
                                                        : `#${label.toLowerCase()}`
                                                }
                                            >
                                                <JumpingTextInstagram
                                                    text={label}
                                                    mode="character"
                                                    className="inline-block"
                                                />
                                            </Link>
                                        </li>
                                    )
                                )}
                            </ul>
                            <DrawOutlineButton
                                className="text-[#58FFDA] text-[14px] font-bold"
                                onClick={() =>
                                    window.open(
                                        "/niyazov shohjahon.pdf",
                                        "_blank"
                                    )
                                }
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

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="text-white hover:text-[#58FFDA] transition-colors duration-300"
                                aria-label="Toggle mobile menu"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {isMobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Right Half Overlay Menu */}
            {isMobileMenuOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Half-screen Drawer */}
                    <div className="fixed top-0 right-0 h-full w-1/2 bg-[#0a192f] z-50 flex flex-col justify-between">
                        {/* Top: Close Button */}
                        <div className="flex justify-end p-6">
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-[#64ffda] text-3xl"
                                aria-label="Close menu"
                            >
                                ×
                            </button>
                        </div>

                        {/* Middle: Nav Links */}
                        <nav className="flex-1 flex flex-col items-start px-6 gap-8 overflow-y-auto">
                            {[
                                { label: "About", href: "#about" },
                                { label: "Work", href: "#work" },
                                { label: "Contact", href: "#contact" },
                            ].map((item, index) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-[#ccd6f6] hover:text-[#64ffda] font-mono text-lg transition"
                                >
                                    <span className="text-[#64ffda] mr-2">{`0${
                                        index + 1
                                    }.`}</span>
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        {/* Bottom: Resume Button */}
                        <div className="px-6 py-6 border-t border-slate-700">
                            <a
                                href="/niyazov shohjahon.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center px-6 py-2 border border-[#64ffda] text-[#64ffda] rounded-md hover:bg-[#64ffda]/10 transition font-mono text-sm"
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Header;
