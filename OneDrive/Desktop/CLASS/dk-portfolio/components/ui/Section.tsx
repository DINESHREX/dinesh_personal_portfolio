"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLMotionProps<"section"> {
    id?: string;
    className?: string;
    delay?: number;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, children, delay = 0, ...props }, ref) => {
        return (
            <motion.section
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay, ease: "easeOut" }}
                className={cn("py-20 md:py-32 relative", className)}
                {...props}
            >
                {children}
            </motion.section>
        );
    }
);
Section.displayName = "Section";

export { Section };
