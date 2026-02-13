'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Header() {
    const navItems = [
        { name: 'Home', href: '#' },
        { name: 'Works', href: '#works' },
        { name: 'Service', href: '#service' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100"
        >
            <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
                <Link href="/" className="text-xl font-black tracking-tight text-[#0a0a12] mix-blend-difference hover:text-[#ff3b30] transition-colors z-50">
                    GP.
                </Link>
                <div className="flex gap-8">
                    {navItems.map((item, i) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link
                                href={item.href}
                                className="text-xs font-bold tracking-widest uppercase text-[#0a0a12] hover:text-[#ff3b30] transition-colors"
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </nav>
        </motion.header>
    );
}
