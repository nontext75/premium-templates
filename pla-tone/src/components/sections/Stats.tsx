'use client';

import { motion } from 'framer-motion';

const stats = [
    { label: 'Years Active', value: '04' },
    { label: 'Projects Completed', value: '128' },
    { label: 'Awards Won', value: '15' },
    { label: 'Satisfaction Rate', value: '100%' },
];

export function Stats() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white border-b border-[#0a0a12]/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                <div className="max-w-lg">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-light leading-tight text-[#0a0a12] mb-6"
                    >
                        We build not just models, but <span className="font-bold border-b-2 border-[#ff3b30]">legacies</span>.
                        Precision engineering meets artistic expression.
                    </motion.h3>
                    <p className="text-[#0a0a12]/60 text-sm leading-relaxed">
                        GP. Studio is a premier Gundam modeling atelier based in Seoul.
                        We specialize in high-end custom builds, diorama creation, and restoration.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full md:w-auto">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h4 className="text-4xl md:text-5xl font-black text-[#0a0a12] mb-2">{stat.value}</h4>
                            <p className="text-xs font-bold tracking-widest uppercase text-[#0a0a12]/40">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
