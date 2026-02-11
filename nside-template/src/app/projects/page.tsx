'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const featuredProject = {
    name: 'Spotify Satellite Office', location: 'Austin, TX', year: '2025',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2069&auto=format&fit=crop',
    description: 'A modern interpretation of the open workspace, focusing on acoustic privacy and collaborative zones.'
};

const projects = [
    { name: 'Microsoft Office Lounge', location: 'Seattle, WA', year: '2025', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174' },
    { name: 'Allstate Employee Lounge', location: 'Chicago, IL', year: '2024', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72' },
    { name: 'Exxon Mobile Offices', location: 'Houston, TX', year: '2024', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c' },
    { name: 'Disney Employee Loft', location: 'Burbank, CA', year: '2023', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36' },
];

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="pt-[200px] pb-[120px] px-[64px]">
                <div className="max-w-full mx-auto">
                    <div className="flex justify-between items-end mb-[120px]">
                        <div>
                            <span className="text-[11px] font-normal tracking-[3px] uppercase text-[#090B19] opacity-60 block mb-[32px]">Portfolio</span>
                            <h1 className="text-[78px] leading-[94px] font-semibold tracking-[-3.9px] text-[#090B19]">
                                Selected Work.
                            </h1>
                        </div>
                    </div>

                    {/* Featured Project (Large) */}
                    <div className="mb-[160px] group cursor-pointer">
                        <div className="relative h-[80vh] w-full bg-neutral-100 overflow-hidden mb-[32px]">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                                style={{ backgroundImage: `url(${featuredProject.image})` }}
                            />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-start">
                            <div>
                                <h2 className="text-[48px] leading-[58px] font-semibold tracking-[-1.44px] text-[#090B19] mb-[16px]">
                                    {featuredProject.name}
                                </h2>
                                <p className="text-[16px] text-[#6E7488] max-w-xl">{featuredProject.description}</p>
                            </div>
                            <div className="text-right mt-8 md:mt-0">
                                <span className="text-[11px] font-normal tracking-[3px] uppercase text-[#090B19] opacity-60 block mb-2">{featuredProject.location}</span>
                                <span className="text-[11px] font-normal tracking-[3px] uppercase text-[#090B19] opacity-40">{featuredProject.year}</span>
                            </div>
                        </div>
                    </div>

                    {/* Standard Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] gap-y-[120px]">
                        {projects.map((project, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden mb-[24px]">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url(${project.image}?q=80&w=1000&auto=format)` }}
                                    />
                                </div>
                                <div className="flex justify-between items-start border-t border-[#090B19]/10 pt-[24px]">
                                    <div>
                                        <h3 className="text-[24px] leading-[30px] font-bold tracking-[-0.72px] text-[#090B19] mb-[8px]">
                                            {project.name}
                                        </h3>
                                        <span className="text-[11px] font-normal tracking-[3px] uppercase text-[#090B19] opacity-60">
                                            {project.location}
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-normal tracking-[3px] uppercase text-[#090B19] opacity-40 mt-[8px]">
                                        {project.year}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
