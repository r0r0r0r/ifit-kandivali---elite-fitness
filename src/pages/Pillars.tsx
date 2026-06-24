import React from 'react';
import { ArrowRight } from 'lucide-react';

const Pillars: React.FC = () => {
    return (
        <section className="py-32 px-6 min-h-screen relative border-t border-white/5 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/1images/2.jpg')" }}>
            <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto space-y-24">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative min-h-[300px]">
                    {/* Header Anchor: Asymmetrical Editorial Style */}
                    <div className="relative text-left space-y-8 w-full md:w-[60%] bg-gradient-to-r from-black/90 to-black/20 backdrop-blur-[20px] p-12 rounded-[3rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] md:-mt-12 group">
                        {/* Neon Corner Accents */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-neon rounded-tl-[1rem] -translate-x-1 -translate-y-1"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-neon rounded-br-[1rem] translate-x-1 translate-y-1"></div>

                        <p className="text-neon font-black tracking-[0.3em] uppercase text-xs italic flex items-center gap-3 mb-6">
                            <span className="w-8 h-1 bg-neon"></span>
                            Our Philosophy
                        </p>
                        {/* Decoupled Floating Text */}
                        <div className="-mt-20 relative z-10">
                            <h2 className="text-6xl md:text-8xl font-black uppercase italic leading-[0.85] text-white tracking-tighter drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]">
                                LEVEL UP <br />
                                TRAINING <br />
                                <span className="flex items-center gap-4 mt-2">
                                    AT
                                    <span className="inline-flex items-center gap-1 font-brand font-medium tracking-[0.1em]">
                                        <span className="text-neon normal-case">SYRO</span>
                                    </span>
                                </span>
                            </h2>
                        </div>
                    </div>

                    {/* Secondary Text Flow: Consistent Editorial Styling */}
                    <div className="relative md:absolute md:bottom-0 md:right-0 w-full md:w-auto flex justify-end mt-8 md:mt-0">
                        <div className="bg-gradient-to-l from-black/90 to-black/20 backdrop-blur-[20px] p-10 rounded-[3rem] border border-white/10 max-w-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] relative group">
                            {/* Neon Corner Accents */}
                            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-neon rounded-tr-[1rem] translate-x-1 -translate-y-1 opacity-50"></div>
                            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-neon rounded-bl-[1rem] -translate-x-1 translate-y-1 opacity-50"></div>

                            <p className="text-white/80 font-bold uppercase text-sm tracking-wide text-left leading-relaxed drop-shadow-lg">
                                Built on science. Forged in sweat. Proven results.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Pillar 1 */}
                    <div
                        className="group relative aspect-[16/10] rounded-[24px] overflow-hidden bg-zinc-900 border border-white/5 hover:border-neon/30 transition-all duration-500"
                        onMouseEnter={(e) => {
                            const video = e.currentTarget.querySelector('video');
                            if (video) video.play();
                        }}
                        onMouseLeave={(e) => {
                            const video = e.currentTarget.querySelector('video');
                            if (video) {
                                video.pause();
                                video.currentTime = 0;
                            }
                        }}
                    >
                        <video className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 grayscale group-hover:grayscale-0 transition-all duration-700" muted loop playsInline>
                            <source src="/assets/pillar-hypertrophy.mp4" type="video/mp4" />
                        </video>
                        {/* Gradient Overlay for Contrast */}
                        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 w-full p-12 flex flex-col justify-end">
                            <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4 group-hover:text-neon transition-colors transform translate-y-0 group-hover:-translate-y-2 duration-500">HYPERTROPHY</h3>
                            <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                                <p className="text-white/70 font-bold text-lg pt-2 max-w-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    Precision engineered resistance protocols designed to maximize muscle fiber recruitment and metabolic adaptations.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center gap-2 text-white/80 font-black text-xs uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                                Explore Program <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>

                    {/* Pillar 2 */}
                    <div
                        className="group relative aspect-[16/10] rounded-[24px] overflow-hidden bg-zinc-900 border border-white/5 hover:border-neon/30 transition-all duration-500"
                        onMouseEnter={(e) => {
                            const video = e.currentTarget.querySelector('video');
                            if (video) video.play();
                        }}
                        onMouseLeave={(e) => {
                            const video = e.currentTarget.querySelector('video');
                            if (video) {
                                video.pause();
                                video.currentTime = 0;
                            }
                        }}
                    >
                        <video className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 grayscale group-hover:grayscale-0 transition-all duration-700" muted loop playsInline>
                            <source src="/assets/pillar-conditioning.mp4" type="video/mp4" />
                        </video>
                        {/* Gradient Overlay for Contrast */}
                        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 w-full p-12 flex flex-col justify-end">
                            <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4 group-hover:text-neon transition-colors transform translate-y-0 group-hover:-translate-y-2 duration-500">METABOLIC</h3>
                            <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                                <p className="text-white/70 font-bold text-lg pt-2 max-w-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    High-output energy system development focused on optimizing VO2 max and anaerobic threshold.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center gap-2 text-white/80 font-black text-xs uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                                Explore Program <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pillars;
