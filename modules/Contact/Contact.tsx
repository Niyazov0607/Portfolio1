"use client";

import React from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Github, Linkedin, Instagram, SendHorizonal } from "lucide-react";

export const Contact = () => {
    return (
        <div
            id="contact"
            className="max-w-[1280px] mx-auto px-4 sm:px-6 py-[100px]"
        >
            <div className="text-center">
                <ScrollReveal direction="up" delay={0.1}>
                    <p className="text-[#58FFDA] font-mono text-[16px] mb-4">
                        03. What’s Next?
                    </p>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.2}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#CCD6F6] mb-6">
                        Get In Touch
                    </h2>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.3}>
                    <p className="text-[#8892B0] text-[16px] sm:text-[18px] max-w-[600px] mx-auto mb-10 leading-relaxed">
                        I’m currently looking for new opportunities — whether
                        it’s freelance or full-time work. If you want to
                        collaborate, have a question, or just want to say hi,
                        I’ll try my best to get back to you!
                    </p>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.4}>
                    <a
                        href="mailto:shohjahonniyazov89@gmail.com"
                        className="inline-block border border-[#58FFDA] text-[#58FFDA] px-6 py-3 rounded-lg font-mono text-[16px] hover:bg-[#58FFDA]/10 transition-all duration-300"
                    >
                        Say Hello
                    </a>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.5}>
                    <div className="flex justify-center items-center gap-6 mt-10 flex-wrap">
                        <a
                            href="https://github.com/Niyazov0607"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8892B0] hover:text-[#58FFDA] transition-colors duration-300"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/shohjahoncodes/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8892B0] hover:text-[#58FFDA] transition-colors duration-300"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="https://t.me/niyazov_shohjahon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8892B0] hover:text-[#58FFDA] transition-colors duration-300"
                        >
                            <SendHorizonal size={24} />
                        </a>
                        <a
                            href="https://www.instagram.com/niyazov_shohjahon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8892B0] hover:text-[#58FFDA] transition-colors duration-300"
                        >
                            <Instagram size={24} />
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};
