"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import {
    Cpu,
    Database,
    Layout,
    Terminal,
    Server,
    Code2,
    BrainCircuit,
    Wrench
} from "lucide-react";

const skillGroups = [
    {
        category: "AI & LLM",
        icon: <BrainCircuit className="w-6 h-6 text-accent" />,
        skills: ["OpenAI API", "LangChain", "RAG Pipelines", "Hugging Face", "Prompt Engineering", "Fine-tuning"],
    },
    {
        category: "Backend Development",
        icon: <Server className="w-6 h-6 text-accent-2" />,
        skills: ["Python", "FastAPI", "Node.js", "Django", "REST APIs", "Microservices"],
    },
    {
        category: "Frontend Engineering",
        icon: <Layout className="w-6 h-6 text-success" />,
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    },
    {
        category: "Database & Tools",
        icon: <Database className="w-6 h-6 text-warning" />, // Warning color not defined, using text-accent or similar
        skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Git", "AWS"],
    },
];

export function Skills() {
    return (
        <Section id="skills" className="bg-bg/50">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">
                        Technical <span className="text-accent">Arsenal</span>
                    </h2>
                    <p className="text-subtext max-w-2xl mx-auto">
                        A comprehensive toolkit I use to build scalable, intelligent, and performant applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillGroups.map((group, index) => (
                        <Card
                            key={group.category}
                            hoverEffect
                            className="h-full border-t-2 border-t-transparent hover:border-t-accent transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-lg bg-accent/10">
                                    {group.icon}
                                </div>
                                <h3 className="font-bold text-lg text-text">{group.category}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-muted/10 text-subtext border border-glass-border hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}
