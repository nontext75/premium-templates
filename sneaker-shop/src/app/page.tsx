import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { FeatureRow } from '@/components/sections/FeatureRow';
import { CategoryBanners } from '@/components/sections/CategoryBanners';
import { ProductGrid } from '@/components/sections/ProductGrid';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <Hero />
      <FeatureRow />
      <CategoryBanners />

      {/* Best Sellers Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center mb-16">
          <h2 className="text-5xl font-black tracking-tighter text-brand-secondary">Best Sellers</h2>
        </div>
        <ProductGrid />
      </section>

      {/* Promo Banner Section (Simulated with a refined section) */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 mb-24">
        <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=1600"
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000"
            alt="Promo banner"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-6">
            <span className="text-[14px] font-black tracking-[0.5em] bg-red-600 px-6 py-2 rounded-full">10% Off!</span>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter">Summer Collection</h3>
            <button className="px-10 py-4 bg-white text-black text-[15px] font-bold tracking-tight rounded-full hover:bg-brand-secondary hover:text-white transition-all">
              Get the Deal
            </button>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center mb-16">
          <h2 className="text-5xl font-black tracking-tighter text-brand-secondary">New Arrivals</h2>
        </div>
        <ProductGrid />
      </section>

      {/* Articles Section (Simulated) */}
      <section className="bg-white py-24 border-t border-brand-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-black tracking-tighter">Articles & Resources</h2>
            <button className="text-[15px] font-bold tracking-tight border-b border-black pb-1">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Article 1 */}
            <div className="space-y-6 group cursor-pointer">
              <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Man walking in technical sneakers"
                />
              </div>
              <div className="space-y-3">
                <span className="text-[9px] font-black text-brand-accent tracking-widest uppercase">Guide // 2025</span>
                <h4 className="text-3xl font-bold tracking-tighter leading-[1.1]">How to choose the perfect pair for training</h4>
              </div>
            </div>

            {/* Article 2 */}
            <div className="space-y-6 group cursor-pointer">
              <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Lifestyle shot of loafers"
                />
              </div>
              <div className="space-y-3">
                <span className="text-[9px] font-black text-brand-accent tracking-widest uppercase">Design // 2025</span>
                <h4 className="text-3xl font-bold tracking-tighter leading-[1.1]">Inside the design: The evolution of the Loafer</h4>
              </div>
            </div>

            {/* Article 3 */}
            <div className="space-y-6 group cursor-pointer">
              <div className="aspect-video bg-neutral-100 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Sustainable lifestyle fashion"
                />
              </div>
              <div className="space-y-3">
                <span className="text-[9px] font-black text-brand-accent tracking-widest uppercase">Eco // 2025</span>
                <h4 className="text-3xl font-bold tracking-tighter leading-[1.1]">Sustainable strides: Our commitment to the planet</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
