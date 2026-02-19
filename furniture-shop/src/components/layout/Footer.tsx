'use client';

import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-white border-t border-black/10 py-24">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
                    <div className="col-span-1 md:col-span-1 space-y-6">
                        <Link href="/" className="block">
                            <h2 className="text-2xl font-bold tracking-tight">LUMINOUS.</h2>
                        </Link>
                        <p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
                            Curated objects for contemporary living. Defining space through light and form.
                        </p>
                    </div>

                    <div className="col-span-1 space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Shop</h4>
                        <ul className="space-y-4">
                            <li><Link href="/collection" className="text-sm hover:text-neutral-500 transition-colors">All Products</Link></li>
                            <li><Link href="/collection?category=seating" className="text-sm hover:text-neutral-500 transition-colors">Seating</Link></li>
                            <li><Link href="/collection?category=lighting" className="text-sm hover:text-neutral-500 transition-colors">Lighting</Link></li>
                            <li><Link href="/collection?category=objects" className="text-sm hover:text-neutral-500 transition-colors">Objects</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1 space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-sm hover:text-neutral-500 transition-colors">About Us</Link></li>
                            <li><Link href="/journal" className="text-sm hover:text-neutral-500 transition-colors">Journal</Link></li>
                            <li><Link href="/contact" className="text-sm hover:text-neutral-500 transition-colors">Contact</Link></li>
                            <li><Link href="/shipping" className="text-sm hover:text-neutral-500 transition-colors">Shipping & Returns</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1 space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Newsletter</h4>
                        <p className="text-sm text-neutral-500 leading-relaxed">
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </p>
                        <form className="flex border-b border-black/20 pb-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-transparent w-full text-sm outline-none placeholder:text-neutral-400"
                            />
                            <button type="button" className="text-xs font-bold uppercase tracking-widest hover:text-neutral-500 transition-colors">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 text-xs text-neutral-400 uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} Luminous. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-black transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
