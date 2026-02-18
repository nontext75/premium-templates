'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus('success');
        setFormState({ name: '', email: '', message: '' });

        // Reset status after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <main className="bg-white min-h-screen pt-40 pb-40">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-40 items-start">
                    <div className="space-y-16">
                        <div>
                            <span className="text-[12px] font-black tracking-[1em] text-black/20 uppercase block mb-8">Connect</span>
                            <h1 className="text-[8vw] md:text-[6vw] font-black tracking-tighter leading-none mb-8">
                                FIND US.
                            </h1>
                            <p className="text-xl text-[#707070] font-medium max-w-md leading-relaxed">
                                We are always looking for new challenges and collaborations.
                                Reach out to discuss your next project.
                            </p>
                        </div>

                        <div className="space-y-12 border-t border-black/10 pt-12">
                            <div className="space-y-2">
                                <h3 className="text-sm font-black uppercase tracking-widest">Flagship Store</h3>
                                <p className="text-[#707070] font-medium leading-relaxed">
                                    425 Commercial St. <br />
                                    Downtown Los Angeles, CA
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-sm font-black uppercase tracking-widest">Inquiries</h3>
                                <p className="text-[#707070] font-medium leading-relaxed hover:text-[#ED008C] transition-colors cursor-pointer">
                                    concierge@commercial.com
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#f8f8f8] p-12 md:p-16 warm-shadow rounded-[1px]">
                        <AnimatePresence mode='wait'>
                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="h-[400px] flex flex-col items-center justify-center text-center space-y-6"
                                >
                                    <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-2xl">✓</div>
                                    <div>
                                        <h3 className="text-2xl font-black tracking-tight mb-2">Message Sent</h3>
                                        <p className="text-[#707070]">We will be in touch shortly.</p>
                                    </div>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="text-[11px] font-black uppercase tracking-widest border-b border-black pb-1 hover:text-[#ED008C] hover:border-[#ED008C] transition-all"
                                    >
                                        Send Another
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-[11px] font-black uppercase tracking-widest text-black/40">Identity</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formState.name}
                                            onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                                            className="w-full bg-transparent border-b border-black/10 py-4 text-lg font-bold outline-none focus:border-[#ED008C] transition-colors placeholder:text-black/10"
                                            placeholder="YOUR NAME"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-[11px] font-black uppercase tracking-widest text-black/40">Communication</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formState.email}
                                            onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                                            className="w-full bg-transparent border-b border-black/10 py-4 text-lg font-bold outline-none focus:border-[#ED008C] transition-colors placeholder:text-black/10"
                                            placeholder="EMAIL ADDRESS"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-[11px] font-black uppercase tracking-widest text-black/40">Brief</label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={4}
                                            value={formState.message}
                                            onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                                            className="w-full bg-transparent border-b border-black/10 py-4 text-lg font-bold outline-none focus:border-[#ED008C] transition-colors placeholder:text-black/10 resize-none"
                                            placeholder="TELL US ABOUT YOUR PROJECT..."
                                        />
                                    </div>
                                    <div className="pt-8">
                                        <button
                                            type="submit"
                                            disabled={status === 'sending'}
                                            className="w-full bg-black text-white py-5 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#ED008C] transition-colors disabled:opacity-50"
                                        >
                                            {status === 'sending' ? 'Transmitting...' : 'Submit Inquiry'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </main>
    );
}
