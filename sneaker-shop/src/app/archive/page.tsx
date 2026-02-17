'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';

export default function ArchivePage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />
            <PageHero
                title="Archive"
                breadcrumb="Vault"
            />
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="space-y-6 group cursor-pointer border-brand-border border p-6 hover:bg-brand-muted transition-colors">
                            <div className="aspect-square bg-white flex items-center justify-center p-8">
                                <img
                                    src={`https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000&index=${i}`}
                                    alt="Archive Item"
                                    className="w-full h-full object-contain grayscale"
                                />
                            </div>
                            <div className="space-y-2">
                                <span className="text-[9px] font-black tracking-widest uppercase opacity-30">Series-0{i} / 2023</span>
                                <h3 className="text-xl font-bold tracking-tighter">Velocity Pro "Prototype"</h3>
                                <p className="text-xs font-medium text-brand-secondary/40">Limited Archive Release</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
            <Footer />
        </main>
    );
}
