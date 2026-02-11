'use client';

import { motion } from 'framer-motion';

export function Hero() {
    return (
        <div className="bg-white">
            <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden border-b border-black/5">
                <div className="max-w-[1440px] w-full mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-[14vw] leading-[0.82] font-black uppercase tracking-[-0.07em] mb-12">
                            That<br />matters.
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="flex justify-between items-end"
                    >
                        <p className="text-xs max-w-[280px] font-medium tracking-tight leading-relaxed opacity-60">
                            We're innovating the way companies reinvent their office spaces for the remote workforce.
                        </p>
                        <div className="text-[9px] font-black tracking-[0.5em] uppercase border-b border-black pb-1 cursor-pointer hover:opacity-50 transition-all">
                            Schedule a call
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 border-b border-black/5">
                <div className="max-w-[1440px] w-full mx-auto">
                    <div className="flex justify-between items-start mb-24">
                        <h2 className="text-[8vw] leading-[0.9] font-black tracking-[-0.05em] uppercase">
                            We do it best.
                        </h2>
                        <span className="text-[9px] font-black tracking-[0.5em] uppercase opacity-40 pt-4">
                            Services
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
                        {['Space Planning', 'Custom Furniture', 'Furniture Layouts'].map((service, i) => (
                            <div key={service} className="group cursor-pointer">
                                <div className="text-[9px] font-black tracking-[0.4em] uppercase mb-4 opacity-40">0{i + 1}</div>
                                <h3 className="text-2xl font-black tracking-tighter uppercase mb-6 group-hover:pl-4 transition-all duration-500">
                                    {service}
                                </h3>
                                <div className="text-[9px] font-black tracking-[0.3em] uppercase border-b border-black/20 pb-2 inline-block">
                                    Explore
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
