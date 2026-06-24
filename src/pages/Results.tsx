import React from 'react';
import { TRANSFORMATIONS } from '../data';

const Results: React.FC = () => {
    return (
        <section className="py-32 px-6 min-h-screen border-t border-white/5 relative overflow-hidden">

            {/* Decorative Bg */}
            <div className="absolute -left-40 top-1/4 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto space-y-24 relative z-10">
                <div className="text-center max-w-4xl mx-auto space-y-6">
                    <p className="text-neon font-black tracking-[0.3em] uppercase text-xs italic">Success Stories</p>
                    <h2 className="text-5xl md:text-8xl font-black uppercase italic leading-[0.85] text-white tracking-tighter">
                        REAL PEOPLE. <br /><span className="text-transparent stroke-text">REAL RESULTS.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {TRANSFORMATIONS.map((item, idx) => (
                        <div key={item.id} className={`space-y-6 group ${idx === 1 ? 'md:-translate-y-12' : ''}`}>
                            {/* Staggered grid effect on desktop */}

                            <div className="relative rounded-[2.5rem] overflow-hidden aspect-square border border-white/10 group-hover:border-neon transition-colors duration-500 shadow-2xl bg-black">
                                <img width={600} height={600} src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" alt={item.name} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                                <div className="absolute bottom-0 left-0 w-full p-8">
                                    <h4 className="text-3xl font-black uppercase italic text-white tracking-tighter mb-1">{item.name}</h4>
                                    <p className="text-white/60 font-medium text-sm">Member</p>
                                </div>
                            </div>

                            <div className="text-center bg-white/5 border border-white/5 rounded-2xl p-6 backdrop-blur-sm group-hover:bg-neon group-hover:text-black transition-colors duration-300">
                                <p className="font-black text-xl uppercase italic tracking-tight">{item.result}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Results;
