"use client";

import ShinyText from "@/components/ui/shiny-text";
import { GithubIcon, GlobeIcon, LinkedinIcon } from "lucide-react";

const chirag = {
    name: "Chirag Dave",
    image: "https://i.pinimg.com/736x/e0/db/af/e0dbaf44dba1c4922044c586aa3ef814.jpg",
    bio: `Chirag is the co-founder of NGMI. Passionate about AI, education, and building tools for the next generation of tech talent. He believes in empowering others through technology and community.`,
    socials: [
        { icon: <GithubIcon className="w-5 h-5" />, url: "https://github.com/definitelynotchirag", label: "GitHub" },
        {
            icon: <LinkedinIcon className="w-5 h-5" />,
            url: "https://linkedin.com/in/chirag-dave-751a91249",
            label: "LinkedIn",
        },
        { icon: <GlobeIcon className="w-5 h-5" />, url: "https://chirxg.is-a.dev", label: "Website" },
    ],
};

export default function ChiragPage() {
    return (
        <main className="relative min-h-screen bg-black text-white px-6 py-12 overflow-hidden sm:mt-65">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center sm:gap-12 md:gap-12 ">
                <img
                    src={chirag.image}
                    alt={chirag.name}
                    className="object-cover rounded-xl mb-6 md:mb-0 shadow-lg border border-white/10 hover:scale-105 transition-all duration-300 sm:w-48 sm:h-48 md:w-64 md:h-64"
                />
                <div className="flex-1 text-center md:text-left">
                    <ShinyText text={chirag.name} speed={2.5} className="text-4xl font-bold mb-2" />
                    <p className="text-white/80 text-lg mb-4 sm:justify-center">{chirag.bio}</p>
                    <div className="flex justify-center md:justify-start gap-5 mt-4">
                        {chirag.socials.map(social => (
                            <a
                                key={social.label}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 text-white/80 hover:text-white"
                            >
                                {social.icon}
                                <span className="hidden sm:inline text-sm font-medium">{social.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
