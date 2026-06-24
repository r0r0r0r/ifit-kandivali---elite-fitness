import React from 'react';
import { Instagram, Heart, ArrowUpRight } from 'lucide-react';
import { MOCK_POSTS } from '../data';

const About: React.FC = () => {
    return (
        <section className="min-h-screen relative overflow-hidden py-32">
            {/* Background Image - Subtle Texture */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <img
                    width={1920}
                    height={1080}
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
                    alt=""
                    className="w-full h-full object-cover opacity-10 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
            </div>

            {/* Giant Watermark Text */}
            <div className="absolute top-[20%] left-0 w-full overflow-hidden pointer-events-none select-none opacity-20 transform -translate-y-1/2">
                <h1 className="text-[12rem] font-black italic text-transparent stroke-text leading-none tracking-tighter uppercase whitespace-nowrap blur-sm">
                    UNBROKEN
                </h1>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                {/* Text Content */}
                <div className="space-y-10">
                    <div className="space-y-4">
                        <p className="text-neon font-black tracking-[0.3em] uppercase text-sm italic flex items-center gap-3">
                            <span className="w-8 h-1 bg-neon"></span>
                            The Philosophy
                        </p>
                        <h2 className="text-6xl md:text-8xl font-black uppercase italic leading-[0.85] text-white tracking-tighter">
                            MORE THAN <br />
                            <span className="text-outline-neon text-transparent">JUST A GYM.</span>
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg md:text-xl text-white/60 font-medium leading-[1.6] max-w-xl">
                        <p>
                            SYRO INNOVATIVE FITNESS isn't just a gym. It's a <span className="text-white font-bold">performance laboratory</span>.
                        </p>
                        <p>
                            We leverage advanced bio-mechanics, data-driven programming, and elite coaching to optimize human potential. Built on innovation and precision, we redefine what your body is capable of.
                        </p>
                    </div>

                    <button className="group flex items-center gap-4 text-white font-black uppercase italic tracking-wider hover:text-neon transition-colors pl-1">
                        Discover Our Story <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

                {/* Visual/Social Proof */}
                <div className="relative">
                    <div className="bg-zinc-900/40 backdrop-blur-[20px] border border-white/15 p-8 rounded-[24px] space-y-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <div className="flex items-center justify-between pb-6 border-b border-white/5">
                            <div className="space-y-1">
                                <h3 className="text-3xl font-black italic text-white uppercase tracking-tighter">THE TRIBE</h3>
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
                                    </span>
                                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Live from the floor</p>
                                </div>
                            </div>
                            <a
                                href="https://instagram.com/ifitkandivali"
                                target="_blank"
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-neon hover:text-black transition-all text-white"
                            >
                                <Instagram size={20} />
                            </a>
                        </div>

                        {/* Bento Grid layout */}
                        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[450px]">
                            {/* Large Item: Feature Post */}
                            <div className="group relative row-span-2 rounded-[2rem] bg-zinc-800 overflow-hidden border border-white/5 shadow-lg">
                                <img
                                    src={MOCK_POSTS[0].imageUrl}
                                    alt={MOCK_POSTS[0].caption}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center gap-2 text-white font-bold mb-2">
                                        <Heart size={18} className="fill-neon text-neon" />
                                        {MOCK_POSTS[0].likes}
                                    </div>
                                    <p className="text-white/80 text-xs line-clamp-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                        {MOCK_POSTS[0].caption}
                                    </p>
                                </div>
                            </div>

                            {/* Top Right: Secondary Image */}
                            <div className="group relative rounded-[2rem] bg-zinc-800 overflow-hidden border border-white/5 shadow-lg">
                                <img
                                    src={MOCK_POSTS[1].imageUrl}
                                    alt={MOCK_POSTS[1].caption}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                    <Heart size={14} className="fill-white text-white" />
                                </div>
                            </div>

                            {/* Bottom Right: Community Stats Widget (True Bento Style) */}
                            <div className="relative rounded-[2rem] bg-zinc-900/80 border border-white/10 p-6 flex flex-col justify-between overflow-hidden group hover:border-neon/30 transition-colors">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-neon/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-neon/20 transition-colors"></div>

                                <div className="space-y-1 relative z-10">
                                    <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Community</p>
                                    <h4 className="text-4xl font-black text-white italic tracking-tighter">500+</h4>
                                </div>

                                <div className="relative z-10">
                                    <div className="flex -space-x-3 mb-3">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-zinc-800 border-[3px] border-black flex items-center justify-center overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`Member ${i}`} className="w-full h-full object-cover grayscale opacity-70" />
                                            </div>
                                        ))}
                                        <div className="w-8 h-8 rounded-full bg-neon flex items-center justify-center border-[3px] border-black text-[10px] font-black text-black">
                                            +
                                        </div>
                                    </div>
                                    <button className="w-full py-2 bg-white/5 hover:bg-neon hover:text-black rounded-xl text-[10px] font-black uppercase tracking-widest transition-all text-white border border-white/10">
                                        Join The Tribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-neon/20 rounded-full blur-[80px]"></div>
                    <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[80px]"></div>
                </div>
            </div>
        </section>
    );
};

export default About;
