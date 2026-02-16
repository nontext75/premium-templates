'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-brand-primary text-brand-secondary">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000"
                    alt="Luminous Furniture Studio"
                    className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="architectural-grid relative z-10 h-full">
                <div className="col-span-12 flex h-full flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-4 md:space-y-8"
                    >
                        <div className="flex items-center gap-4 overflow-hidden">
                            <motion.span
                                initial={{ x: -100 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="h-[1px] w-12 bg-brand-accent md:w-24"
                            />
                            <span className="text-metadata text-white/90">EST. 2024 / COPENHAGEN</span>
                        </div>

                        <h1 className="text-monumental text-white">
                            LUMINOUS <br />
                            ARCH.
                        </h1>

                        <p className="max-w-md text-sm leading-relaxed text-white/80 md:text-base font-sans">
                            Curated furniture for the modern sanctuary. <br />
                            Where form meets function in perfect silence.
                        </p>

                        <div className="pt-8">
                            <Link
                                href="/collection"
                                className="group relative inline-flex items-center gap-4 overflow-hidden border border-white/40 bg-transparent px-8 py-4 text-[11px] font-black uppercase tracking-[0.3em] text-white transition-all hover:bg-white hover:text-black"
                            >
                                <span className="relative z-10">View Collection</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Metadata */}
                <div className="absolute bottom-12 left-0 right-0 w-full px-6 md:px-12">
                    <div className="grid grid-cols-12 w-full border-t border-white/20 pt-6">
                        <div className="col-span-6 md:col-span-3">
                            <span className="text-metadata block text-white/60">Materiality</span>
                            <span className="text-[10px] uppercase text-white">Sustainable Oak</span>
                        </div>
                        <div className="col-span-6 md:col-span-3 text-right md:text-left">
                            <span className="text-metadata block text-white/60">New Arrival</span>
                            <span className="text-[10px] uppercase text-white">The Lounge Chair 01</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
