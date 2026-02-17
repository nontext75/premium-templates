'use client';

import { Header } from '@/components/layout/Header';
import { ProductGrid } from '@/components/sections/ProductGrid';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';

export default function NewDropsPage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />

            <PageHero
                title="New Drops"
                breadcrumb="Late Season"
            />

            <Section>
                <ProductGrid />
            </Section>

            <Footer />
        </main>
    );
}
