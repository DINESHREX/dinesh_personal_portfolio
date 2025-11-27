"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section } from "@/components/ui/Section";

const certifications = [
    {
        name: "AWS Data Science Certification",
        issuer: "AWS",
        date: "2024",
        link: "#",
    },
    {
        name: "IoT & Digital Transformation",
        issuer: "Cisco Networking Academy",
        date: "2025",
        link: "#",
    },
];

export function Certifications() {
    return (
        <Section id="certifications">
            <div className="container mx-auto px-6 max-w-[1000px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">
                        Certifications & <span className="text-accent">Awards</span>
                    </h2>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4">
                    {certifications.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass px-6 py-3 rounded-full flex items-center gap-3 hover:border-accent/50 transition-colors group cursor-pointer"
                        >
                            <Award className="w-5 h-5 text-accent group-hover:text-accent-2 transition-colors" />
                            <div className="text-left">
                                <p className="font-semibold text-text text-sm group-hover:text-accent transition-colors">
                                    {cert.name}
                                </p>
                                <p className="text-xs text-subtext">
                                    {cert.issuer} • {cert.date}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </Section>
    );
}
