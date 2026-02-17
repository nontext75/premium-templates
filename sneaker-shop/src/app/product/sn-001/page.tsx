'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ShoppingBag, ChevronRight, Share2, Heart } from 'lucide-react';

export default function ProductDetailPage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />

            <div className="pt-32 pb-24 max-w-[1440px] mx-auto px-6 md:px-12">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-brand-secondary/30 mb-12 uppercase">
                    <span>Shop</span>
                    <ChevronRight size={10} />
                    <span>Performance</span>
                    <ChevronRight size={10} />
                    <span className="text-brand-secondary">Sport Sneakers</span>
                </div>

                <div className="grid grid-cols-12 gap-12 lg:gap-24">
                    {/* Image Gallery */}
                    <div className="col-span-12 lg:col-span-7 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="aspect-square bg-[#F8F8F8] rounded-[40px] overflow-hidden"
                        >
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200" className="w-full h-full object-cover" alt="Product" />
                        </motion.div>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="aspect-square bg-[#F8F8F8] rounded-[30px] overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800" className="w-full h-full object-cover" alt="Detail 1" />
                            </div>
                            <div className="aspect-square bg-[#F8F8F8] rounded-[30px] overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800" className="w-full h-full object-cover" alt="Detail 2" />
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-brand-accent text-[10px] font-black tracking-[0.4em] uppercase">Premier Performance</span>
                                <div className="flex gap-4">
                                    <button className="text-brand-secondary/20 hover:text-brand-secondary transition-colors"><Share2 size={18} /></button>
                                    <button className="text-brand-secondary/20 hover:text-brand-secondary transition-colors"><Heart size={18} /></button>
                                </div>
                            </div>

                            <h1 className="text-6xl font-black tracking-tighter text-brand-secondary mb-6 leading-none">Sport Sneakers</h1>
                            <div className="flex items-center gap-4 mb-10">
                                <span className="text-3xl font-black text-brand-secondary">$240.00</span>
                                <div className="h-4 w-[1px] bg-brand-border mx-2"></div>
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 bg-brand-accent rounded-full" />)}
                                    <span className="text-[10px] font-black text-brand-secondary/30 ml-2">128 Reviews</span>
                                </div>
                            </div>

                            <p className="text-brand-secondary/60 leading-relaxed mb-12">
                                Engineered for the elite. Our Sport Sneakers combine high-rebound cushioning with a precision-fit upper for ultimate performance and stability on any surface.
                            </p>

                            {/* Size Selector */}
                            <div className="mb-12">
                                <div className="flex justify-between mb-4">
                                    <span className="text-[10px] font-black tracking-widest uppercase">Select Size</span>
                                    <button className="text-[10px] font-black tracking-widest text-brand-secondary/30 underline uppercase">Size Guide</button>
                                </div>
                                <div className="grid grid-cols-4 gap-4">
                                    {['US 8', 'US 9', 'US 10', 'US 11'].map((size) => (
                                        <button key={size} className="py-4 border border-brand-border rounded-xl text-[10px] font-black hover:border-brand-secondary transition-all">
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button className="w-full py-6 bg-brand-secondary text-white text-[12px] font-black tracking-[0.4em] uppercase rounded-full hover:bg-black transition-all flex items-center justify-center gap-4 mb-6 group">
                                <ShoppingBag size={18} />
                                Add to Cart
                            </button>

                            <p className="text-[9px] text-center text-brand-secondary/30 font-bold uppercase tracking-widest">Free Shipping & Returns on all orders</p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
