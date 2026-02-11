'use client';

import { motion } from 'framer-motion';
import { siteConfig, categories } from '@/lib/site-config';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="bg-white min-h-screen">
            {/* Architectural Grid Hero */}
            <section className="architectural-grid h-screen items-center">
                <div className="col-span-12 md:col-span-9 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-metadata mb-8 block">EST. 2024 / DESIGN STUDIO</span>
                        <h1 className="text-monumental">
                            SPACES <br />
                            FOR THE <br />
                            <span className="text-brand-accent italic">MODERN SOUL.</span>
                        </h1>
                    </motion.div>
                </div>
                <div className="col-span-12 md:col-span-3 h-full flex flex-col justify-end pb-24 space-y-8">
                    <p className="text-sm leading-relaxed text-brand-secondary">
                        We curate and create objects that define the dialogue between humans and their environments.
                    </p>
                    <Link href="/collection" className="inline-block border-b-2 border-black pb-2 text-[11px] font-black uppercase tracking-widest hover:opacity-50 transition-all">
                        Explore Collection
                    </Link>
                </div>
            </section>

            {/* Immersive Gallery Section */}
            <section className="py-40">
                <div className="architectural-grid">
                    <div className="col-span-12 mb-24 flex justify-between items-end">
                        <h2 className="font-serif text-5xl uppercase tracking-tighter">Collections</h2>
                        <span className="text-metadata">01 — 04</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-y border-black/5">
                    {categories.map((cat, i) => (
                        <div key={cat.id} className="group relative aspect-[4/5] overflow-hidden border-r border-black/5 last:border-r-0">
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                                <h3 className="font-serif text-3xl uppercase tracking-widest mb-4">{cat.name}</h3>
                                <Link href={`/collection/${cat.id}`} className="text-[10px] font-black tracking-[0.4em] border border-white/40 px-6 py-2 hover:bg-white hover:text-black transition-all">
                                    VIEW
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Product Section */}
            <section className="py-60 bg-black text-white overflow-hidden">
                <div className="architectural-grid">
                    <div className="col-span-12 md:col-span-6">
                        <img
                            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200"
                            className="w-full grayscale opacity-80"
                            alt="Featured"
                        />
                    </div>
                    <div className="col-span-12 md:col-span-6 flex flex-col justify-center pl-0 md:pl-24 space-y-12">
                        <span className="text-metadata text-white/40 tracking-[0.8em]">Material Focus</span>
                        <h2 className="font-serif text-[6vw] leading-none uppercase">Pure <br /> Materiality.</h2>
                        <p className="text-white/60 text-lg leading-relaxed max-w-md">
                            Stone, wood, and steel. Our objects celebrate the raw beauty of natural materials, refined through architectural precision.
                        </p>
                        <Link href="/about" className="inline-block border border-white/20 w-fit px-12 py-4 text-[11px] font-black uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all">
                            Our Story
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
