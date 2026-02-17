'use client';

import { Header } from '@/components/layout/Header';
import { ProductGrid } from '@/components/sections/ProductGrid';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';

export default function ShopPage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />

            <PageHero
                title="Shop All"
                breadcrumb="Products"
            />

            <Section>
                <div className="flex justify-between items-center mb-16 border-b border-brand-border pb-8">
                    <div className="flex gap-8 text-[10px] font-black tracking-widest text-brand-secondary/40">
                        <button className="text-brand-secondary border-b border-brand-secondary pb-1">All Products</button>
                        <button className="hover:text-brand-secondary transition-colors">Performance</button>
                        <button className="hover:text-brand-secondary transition-colors">Lifestyle</button>
                        <button className="hover:text-brand-secondary transition-colors">Luxury</button>
                    </div>
                    <div className="text-[10px] font-black tracking-widest">
                        Sort by: <span className="text-brand-secondary underline cursor-pointer">Featured</span>
                    </div>
                </div>
                <ProductGrid />
            </Section>

            <Footer />
        </main>
    );
}
