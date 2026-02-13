'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} className="h-screen relative overflow-hidden flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 bg-[#f5f5f0]">
            {/* Background Image Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute top-0 right-0 w-[80%] h-full bg-cover bg-center opacity-20 z-0 grayscale"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <div
                    className="w-full h-full bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: 'url(/images/hero_temp.jpg)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#f5f5f0]" />
            </motion.div>

            {/* Main Title */}
            <div className="relative z-10 mt-auto mb-auto">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="text-sm md:text-base tracking-[0.4em] uppercase mb-4 text-[#ff3b30] font-bold">
                        Gundam Plamodel Studio
                    </p>
                    <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter text-[#0a0a12] mix-blend-multiply">
                        MASTER<br />
                        PIECE
                    </h1>
                </motion.div>
            </div>

            {/* Bottom Info */}
            <motion.div
                className="relative z-10 flex flex-col md:flex-row justify-between items-end border-t border-[#0a0a12]/10 pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
            >
                <div className="flex gap-12 text-xs font-bold tracking-widest uppercase text-[#0a0a12]/60">
                    <div>
                        <span className="block text-[#0a0a12] mb-1">Est.</span>
                        2020
                    </div>
                    <div>
                        <span className="block text-[#0a0a12] mb-1">Location</span>
                        Seoul, KR
                    </div>
                    <div>
                        <span className="block text-[#0a0a12] mb-1">Specialty</span>
                        Custom Build
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <span className="text-xs font-bold tracking-widest uppercase">Scroll to Explore</span>
                    <div className="w-12 h-[1px] bg-[#0a0a12]" />
                </div>
            </motion.div>
        </section>
    );
}
