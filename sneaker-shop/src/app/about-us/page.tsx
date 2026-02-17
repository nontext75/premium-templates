'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />
            <PageHero
                title="About Us"
                breadcrumb="Brand"
            />
            <Section>
                <div className="max-w-2xl mx-auto space-y-24">
                    <div className="space-y-12">
                        <label className="text-[11px] font-bold tracking-[0.4em] uppercase text-brand-secondary/30 block border-b border-brand-border pb-4">Philosophy</label>
                        <p className="text-4xl font-bold tracking-tight leading-tight">
                            We believe that technical performance shouldn't sacrifice aesthetic clarity.
                        </p>
                        <p className="text-lg text-brand-secondary/60 font-medium tracking-tight leading-relaxed">
                            Founded in Tokyo, NONTEXT was born from a desire to bridge the gap between heavy-duty technical utility and the refined silhouette of high-fashion editorial. Every piece in our collection is a testament to this duality.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-12 border-t border-brand-border pt-12">
                        <div className="space-y-4">
                            <span className="text-[10px] font-black tracking-widest uppercase opacity-30">Headquarters</span>
                            <p className="font-bold tracking-tight">Setagaya, Tokyo <br /> Japan</p>
                        </div>
                        <div className="space-y-4">
                            <span className="text-[10px] font-black tracking-widest uppercase opacity-30">Founded</span>
                            <p className="font-bold tracking-tight">2023 <br /> By NONTEXT ARCHITECTS</p>
                        </div>
                    </div>
                </div>
            </Section>
            <Footer />
        </main>
    );
}
