'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Menu, X, Search, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';

const sneakers = [
  { id: 1, name: 'Air Max 90', brand: 'Nike', price: 189000, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80', tag: 'BEST SELLER' },
  { id: 2, name: 'Jordan 1 Retro High', brand: 'Nike', price: 259000, image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=800&q=80', tag: 'NEW' },
  { id: 3, name: 'Yeezy Boost 350', brand: 'Adidas', price: 289000, image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=800&q=80', tag: '' },
  { id: 4, name: 'New Balance 550', brand: 'New Balance', price: 179000, image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80', tag: 'HIT' },
  { id: 5, name: 'Dunk Low', brand: 'Nike', price: 169000, image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&q=80', tag: '' },
  { id: 6, name: 'Forum Low', brand: 'Adidas', price: 149000, image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80', tag: 'SALE' },
  { id: 7, name: 'Gel-Kayano 14', brand: 'Asics', price: 199000, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80', tag: 'NEW' },
  { id: 8, name: 'Classic Leather', brand: 'Reebok', price: 129000, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80', tag: '' },
];

const brands = ['Nike', 'Adidas', 'New Balance', 'Puma', 'Converse', 'Vans'];

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
    { href: '/brands', label: 'BRANDS' },
    { href: '/about', label: 'ABOUT' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter">SL.</Link>
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-xs font-bold tracking-[0.2em] uppercase hover:text-[#ff3b30] transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <button className="p-2 hover:text-[#ff3b30] transition-colors"><Search size={20} strokeWidth={1.5} /></button>
          <button className="p-2 hover:text-[#ff3b30] transition-colors relative">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ff3b30] text-white text-[8px] font-bold rounded-full flex items-center justify-center">0</span>
          </button>
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-sm font-bold tracking-widest uppercase py-2 border-b border-gray-100" onClick={() => setMobileOpen(false)}>
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
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-black tracking-tighter">SL.</h3>
            <p className="text-sm text-gray-400 leading-relaxed">The new standard for premium sneaker shopping.</p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">Menu</h4>
            <ul className="space-y-3">
              <li><Link href="/collection" className="text-sm hover:text-[#ff3b30] transition-colors">Collection</Link></li>
              <li><Link href="/brands" className="text-sm hover:text-[#ff3b30] transition-colors">Brands</Link></li>
              <li><Link href="/about" className="text-sm hover:text-[#ff3b30] transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-[#ff3b30] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">Customer</h4>
            <ul className="space-y-3">
              <li><Link href="/faq" className="text-sm hover:text-[#ff3b30] transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="text-sm hover:text-[#ff3b30] transition-colors">Shipping</Link></li>
              <li><Link href="/returns" className="text-sm hover:text-[#ff3b30] transition-colors">Returns</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-[#ff3b30] transition-colors">Privacy</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/10 hover:bg-[#ff3b30] transition-colors rounded-full">Instagram</a>
              <a href="#" className="p-3 bg-white/10 hover:bg-[#ff3b30] transition-colors rounded-full">Twitter</a>
              <a href="#" className="p-3 bg-white/10 hover:bg-[#ff3b30] transition-colors rounded-full">YouTube</a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">&copy; 2026 SNEAKER LAB. All rights reserved.</p>
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
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#fafafa]">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-40 h-40 border border-gray-300 rotate-12" />
            <div className="absolute bottom-40 right-40 w-60 h-60 border border-gray-300 -rotate-12" />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-gray-300 rotate-45 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="relative z-10 text-center px-6">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-xs font-bold tracking-[0.5em] uppercase text-gray-500 mb-6">
              Premium Kicks Collection
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-[12vw] leading-[0.85] font-black tracking-tighter text-black">
              STEP<br /><span className="text-[#ff3b30]">UP</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 text-sm text-gray-600 max-w-md mx-auto">
              Upgrade your style with our curated collection of trendy sneakers.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-10">
              <Link href="/collection" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#ff3b30] transition-colors">
                View Collection <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
              <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* Brands */}
        <section className="py-20 border-y border-gray-100">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {brands.map((brand, i) => (
                <motion.span key={brand} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.1 }} className="text-xl md:text-2xl font-black tracking-wider text-gray-300 hover:text-black transition-colors cursor-pointer">
                  {brand.toUpperCase()}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-24 bg-white">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter">NEW ARRIVALS</h2>
                <p className="mt-3 text-sm text-gray-500">Latest Collection</p>
              </div>
              <Link href="/collection" className="hidden md:flex items-center gap-2 text-xs font-bold tracking-widest uppercase hover:text-[#ff3b30] transition-colors">
                View All <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sneakers.map((sneaker, i) => (
                <motion.div key={sneaker.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="group cursor-pointer">
                  <div className="relative aspect-square bg-gray-100 mb-4 overflow-hidden">
                    {sneaker.tag && <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-black text-white text-[10px] font-bold tracking-wider">{sneaker.tag}</span>}
                    <img src={sneaker.image} alt={sneaker.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-gray-400 tracking-wider">{sneaker.brand}</p>
                    <h3 className="text-sm font-bold">{sneaker.name}</h3>
                    <p className="text-sm font-medium">{sneaker.price.toLocaleString()}₩</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Banner */}
        <section className="py-24 bg-black text-white">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-xs font-bold tracking-[0.3em] text-[#ff3b30]">LIMITED EDITION</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter">SPECIAL<br /><span className="text-[#ff3b30]">DROPS</span></h2>
                <p className="text-gray-400 max-w-md">Get exclusive access to limited edition kicks and collaborations. Don&apos;t miss out on new drops updated daily.</p>
                <button className="bg-[#ff3b30] text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors">Coming Soon</button>
              </div>
              <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80" alt="Special Drop" className="w-full h-full object-cover opacity-80" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
