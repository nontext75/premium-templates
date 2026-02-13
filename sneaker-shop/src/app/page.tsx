import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { FeatureDark } from '@/components/sections/FeatureDark';
import { VerticalGallery } from '@/components/sections/VerticalGallery';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-[#f5f5f0] text-[#0a0a12]">
            <Header />
            <main>
                <Hero />
                <Stats />
                <FeatureDark />
                <VerticalGallery />
            </main>
            <Footer />
        </div>
    );
}
