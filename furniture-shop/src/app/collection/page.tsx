'use client';

import { motion } from 'framer-motion';

const collections = [
    { title: "THE MONOLITH SERIES", category: "SEATING", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200" },
    { title: "ARCHITECTURAL TABLES", category: "TABLES", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200" },
    { title: "LIGHTING OBJECTS", category: "LIGHTING", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200" }
];

export default function CollectionPage() {
    return (
        <main className="bg-white min-h-screen pt-40 pb-40">
            <div className="architectural-grid">
                <div className="col-span-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <span className="text-metadata">02 — INVENTORY</span>
                        <h1 className="font-serif text-[10vw] leading-none uppercase">Collections.</h1>
                    </motion.div>
                </div>

                <div className="col-span-12 space-y-40">
                    {collections.map((item, i) => (
                        <div key={i} className="grid grid-cols-12 gap-12 group cursor-pointer">
                            <div className="col-span-12 md:col-span-7 overflow-hidden">
                                <img
                                    src={item.image}
                                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 aspect-video"
                                    alt={item.title}
                                />
                            </div>
                            <div className="col-span-12 md:col-span-5 flex flex-col justify-center space-y-8">
                                <span className="text-metadata">{item.category}</span>
                                <h3 className="font-serif text-5xl uppercase leading-tight">{item.title}</h3>
                                <p className="text-brand-secondary leading-relaxed">
                                    A curated selection of pieces that embody our commitment to form, function, and the honesty of materials.
                                </p>
                                <div className="pt-8">
                                    <span className="text-[11px] font-black uppercase tracking-[0.5em] border-b border-black pb-2 group-hover:opacity-50 transition-opacity">
                                        View Collection
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
