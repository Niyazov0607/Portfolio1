"use client";

import React from "react";
import { Folder, ExternalLink, Github } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Work = () => {
    // List of featured projects with details for display in the Work section.
    const projects = [
        {
            id: 1,
            title: "Green Shop",
            description:
                "A full-stack e-commerce website focused on selling flowers. Includes user authentication, payment integration, and an admin dashboard.",
            technologies: ["React", "Tailwind CSS", "TypeScript", "Stripe"],
            githubLink: "https://github.com/Niyazov0607/GreenShop-Store",
            liveLink: "https://green-shop-store.vercel.app/",
        },
        {
            id: 2,
            title: "DevConnectors",
            description:
                "A social platform for developers to connect, share projects, and collaborate.",
            technologies: ["React", "Firebase", "Material-UI", "JavaScript"],
            githubLink: "https://github.com/Niyazov0607?tab=repositories",
            liveLink: "https://exam8-khaki.vercel.app/dashboard/students",
        },
        {
            id: 3,
            title: "Ashyo Shop",
            description:
                "A responsive online tech shop built with Next.js and Stripe integration.",
            technologies: ["Next.ts", "Tailwind CSS", "Shadcn UI", "Stripe"],
            githubLink: "https://github.com/Niyazov0607/Next-Ts-Ashyo",
            liveLink: "https://github.com/Niyazov0607/Next-Ts-Ashyo",
        },
        {
            id: 4,
            title: "Portfolio Website",
            description:
                "A modern, responsive portfolio website with smooth animations and interactive elements to showcase projects and skills.",
            technologies: [
                "Next.ts",
                "Tailwind CSS",
                "Framer Motion",
                "Vercel",
            ],
            githubLink: "#",
            liveLink: "#",
        },
    ];

    return (
        <div id="work" className="w-[1280px] m-auto">
            <div className="py-[100px] px-[100px]">
                <ScrollReveal direction="up" delay={0.1}>
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold text-[#CCD6F6] mb-4">
                            <span className="text-[#58FFDA] font-mono text-xl mr-2">
                                02.
                            </span>
                            Some Things I've Built
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ScrollReveal
                            key={project.id}
                            direction="up"
                            delay={0.2 + index * 0.1}
                        >
                            <div className="bg-[#112240] rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#58FFDA]/10 group">
                                <div className="flex items-center justify-between mb-4">
                                    <Folder
                                        size={40}
                                        className="text-[#58FFDA] group-hover:text-white transition-colors duration-300"
                                    />
                                    <div className="flex space-x-4">
                                        <a
                                            href={project.githubLink}
                                            className="text-[#A8B2D1] hover:text-[#58FFDA] transition-colors duration-300"
                                            aria-label="GitHub"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.liveLink}
                                            className="text-[#A8B2D1] hover:text-[#58FFDA] transition-colors duration-300"
                                            aria-label="Live Demo"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-[#CCD6F6] mb-3 group-hover:text-[#58FFDA] transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-[#A8B2D1] mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="text-[#A8B2D1] text-xs font-mono bg-[#0A192F] px-2 py-1 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
};
