"use client";

import ShinyText from "@/components/ui/shiny-text";
import TiltedCard from "@/components/ui/tilted-card";
import { motion } from "framer-motion";
import { GithubIcon, HomeIcon, InfoIcon, LightbulbIcon, Link, MessageSquareIcon } from "lucide-react";

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
            href: "https://github.com/NgmiClub",
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
                            text="NGMI"
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

                    <h2 className="text-2xl font-bold mt-20 mb-4 text-center">Founders</h2>
                    <div className="flex flex-col sm:flex-row gap-20 sm:gap-40 items-center justify-center mt-10 mb-10">
                        <a href="/about/chirag">
                        <TiltedCard
                            imageSrc="https://i.pinimg.com/736x/e0/db/af/e0dbaf44dba1c4922044c586aa3ef814.jpg"
                            altText="Chirag"
                            captionText="Chirag"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={<p className="tilted-card-demo-text">Chirag</p>}
                        /></a>
                        <a href="/about/ishan">
                        <TiltedCard
                            imageSrc="https://i.pinimg.com/736x/d1/69/39/d16939ff47c6b7b30743082ef2db5d30.jpg"
                            altText="Ishan"
                            captionText="Ishan"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={<p className="tilted-card-demo-text">Ishan</p>}
                        />
                        </a>
                    </div>
                    
                </motion.div>
            </div>
        </main>
    );
}
