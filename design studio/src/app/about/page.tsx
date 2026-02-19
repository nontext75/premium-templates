'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const stats = [
    { value: '12', label: 'Years Experience' },
    { value: '85', label: 'Projects Completed' },
    { value: '14', label: 'Design Awards' },
    { value: '24', label: 'Global Partners' },
];

const team = [
    { name: 'Jessica Point', role: 'Principle Designer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2' },
    { name: 'Ryan Baser', role: 'Design Lead', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e' },
    { name: 'Carrie Vath', role: 'Architect', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956' },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Intro Section */}
            <section className="pt-[200px] pb-[120px] px-[64px]">
                <div className="max-w-full mx-auto">
                    <span className="text-[11px] font-normal tracking-[3px] uppercase text-[#090B19] opacity-60 block mb-[32px]">About NONTEXT</span>
                    <h1 className="text-[78px] leading-[94px] font-semibold tracking-[-3.9px] text-[#090B19] mb-[80px] max-w-4xl">
                        Designing for impact, innovating for people.
                    </h1>
                </div>
            </section>

            {/* Dark Philosophy Section (Break Rhythm) */}
            <section className="relative py-[200px] px-[64px] bg-[#090B19] text-white overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")',
                        opacity: 0.4
                    }}
                />

                {/* Content */}
                <div className="relative z-10 max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[120px]">
                    <div>
                        <h2 className="text-[48px] leading-[58px] font-semibold tracking-[-1.44px] mb-[64px]">
                            We believe environment dictates behavior.
                        </h2>
                        <p className="text-[18px] leading-[30px] font-normal opacity-80 max-w-xl">
                            Our mission is to create spaces that foster innovation, collaboration, and wellbeing through thoughtful design and rigorous execution. We blend architectural precision with human-centric design.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-[64px]">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col gap-[16px]">
                                <span className="text-[64px] font-bold tracking-[-2px]">{stat.value}</span>
                                <span className="text-[11px] font-normal tracking-[3px] uppercase opacity-40">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-[160px] px-[64px]">
                <div className="max-w-full mx-auto">
                    <div className="flex justify-between items-end mb-[120px]">
                        <h2 className="text-[48px] leading-[58px] font-semibold tracking-[-1.44px] text-[#090B19]">
                            Our Leadership
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[64px]">
                        {team.map((member) => (
                            <div key={member.name} className="group">
                                <div className="aspect-[3/4] bg-neutral-100 mb-[32px] overflow-hidden relative">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                        style={{ backgroundImage: `url(${member.image}?q=80&w=1000&auto=format)` }}
                                    />
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <h3 className="text-[24px] leading-[30px] font-bold tracking-[-0.72px] text-[#090B19] mb-[8px]">
                                        {member.name}
                                    </h3>
                                    <span className="text-[11px] font-normal tracking-[3px] uppercase text-[#090B19] opacity-60">
                                        {member.role}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location / Map Section */}
            <section className="h-[600px] w-full relative overflow-hidden grayscale">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop")' }}
                />
                <div className="absolute inset-0 bg-white/20" />

                <div className="absolute bottom-0 left-0 p-[64px] bg-white border-t border-r border-[#090B19]/10">
                    <span className="text-[11px] font-normal tracking-[3px] uppercase text-[#090B19] opacity-60 block mb-[24px]">Visit Us</span>
                    <h2 className="text-[48px] leading-[58px] font-semibold tracking-[-1.44px] text-[#090B19] mb-[24px]">
                        Austin, TX.
                    </h2>
                    <p className="text-[16px] leading-[26px] font-normal text-[#6E7488]">
                        213 West 5th Street<br />
                        Austin, Texas 78701
                    </p>
                    <a href="#" className="inline-block mt-[32px] text-[11px] font-bold tracking-[3px] uppercase text-[#090B19] border-b border-[#090B19] pb-1 hover:opacity-60 transition-opacity">
                        Get Directions
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
