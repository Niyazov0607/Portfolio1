"use client";

import { cn } from "@/src/lib/utils";
import { AnimatePresence, motion, MotionProps, Variants } from "framer-motion";
import React, { ElementType } from "react";

interface FlipTextProps extends MotionProps {
    /** The duration of the animation */
    duration?: number;
    /** The delay between each character */
    delayMultiple?: number;
    /** The variants of the animation */
    framerProps?: Variants;
    /** The class name of the component */
    className?: string;
    /** The element type of the component */
    as?: ElementType;
    /** The children of the component */
    children: React.ReactNode;
    /** The variants of the animation */
    variants?: Variants;
}

const defaultVariants: Variants = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
};

export function FlipText({
    children,
    duration = 0.5,
    delayMultiple = 0.08,

    className,
    as: Component = "span",
    variants,
    ...props
}: FlipTextProps) {
    const MotionComponent = motion.create(Component);
    const characters = React.Children.toArray(children).join("").split("");

    return (
        <AnimatePresence mode="wait">
            {characters.map((char, i) => (
                <MotionComponent
                    key={i}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants || defaultVariants}
                    transition={{ duration, delay: i * delayMultiple }}
                    className={cn("origin-center drop-shadow-sm", className)}
                    {...props}
                >
                    {char}
                </MotionComponent>
            ))}
        </AnimatePresence>
    );
}
