"use client";

import ShinyText from "@/components/ui/shiny-text";
import { GithubIcon, GlobeIcon, LinkedinIcon } from "lucide-react";


const ishan = {
    name: "Ishan Patra",
    image: "https://i.pinimg.com/736x/d1/69/39/d16939ff47c6b7b30743082ef2db5d30.jpg",
    bio: `Ishan is the co-founder of NGMI. Loves solving problems at scale and empowering others through technology. He is dedicated to building impactful products and fostering innovation in tech communities.`,
    socials: [
        { icon: <GithubIcon className="w-5 h-5" />, url: "https://github.com/realishanpatra", label: "GitHub" },
        { icon: <LinkedinIcon className="w-5 h-5" />, url: "https://linkedin.com/in/ishan-patra-407a74257", label: "LinkedIn" },
        { icon: <GlobeIcon className="w-5 h-5" />, url: "https://ishanpatra.com", label: "Website" },
    ],
};

export default function IshanPage() {
    return (
        <main className="relative min-h-screen bg-black text-white px-6 py-12 overflow-hidden sm:mt-65">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center sm:gap-12 md:gap-12 ">
                <img
                    src={ishan.image}
                    alt={ishan.name}
                    className="object-cover rounded-xl mb-6 md:mb-0 shadow-lg border border-white/10 hover:scale-105 transition-all duration-300 sm:w-48 sm:h-48 md:w-64 md:h-64"
                />
                <div className="flex-1 text-center md:text-left">
                    <ShinyText text={ishan.name} speed={2.5} className="text-4xl font-bold mb-2" />
                    <p className="text-white/80 text-lg mb-4 sm:justify-center">{ishan.bio}</p>
                    <div className="flex justify-center md:justify-start gap-5 mt-4">
                        {ishan.socials.map(social => (
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
