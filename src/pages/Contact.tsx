import React, { useState } from 'react';
import { MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        setTimeout(() => {
            setFormStatus('success');
            setTimeout(() => setFormStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <section className="py-32 px-6 min-h-screen flex items-center border-t border-white/5 relative overflow-hidden">
            {/* Cinematic Video Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover grayscale brightness-[0.5]"
                >
                    <source src="/assets/start-journey.mp4" type="video/mp4" />
                </video>
                {/* Gradient Overlay: Adjusted for visibility */}
                {/* Gradient Overlay: 40% opacity black for visibility */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">
                <div className="space-y-12">
                    <div className="space-y-8">
                        <p className="text-neon font-black tracking-[0.3em] uppercase text-xs italic">Start Your Journey</p>
                        <h2 className="text-6xl md:text-8xl font-black leading-[0.85] uppercase italic text-white tracking-tighter">
                            LET'S GET <br /><span className="text-neon">MOVING.</span>
                        </h2>
                        {/* Refined Sub-headline: #888888 (Mid-Grey) */}
                        <p className="text-[#888888] text-xl font-medium max-w-md leading-relaxed tracking-widest">
                            Ready to shatter your limits? The only bad workout is the one that didn't happen.
                        </p>
                    </div>

                    <div className="space-y-8 pt-8 border-t border-white/10">
                        <div className="flex items-start gap-8 group">
                            <div className="w-16 h-16 bg-zinc-900 rounded-2xl border border-white/10 flex items-center justify-center group-hover:border-neon transition-colors shadow-lg shadow-black/50">
                                <MapPin className="text-white group-hover:text-neon transition-colors" size={28} />
                            </div>
                            <div>
                                <h4 className="font-black text-2xl uppercase italic text-white tracking-tighter">The Performance Lab</h4>
                                <p className="text-[#888888] font-medium mt-1 text-base">Akurli Road, Kandivali East, Mumbai</p>
                                <a href="#" className="inline-flex items-center gap-2 text-neon text-xs font-black uppercase tracking-widest mt-4 hover:underline">
                                    Get Directions <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Glass Pane: 30px Blur, Inner Glow 1px, Deep Shadow */}
                <div className="bg-white/5 backdrop-blur-[30px] p-10 md:p-14 rounded-[24px] shadow-[0_0_40px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.1)] relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[24px] pointer-events-none"></div>

                    {formStatus === 'success' ? (
                        <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-6 py-10 animate-in fade-in zoom-in duration-300">
                            <div className="w-24 h-24 bg-neon/10 rounded-full flex items-center justify-center border border-neon/50">
                                <CheckCircle2 size={48} className="text-neon" />
                            </div>
                            <h3 className="text-4xl font-black uppercase italic text-white tracking-tighter">MESSAGE SENT!</h3>
                            <p className="text-[#888888] font-bold uppercase tracking-tight">An elite coach will reach out shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8 relative">
                            <div className="space-y-2">
                                <label htmlFor="full-name" className="text-xs font-black uppercase tracking-[0.2em] text-[#888888] ml-4">Full Name</label>
                                <input
                                    id="full-name"
                                    name="full-name"
                                    autoComplete="name"
                                    required
                                    type="text"
                                    placeholder="VIKRAM SINGH"
                                    className="w-full bg-black/50 border border-white/10 rounded-[24px] px-6 py-5 focus:outline-none focus:border-neon focus:ring-[1.5px] focus:ring-neon focus:bg-neon/10 transition-all font-bold uppercase text-white placeholder:text-white/10 tracking-wide"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-black uppercase tracking-[0.2em] text-[#888888] ml-4">Email Address</label>
                                <input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    required
                                    type="email"
                                    placeholder="HELLO@EXAMPLE.COM"
                                    className="w-full bg-black/50 border border-white/10 rounded-[24px] px-6 py-5 focus:outline-none focus:border-neon focus:ring-[1.5px] focus:ring-neon focus:bg-neon/10 transition-all font-bold uppercase text-white placeholder:text-white/10 tracking-wide"
                                />
                            </div>
                            <button
                                disabled={formStatus === 'submitting'}
                                type="submit"
                                className="w-full bg-neon text-black py-6 rounded-[24px] font-black text-xl flex items-center justify-center gap-3 hover:bg-white hover:scale-105 active:scale-95 transition-all disabled:opacity-50 shadow-[0_0_15px_rgba(204,255,0,0.3)] uppercase italic tracking-tighter mt-4 animate-pulse-slow"
                            >
                                {formStatus === 'submitting' ? (
                                    <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <>START NOW <Send size={20} /></>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
