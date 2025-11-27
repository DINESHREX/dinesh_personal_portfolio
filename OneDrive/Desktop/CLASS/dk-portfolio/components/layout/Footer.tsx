"use client";

import * as React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-12 border-t border-glass-border bg-bg relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />

            <div className="container mx-auto px-6 max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <p className="text-text font-bold text-lg">DINESH KUMAR S</p>
                    <p className="text-subtext text-sm mt-1">AI Automation Engineer & Full Stack Developer</p>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/DINESHREX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-subtext hover:text-accent transition-colors hover:scale-110 transform duration-200"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://linkedin.com/in/dinesh1203"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-subtext hover:text-accent transition-colors hover:scale-110 transform duration-200"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="mailto:dineshselvakumar0312@gmail.com"
                        className="text-subtext hover:text-accent transition-colors hover:scale-110 transform duration-200"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>
                </div>

                <div className="text-subtext text-xs text-center md:text-right">
                    <p>© {new Date().getFullYear()} All rights reserved.</p>
                    <p className="mt-1 opacity-60">Built with Next.js & Tailwind</p>
                </div>
            </div>
        </footer>
    );
}
