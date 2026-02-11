'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
    return (
        <main className="bg-white min-h-screen pt-60 pb-60">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-40 h-[70vh] items-center">
                    <div className="space-y-16">
                        <span className="text-[12px] font-black tracking-[1em] text-black/10 uppercase block">Connect</span>
                        <h1 className="text-[10vw] font-black tracking-tighter leading-none">
                            FIND US.
                        </h1>
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h3 className="text-xl font-black uppercase tracking-tight">FLAGSHIP STORE</h3>
                                <p className="text-[#707070] font-medium leading-relaxed">
                                    425 Commercial St. <br />
                                    Downtown Los Angeles, CA
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-black uppercase tracking-tight">SUPPORT</h3>
                                <p className="text-[#707070] font-medium leading-relaxed">
                                    concierge@commercial.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square overflow-hidden warm-shadow">
                        <img src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=1200" className="w-full h-full object-cover grayscale" alt="Contact" />
                    </div>
                </div>
            </div>
        </main>
    );
}
