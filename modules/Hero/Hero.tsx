"use client";

import { FlipText } from "@/components/Flip-text";
import { ScrollReveal } from "@/components/ScrollReveal";
import React from "react";

const Hero = ({ blurBackground }: { blurBackground?: boolean }) => {
    return (
        <div
            className={`max-w-[1280px] mx-auto mt-[60px] md:mt-[100px] px-4 sm:px-6 md:px-12 lg:px-[100px] transition-all duration-300 ${
                blurBackground
                    ? "bg-slate-900/80 backdrop-blur-sm rounded-xl"
                    : ""
            }`}
        >
            <div className="py-[60px] md:py-[80px]">
                <ScrollReveal direction="up" delay={0.1}>
                    <p className="text-[#58FFDA] text-[16px] sm:text-[18px] text-left">
                        <FlipText>Hi, my name is</FlipText>
                    </p>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.2}>
                    <h1 className="text-[#CCD6F6] font-bold text-[32px] sm:text-[48px] md:text-[64px] leading-tight">
                        <FlipText>SHOHJAHON NIYAZOV</FlipText>
                    </h1>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.3}>
                    <p className="text-[#8892B0] font-bold text-[28px] sm:text-[40px] md:text-[64px] leading-tight mt-2">
                        <FlipText>I build things for the web.</FlipText>
                    </p>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.4}>
                    <p className="text-[#8892B0] text-[16px] sm:text-[18px] md:text-[20px] mt-4 leading-relaxed">
                        <FlipText>
                            A frontend developer with aim of adepting at
                            contributing to
                        </FlipText>
                        <br />
                        <FlipText>
                            a highly collaborative work environment, finding
                            solutions,
                        </FlipText>
                        <br />
                        <FlipText>
                            and determining customer satisfaction.
                        </FlipText>
                    </p>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default Hero;
