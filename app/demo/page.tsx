"use client";

import FloatingDockDemo from "@/components/floating-dock-demo";

export default function DemoPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-8 text-center">Floating Dock Demo</h1>
                <p className="text-lg text-center mb-12">
                    Hover over the dock at the bottom of this container to see the interactive effect
                </p>
                <div className="border border-border rounded-lg overflow-hidden bg-card">
                    <FloatingDockDemo />
                </div>
            </div>
        </div>
    );
}
