import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import About from './About';
import Pillars from './Pillars';
import Coaches from './Coaches';
import Results from './Results';
import ClassSchedule from './ClassSchedule';
import Contact from './Contact';

const Home: React.FC = () => {
    return (
        <>
            <section className="min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-96px)] w-full flex items-center justify-center px-6 md:px-12 lg:px-16 relative overflow-hidden py-12 md:py-16 lg:py-20">
                <div className="max-w-[1400px] w-full mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Left Column: Massive Text */}
                    <div className="flex flex-col justify-center relative z-10 text-center lg:text-left order-2 lg:order-1">
                        {/* Vertical Spacer to Center Top Content */}
                        <div className="flex-grow flex flex-col justify-center">
                            <div className="space-y-2 lg:space-y-6">
                                <h1 className="text-[clamp(3.5rem,6vw,7rem)] font-black leading-[0.9] tracking-tight uppercase italic text-white">
                                    LEVEL UP
                                </h1>
                                <h1 className="text-[clamp(3.5rem,6vw,7rem)] font-black leading-[0.9] tracking-tight uppercase italic text-neon -mt-2">
                                    TRAINING
                                </h1>
                                <h1 className="text-[clamp(3.5rem,6vw,7rem)] font-black leading-[0.9] tracking-tight uppercase italic text-white -mt-2">
                                    AT <span className="text-neon normal-case font-orbitron font-bold tracking-[0.1em]">A2</span>
                                </h1>
                            </div>

                            {/* Standardized Spacing & Width Constraint */}
                            <div className="max-w-[500px] mx-auto lg:mx-0 mt-6 lg:mt-8 space-y-6 lg:space-y-8">
                                <p className="text-zinc-300 text-sm md:text-base lg:text-lg font-medium leading-relaxed tracking-wide">
                                    We provide the science, the gear, and the community. You bring the grit.
                                    The ultimate high-performance hub is here.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 justify-center lg:justify-start">
                                    <Link to="/contact" className="w-full sm:w-auto bg-neon text-black px-8 py-3.5 lg:py-4 font-orbitron font-bold flex items-center justify-center gap-2 group text-sm hover:scale-105 active:scale-95 transition-transform uppercase tracking-widest shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                                        START FREE TRIAL
                                        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                                    </Link>
                                    <Link to="/plans" className="w-full sm:w-auto px-8 py-3.5 lg:py-4 font-orbitron font-bold text-white border border-white/20 hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all uppercase text-sm tracking-widest text-center">
                                        VIEW PLANS
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Baseline Anchor: Trust Bar */}
                        <div className="flex items-center gap-4 justify-center lg:justify-start pt-6 lg:pt-10 opacity-80 pb-2">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-zinc-800 border-2 border-[#0f0f11] flex items-center justify-center text-[10px] text-zinc-500 overflow-hidden shadow-lg object-cover">
                                        <div className="bg-zinc-700 w-full h-full"></div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-xs lg:text-sm font-semibold text-zinc-300 tracking-wide">
                                <span className="text-neon text-base lg:text-lg mr-1">★★★★★</span>
                                4.9/5 by 500+ Athletes
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Compact Media Grid */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[550px] mx-auto h-auto self-center order-1 lg:order-2">
                        {/* Top Video Block */}
                        <div className="col-span-2 aspect-[2/1] bg-zinc-900 rounded-2xl lg:rounded-3xl overflow-hidden relative group border border-white/10 shadow-2xl">
                            <video
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                autoPlay loop muted playsInline
                            >
                                <source src="/assets/hero-landscape.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute bottom-3 left-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/5">
                                <span className="text-[9px] lg:text-[10px] font-orbitron font-bold text-white uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse"></span>
                                    STRENGTH & CONDITIONING
                                </span>
                            </div>
                        </div>

                        {/* Bottom Left: Vertical Video — hidden on xs, shown from sm up */}
                        <div className="hidden sm:block aspect-[4/5] bg-zinc-800 rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 group relative shadow-xl">
                            <video
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                autoPlay loop muted playsInline
                            >
                                <source src="/assets/hero-portrait.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-sm border border-white/5">
                                <span className="text-[9px] font-orbitron font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                    CARDIO
                                </span>
                            </div>
                        </div>

                        {/* Bottom Right: Elite Box Video — hidden on xs, shown from sm up */}
                        <div className="hidden sm:block aspect-[4/5] bg-zinc-800 rounded-2xl lg:rounded-3xl overflow-hidden relative group border border-white/10 shadow-xl">
                            <video
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                autoPlay loop muted playsInline
                            >
                                <source src="/assets/hero-box.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-sm border border-white/5">
                                <span className="text-[9px] font-orbitron font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                    COMBAT
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <About />
            <Pillars />
            <Coaches />
            <Results />
            <ClassSchedule />
            <Contact />
        </>
    );
};

export default Home;
