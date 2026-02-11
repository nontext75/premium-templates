'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />

            <section className="pt-[200px] pb-[120px] px-[64px]">
                <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[120px]">
                    {/* Left Column: Info */}
                    <div>
                        <span className="text-[11px] font-normal tracking-[3px] uppercase opacity-60 block mb-[32px]">Contact</span>
                        <h1 className="text-[78px] leading-[94px] font-semibold tracking-[-3.9px] mb-[80px]">
                            Get in touch.
                        </h1>

                        <div className="flex flex-col gap-[64px]">
                            <div>
                                <span className="text-[11px] font-normal tracking-[3px] uppercase opacity-60 block mb-[24px]">Office</span>
                                <p className="text-[24px] leading-[32px] font-bold tracking-[-0.72px]">
                                    213 West 5th Street<br />
                                    Austin, Texas 78701
                                </p>
                            </div>
                            <div>
                                <span className="text-[11px] font-normal tracking-[3px] uppercase opacity-60 block mb-[24px]">Direct</span>
                                <p className="text-[24px] leading-[32px] font-bold tracking-[-0.72px]">
                                    512 827 2100<br />
                                    hello@nontext.design
                                </p>
                            </div>
                            <div>
                                <span className="text-[11px] font-normal tracking-[3px] uppercase opacity-60 block mb-[24px]">Social</span>
                                <div className="flex gap-[32px]">
                                    {['Instagram', 'LinkedIn', 'Dribbble', 'Behance'].map((social) => (
                                        <a key={social} href="#" className="text-[11px] font-bold tracking-[3px] uppercase hover:opacity-60 transition-opacity">
                                            {social}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="pt-[120px]">
                        <form className="flex flex-col gap-[48px]">
                            {['Full Name', 'Email Address', 'Company', 'Message'].map((label) => (
                                <div key={label} className="flex flex-col gap-[16px] border-b border-white/20 pb-[16px]">
                                    <label className="text-[11px] font-normal tracking-[3px] uppercase opacity-40">{label}</label>
                                    <input
                                        type="text"
                                        className="bg-transparent text-[24px] font-bold tracking-[-0.72px] outline-none placeholder:opacity-20 w-full"
                                    />
                                </div>
                            ))}
                            <button className="h-[54px] px-[40px] bg-white text-black rounded-[100px] text-[11px] font-bold tracking-[3px] uppercase hover:bg-neutral-200 transition-colors w-fit mt-[32px]">
                                Send Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
