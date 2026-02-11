'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { journalEntries } from '@/lib/data';
import Link from 'next/link';

export default function StoryDetailPage() {
    const params = useParams();
    const story = journalEntries.find((s) => s.id === params.id);

    if (!story) {
        return (
            <div className="h-screen flex items-center justify-center bg-white">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl font-black uppercase tracking-tight">Story Not Found</h1>
                    <Link href="/stories" className="inline-block border-b-2 border-black pb-1 text-[12px] font-black uppercase tracking-tight hover:text-[#ED008C] hover:border-[#ED008C] transition-colors">
                        Back to Journal
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="bg-white min-h-screen pt-40 pb-60">
            <div className="max-w-[1440px] mx-auto px-6">

                {/* Navigation */}
                <div className="mb-24 flex justify-between items-center border-b border-black/10 pb-8">
                    <Link href="/stories" className="text-[12px] font-black uppercase tracking-tight text-[#ED008C] hover:text-black transition-colors flex items-center gap-4">
                        ← Back to Journal
                    </Link>
                    <span className="text-[12px] font-black tracking-tight text-[#ED008C] uppercase">{story.date} // {story.category.split(' // ')[0]}</span>
                </div>

                {/* Article Header */}
                <article className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-12 mb-20 text-center"
                    >
                        <span className="text-[13px] font-black tracking-tight text-[#ED008C] uppercase block">
                            {story.category}
                        </span>
                        <h1 className="text-[5vw] md:text-[4rem] font-black tracking-tighter leading-[1.1] uppercase">
                            {story.title}
                        </h1>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative aspect-[16/9] w-full overflow-hidden mb-24 warm-shadow rounded-[1px]"
                    >
                        <img
                            src={story.image}
                            alt={story.title}
                            className="w-full h-full object-cover contrast-105"
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="prose prose-lg max-w-none"
                    >
                        <p className="text-2xl md:text-3xl font-bold leading-relaxed tracking-tight text-black mb-16 border-l-4 border-[#ED008C] pl-8">
                            {story.excerpt}
                        </p>
                        <div
                            className="text-xl md:text-2xl text-[#333] font-medium leading-[1.8] tracking-tight whitespace-pre-line"
                            dangerouslySetInnerHTML={{ __html: story.content || '' }}
                        />
                    </motion.div>

                    {/* Footer / Next */}
                    <div className="mt-40 border-t border-black/10 pt-20 flex justify-center">
                        <Link href="/stories" className="group flex flex-col items-center space-y-4">
                            <span className="text-[12px] font-black tracking-tight text-black/30 uppercase group-hover:text-[#ED008C] transition-colors">More Insights</span>
                            <span className="text-4xl font-black tracking-tighter group-hover:text-[#ED008C] transition-colors">View All Stories →</span>
                        </Link>
                    </div>
                </article>
            </div>
        </main>
    );
}
