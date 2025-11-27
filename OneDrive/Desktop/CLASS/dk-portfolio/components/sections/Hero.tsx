"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function Hero() {
    return (
        <Section className="min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
            {/* Background Effect */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-bg to-bg opacity-50" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-2/10 rounded-full blur-[100px] animate-pulse-slow" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-accent font-medium tracking-wide mb-4">
                        HELLO, I'M DINESH KUMAR S
                    </h2>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-text">
                        Building <span className="accent-text animate-gradient">Intelligent</span> <br />
                        Digital Experiences
                    </h1>

                    <p className="text-subtext text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        AI Automation Engineer & Python Backend Developer specializing in building
                        scalable web applications and integrating LLMs for business solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="group w-full sm:w-auto btn-accent" href="#projects">
                            View Projects
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="lg"
                            className="w-full sm:w-auto btn-ghost"
                            href="/Dinesh_Combined_Resume.pdf"
                            download="Dinesh_Combined_Resume.pdf"
                            target="_blank"
                        >
                            Download Resume
                            <Download className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
