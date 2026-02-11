'use client';

import Link from 'next/link';

export function Header() {
    const navItems = [
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
        { name: 'About us', href: '/about' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 mix-blend-diff py-8 px-6 md:px-12">
            <nav className="flex justify-between items-center text-white">
                <Link href="/" className="text-sm font-black tracking-[-0.05em] uppercase">
                    NSIDE.
                </Link>
                <div className="flex gap-8 md:gap-16">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-[9px] font-bold tracking-[0.5em] uppercase hover:opacity-50 transition-opacity"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}
