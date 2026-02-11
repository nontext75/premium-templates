import type { Metadata } from "next";
import { Public_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const publicSans = Public_Sans({
    subsets: ["latin"],
    variable: "--font-public",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

export const metadata: Metadata = {
    title: "LUMINOUS. | Architectural Spaces",
    description: "Curated objects for contemporary living.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${publicSans.variable} ${playfair.variable}`}>
            <body className="antialiased">
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
