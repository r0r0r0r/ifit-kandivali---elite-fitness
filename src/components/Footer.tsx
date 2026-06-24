import React from 'react';
import { Dumbbell, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="py-20 px-6 border-t border-white/5 bg-black/90 backdrop-blur-xl relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                {/* Brand & Socials */}
                <div className="space-y-6">
                    <div className="flex flex-col items-start mb-2">
                        {/* Interactive Logo: SYRO + Subtext + Accent */}
                        <div className="relative">
                            <span className="text-4xl md:text-6xl font-brand font-medium text-white tracking-[0.1em] leading-none">SYRO</span>

                            {/* Accent Icon above 'O' (Abstract Leaping Athlete) */}
                            <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 text-neon animate-pulse-slow">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-7 md:h-7 drop-shadow-[0_0_8px_rgba(204,255,0,0.8)]">
                                    <path d="M20.5 10.5L16 6.5L18.5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 6.5L12 10.5L8 9L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 10.5L13.5 16L10.5 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.5 16L18 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="17.5" cy="3.5" r="1.5" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                        <span className="text-[10px] font-brand font-bold text-white/60 tracking-[0.4em] -mt-1 uppercase">
                            INNOVATIVE FITNESS
                        </span>
                        {/* Tagline from Reference */}
                        <div className="mt-3 text-[10px] font-brand font-bold tracking-widest uppercase text-white/80">
                            WHERE <span className="text-neon">FITNESS</span> MEETS <span className="text-neon">PASSION</span>
                        </div>
                    </div>
                    <p className="text-zinc-400 text-sm font-medium leading-relaxed">
                        The ultimate high-performance training facility. Built for those who refuse to be average.
                    </p>
                    <div className="flex gap-4">
                        {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                            <a key={idx} href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-neon hover:text-black transition-all">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-6">
                    <h4 className="text-white font-black uppercase italic tracking-wider text-xl">Quick Links</h4>
                    <ul className="space-y-3">
                        {['About', 'Coaches', 'Pillars', 'Results', 'Contact'].map((item) => (
                            <li key={item}>
                                <a href={`/${item.toLowerCase()}`} className="text-zinc-400 hover:text-neon uppercase text-xs font-bold tracking-widest transition-colors">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Gym Details */}
                <div className="space-y-6">
                    <h4 className="text-white font-black uppercase italic tracking-wider text-xl">Gym Info</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="text-neon text-xs font-black uppercase tracking-widest mb-1">Timings</p>
                            <p className="text-zinc-300 text-sm font-bold">Mon - Sat: 06:00 AM - 10:00 PM</p>
                            <p className="text-zinc-300 text-sm font-bold">Sun: 08:00 AM - 02:00 PM</p>
                        </div>
                        <div>
                            <p className="text-neon text-xs font-black uppercase tracking-widest mb-1">Location</p>
                            <p className="text-zinc-300 text-sm font-medium leading-relaxed">
                                Elite Fitness Hub, Mahavir Nagar,<br />Kandivali West, Mumbai - 400067
                            </p>
                        </div>
                    </div>
                </div>

                {/* Social Proof & Contact */}
                <div className="space-y-6">
                    <h4 className="text-white font-black uppercase italic tracking-wider text-xl">Get Started</h4>

                    {/* Google Review Badge */}
                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                        <div className="flex items-center gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-4 h-4 bg-neon clip-star"></div>)}
                            {/* Note: Using CSS for stars or simple squares if clip-path not avail, sticking to unicode stars for safety or icons */}
                            <span className="text-neon text-sm font-black flex">★★★★★</span>
                        </div>
                        <p className="text-white text-xs font-bold uppercase tracking-wide">4.9/5 Average Rating</p>
                        <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1">Based on 300+ Reviews</p>
                    </div>

                    <a href="tel:+919876543210" className="block w-full py-4 border border-neon text-neon text-center rounded-xl font-black uppercase italic tracking-wider hover:bg-neon hover:text-black transition-all">
                        Call Now: +91 98765 43210
                    </a>
                </div>
            </div>

            <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <div className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em]">
                    © 2024 SYRO INNOVATIVE FITNESS. ALL RIGHTS RESERVED.
                </div>
                <div className="flex gap-6 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
