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
        <div id="about" className="w-[1280px] m-auto">
            <div className="py-[200px] px-[100px]">
                <ScrollReveal direction="up" delay={0.1}>
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold text-[#CCD6F6] mb-4">
                            <span className="text-[#58FFDA] font-mono text-xl mr-2">
                                01.
                            </span>
                            About me
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="flex items-center gap-[20px]">
                    <div>
                        <ScrollReveal direction="left" delay={0.2}>
                            <p className="py-[30px] text-[#8892B0] text-[18px]">
                                Hello! My name is Shohjahon and I enjoy creating
                                things that live on the internet. <br />
                                My interest in web development started back in
                                2022 when I decided to try editing <br />
                                custom Tumblr themes — turns out hacking
                                together a custom reblog button taught <br />
                                me a lot about HTML & CSS!
                            </p>
                        </ScrollReveal>

                        <ScrollReveal direction="left" delay={0.3}>
                            <p className="py-[30px] text-[#8892B0] text-[24px] font-bold">
                                My Skills
                            </p>
                        </ScrollReveal>

                        <div className="flex items-center gap-x-10">
                            {skills.map((column, columnIndex) => (
                                <ScrollReveal
                                    key={columnIndex}
                                    direction="up"
                                    delay={0.4 + columnIndex * 0.1}
                                >
                                    <div className="flex flex-col gap-y-3">
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
                        <div className="relative max-w-sm mx-auto overflow-hidden rounded-[12px] group">
                            <img
                                className="w-full h-80 object-cover transform transition duration-500 group-hover:scale-105 group-hover:shadow-xl"
                                src="/icon.jpg"
                                alt="Profile"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

export default About;
