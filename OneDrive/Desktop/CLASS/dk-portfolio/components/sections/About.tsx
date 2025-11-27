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
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-text">
                            About <span className="text-accent">Me</span>
                        </h2>
                        <div className="space-y-4 text-subtext leading-relaxed">
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

                        <div className="mt-8 grid grid-cols-2 gap-4">
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

                    <Card className="p-8">
                        <h3 className="text-xl font-bold mb-6 text-text">Technical Proficiency</h3>
                        <div className="space-y-6">
                            {skills.map((skill, index) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2 text-sm">
                                        <span className="text-text font-medium">{skill.name}</span>
                                        <span className="text-accent">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                                            className="h-full bg-gradient-to-r from-accent to-accent-2 rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </motion.div>
            </div>
        </Section>
    );
}
