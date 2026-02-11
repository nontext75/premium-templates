import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'RAY | UI/UX Designer Portfolio',
    description: 'Design Beyond the Ordinary. Authentic digital experiences and strategic UI/UX design.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable}`}>
            <body className="antialiased font-inter bg-[#F5F5F0]">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
