"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
    hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = false, children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                initial={hoverEffect ? { opacity: 0, y: 20 } : undefined}
                whileInView={hoverEffect ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true }}
                whileHover={hoverEffect ? { y: -5, scale: 1.01 } : undefined}
                className={cn(
                    "glass rounded-2xl p-6 shadow-[0_8px_24px_rgba(3,7,18,0.6)] transition-all duration-300",
                    className
                )}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);
Card.displayName = "Card";

export { Card };
