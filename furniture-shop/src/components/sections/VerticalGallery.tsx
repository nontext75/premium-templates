'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const products = [
    {
        id: 'lounge-chair',
        title: 'The Lounge Chair',
        category: 'SEATING',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200'
    },
    {
        id: 'marble-table',
        title: 'Marble Side Table',
        category: 'TABLES',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200'
    },
    {
        id: 'floor-lamp',
        title: 'Arc Floor Lamp',
        category: 'LIGHTING',
        year: '2023',
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200'
    }
];

export default function VerticalGallery() {
    return (
        <section className="bg-brand-primary py-32 text-brand-secondary">
            <div className="architectural-grid mb-24">
                <div className="col-span-12 flex items-end justify-between">
                    <h2 className="text-monumental text-brand-secondary text-[8vw]">Selected <br /> Objects</h2>
                    <span className="text-metadata text-brand-secondary/60 mb-4 hidden md:block">Scroll to Explore</span>
                </div>
            </div>

            <div className="architectural-grid">
                <div className="col-span-12 space-y-32">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8 }}
                            className="group grid grid-cols-12 gap-8 md:gap-12 cursor-pointer"
                        >
                            {/* Image */}
                            <div className="col-span-12 md:col-span-8 relative overflow-hidden aspect-[16/9] md:aspect-[21/9]">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-transparent transition-all duration-500" />
                            </div>

                            {/* Info */}
                            <div className="col-span-12 md:col-span-4 flex flex-col justify-between py-2 border-t border-brand-secondary/20 md:border-t-0">
                                <div>
                                    <span className="text-metadata text-brand-accent mb-2 block">{product.category}</span>
                                    <h3 className="font-space font-bold text-3xl md:text-4xl text-brand-secondary mb-4">{product.title}</h3>
                                    <span className="text-[10px] font-mono text-brand-secondary/60 block">{product.year} / IN STOCK</span>
                                </div>

                                <div className="mt-8 md:mt-0">
                                    <Link href={`/product/${product.id}`} className="inline-block text-[10px] font-black uppercase tracking-[0.3em] border border-brand-secondary/20 px-6 py-3 hover:bg-brand-secondary hover:text-brand-primary transition-all">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
