'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight, ArrowLeft, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage() {
    const [activeTab, setActiveTab] = useState('specs');

    return (
        <main className="bg-brand-primary min-h-screen pt-32 pb-20 text-white">
            <div className="architectural-grid mb-12">
                <div className="col-span-12">
                    <Link href="/collection" className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-[#7d5fff] transition-all">
                        <ArrowLeft size={14} /> Back to Inventory
                    </Link>
                </div>
            </div>

            <div className="architectural-grid gap-16 lg:gap-24">
                {/* Visual Gallery Segment */}
                <div className="col-span-12 lg:col-span-7">
                    <div className="sticky top-32 space-y-8">
                        <div className="aspect-[4/5] bg-white/5 border border-white/10 overflow-hidden relative group">
                            <img src="/images/hero_temp.jpg" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" alt="Nu Gundam" />
                            <div className="absolute top-6 left-6 px-4 py-2 bg-[#7d5fff] text-[9px] font-black uppercase tracking-widest">Masterpiece Series</div>
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="aspect-square bg-white/5 border border-white/10 overflow-hidden cursor-pointer hover:border-[#7d5fff]/50 transition-all">
                                    <img src="/images/hero_temp.jpg" className="w-full h-full object-cover grayscale opacity-40 hover:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Technical Specs & Action Center */}
                <div className="col-span-12 lg:col-span-5">
                    <div className="mb-12">
                        <span className="text-[10px] font-black text-[#7d5fff] tracking-[0.5em] block mb-4 uppercase text-technical">MG Ver.Ka // custom build</span>
                        <h1 className="font-sans font-black text-6xl lg:text-7xl uppercase tracking-tighter leading-none mb-6">
                            RX-93 <br /> NU GUNDAM.
                        </h1>
                        <div className="flex items-center gap-6">
                            <span className="text-3xl font-sans font-black text-white">$850.00</span>
                            <span className="text-[10px] font-black border border-white/20 px-4 py-2 uppercase tracking-widest text-white/40">In Stock</span>
                        </div>
                    </div>

                    <div className="space-y-12">
                        {/* Action Buttons */}
                        <div className="flex flex-col gap-4">
                            <button className="flex items-center justify-center gap-4 py-6 bg-white text-black text-[10px] font-black uppercase tracking-[0.5em] hover:bg-[#7d5fff] hover:text-white transition-all group">
                                <Zap size={14} className="fill-current" /> Instant Acquisition
                            </button>
                            <button className="flex items-center justify-center gap-4 py-6 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.5em] hover:border-[#7d5fff] hover:text-[#7d5fff] transition-all">
                                Request Custom Commission
                            </button>
                        </div>

                        {/* Technical Tabs */}
                        <div>
                            <div className="flex gap-10 border-b border-white/10 mb-8">
                                {['specs', 'materials', 'process'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-4 text-[9px] font-black uppercase tracking-[0.3em] transition-all relative ${activeTab === tab ? 'text-white' : 'text-white/30'}`}
                                    >
                                        {tab}
                                        {activeTab === tab && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#7d5fff]" />}
                                    </button>
                                ))}
                            </div>
                            <div className="text-[11px] text-white/50 uppercase tracking-widest leading-relaxed">
                                {activeTab === 'specs' && (
                                    <ul className="space-y-4">
                                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Scale</span> <span className="text-white">1/100 Master Grade</span></li>
                                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Total Build Time</span> <span className="text-white">120 Hours</span></li>
                                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Paint Finish</span> <span className="text-white">Architectural Matte</span></li>
                                    </ul>
                                )}
                                {activeTab === 'materials' && "Premium lacquers, metal thrusters, custom decal sets, and photo-etched components used throughout the frame."}
                                {activeTab === 'process' && "Full inner frame detailing, custom panel line scribing, and multi-tone color modulation for maximum realistic scale."}
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="pt-12 border-t border-white/10 grid grid-cols-2 gap-8">
                            <div className="flex items-start gap-4">
                                <ShieldCheck className="text-[#7d5fff]" size={20} />
                                <div>
                                    <span className="text-[9px] font-black text-white uppercase block mb-1">Authenticated</span>
                                    <p className="text-[8px] text-white/40 uppercase tracking-widest leading-tight">Hand-signed certificate of build included.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <ShieldCheck className="text-[#7d5fff]" size={20} />
                                <div>
                                    <span className="text-[9px] font-black text-white uppercase block mb-1">Insured Shipping</span>
                                    <p className="text-[8px] text-white/40 uppercase tracking-widest leading-tight">Crated transport for masterpiece safety.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
