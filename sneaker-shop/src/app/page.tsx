'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Menu, X, Search, Star, Mail, Instagram, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';

const portfolio = [
  { id: 1, name: 'RX-78-2 Gundam', grade: 'MG', series: 'Mobile Suit Gundam', custom: false, work: 'Built & Weathered', image: 'https://m.media-amazon.com/images/I/81xwD2dTy-L._AC_SL1500_.jpg' },
  { id: 2, name: 'Zaku II Char', grade: 'MG', series: 'Mobile Suit Gundam', custom: true, work: 'Custom Paint & Markings', image: 'https://m.media-amazon.com/images/I/81p8xkVJzJL._AC_SL1500_.jpg' },
  { id: 3, name: 'Barbatos Lupus', grade: 'HG', series: 'Iron-Blooded Orphans', custom: true, work: 'Full Custom Paint', image: 'https://m.media-amazon.com/images/I/81Vx6M7b8vL._AC_SL1500_.jpg' },
  { id: 4, name: 'Unicorn Gundam', grade: 'PG', series: 'UC', custom: false, work: 'Built & Detailing', image: 'https://m.media-amazon.com/images/I/71Wj3cXk0wL._AC_SL1500_.jpg' },
  { id: 5, name: 'Strike Freedom', grade: 'MG', series: 'Seed Destiny', custom: true, work: 'LED Install & Paint', image: 'https://m.media-amazon.com/images/I/81tLh1d+xWL._AC_SL1500_.jpg' },
  { id: 6, name: 'Sazabi Ver.Ka', grade: 'MG', series: 'CCA', custom: false, work: 'Built & Topcoat', image: 'https://m.media-amazon.com/images/I/81Kjbp8fNgL._AC_SL1500_.jpg' },
  { id: 7, name: 'Nu Gundam', grade: 'PG', series: 'UC', custom: true, work: 'Full Custom - LEDs & Weathering', image: 'https://m.media-amazon.com/images/I/81nK3lBkwqL._AC_SL1500_.jpg' },
  { id: 8, name: 'Wing Zero EW', grade: 'RG', series: 'Wing', custom: true, work: 'Custom Paint Scheme', image: 'https://m.media-amazon.com/images/I/81VBN1JFYpL._AC_SL1500_.jpg' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#1a1a2e]/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter text-white">GP.</Link>
        <div className="flex items-center gap-6">
          <button className="p-2 hover:text-[#ff3b30] transition-colors text-white"><Search size={20} strokeWidth={1.5} /></button>
          <button className="md:hidden p-2 text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-[#1a1a2e] border-t border-gray-800">
          <nav className="flex flex-col p-6 gap-4">
            <Link href="/" className="text-sm font-bold tracking-widest uppercase py-2 border-b border-gray-800 text-white">Home</Link>
            <Link href="/collection" className="text-sm font-bold tracking-widest uppercase py-2 border-b border-gray-800 text-white">Collection</Link>
            <Link href="/about" className="text-sm font-bold tracking-widest uppercase py-2 border-b border-gray-800 text-white">About</Link>
            <Link href="/contact" className="text-sm font-bold tracking-widest uppercase py-2 border-b border-gray-800 text-white">Contact</Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-black tracking-tighter">GP.</h3>
            <p className="text-sm text-gray-400 leading-relaxed">Custom Gundam Plamodel Portfolio. Build. Customize. Create.</p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/10 hover:bg-[#ff3b30] transition-colors rounded-full"><Instagram size={18} /></a>
              <a href="#" className="p-3 bg-white/10 hover:bg-[#ff3b30] transition-colors rounded-full"><Youtube size={18} /></a>
              <a href="#" className="p-3 bg-white/10 hover:bg-[#ff3b30] transition-colors rounded-full"><Mail size={18} /></a>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">Menu</h4>
            <ul className="space-y-3">
              <li><Link href="/collection" className="text-sm hover:text-[#ff3b30] transition-colors">Collection</Link></li>
              <li><Link href="/about" className="text-sm hover:text-[#ff3b30] transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-[#ff3b30] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">Services</h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-gray-400">Custom Painting</span></li>
              <li><span className="text-sm text-gray-400">Weathering</span></li>
              <li><span className="text-sm text-gray-400">LED Installation</span></li>
              <li><span className="text-sm text-gray-400">Commission Work</span></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">&copy; 2026 GUNDAM PLAMODEL. All rights reserved.</p>
          <p className="text-xs text-gray-600">Designed by Antigravity</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#1a1a2e]">
        {/* Hero - Full Bleed */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-40 h-40 border border-[#ff3b30] rotate-12" />
            <div className="absolute bottom-40 right-40 w-60 h-60 border border-[#ff3b30] -rotate-12" />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-[#ff3b30] rotate-45 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="relative z-10 text-center px-6">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-xs font-bold tracking-[0.5em] uppercase text-[#ff3b30] mb-6">
              Custom Gundam Portfolio
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-[12vw] leading-[0.85] font-black tracking-tighter text-white">
              BUILD<br /><span className="text-[#ff3b30]">CREATE</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 text-sm text-gray-400 max-w-md mx-auto">
              Custom Gundam plamodel portfolio. Painting, weathering, and detailing.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-10">
              <Link href="/collection" className="inline-flex items-center gap-3 bg-[#ff3b30] text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-[#ff3b30] transition-colors">
                View Collection <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
              <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter">MY COLLECTION</h2>
              <p className="mt-3 text-sm text-gray-500">Completed Works & Custom Projects</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolio.map((item, i) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="group cursor-pointer">
                  <div className="relative aspect-square bg-gray-100 mb-4 overflow-hidden">
                    {item.custom && (
                      <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#ff3b30] text-white text-[10px] font-bold tracking-wider">
                        CUSTOM
                      </span>
                    )}
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-gray-200 text-xs font-bold">{item.grade}</span>
                    </div>
                    <h3 className="text-sm font-bold">{item.name}</h3>
                    <p className="text-xs text-gray-400">{item.series}</p>
                    <p className="text-xs text-gray-500 italic">{item.work}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Service */}
        <section className="py-24 bg-black text-white">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-xs font-bold tracking-[0.3em] text-[#ff3b30]">CUSTOM SERVICE</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter">CUSTOM<br /><span className="text-[#ff3b30]">WORK</span></h2>
                <p className="text-gray-400 max-w-md">Professional custom painting, weathering, and detailing services. Bring your vision to life.</p>
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="#ff3b30" stroke="#ff3b30" />)}
                  </div>
                  <span className="text-sm text-gray-400">5.0 (128 reviews)</span>
                </div>
                <Link href="/contact" className="inline-block bg-[#ff3b30] text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
                  Request Quote
                </Link>
              </div>
              <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                <img src="https://m.media-amazon.com/images/I/81xwD2dTy-L._AC_SL1500_.jpg" alt="Custom Work" className="w-full h-full object-cover opacity-80" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
