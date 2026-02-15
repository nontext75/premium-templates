'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen pt-40 pb-60 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6">
                {/* Hero Editorial */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-40 border-b border-black/10 pb-24">
                    <div className="space-y-8">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[14px] font-black tracking-tight text-[#ED008C] uppercase block"
                        >
                            Visionary Hub
                        </motion.span>
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        >
                            <span className="text-[14px] font-black tracking-tight text-black/20 uppercase block mb-12">The Manifesto</span>
                            <h1 className="text-[6vw] font-black tracking-tighter leading-[0.8] mb-20">
                                Beyond <br />
                                <span className="text-black/30 relative drop-shadow-sm font-normal">Interaction.</span>
                            </h1>
                        </motion.div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-60 mt-20">
                    <div className="lg:col-span-8 space-y-24">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="max-w-4xl"
                        >
                            <p className="text-3xl text-[#1A1A1A] font-black leading-tight mb-16 uppercase">
                                "Design is the silent ambassador of your brand. I build digital bridges between human intention and technical possibility."
                            </p>
                            <div className="h-px w-60 bg-black opacity-20" />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.8 }}
                        className="lg:col-span-4 relative aspect-[2/3] lg:aspect-auto h-full rounded-[1px] overflow-hidden warm-shadow"
                    >
                        <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200" className="w-full h-full object-cover grayscale contrast-110" alt="Designer Studio" />
                        <div className="absolute -bottom-10 -left-10 bg-white p-16 hidden lg:block border border-black/5 shadow-2xl">
                            <span className="text-[12px] font-black tracking-tight uppercase text-black/20 block mb-3">Practice Est.</span>
                            <p className="text-5xl font-black tracking-tighter">2018</p>
                        </div>
                    </motion.div>
                </div>

                {/* Structured Philosophy Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-40 mb-80 border-t border-black/10 pt-48">
                    <div className="space-y-16">
                        <div className="flex gap-6 items-center">
                            <span className="text-2xl font-black text-black/10">01 //</span>
                            <span className="text-[13px] font-black tracking-[0.6em] uppercase text-black">Strategic Research</span>
                        </div>
                        <h2 className="text-5xl font-black tracking-tighter leading-[1]">Human <br /> Intention.</h2>
                        <p className="text-[#707070] text-xl font-medium leading-relaxed max-w-xl">
                            Successful products start with empathy. I decode complex human behaviors into simple, actionable design frameworks that drive both user joy and business value.
                        </p>
                    </div>
                    <div className="space-y-16 pt-40 md:pt-80">
                        <div className="flex gap-6 items-center">
                            <span className="text-2xl font-black text-black/10">02 //</span>
                            <span className="text-[13px] font-black tracking-[0.6em] uppercase text-black">Visual Craftsmanship</span>
                        </div>
                        <h2 className="text-5xl font-black tracking-tighter leading-[1]">Radical <br /> Clarity.</h2>
                        <p className="text-[#707070] text-xl font-medium leading-relaxed max-w-xl">
                            I operate on the principle of purposeful reduction. By removing the unnecessary, we create space for what truly matters: clear communication and seamless utility.
                        </p>
                    </div>
                </div>

                {/* Narrative CTA */}
                <div className="text-center space-y-20 bg-black text-white p-32 md:p-80 rounded-[2px] overflow-hidden relative">
                    <div className="relative z-10 space-y-12">
                        <span className="text-[13px] font-black tracking-[1em] text-white/10 uppercase block">Collaboration</span>
                        <h3 className="text-6xl md:text-7xl font-black tracking-tighter leading-none">Leadership <br /> by Design.</h3>
                        <p className="text-white/40 font-medium text-xl max-w-3xl mx-auto leading-relaxed">
                            Currently exploring opportunities to lead design squads and architect next-generation digital products. Operating at the intersection of Seoul and the Global Future.
                        </p>
                        <div className="pt-16">
                            <Link href="/contact" className="inline-block border-2 border-white/20 text-white px-20 py-8 text-[11px] font-black uppercase tracking-[0.6em] hover:bg-white hover:text-black transition-all">
                                Open Inquiry
                            </Link>
                        </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45vw] font-black text-white/[0.02] leading-none pointer-events-none select-none uppercase italic">
                        RAY
                    </div>
                </div>
            </div>
        </main>
    );
}
