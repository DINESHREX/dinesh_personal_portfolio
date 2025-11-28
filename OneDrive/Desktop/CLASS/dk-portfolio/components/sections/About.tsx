"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const skills = [
    { name: "Python / Backend", level: 90 },
    { name: "AI / LLM Integration", level: 85 },
    { name: "React / Next.js", level: 80 },
    { name: "Database Design", level: 85 },
];

export function About() {
    return (
        <Section id="about">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {/* About Me Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-text">
                            About <span className="text-accent">Me</span>
                        </h2>
                        <div className="space-y-4 text-subtext leading-relaxed max-w-3xl">
                            <p>
                                I am a passionate AI Automation Engineer and Full Stack Developer with a knack for
                                solving complex problems. My journey involves building robust backend systems with
                                Python and creating intuitive user interfaces with React.
                            </p>
                            <p>
                                Currently, I focus on integrating Large Language Models (LLMs) into business
                                workflows to automate tasks and unlock new insights. I believe in writing clean,
                                maintainable code and designing accessible, user-centric applications.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
                            <div className="p-4 rounded-xl bg-card border border-glass-border text-center">
                                <h3 className="text-3xl font-bold text-accent">3+</h3>
                                <p className="text-sm text-subtext mt-1">Years Coding</p>
                            </div>
                            <div className="p-4 rounded-xl bg-card border border-glass-border text-center">
                                <h3 className="text-3xl font-bold text-accent-2">10+</h3>
                                <p className="text-sm text-subtext mt-1">Projects Built</p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Proficiency */}
                    <Card className="p-8">
                        <h3 className="text-xl font-bold mb-8 text-center text-text">Technical Proficiency</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {skills.map((skill, index) => {
                                const circumference = 2 * Math.PI * 45;
                                const strokeDashoffset = circumference - (skill.level / 100) * circumference;

                                return (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex flex-col items-center"
                                    >
                                        <div className="relative w-32 h-32 mb-4">
                                            <svg className="transform -rotate-90 w-32 h-32">
                                                <circle
                                                    cx="64"
                                                    cy="64"
                                                    r="45"
                                                    stroke="currentColor"
                                                    strokeWidth="8"
                                                    fill="none"
                                                    className="text-muted/20"
                                                />
                                                <motion.circle
                                                    cx="64"
                                                    cy="64"
                                                    r="45"
                                                    stroke="url(#gradient)"
                                                    strokeWidth="8"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    initial={{
                                                        strokeDasharray: circumference,
                                                        strokeDashoffset: circumference
                                                    }}
                                                    whileInView={{
                                                        strokeDashoffset: strokeDashoffset
                                                    }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                                                />
                                                <defs>
                                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="rgb(6, 182, 212)" />
                                                        <stop offset="100%" stopColor="rgb(59, 130, 246)" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>

                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <motion.span
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                                    className="text-2xl font-bold text-accent"
                                                >
                                                    {skill.level}%
                                                </motion.span>
                                            </div>
                                        </div>

                                        <span className="text-sm font-medium text-text text-center">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </Card>
                </motion.div>
            </div>
        </Section>
    );
}
