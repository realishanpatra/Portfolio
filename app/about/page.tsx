"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { motion } from "framer-motion";
import { GithubIcon, HomeIcon, InfoIcon, LightbulbIcon, MessageSquareIcon } from "lucide-react";

export default function AboutPage() {
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
            href: "https://github.com",
        },
    ];

    return (
        <main className="relative min-h-screen bg-black text-white px-6 py-12 overflow-hidden">
            <div className="mt-20 max-w-4xl mx-auto">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    About NGMI
                </motion.h1>

                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-lg text-white/80">
                        NGMI (Not Gonna Make It) is a platform dedicated to helping students and professionals navigate
                        the challenging landscape of tech careers.
                    </p>

                    <p className="text-lg text-white/80">
                        Our mission is to transform the "Not Gonna Make It" mindset into "Actually Made It" through
                        AI-powered tools, resources, and community support.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Our Vision</h2>
                    <p className="text-lg text-white/80">
                        We believe that with the right tools and guidance, everyone can overcome career obstacles and
                        achieve their professional goals. Our AI-powered platform provides personalized insights and
                        recommendations to help you make informed decisions about your career path.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">The Team</h2>
                    <p className="text-lg text-white/80">
                        NGMI was founded by a group of tech professionals who experienced firsthand the challenges of
                        breaking into and advancing in the industry. Our diverse team brings together expertise in AI,
                        career development, and educational technology.
                    </p>
                </motion.div>
            </div>

            {/* Floating Dock - Fixed at the bottom */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
                <FloatingDock
                    items={navLinks}
                    desktopClassName="bg-black/40 border border-white/10 backdrop-blur-md"
                    mobileClassName="bg-black/40 border border-white/10 backdrop-blur-md"
                />
            </div>
        </main>
    );
}
