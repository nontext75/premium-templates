'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/site-config';

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen pt-40">
            <div className="architectural-grid">
                <div className="col-span-12 md:col-span-6 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-metadata text-brand-secondary">03 — PHILOSOPHY</span>
                        <h1 className="font-serif text-[8vw] leading-none uppercase mt-8">
                            Our <br /> Legacy.
                        </h1>
                    </motion.div>
                </div>
                <div className="col-span-12 md:col-span-6 flex flex-col justify-center space-y-8">
                    <p className="text-xl leading-relaxed text-brand-secondary">
                        LUMINOUS was founded on the belief that furniture is not just functional; it is the skeleton of our daily narratives.
                    </p>
                    <p className="text-lg leading-relaxed text-brand-secondary/70">
                        Every piece in our collection is a testament to architectural precision and the raw honesty of natural materials. We don't follow trends; we define space.
                    </p>
                </div>
            </div>

            <section className="mt-40 border-y border-black/5 py-32">
                <div className="architectural-grid">
                    <div className="col-span-12 md:col-span-4 space-y-6">
                        <span className="text-metadata">CRAFTSMANSHIP</span>
                        <h3 className="font-serif text-3xl uppercase">The Human Touch</h3>
                        <p className="text-sm text-brand-secondary">Hand-finished by master artisans with decades of experience.</p>
                    </div>
                    <div className="col-span-12 md:col-span-4 space-y-6 border-l border-black/5 pl-8">
                        <span className="text-metadata">SUSTAINABILITY</span>
                        <h3 className="font-serif text-3xl uppercase">Earth First</h3>
                        <p className="text-sm text-brand-secondary">Ethically sourced wood and recycled steel components.</p>
                    </div>
                    <div className="col-span-12 md:col-span-4 space-y-6 border-l border-black/5 pl-8">
                        <span className="text-metadata">INNOVATION</span>
                        <h3 className="font-serif text-3xl uppercase">Future Built</h3>
                        <p className="text-sm text-brand-secondary">Integrating modern ergonomics with classic silhouettes.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
