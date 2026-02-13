'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
    {
        id: 1,
        title: 'YMS-09J Jagd Dom',
        category: 'Kanonen Custom',
        year: '2025',
        image: '/images/hero_temp.jpg'
    },
    {
        id: 2,
        title: 'MS-06J Zaku II',
        category: 'Ground Type Custom',
        year: '2024',
        image: '/images/project_zaku.jpg'
    },
    {
        id: 3,
        title: 'PMX-003 The-O',
        category: 'Heavy Assault Ver.',
        year: '2024',
        image: '/images/project_theo.png'
    },
    {
        id: 4,
        title: 'Mars Zeon Custom',
        category: 'Amphibious Prototype',
        year: '2023',
        image: '/images/project_mars.jpg'
    },
    {
        id: 5,
        title: 'RX-78 GP04G',
        category: 'Gerbera Prototype',
        year: '2023',
        image: '/images/project_gp_custom.png'
    },
];

export function VerticalGallery() {
    return (
        <section className="py-32 px-6 md:px-12 bg-[#f5f5f0]">
            <div className="max-w-7xl mx-auto mb-24">
                <span className="text-[#ff3b30] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Selected Works</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#0a0a12]">PORTFOLIO</h2>
            </div>

            <div className="flex flex-col gap-32">
                {projects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
            {/* Image Section */}
            <div className={`md:col-span-8 ${index % 2 === 1 ? 'md:order-2' : ''} overflow-hidden`}>
                <div className="aspect-[16/9] overflow-hidden bg-gray-200">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                </div>
            </div>

            {/* Info Section */}
            <div className="md:col-span-4 flex flex-col justify-center">
                <span className="text-6xl font-black text-[#0a0a12]/5 mb-6 -ml-4 select-none">0{project.id}</span>
                <div className="border-t border-[#0a0a12] pt-6 mr-12">
                    <div className="flex justify-between items-baseline mb-2">
                        <span className="text-xs font-bold tracking-widest uppercase text-[#ff3b30]">{project.year}</span>
                        <span className="text-xs font-bold tracking-widest uppercase text-[#0a0a12]/40">Case Study</span>
                    </div>
                    <h3 className="text-3xl font-black text-[#0a0a12] mb-2">{project.title}</h3>
                    <p className="text-[#0a0a12]/60 font-serif italic mb-8">{project.category}</p>

                    <button className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase group-hover:gap-6 transition-all">
                        View Project
                        <div className="w-8 h-[1px] bg-[#0a0a12]" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
