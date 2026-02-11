'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference py-12">
            <nav className="architectural-grid">
                <div className="col-span-12 flex justify-between items-center text-white">
                    <div className="flex gap-12">
                        {siteConfig.navigation.map((item) => (
                            <Link key={item.name} href={item.href} className="text-[9px] font-black tracking-[0.5em] uppercase hover:opacity-50 transition-opacity">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <Link href="/" className="font-serif text-3xl uppercase tracking-[0.2em]">
                        {siteConfig.name}
                    </Link>
                    <div className="flex gap-8">
                        <span className="text-[9px] font-black tracking-[0.5em] uppercase cursor-pointer hover:opacity-50 transition-opacity">Login</span>
                        <span className="text-[9px] font-black tracking-[0.5em] uppercase cursor-pointer hover:opacity-50 transition-opacity">Cart (0)</span>
                    </div>
                </div>
            </nav>
        </header>
    );
}
