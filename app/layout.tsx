import { SharedNavbar } from "@/components/ui/shared-navbar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "NGMI - Not Gonna Make It",
    description: "Not Gonna Make It — until you actually do.",
    icons: {
        icon: "/N.svg",
    },
    openGraph: {
        images: [
            {
                url: "/og-image.png",
            },
        ],
        title: "NGMI - Not Gonna Make It",
        description: "Not Gonna Make It — until you actually do.",
        url: "https://ngmi.club",
        siteName: "NGMI",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "NGMI - Not Gonna Make It",
        description: "Not Gonna Make It — until you actually do.",
        images: ["/og-image.png"],
    },
    alternates: {
        canonical: "https://ngmi.club",
    },
    robots: {
        index: true,
        follow: true,
    },
    manifest: "/manifest.json",
    category: "technology",
    keywords: ["NGMI", "Not Gonna Make It", "AI", "Career", "Education"],
    authors: [
        { name: "Chirag", url: "https://chirxg.is-a.dev" },
        { name: "Ishan", url: "https://ishanpatra.com" },
    ],
    creator: "Chirag",
    publisher: "Chirag",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://ngmi.club"),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-black text-white antialiased`}
            >
                <SharedNavbar />
                <SmoothCursor />
                {children}
            </body>
        </html>
    );
}
