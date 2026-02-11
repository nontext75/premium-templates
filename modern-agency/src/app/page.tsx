import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Projects />
            <Footer />
        </main>
    );
}
