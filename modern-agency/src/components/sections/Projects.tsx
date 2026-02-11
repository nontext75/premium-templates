'use client';

import { motion } from 'framer-motion';

const projects = [
    { name: 'MetLife Corporate Space', location: 'Austin, Texas', category: 'Space Planning' },
    { name: 'Spotify Satellite Office', location: 'New York, NY', category: 'Furniture Layouts' },
    { name: 'Disney Employee Loft', location: 'Burbank, CA', category: 'Custom Furniture' },
];

export function Projects() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-[1440px] w-full mx-auto">
                <div className="flex justify-between items-end mb-24">
                    <h2 className="text-[10vw] leading-[0.85] font-black tracking-[-0.06em] uppercase">
                        Our<br />Work.
                    </h2>
                    <div className="text-[9px] font-black tracking-[0.5em] uppercase border-b border-black pb-1 cursor-pointer hover:opacity-50 transition-all mb-4">
                        View All Projects
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-12 aspect-[4/5] flex flex-col justify-between group cursor-pointer overflow-hidden relative"
                        >
                            <div className="flex justify-between items-start z-10">
                                <span className="text-[9px] font-black tracking-[0.4em] uppercase opacity-40">
                                    {project.location}
                                </span>
                                <span className="text-[9px] font-black tracking-[0.4em] uppercase opacity-40">
                                    {project.category}
                                </span>
                            </div>

                            <div className="z-10">
                                <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-2 group-hover:tracking-widest transition-all duration-700">
                                    {project.name}
                                </h3>
                            </div>

                            {/* Visual placeholder for high-end photography */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 bg-black" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
