export function Footer() {
    return (
        <footer className="py-24 px-6 md:px-12 bg-[#0a0a12] text-[#f5f5f0] border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
                    <div>
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6">
                            GP.
                        </h2>
                        <p className="text-white/40 text-sm tracking-[0.2em] max-w-xs leading-relaxed">
                            PREMIUM GUNDAM PLAMODEL CUSTOMIZATION STUDIO EST. 2020
                        </p>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-2">
                        <a href="mailto:contact@gp.studio" className="text-2xl md:text-3xl font-bold hover:text-[#ff3b30] transition-colors">
                            contact@gp.studio
                        </a>
                        <p className="text-white/40 text-xs tracking-widest uppercase">
                            Available for Commission Work
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-white/20 text-[10px] tracking-[0.2em] uppercase">
                        © 2026 GP. Studio. All Rights Reserved.
                    </div>
                    <div className="flex gap-8 text-white/40 text-[10px] tracking-[0.2em] uppercase font-bold">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">Youtube</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
