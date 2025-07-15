"use client";

import { FlipText } from "@/components/Flip-text";
import { ScrollReveal } from "@/components/ScrollReveal";
import React from "react";

const Hero = () => {
    return (
        <div className="w-[1280px] m-auto mt-[100px]">
            <div className="px-[100px] py-[80px]">
                <ScrollReveal direction="up" delay={0.1}>
                    <p className="text-[#58FFDA] text-[18px] text-left">
                        <FlipText>Hi, my name is</FlipText>
                    </p>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.2}>
                    <h1 className="text-[#CCD6F6] font-bold text-[64px]">
                        <FlipText>SHOHJAHON NIYAZOV</FlipText>
                    </h1>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.3}>
                    <p className="text-[#8892B0] text-[64px] font-bold">
                        <FlipText>I build things for the web.</FlipText>
                    </p>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.4}>
                    <p className="text-[#8892B0] text-[20px] mt-4 leading-relaxed">
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
