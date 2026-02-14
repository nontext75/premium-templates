'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { motion } from 'framer-motion';

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 mix-blend-difference text-white">
            <div className="flex items-start justify-between border-b border-white/20 pb-6">
                {/* Logo - Fixed Left */}
                <Link href="/" className="group flex flex-col items-start gap-1">
                    <div className="font-chakra font-bold text-xl leading-none tracking-[0.05em] uppercase">
                        PLA.TONE
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="h-[1px] w-8 bg-white/50 transition-all group-hover:w-12"></span>
                        <span className="font-space font-bold text-[10px] tracking-[0.2em] opacity-80">STUDIO</span>
                    </div>
                </Link>

                {/* Desktop Navigation - Right Aligned */}
                <nav className="hidden md:flex items-center gap-12">
                    {siteConfig.navigation.map((item, i) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative text-[10px] font-bold tracking-[0.3em] font-space uppercase hover:opacity-100 opacity-60 transition-opacity"
                        >
                            <span className="mr-2 text-brand-accent opacity-0 hover:opacity-100 transition-opacity absolute -left-4">/</span>
                            {item.name}
                        </Link>
                    ))}

                    <div className="h-4 w-[1px] bg-white/30 mx-4"></div>

                    <div className="flex gap-6">
                        <span className="text-[10px] font-bold tracking-[0.3em] font-space uppercase cursor-pointer hover:opacity-50 transition-opacity">CART(0)</span>
                    </div>
                </nav>

                {/* Mobile Menu Icon (Placeholder) */}
                <div className="md:hidden">
                    <div className="space-y-1.5 cursor-pointer">
                        <span className="block w-8 h-[2px] bg-white"></span>
                        <span className="block w-8 h-[2px] bg-white"></span>
                    </div>
                </div>
            </div>
        </header>
    );
}
