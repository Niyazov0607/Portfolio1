// components/ui/scroll-progress.tsx
"use client";

import { cn } from "@/src/lib/utils";
import { motion, useScroll } from "framer-motion";

interface ScrollProgressProps {
    className?: string;
}

const ScrollProgress = ({ className }: ScrollProgressProps) => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className={cn(
                "fixed top-0 left-0 right-0 z-[9999] h-[4px] origin-left",
                className
            )}
            style={{ scaleX: scrollYProgress }}
        />
    );
};

export default ScrollProgress;
