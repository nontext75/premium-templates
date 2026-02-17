'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';

export default function StoriesPage() {
    const stories = [
        {
            title: "The Urban Nomad: Vol. 04",
            category: "Editorial",
            image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1520"
        },
        {
            title: "Brutalist Architecture & Footwear",
            category: "Insight",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
        }
    ];

    return (
        <main className="bg-white min-h-screen">
            <Header />
            <PageHero
                title="Stories"
                breadcrumb="Journal"
            />
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {stories.map((story, i) => (
                        <div key={i} className="group cursor-pointer space-y-8">
                            <div className="aspect-[16/10] overflow-hidden bg-brand-muted">
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0"
                                />
                            </div>
                            <div className="space-y-4">
                                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-brand-secondary/40">{story.category}</span>
                                <h3 className="text-3xl font-bold tracking-tighter leading-none group-hover:translate-x-2 transition-transform">{story.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
            <Footer />
        </main>
    );
}
