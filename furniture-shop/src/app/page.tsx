'use client';

import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import VerticalGallery from '@/components/sections/VerticalGallery';
import { SmoothScroll } from '@/components/SmoothScroll';

export default function Home() {
    return (
        <SmoothScroll>
            <main className="bg-brand-primary min-h-screen text-brand-secondary selection:bg-brand-accent selection:text-white">
                <Hero />
                <Stats />
                <VerticalGallery />
            </main>
        </SmoothScroll>
    );
}
