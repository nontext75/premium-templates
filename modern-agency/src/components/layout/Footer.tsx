'use client';

import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-black text-white py-24 px-6 md:px-12">
            <div className="max-w-[1440px] w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
                    <div className="md:col-span-2">
                        <h2 className="text-[6vw] leading-[0.9] font-black tracking-[-0.05em] uppercase mb-8">
                            Let's innovate<br />together.
                        </h2>
                    </div>
                    <div>
                        <div className="text-[9px] font-black tracking-[0.4em] uppercase opacity-40 mb-6">Contact</div>
                        <p className="text-sm font-medium tracking-tight mb-2">hello@nside.design</p>
                        <p className="text-sm font-medium tracking-tight">+1 (512) 555-0123</p>
                    </div>
                    <div>
                        <div className="text-[9px] font-black tracking-[0.4em] uppercase opacity-40 mb-6">Offices</div>
                        <p className="text-sm font-medium tracking-tight mb-2">Austin, Texas</p>
                        <p className="text-sm font-medium tracking-tight">London, UK</p>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-12 border-t border-white/10">
                    <div className="text-[9px] font-black tracking-[0.5em] uppercase">
                        © 2026 NSIDE.
                    </div>
                    <div className="flex gap-8">
                        {['Instagram', 'LinkedIn', 'Twitter'].map(social => (
                            <Link key={social} href="#" className="text-[9px] font-black tracking-[0.5em] uppercase hover:opacity-50 transition-opacity">
                                {social}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
