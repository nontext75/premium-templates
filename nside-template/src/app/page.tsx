import { Hero } from '@/components/sections/Hero';
import { InspirationSection } from '@/components/sections/InspirationSection';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { TeamSection } from '@/components/sections/TeamSection';
import { NewsSection } from '@/components/sections/NewsSection';
import { LeadSection } from '@/components/sections/LeadSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <InspirationSection />
            <ProjectGrid />
            <TeamSection />
            <NewsSection />
            <LeadSection />
            <Footer />
        </main>
    );
}
