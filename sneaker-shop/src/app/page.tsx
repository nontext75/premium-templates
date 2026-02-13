'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Menu, X, Search, Star, Mail, Instagram, Youtube, Palette, Zap, Layers } from 'lucide-react';
import { useState, useEffect } from 'react';

const portfolio = [
  { id: 1, name: 'RX-78-2 Gundam', grade: 'MG', series: 'Mobile Suit Gundam', custom: false, work: 'Built & Weathered', image: 'https://images.unsplash.com/photo-1612690726591-128fbbf388b1?w=800&q=80' },
  { id: 2, name: 'Zaku II Char', grade: 'MG', series: 'Mobile Suit Gundam', custom: true, work: 'Custom Paint & Markings', image: 'https://images.unsplash.com/photo-1560942485-b2a11cc13456?w=800&q=80' },
  { id: 3, name: 'Barbatos Lupus', grade: 'HG', series: 'Iron-Blooded Orphans', custom: true, work: 'Full Custom Paint', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80' },
  { id: 4, name: 'Unicorn Gundam', grade: 'PG', series: 'UC', custom: false, work: 'Built & Detailing', image: 'https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?w=800&q=80' },
  { id: 5, name: 'Strike Freedom', grade: 'MG', series: 'Seed Destiny', custom: true, work: 'LED Install & Paint', image: 'https://images.unsplash.com/photo-1593085260707-5377ba37f868?w=800&q=80' },
  { id: 6, name: 'Sazabi Ver.Ka', grade: 'MG', series: 'CCA', custom: false, work: 'Built & Topcoat', image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&q=80' },
  { id: 7, name: 'Nu Gundam', grade: 'PG', series: 'UC', custom: true, work: 'Full Custom - LEDs & Weathering', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' },
  { id: 8, name: 'Wing Zero EW', grade: 'RG', series: 'Wing', custom: true, work: 'Custom Paint Scheme', image: 'https://images.unsplash.com/photo-1560790619-da4d695cc797?w=800&q=80' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/collection', label: 'COLLECTION' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f0f1a]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-8 h-20 flex items-center justify-between">
        <Link href="/" className="text-3xl font-black tracking-tighter text-white">GP.</Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-xs font-bold tracking-[0.2em] uppercase text-white/80 hover:text-[#ff3b30] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:text-[#ff3b30] transition-colors text-white/80">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="md:hidden p-2 text-white/80" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {mobileOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="md:hidden bg-[#0f0f1a]/98 backdrop-blur-md border-t border-white/10"
        >
          <nav className="flex flex-col p-6 gap-0">
            {navLinks.map(link => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-sm font-bold tracking-[0.2em] uppercase py-4 border-b border-white/10 text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0f0f1a] text-white pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div className="space-y-6">
            <h3 className="text-4xl font-black tracking-tighter">GP.</h3>
            <p className="text-sm text-white/50 leading-relaxed">Custom Gundam Plamodel Portfolio. Build. Customize. Create.</p>
            <div className="flex gap-3">
              <a href="#" className="p-3 bg-white/5 hover:bg-[#ff3b30] transition-colors rounded-full text-white/70 hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-3 bg-white/5 hover:bg-[#ff3b30] transition-colors rounded-full text-white/70 hover:text-white">
                <Youtube size={18} />
              </a>
              <a href="#" className="p-3 bg-white/5 hover:bg-[#ff3b30] transition-colors rounded-full text-white/70 hover:text-white">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-white/40">Menu</h4>
            <ul className="space-y-4">
              <li><Link href="/collection" className="text-sm text-white/70 hover:text-[#ff3b30] transition-colors">Collection</Link></li>
              <li><Link href="/about" className="text-sm text-white/70 hover:text-[#ff3b30] transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm text-white/70 hover:text-[#ff3b30] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-white/40">Services</h4>
            <ul className="space-y-4">
              <li><span className="text-sm text-white/50">Custom Painting</span></li>
              <li><span className="text-sm text-white/50">Weathering</span></li>
              <li><span className="text-sm text-white/50">LED Installation</span></li>
              <li><span className="text-sm text-white/50">Commission Work</span></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">&copy; 2026 GUNDAM PLAMODEL. All rights reserved.</p>
          <p className="text-xs text-white/20">Designed by Antigravity</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0f0f1a]">
        {/* Hero - Full Bleed */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#16213e]" />
          
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-[15%] left-[10%] w-32 h-32 border border-[#ff3b30]/20 rotate-12" />
            <div className="absolute bottom-[20%] right-[15%] w-48 h-48 border border-[#ff3b30]/15 -rotate-12" />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 border border-[#ff3b30]/10 rotate-45 -translate-x-1/2 -translate-y-1/2" />
          </div>
          
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              className="text-xs font-bold tracking-[0.5em] uppercase text-[#ff3b30] mb-8"
            >
              Custom Gundam Portfolio
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="text-[10vw] leading-[0.9] font-black tracking-tighter text-white"
            >
              BUILD<br /><span className="text-[#ff3b30]">CREATE</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.4 }} 
              className="mt-10 text-base text-white/50 max-w-lg mx-auto"
            >
              Custom Gundam plamodel portfolio featuring painting, weathering, and detailing works.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.6 }} 
              className="mt-12"
            >
              <Link 
                href="/collection" 
                className="inline-flex items-center gap-3 bg-[#ff3b30] text-white px-10 py-5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#ff3b30] transition-colors"
              >
                View Collection <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1.2 }} 
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-3">
              <motion.div 
                animate={{ y: [0, 8, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5 }} 
                className="w-1 h-2 bg-white/40 rounded-full" 
              />
            </div>
          </motion.div>
        </section>

        {/* Services Banner */}
        <section className="py-20 bg-[#0f0f1a] border-y border-white/5">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Palette, title: 'Custom Paint', desc: 'Professional painting services' },
                { icon: Zap, title: 'LED Install', desc: 'Electronics & lighting' },
                { icon: Layers, title: 'Weathering', desc: 'Realistic aging effects' },
              ].map((service, i) => (
                <motion.div 
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 p-6 bg-white/5 rounded-xl"
                >
                  <service.icon className="text-[#ff3b30]" size={32} strokeWidth={1.5} />
                  <div>
                    <h4 className="text-sm font-bold text-white">{service.title}</h4>
                    <p className="text-xs text-white/40">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-32 bg-[#0f0f1a]">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white">MY COLLECTION</h2>
              <p className="mt-4 text-sm text-white/40">Completed Works & Custom Projects</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolio.map((item, i) => (
                <motion.div 
                  key={item.id} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ delay: i * 0.1 }} 
                  viewport={{ once: true }} 
                  className="group"
                >
                  <div className="relative aspect-[4/5] bg-white/5 mb-4 overflow-hidden rounded-lg">
                    {item.custom && (
                      <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#ff3b30] text-white text-[10px] font-bold tracking-wider">
                        CUSTOM
                      </span>
                    )}
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-white/10 text-white/60 text-xs font-bold rounded">{item.grade}</span>
                    </div>
                    <h3 className="text-base font-bold text-white">{item.name}</h3>
                    <p className="text-xs text-white/40">{item.series}</p>
                    <p className="text-xs text-white/30 italic">{item.work}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Service */}
        <section className="py-32 bg-[#0a0a12]">
          <div className="max-w-[1400px] mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <span className="text-xs font-bold tracking-[0.3em] text-[#ff3b30]">CUSTOM SERVICE</span>
                <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-white">
                  CUSTOM<br /><span className="text-[#ff3b30]">WORK</span>
                </h2>
                <p className="text-base text-white/50 max-w-md">
                  Professional custom painting, weathering, and detailing services. 
                  Bring your vision to life with professional craftsmanship.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="#ff3b30" stroke="#ff3b30" />)}
                  </div>
                  <span className="text-sm text-white/40">5.0 (128 reviews)</span>
                </div>
                <Link 
                  href="/contact" 
                  className="inline-block bg-[#ff3b30] text-white px-10 py-5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#ff3b30] transition-colors"
                >
                  Request Quote
                </Link>
              </div>
              <div className="relative aspect-square bg-gradient-to-br from-[#ff3b30]/20 to-[#0f0f1a] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1612690726591-128fbbf388b1?w=800&q=80" 
                  alt="Custom Work" 
                  className="w-full h-full object-cover opacity-60" 
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
