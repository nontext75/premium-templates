'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
    return (
        <main className="bg-white min-h-screen pt-40 pb-40">
            <div className="architectural-grid h-[70vh] items-center">
                <div className="col-span-12 md:col-span-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-space font-black text-[12vw] leading-none uppercase tracking-tighter"
                    >
                        WORK <br /> WITH US.
                    </motion.h1>
                </div>
                <div className="col-span-12 md:col-span-4 space-y-12">
                    <div className="space-y-4">
                        <span className="text-metadata">INQUIRIES</span>
                        <p className="text-2xl font-space font-bold">studio@platone.com</p>
                    </div>
                    <div className="space-y-4">
                        <span className="text-metadata">STUDIO</span>
                        <p className="text-lg text-brand-secondary">
                            128 Architectural Way <br />
                            Berlin, Germany
                        </p>
                    </div>
                </div>
            </div>

            <section className="mt-40 border-t border-black/5 pt-40 pb-40">
                <div className="architectural-grid">
                    <div className="col-span-12 md:col-span-12">
                        <form className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                                <div className="space-y-4">
                                    <label className="text-metadata">NAME</label>
                                    <input type="text" className="w-full bg-transparent border-b border-black/20 pb-4 focus:border-black outline-none transition-colors" placeholder="Your Name" />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-metadata">EMAIL</label>
                                    <input type="email" className="w-full bg-transparent border-b border-black/20 pb-4 focus:border-black outline-none transition-colors" placeholder="Your Email" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-metadata">MESSAGE</label>
                                <textarea className="w-full bg-transparent border-b border-black/20 pb-4 focus:border-black outline-none transition-colors resize-none h-32" placeholder="Tell us about your space"></textarea>
                            </div>
                            <button className="bg-black text-white px-16 py-6 text-[11px] font-black uppercase tracking-[0.5em] hover:opacity-80 transition-opacity">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
