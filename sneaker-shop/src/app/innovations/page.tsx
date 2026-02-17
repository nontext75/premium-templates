'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';

export default function InnovationsPage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />
            <PageHero
                title="Innovations"
                breadcrumb="R&D"
            />
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                    <div className="space-y-8">
                        <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-brand-secondary/40">Lab Report 01</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
                            Molecular Cushioning <br /> System V2
                        </h2>
                        <p className="text-lg text-brand-secondary/70 leading-relaxed font-medium tracking-tight">
                            Our latest breakthrough in energy return technology. By utilizing a hybrid molecular structure, we've achieved a 22% increase in dynamic response compared to traditional foam.
                        </p>
                        <div className="pt-8 border-t border-brand-border">
                            <div className="grid grid-cols-2 gap-12">
                                <div className="space-y-2">
                                    <span className="text-[10px] font-black tracking-widest uppercase opacity-30">Status</span>
                                    <p className="font-bold tracking-tight text-sm">Active Deployment</p>
                                </div>
                                <div className="space-y-2">
                                    <span className="text-[10px] font-black tracking-widest uppercase opacity-30">Material</span>
                                    <p className="font-bold tracking-tight text-sm">Carbon-Link Polymer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aspect-[4/5] bg-brand-muted overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=2070"
                            alt="Technical Innovation"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                    </div>
                </div>
            </Section>
            <Footer />
        </main>
    );
}
