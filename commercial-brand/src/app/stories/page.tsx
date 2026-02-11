'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { journalEntries } from '@/lib/data';

export default function StoriesPage() {

    return (
        <main className="bg-white min-h-screen pt-40 pb-60">
            <div className="max-w-[1440px] mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-60 border-b border-black/10 pb-24">
                    <div className="space-y-8">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[14px] font-black tracking-tight text-[#ED008C] uppercase block"
                        >
                            Design Inquiry
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[6vw] font-black tracking-tighter leading-none"
                        >
                            Journal.
                        </motion.h1>
                    </div>
                    <div className="pb-4">
                        <span className="text-[12px] font-black tracking-tight text-[#707070] uppercase">Selected Readings for the modern mind</span>
                    </div>
                </div>

                {/* Organized Magazine Feed */}
                <div className="space-y-80">
                    {journalEntries.map((entry, i) => (
                        <Link href={`/stories/${entry.id}`} key={entry.id} className="block group">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-32 items-center cursor-pointer`}
                            >
                                <div className="flex-1 relative aspect-[16/10] lg:aspect-[4/5] overflow-hidden warm-shadow rounded-[1px]">
                                    <img
                                        src={entry.image}
                                        alt={entry.title}
                                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 contrast-105"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>
                                <div className="flex-1 space-y-12 max-w-xl">
                                    <div className="flex gap-8 items-center">
                                        <span className="text-[13px] font-black tracking-[0.6em] text-[#ED008C] uppercase">
                                            {entry.category}
                                        </span>
                                        <span className="h-px w-12 bg-[#ED008C]/20" />
                                    </div>
                                    <h3 className="text-5xl lg:text-6xl font-black tracking-tighter leading-[1.2] transition-all duration-500">
                                        {entry.title.split(' ').map((word, idx) => (
                                            <span key={idx} className={idx === 1 ? 'text-[#ED008C] font-normal outline-none' : ''}>{word} <br /></span>
                                        ))}
                                    </h3>
                                    <p className="text-2xl text-[#707070] font-medium leading-relaxed">
                                        "{entry.excerpt}"
                                    </p>
                                    <div className="pt-12">
                                        <button className="group flex items-center gap-6">
                                            <span className="text-[13px] font-black uppercase tracking-tight border-b-2 border-black pb-2 group-hover:border-black/30 group-hover:text-black/50 transition-all">
                                                Read Full Journal
                                            </span>
                                            <motion.span
                                                className="text-2xl font-black opacity-0 group-hover:opacity-100 transition-all translate-x-[-20px] group-hover:translate-x-0"
                                            >
                                                →
                                            </motion.span>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
