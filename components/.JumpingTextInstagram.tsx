"use client";
import { motion } from "framer-motion";

const splitText = (text: string, word = false) => {
    return word ? text.split(/\b/u) : text.split("");
};

export default function JumpingTextInstagram({
    text,
    mode = "word",
    className,
}: {
    text: string;
    className?: string;
    mode?: "word" | "character";
}) {
    const isWordMode = mode === "word";
    const nodes = splitText(text, isWordMode);

    return (
        <div className={className}>
            {nodes.map((node, index) => (
                <motion.span
                    key={index}
                    initial={{
                        translateY: 30,
                        rotate: -30,
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                        translateY: 0,
                        rotate: 0,
                    }}
                    transition={{
                        type: "spring",
                        damping: 10,
                        mass: 2,
                        delay: (isWordMode ? 0.05 : 0.01) * index,
                    }}
                    viewport={{ once: true }}
                    className="inline-block origin-center"
                >
                    {node === " " ? "\u00A0" : node}
                </motion.span>
            ))}
            <span className="sr-only">{text}</span>
        </div>
    );
}
