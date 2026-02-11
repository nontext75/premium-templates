'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const services = [
    {
        id: '01',
        title: 'Space Planning',
        description: 'Optimizing environments for peak productivity and employee wellbeing through strategic flow.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
    },
    {
        id: '02',
        title: 'Furniture Layouts',
        description: 'Curating unique pieces that define your corporate identity and brand values.',
        image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2069&auto=format&fit=crop'
    },
    {
        id: '03',
        title: 'Curated Styling',
        description: 'Strategic arrangement for seamless workflow and high-end aesthetic interaction.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2069&auto=format&fit=crop'
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="pt-[200px] pb-[120px] px-[64px]">
                <div className="max-w-full mx-auto">
                    <span className="text-[11px] font-normal tracking-[3px] uppercase text-[#090B19] opacity-60 block mb-[32px]">Our Expertise</span>
                    <h1 className="text-[78px] leading-[94px] font-semibold tracking-[-3.9px] text-[#090B19] mb-[160px]">
                        Services.
                    </h1>

                    <div className="flex flex-col gap-[160px]">
                        {services.map((service, i) => (
                            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-[64px] lg:gap-[120px] items-center`}>
                                {/* Image Area */}
                                <div className="w-full lg:w-1/2">
                                    <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-1000"
                                            style={{ backgroundImage: `url(${service.image})` }}
                                        />
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="w-full lg:w-1/2 flex flex-col items-start">
                                    <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#090B19] mb-[32px] block">0{i + 1}</span>
                                    <h3 className="text-[48px] leading-[58px] font-semibold tracking-[-1.44px] text-[#090B19] mb-[24px]">
                                        {service.title}
                                    </h3>
                                    <p className="text-[16px] leading-[28px] font-normal text-[#6E7488] max-w-md">
                                        {service.description}
                                    </p>

                                    <div className="mt-[48px] w-full h-[1px] bg-[#090B19]/10" />
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
