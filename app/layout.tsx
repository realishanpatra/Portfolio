import { SharedNavbar } from "@/components/ui/shared-navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Beams from "@/components/ui/beam-bg";

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
                {children}
            </body>
            
        </html>
    );
}
