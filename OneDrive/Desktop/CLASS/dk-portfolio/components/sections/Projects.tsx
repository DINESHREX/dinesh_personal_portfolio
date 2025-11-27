"use client";

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const projects = [
    {
        title: "RVM Rideway",
        role: "Frontend Developer — UI & API Integration",
        description: "Full-featured cab booking MVP with real-time tracking and booking management.",
        tags: ["React", "Node.js", "MongoDB", "Google Maps API", "JWT"],
        live: "https://rvm-rideway-mvp.vercel.app/",
        github: "https://github.com/DINESHREX/rvmrideway",
        image: "/thumbnails/rvm-rideway.png",
        featured: true,
    },
    {
        title: "AI Insight Dashboard",
        role: "Frontend Developer — Dashboard UI & AI API Integration",
        description: "AI-powered business analytics platform providing actionable insights from data.",
        tags: ["React", "FastAPI", "Chart.js", "OpenAI"],
        live: "https://aiinsightdashboard.vercel.app/",
        github: "https://github.com/DINESHREX/ai_insight_dashboard",
        image: "/thumbnails/ai-insight-dashboard.png",
        featured: true,
    },
    {
        title: "Hidden Safety Vault",
        role: "Full-Stack Developer — Backend & Security",
        description: "AES-encrypted hidden drive vault for secure local file storage.",
        tags: ["Python", "PyQt", "AES", "Cryptography"],
        live: null,
        github: "https://github.com/DINESHREX/HIDDEN-DRIVE-VAULT",
        image: "/thumbnails/hidden-safety-vault.png",
        featured: false,
    },
    {
        title: "Resume Matcher",
        role: "Full-Stack Developer — Backend ML Integration",
        description: "AI tool analyzing resumes against job descriptions to provide optimization tips.",
        tags: ["React", "FastAPI", "NLP", "Spacy"],
        live: "https://frontend-eight-tau-86.vercel.app/",
        github: "https://github.com/DINESHREX/Resumebuilder",
        image: "/thumbnails/resume-matcher.png",
        featured: false,
    },
    {
        title: "Business Landing Page",
        role: "Full-Stack Developer — UI/UX & Deployment",
        description: "High-conversion marketing website with modern animations and SEO optimization.",
        tags: ["React", "Tailwind CSS"],
        live: "https://business-landing-pro.vercel.app/",
        github: "https://github.com/DINESHREX/business-landing-page",
        image: "/thumbnails/business-landing-page.png",
        featured: false,
    },
    {
        title: "Portfolio",
        role: "Creator — Portfolio Design & Animations",
        description: "Personal portfolio site showcasing creative animations and GSAP interactions.",
        tags: ["React", "Tailwind", "GSAP"],
        live: "https://radi-tech.vercel.app/",
        github: "https://github.com/DINESHREX/portfolio",
        image: "/thumbnails/portfolio-v1.png",
        featured: false,
    },
];

export function Projects() {
    return (
        <Section id="projects">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">
                            Featured <span className="text-accent">Projects</span>
                        </h2>
                        <p className="text-subtext max-w-xl">
                            A selection of projects demonstrating my expertise in full-stack development and AI integration.
                        </p>
                    </div>
                    <Button variant="outline" className="shrink-0" href="https://github.com/DINESHREX" target="_blank">
                        View All on GitHub <Github className="ml-2 w-4 h-4" />
                    </Button>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Card
                            key={project.title}
                            hoverEffect
                            className="flex flex-col h-full group overflow-hidden"
                        >
                            <div className="h-48 mb-4 rounded-lg bg-muted/10 overflow-hidden relative">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <h3 className="text-xl font-bold text-text mb-1 group-hover:text-accent transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-xs font-medium text-accent-2 mb-3">
                                {project.role}
                            </p>

                            <p className="text-subtext text-sm mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="pill"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-3 mt-auto">
                                {project.live && (
                                    <Button size="sm" variant="primary" className="flex-1 btn-accent" href={project.live} target="_blank" rel="noopener noreferrer">
                                        Live Demo <ExternalLink className="ml-2 w-3 h-3" />
                                    </Button>
                                )}
                                <Button size="sm" variant="ghost" className="flex-1 btn-ghost" href={project.github} target="_blank" rel="noopener noreferrer">
                                    Code <Github className="ml-2 w-3 h-3" />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}
