'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import Link from 'next/link';

export default function WorksPage() {
    return (
        <main className="bg-white min-h-screen pt-40 pb-40">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-40 border-b border-black/10 pb-20">
                    <div className="space-y-6">
                        <span className="text-[13px] font-black text-[#ED008C] uppercase block">Professional Archive</span>
                        <h1 className="text-6xl font-black tracking-tighter leading-none">Selected <br /> Movements.</h1>
                    </div>
                    <div className="flex gap-12 text-[12px] font-black uppercase text-black/30">
                        <button className="hover:text-[#ED008C] transition-colors pb-2 border-b border-[#ED008C]">All Sectors</button>
                        <button className="hover:text-[#ED008C] transition-colors pb-2 border-transparent">Design Systems</button>
                        <button className="hover:text-[#ED008C] transition-colors pb-2 border-transparent">UX Strategy</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-40">
                    {projects.map((project, idx) => (
                        <Link key={project.id} href={`/shop/${project.id}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[16/11] overflow-hidden bg-white mb-10 warm-shadow rounded-[1px]">
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 contrast-105"
                                    />
                                    <div className="absolute top-8 right-8">
                                        <span className="bg-black text-white px-5 py-2 text-[11px] font-black tracking-tight uppercase shadow-xl">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline border-b border-black/5 pb-4 group-hover:border-[#ED008C]/30 transition-colors">
                                        <h3 className="text-3xl font-black tracking-tighter uppercase group-hover:text-[#ED008C] transition-colors">{project.title}</h3>
                                        <span className="text-xl font-black tracking-tight text-black/20">{project.year}</span>
                                    </div>
                                    <p className="text-lg text-[#707070] font-medium leading-relaxed max-w-xl pr-12">{project.description}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
