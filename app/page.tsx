// app/page.tsx (Landing Page with Refined Header, Instant Pop-in, and Full Width Header)

"use client";

import Beams from "@/components/ui/beam-bg";
import ShinyText from "@/components/ui/shiny-text";
import { AnimatePresence, motion } from "framer-motion";
import { GithubIcon, HomeIcon, InfoIcon, LightbulbIcon, MessageSquareIcon } from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
    {
        name: "Placement Predictor",
        date: "Released: June 2025",
        link: "https://placements.ngmi.club",
        image: "https://placements.ngmi.club/og-image.png",
        description:
            "An AI-based tool that analyzes coding profiles to predict placement success, eligibility, and salary range.",
    },
];

const upcoming = [{ name: "AI Resume Analyzer" }, { name: "Internship Radar" }];

export default function HomePage() {
    const [loading, setLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => {
                setLoading(false);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            // Wait for fade out before showing content
            const fadeTimer = setTimeout(() => {
                setShowContent(true);
            }, 800); // match fade out duration
            return () => clearTimeout(fadeTimer);
        }
    }, [loading]);

    const navLinks = [
        {
            title: "Home",
            icon: <HomeIcon className="h-full w-full text-white/80" />,
            href: "/",
        },
        {
            title: "About",
            icon: <InfoIcon className="h-full w-full text-white/80" />,
            href: "/about",
        },
        {
            title: "Projects",
            icon: <LightbulbIcon className="h-full w-full text-white/80" />,
            href: "#projects",
        },
        {
            title: "Contact",
            icon: <MessageSquareIcon className="h-full w-full text-white/80" />,
            href: "#contact",
        },
        {
            title: "GitHub",
            icon: <GithubIcon className="h-full w-full text-white/80" />,
            href: "https://github.com/NgmiClub",
        },
    ];

    return (
        <main className="relative min-h-screen bg-black text-white px-6 py-12 overflow-hidden">
            <AnimatePresence>
                {loading && (
                    <motion.div
                        key="loader"
                        className="fixed inset-0 flex items-center justify-center bg-black z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <ShinyText
                            text="NGMI"
                            disabled={false}
                            speed={3}
                            className="text-6xl sm:text-9xl md:text-9xl scale-150 font-extrabold mb-4"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {!loading && showContent && (
                    <motion.div
                        key="main-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Beams BG only after loading is done */}
                        <div style={{ width: "100%", height: "80%", position: "fixed", top: 0, left: 0, zIndex: 0 }}>
                            <Beams
                                beamWidth={3}
                                beamHeight={30}
                                beamNumber={20}
                                lightColor="#ffffff"
                                speed={2}
                                noiseIntensity={1.75}
                                scale={0.2}
                                rotation={30}
                            />
                        </div>
                        {/* Hero */}
                        <section className="mt-65 text-center relative z-10">
                            <ShinyText
                                text="NGMI"
                                disabled={false}
                                speed={3}
                                className="text-6xl sm:text-9xl md:text-9xl scale-150 font-extrabold mb-4"
                            />

                            <motion.p
                                className="text-xl sm:text-2xl md:text-3xl text-white/70 mt-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                Not Gonna Make It — until you actually do.
                            </motion.p>
                        </section>

                        {/* Current Project */}
                        <section id="projects" className="mt-85 relative z-10">
                            <h2 className="text-3xl font-semibold text-center mb-10">Current Project</h2>
                            <div className="flex justify-center items-center">
                                {projects.map((project, index) => (
                                    <motion.a
                                        key={index}
                                        href={project.link}
                                        className="bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-2xl hover:shadow-white/20 hover:scale-[1.02] transition-all duration-300 hover:bg-white/10 max-w-lg w-full"
                                        whileHover={{ scale: 1.03 }}
                                        style={{
                                            background:
                                                "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                                        }}
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="rounded-lg w-full h-auto object-cover mb-4"
                                        />
                                        <h3 className="text-xl font-bold mb-1 text-white/90">{project.name}</h3>
                                        <p className="text-sm text-white/60 mb-1">{project.date}</p>
                                        <p className="text-sm text-white/80">{project.description}</p>
                                    </motion.a>
                                ))}
                            </div>
                        </section>

                        {/* Upcoming Projects */}
                        <section className="mt-28 relative z-10">
                            <h2 className="text-3xl font-semibold text-center mb-10">Coming Soon</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                {upcoming.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 cursor-not-allowed hover:scale-105 transition-all duration-300"
                                    >
                                        <div className="h-40 bg-white/5 rounded-lg mb-4" />
                                        <h3 className="text-lg font-semibold blur-sm">{item.name}</h3>
                                        <p className="text-sm blur-sm">Coming Soon</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Contact Section */}
                        <section id="contact" className="mt-28 relative z-10">
                            <h2 className="text-3xl font-semibold text-center mb-10">Get in Touch</h2>
                            <div className="max-w-md mx-auto bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
                                <p className="text-center text-white/70 mb-6">
                                    Have questions or want to collaborate? Reach out to us.
                                </p>
                                <div className="text-center">
                                    <a
                                        href="mailto:contact@ngmi.club"
                                        className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all hover:scale-105 duration-300"
                                    >
                                        ngmi.tech@gmail.com
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Footer */}
                        <footer className="mt-32 border-t border-white/10 text-sm text-center py-6 text-white/50 relative z-10">
                            &copy; 2025 NGMI. Built by the NGMI team.
                        </footer>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
