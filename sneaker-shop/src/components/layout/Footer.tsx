'use client';

import Link from 'next/link';
import { Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-6 md:text-left">
            <h3 className="text-3xl font-black tracking-tighter mx-auto md:mx-0">SL.</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto md:mx-0">
              The new standard for premium sneaker shopping.
              Discover trendy kicks that define your style.
            </p>
          </div>

          {/* Menu */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
              Menu
            </h4>
            <ul className="space-y-3">
              <li><Link href="/collection" className="text-sm hover:text-[#ff3b30] transition-colors">Collection</Link></li>
              <li><Link href="/brands" className="text-sm hover:text-[#ff3b30] transition-colors">Brands</Link></li>
              <li><Link href="/about" className="text-sm hover:text-[#ff3b30] transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-[#ff3b30] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
              Customer
            </h4>
            <ul className="space-y-3">
              <li><Link href="/faq" className="text-sm hover:text-[#ff3b30] transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="text-sm hover:text-[#ff3b30] transition-colors">Shipping</Link></li>
              <li><Link href="/returns" className="text-sm hover:text-[#ff3b30] transition-colors">Returns</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-[#ff3b30] transition-colors">Privacy</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/10 hover:bg-[#ff3b30] transition-colors rounded-full">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-3 bg-white/10 hover:bg-[#ff3b30] transition-colors rounded-full">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-3 bg-white/10 hover:bg-[#ff3b30] transition-colors rounded-full">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2026 SNEAKER LAB. All rights reserved.</p>
          <p className="text-xs text-gray-600">Designed by Antigravity</p>
        </div>
      </div>
    </footer>
  );
}
