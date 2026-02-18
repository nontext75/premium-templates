'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function CartDrawer() {
    const { isOpen, toggleCart, items, removeItem, cartTotal } = useCart();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200]"
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed top-0 right-0 bottom-0 w-full md:w-[500px] bg-white z-[201] p-8 md:p-12 flex flex-col shadow-2xl"
                    >
                        <div className="flex justify-between items-center mb-12 border-b border-black/10 pb-6">
                            <h2 className="text-xl font-black uppercase tracking-tight flex items-center gap-3">
                                <ShoppingBag className="w-5 h-5 text-[#ED008C]" />
                                Your Selection
                            </h2>
                            <button onClick={toggleCart} className="text-black/40 hover:text-[#ED008C] transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto space-y-8 pr-2">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-black/20 space-y-4">
                                    <ShoppingBag size={48} strokeWidth={1} />
                                    <span className="text-sm font-black uppercase tracking-widest">Cart is empty</span>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <motion.div
                                        layout
                                        key={item.id}
                                        className="flex gap-6 group"
                                    >
                                        <div className="w-24 h-32 bg-[#f4f4f4] overflow-hidden relative">
                                            <img src={item.image} className="w-full h-full object-cover mix-blend-multiply" alt={item.title} />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <span className="text-[10px] font-black text-[#ED008C] uppercase tracking-widest mb-1 block">{item.category}</span>
                                                    <h4 className="font-bold leading-tight max-w-[150px]">{item.title}</h4>
                                                </div>
                                                <button onClick={() => removeItem(item.id)} className="text-black/20 hover:text-[#ED008C] transition-colors"><Trash2 size={16} /></button>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <div className="flex items-center gap-3 bg-[#f4f4f4] px-3 py-1 text-xs font-bold">
                                                    <span>Qty</span>
                                                    <span>{item.quantity}</span>
                                                </div>
                                                <span className="text-lg font-black">${(item.price * item.quantity).toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        <div className="mt-12 pt-8 border-t border-black/10 space-y-6">
                            <div className="flex justify-between items-end">
                                <span className="text-[11px] font-black uppercase tracking-widest text-black/40">Subtotal</span>
                                <span className="text-3xl font-black tracking-tighter">${cartTotal.toLocaleString()}</span>
                            </div>
                            <p className="text-[10px] text-black/40 font-medium leading-relaxed">
                                Shipping and taxes calculated at checkout.
                            </p>
                            <button className="w-full py-5 bg-black text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#ED008C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={items.length === 0}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
