"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
    href?: string;
    target?: string;
    rel?: string;
    download?: string;
    children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", icon, children, href, ...props }, ref) => {
        const variants = {
            primary: "bg-accent text-accent-foreground hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] border border-transparent",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 border border-transparent",
            ghost: "bg-transparent text-text hover:bg-white/5 border border-transparent",
            outline: "bg-transparent text-text border border-glass-border hover:border-accent hover:text-accent",
        };

        const sizes = {
            sm: "h-8 px-3 text-xs",
            md: "h-10 px-4 text-sm",
            lg: "h-12 px-6 text-base",
        };

        const classes = cn(
            "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
            variants[variant],
            sizes[size],
            className
        );

        if (href) {
            return (
                <motion.a
                    href={href}
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className={classes}
                    {...(props as HTMLMotionProps<"a">)}
                >
                    {children}
                    {icon && <span className="ml-2">{icon}</span>}
                </motion.a>
            );
        }

        return (
            <motion.button
                ref={ref as React.Ref<HTMLButtonElement>}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className={classes}
                {...(props as HTMLMotionProps<"button">)}
            >
                {children}
                {icon && <span className="ml-2">{icon}</span>}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
