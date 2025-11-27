"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const experiences = [
    {
        title: "Full-Stack Developer Intern",
        company: "VCODEZ Technologies",
        period: "Jan 2025 – Mar 2025",
        location: "Chennai, India",
        description: "Developed scalable backend APIs and optimized system performance.",
        achievements: [
            "Developed scalable backend APIs using Python (FastAPI) and Flask/Django.",
            "Improved API response time by ~30% through query & caching optimizations.",
            "Integrated frontend React components with backend endpoints.",
            "Supported deployment workflows and automated ETL tasks.",
        ],
    },
    {
        title: "Independent AI Projects (Personal)",
  company: "Self-Directed",
  period: "2023 – Present",
  location: "Remote / India",
  description: "Self-directed development of AI-driven tools and full-stack projects to deepen practical knowledge of LLMs, retrieval systems, and backend engineering. Focused on production-ready integrations, secure data handling, and automation workflows.",
  achievements: [
    "Designed and implemented Retrieval-Augmented Generation (RAG) pipelines for document search and context-aware responses using LangChain and vector stores.",
    "Built an AI-powered resume analyzer that extracts keywords, generates similarity scores, and suggests improvements using embeddings and FastAPI for model serving.",
    "Developed automation scripts and ETL pipelines to preprocess large datasets, improving data readiness for ML tasks and reducing manual work.",
    "Integrated OpenAI APIs and LLM chains into web applications for interactive insights, ensuring prompt engineering best practices and safe data handling.",
    "Packaged and deployed multiple projects as production-capable demos (Docker / Vercel) to validate end-to-end workflows and user experience."
        ],
    },
];

export function Experience() {
    return (
        <Section id="experience" className="bg-muted/5">
            <div className="container mx-auto px-6 max-w-[1000px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">
                        Professional <span className="text-accent">Experience</span>
                    </h2>
                    <p className="text-subtext max-w-xl mx-auto">
                        My journey in software development and AI engineering.
                    </p>
                </motion.div>

                <div className="relative border-l border-accent/20 ml-3 md:ml-6 space-y-12 pl-8 md:pl-12 py-4">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[41px] md:-left-[57px] top-0 w-6 h-6 rounded-full bg-bg border-2 border-accent flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            </div>

                            <Card className="p-6 md:p-8 relative hover:border-accent/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-text flex items-center gap-2">
                                            <Briefcase className="w-4 h-4 text-accent" />
                                            {exp.title}
                                        </h3>
                                        <p className="text-lg text-accent-2 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="text-sm text-subtext flex flex-col items-start md:items-end gap-1">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" /> {exp.period}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3" /> {exp.location}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-subtext mb-4 italic">{exp.description}</p>

                                <ul className="space-y-2">
                                    {exp.achievements.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-subtext/90">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
