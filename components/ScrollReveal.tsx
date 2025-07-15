"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    duration?: number;
}

const getVariants = (direction: string) => {
    switch (direction) {
        case "down":
            return {
                initial: { opacity: 0, y: -40 },
                animate: { opacity: 1, y: 0 },
            };
        case "left":
            return {
                initial: { opacity: 0, x: 40 },
                animate: { opacity: 1, x: 0 },
            };
        case "right":
            return {
                initial: { opacity: 0, x: -40 },
                animate: { opacity: 1, x: 0 },
            };
        case "up":
        default:
            return {
                initial: { opacity: 0, y: 40 },
                animate: { opacity: 1, y: 0 },
            };
    }
};

export const ScrollReveal = ({
    children,
    delay = 0.2,
    direction = "up",
    duration = 0.6,
}: ScrollRevealProps) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

    useEffect(() => {
        if (inView) controls.start("animate");
    }, [inView, controls]);

    const variants = getVariants(direction);

    return (
        <motion.div
            ref={ref}
            initial="initial"
            animate={controls}
            transition={{ duration, delay }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};
