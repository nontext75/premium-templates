'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import Link from 'next/link';

export default function ProjectDetailPage() {
    const params = useParams();
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        return (
            <div className="h-screen flex items-center justify-center bg-[#F5F5F0]">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl font-black uppercase">Project Not Found</h1>
                    <Link href="/shop" className="inline-block border-b-2 border-black pb-1 text-[10px] font-black uppercase tracking-widest">
                        Back to Works
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="bg-white min-h-screen pt-40 pb-60">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="mb-24 flex justify-between items-center border-b border-black/10 pb-10">
                    <Link href="/shop" className="text-[12px] font-black uppercase tracking-tight text-[#ED008C] hover:text-black transition-colors flex items-center gap-4">
                        ← Back to Archive
                    </Link>
                    <span className="text-[12px] font-black tracking-tight text-[#ED008C] uppercase">{project.year} // UX/UI Result</span>
                </div>

                {/* Hero Editorial Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-60">
                    <div className="lg:col-span-12">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[5vw] font-black tracking-tighter leading-[1.1] mb-24"
                        >
                            {project.title}
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className="lg:col-span-8 relative aspect-[16/10] overflow-hidden warm-shadow rounded-[1px]"
                    >
                        <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-1000" />
                        <div className="absolute inset-0 border-[30px] border-white/5" />
                    </motion.div>

                    <div className="lg:col-span-4 flex flex-col justify-end space-y-16">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-black/10 pt-10">
                            <div className="space-y-3">
                                <span className="text-[11px] font-black tracking-widest text-[#ED008C] uppercase">Sector</span>
                                <p className="text-sm font-black">{project.category}</p>
                            </div>
                            <div className="space-y-3">
                                <span className="text-[11px] font-black tracking-widest text-[#ED008C] uppercase">Timeline</span>
                                <p className="text-sm font-black">{project.year}</p>
                            </div>
                            <div className="space-y-3">
                                <span className="text-[11px] font-black tracking-widest text-[#ED008C] uppercase">Role</span>
                                <p className="text-sm font-black">Lead UI/UX</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <span className="text-[11px] font-black text-[#ED008C] uppercase">Sector</span>
                            <p className="text-3xl font-black uppercase">{project.category}</p>
                        </div>
                        <div className="space-y-6">
                            <span className="text-[11px] font-black text-[#ED008C] uppercase">Objective</span>
                            <p className="text-[#707070] text-xl font-medium leading-relaxed pr-12">
                                "{project.overview}"
                            </p>
                        </div>
                    </div>
                </div>

                {/* Technical Case Study Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-40 border-t border-black/10 pt-40">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="flex items-center gap-6">
                            <span className="text-3xl font-black text-[#ED008C] opacity-20">01</span>
                            <span className="text-[12px] font-black tracking-tight uppercase text-black">The Core Problem</span>
                        </div>
                        <p className="text-2xl font-black uppercase tracking-tighter leading-tight text-[#ED008C]/40">Finding the path.</p>
                        <p className="text-xl text-[#707070] font-medium leading-relaxed border-l-2 border-[#ED008C]/10 pl-8">
                            {project.challenge}
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12"
                    >
                        <div className="flex items-center gap-6">
                            <span className="text-3xl font-black opacity-10">02</span>
                            <span className="text-[12px] font-black tracking-tight uppercase text-black">Strategic Outcome</span>
                        </div>
                        <p className="text-2xl font-black uppercase tracking-tighter leading-tight text-black/20">Measurable Impact.</p>
                        <p className="text-xl text-[#707070] font-medium leading-relaxed border-l-2 border-black/5 pl-8">
                            {project.result}
                        </p>
                    </motion.div>
                </div>

                {/* Collaborative CTA */}
                <div className="mt-80 bg-black p-32 text-center rounded-[2px] overflow-hidden relative">
                    <Link href="/shop" className="group relative z-10 block space-y-12">
                        <span className="text-[13px] font-black tracking-tight text-white/10 uppercase block">Next Movement</span>
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter transition-all">View all works →</h2>
                    </Link>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black text-white/[0.03] leading-none pointer-events-none select-none uppercase">
                        RAY
                    </div>
                </div>
            </div>
        </main>
    );
}
