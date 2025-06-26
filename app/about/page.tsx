"use client";

import ShinyText from "@/components/ui/shiny-text";
import TiltedCard from "@/components/ui/tilted-card";
import { motion } from "framer-motion";
import { GithubIcon, HomeIcon, InfoIcon, LightbulbIcon, Link, MessageSquareIcon } from "lucide-react";
import {
  Code, BrainCircuit, Rocket, BookOpen, Laptop2, Settings, Cloud, GitBranch
} from "lucide-react";

export default function AboutPage() {
    const navLinks = [
        {
            title: "Home",
            icon: <HomeIcon className="h-full w-full text-white/80" />,
            href: "/",
        },
        {
            title: "About Me",
            icon: <InfoIcon className="h-full w-full text-white/80" />,
            href: "/about",
        },
        {
            title: "My Projects",
            icon: <LightbulbIcon className="h-full w-full text-white/80" />,
            href: "/#projects",
        },
        {
            title: "Contact",
            icon: <MessageSquareIcon className="h-full w-full text-white/80" />,
            href: "/#contact",
        },
        {
            title: "GitHub",
            icon: <GithubIcon className="h-full w-full text-white/80" />,
            href: "https://github.com/realishanpatra",
        },
    ];

    return (
        <main className="relative min-h-screen bg-black text-white px-6 py-12 overflow-hidden">
            <div className="sm:mt-16 max-w-4xl mx-auto">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    About
                    <span className="text-4xl md:text-5xl ml-3 font-extrabold mb-4">
                        <ShinyText
                            text="Me"
                            disabled={false}
                            speed={3}
                            className="text-4xl md:text-5xl font-extrabold mb-4"
                        />
                    </span>
                </motion.h1>

                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-lg text-white/80">
                        I'm <span className="text-white font-semibold">Ishan Patra</span>, a final-year Electronics and Telecommunication Engineering student at <span className="text-white font-semibold">PICT Pune</span>. I'm passionate about <span className="text-white">development</span>, <span className="text-white">innovation</span>, and <span className="text-white">entrepreneurship</span>—constantly exploring how technology can solve real-world problems.
                    </p>

                    <p className="text-lg text-white/80">
                        With hands-on experience in full-stack development and machine learning, I've built projects ranging from fake news detection models to social media platforms and music recommendation tools. I'm driven by a mission to bridge the gap between technology and society.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">My Vision</h2>
                    <p className="text-lg text-white/80">
                        I envision a world where innovative tech empowers communities. My goal is to turn ideas into impactful solutions using AI and modern development frameworks—helping people "actually make it" in the digital era.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Skills</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-white/90">
                        <div className="flex items-center gap-2"><Code size={20} /> C, C++, Python, JavaScript, TypeScript</div>
                        <div className="flex items-center gap-2"><Laptop2 size={20} /> React, Next.js, Node.js, Express</div>
                        <div className="flex items-center gap-2"><BrainCircuit size={20} /> ML: Pandas, Sklearn, Numpy</div>
                        <div className="flex items-center gap-2"><Rocket size={20} /> MongoDB, MySQL, SQL</div>
                        <div className="flex items-center gap-2"><GitBranch size={20} /> Git, Docker, AWS, Azure</div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
