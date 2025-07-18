"use client";

import React from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

const About = () => {
    const skills = [
        ["JavaScript (ES6+)", "React", "HTML & CSS"],
        ["TypeScript", "Next.js", "Tailwind CSS"],
        ["Shadcn UI", "Firebase", "Git & GitHub"],
    ];

    return (
        <div
            id="about"
            className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-[100px] py-[100px] sm:py-[120px]"
        >
            <ScrollReveal direction="up" delay={0.1}>
                <div className="mb-10 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#CCD6F6] mb-4">
                        <span className="text-[#58FFDA] font-mono text-lg sm:text-xl mr-2">
                            01.
                        </span>
                        About me
                    </h2>
                </div>
            </ScrollReveal>

            <div className="flex flex-col-reverse md:flex-row items-center gap-10 sm:gap-12 md:gap-[40px]">
                <div className="w-full md:w-2/3">
                    <ScrollReveal direction="left" delay={0.2}>
                        <p className="py-4 text-[#8892B0] text-[16px] sm:text-[18px] leading-relaxed">
                            Hello! My name is Shohjahon and I enjoy creating
                            things that live on the internet.
                            <br />
                            My interest in web development started back in 2022
                            when I decided to try editing custom Tumblr themes —
                            turns out hacking together a custom reblog button
                            taught me a lot about HTML & CSS!
                        </p>
                    </ScrollReveal>

                    <ScrollReveal direction="left" delay={0.3}>
                        <p className="py-4 text-[#8892B0] text-[20px] font-bold">
                            My Skills
                        </p>
                    </ScrollReveal>

                    <div className="flex flex-col sm:flex-row gap-6">
                        {skills.map((column, columnIndex) => (
                            <ScrollReveal
                                key={columnIndex}
                                direction="up"
                                delay={0.4 + columnIndex * 0.1}
                            >
                                <div className="flex flex-col gap-y-2">
                                    {column.map((skill, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center space-x-2"
                                        >
                                            <span className="text-teal-400 text-sm">
                                                ▸
                                            </span>
                                            <span className="text-[#8892B0] text-[16px]">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                <ScrollReveal direction="right" delay={0.3}>
                    <div className="relative w-[220px] sm:w-[280px] md:w-[300px] mx-auto overflow-hidden rounded-[12px] group">
                        <img
                            className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-105 group-hover:shadow-xl"
                            src="/icon.jpg"
                            alt="Profile"
                        />
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default About;
