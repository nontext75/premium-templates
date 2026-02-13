'use client';

import { motion } from 'framer-motion';

export function Contact() {
    return (
        <section id="contact" className="py-32 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[#ff3b30] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Get In Touch</span>
                    <h3 className="text-5xl md:text-7xl font-black tracking-tight text-[#0a0a12] mb-8">
                        LET'S WORK<br />TOGETHER
                    </h3>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-gray-400 mb-12 text-lg max-w-xl mx-auto"
                >
                    Ready to bring your Gundam vision to life? Get in touch for a custom quote.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <a
                        href="mailto:contact@gp.studio"
                        className="inline-block px-12 py-5 bg-[#0a0a12] text-white font-bold text-sm tracking-widest hover:bg-[#ff3b30] transition-colors duration-300"
                    >
                        CONTACT US
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="mt-16 flex justify-center gap-12"
                >
                    <a href="#" className="text-xs font-bold tracking-widest text-gray-300 hover:text-[#ff3b30] transition-colors">INSTAGRAM</a>
                    <a href="#" className="text-xs font-bold tracking-widest text-gray-300 hover:text-[#ff3b30] transition-colors">TWITTER</a>
                    <a href="#" className="text-xs font-bold tracking-widest text-gray-300 hover:text-[#ff3b30] transition-colors">YOUTUBE</a>
                </motion.div>
            </div>
        </section>
    );
}
