// app/page.tsx (Landing Page with Refined Header, Instant Pop-in, and Full Width Header)

"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import GlitchText from "@/components/ui/glitch-text";
import ShinyText from "@/components/ui/shiny-text";
import Beams from "@/components/ui/beam-bg";
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

const upcoming = [{ name: "AI Resume Analyzer" }, { name: "Internship Radar" }, { name: "Company Culture Detector" }];

export default function HomePage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

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
            href: "https://github.com",
        },
    ];

    return (
        <main className="relative min-h-screen bg-black text-white px-6 py-12 overflow-hidden">
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
            {loading ? (
                <motion.div
                    key="logo-loader"
                    className="flex items-center justify-center min-h-screen relative"
                    initial={{ rotate: 0, scale: 1, opacity: 1 }}
                    animate={{ rotate: -360, scale: 0.1, opacity: 0 }}
                    transition={{ duration: 5, ease: "easeInOut" }}
                >
                    <motion.div
                        className="absolute w-[500px] h-[500px] border-4 border-white rounded-full animate-spin-slow"
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 0, scale: 0.1 }}
                        transition={{ duration: 5, ease: "easeInOut" }}
                    />
                    <motion.img
                        src="/N.svg"
                        alt="NGMI Logo"
                        className="w-[420px] h-[420px] object-cover z-10"
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 0.1, opacity: 0 }}
                        transition={{ duration: 5, ease: "easeInOut" }}
                    />
                </motion.div>
            ) : (
                // <AnimatePresence>
                <div>
                        {/* Hero */}
                        <section className="mt-65 text-center relative z-10">
                            <ShinyText text="NGMI" disabled={false} speed={3} className="text-6xl sm:text-9xl md:text-9xl scale-150 font-extrabold mb-4" />

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
                                            background: "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                {upcoming.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 cursor-not-allowed"
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
                            <div className="max-w-md mx-auto bg-white/5 border border-white/10 rounded-xl p-6">
                                <p className="text-center text-white/70 mb-6">
                                    Have questions or want to collaborate? Reach out to us.
                                </p>
                                <div className="text-center">
                                    <a
                                        href="mailto:contact@ngmi.club"
                                        className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                                    >
                                        contact@ngmi.club
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Footer */}
                        <footer className="mt-32 border-t border-white/10 text-sm text-center py-6 text-white/50 relative z-10">
                            &copy; 2025 NGMI. Built by the NGMI team.
                        </footer>

                        {/* Floating Dock - Fixed at the bottom */}
                        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
                            <FloatingDock
                                items={navLinks}
                                desktopClassName="bg-black/40 border border-white/10 backdrop-blur-md"
                                mobileClassName="bg-black/40 border border-white/10 backdrop-blur-md"
                            />
                        </div>
                    </div>
                
            )}
            
        </main>
    );
}
