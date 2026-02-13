'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const sneakers = [
  {
    id: 1,
    name: 'Air Max 90',
    brand: 'Nike',
    price: 189000,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    tag: 'BEST SELLER',
  },
  {
    id: 2,
    name: 'Jordan 1 Retro High',
    brand: 'Nike',
    price: 259000,
    image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=800&q=80',
    tag: 'NEW',
  },
  {
    id: 3,
    name: 'Yeezy Boost 350',
    brand: 'Adidas',
    price: 289000,
    image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=800&q=80',
    tag: '',
  },
  {
    id: 4,
    name: 'New Balance 550',
    brand: 'New Balance',
    price: 179000,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80',
    tag: 'HIT',
  },
  {
    id: 5,
    name: 'Dunk Low',
    brand: 'Nike',
    price: 169000,
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&q=80',
    tag: '',
  },
  {
    id: 6,
    name: 'Forum Low',
    brand: 'Adidas',
    price: 149000,
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80',
    tag: 'SALE',
  },
  {
    id: 7,
    name: 'Gel-Kayano 14',
    brand: 'Asics',
    price: 199000,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80',
    tag: 'NEW',
  },
  {
    id: 8,
    name: 'Classic Leather',
    brand: 'Reebok',
    price: 129000,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
    tag: '',
  },
];

const brands = ['Nike', 'Adidas', 'New Balance', 'Puma', 'Converse', 'Vans'];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-40 h-40 border border-gray-300 rotate-12" />
          <div className="absolute bottom-40 right-40 w-60 h-60 border border-gray-300 -rotate-12" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-gray-300 rotate-45 -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold tracking-[0.5em] uppercase text-gray-500 mb-6"
          >
            Premium Kicks Collection
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-8xl md:text-[10vw] leading-[0.85] font-black tracking-tighter text-black"
          >
            STEP
            <br />
            <span className="text-[#ff3b30]">UP</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-sm text-gray-600 max-w-md mx-auto"
          >
            트렌디한 운동화 컬렉션으로 당신의 스타일을 업그레이드하세요.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10"
          >
            <Link
              href="/collection"
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#ff3b30] transition-colors"
            >
              View Collection
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Brands Section */}
      <section className="py-24 border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {brands.map((brand, i) => (
              <motion.span
                key={brand}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-xl md:text-2xl font-black tracking-wider text-gray-300 hover:text-black transition-colors cursor-pointer"
              >
                {brand.toUpperCase()}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter">NEW ARRIVALS</h2>
              <p className="mt-3 text-sm text-gray-500">최신 컬렉션</p>
            </div>
            <Link
              href="/collection"
              className="hidden md:flex items-center gap-2 text-xs font-bold tracking-widest uppercase hover:text-[#ff3b30] transition-colors"
            >
              View All
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {sneakers.map((sneaker, i) => (
              <motion.div
                key={sneaker.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square bg-gray-100 mb-4 overflow-hidden">
                  {sneaker.tag && (
                    <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-black text-white text-[10px] font-bold tracking-wider">
                      {sneaker.tag}
                    </span>
                  )}
                  <img
                    src={sneaker.image}
                    alt={sneaker.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-gray-400 tracking-wider">{sneaker.brand}</p>
                  <h3 className="text-sm font-bold">{sneaker.name}</h3>
                  <p className="text-sm font-medium">{sneaker.price.toLocaleString()}₩</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              href="/collection"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase hover:text-[#ff3b30] transition-colors"
            >
              View All
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-[0.3em] text-[#ff3b30]">LIMITED EDITION</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
                SPECIAL
                <br />
                <span className="text-[#ff3b30]">DROPS</span>
              </h2>
              <p className="text-gray-400 max-w-md">
                한정판 키크스와 독점 협업 컬렉션을 빠르게 만나보세요.
                매일 업데이트되는 새로운 드롭을 놓치지 마세요.
              </p>
              <button className="bg-[#ff3b30] text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
                Coming Soon
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80"
                  alt="Special Drop"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
