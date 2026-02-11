import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "NSIDE | Interior Design",
    description: "Premium Interior Design Agency Template",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className={inter.variable}>
            <body className="antialiased">
                <Header />
                {children}
            </body>
        </html>
    );
}
