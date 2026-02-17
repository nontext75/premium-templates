import type { Metadata } from "next";
import { Public_Sans, Space_Grotesk, Chakra_Petch, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/SmoothScroll";

const publicSans = Public_Sans({
    subsets: ["latin"],
    variable: "--font-public",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space",
});

const chakraPetch = Chakra_Petch({
    weight: ['400', '700'],
    subsets: ["latin"],
    variable: "--font-chakra",
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
        <html lang="en" className={`${publicSans.variable} ${spaceGrotesk.variable} ${chakraPetch.variable} ${playfair.variable}`}>
            <body className="antialiased">
                <SmoothScroll>
                    <Header />
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
