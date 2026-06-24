import React from 'react';
import { COACHES } from '../data';

const Coaches: React.FC = () => {
    const videoRefs = React.useRef<{ [key: string]: HTMLVideoElement | null }>({});

    const handleMouseEnter = (id: string) => {
        const video = videoRefs.current[id];
        if (video) {
            video.play().catch(() => { });
        }
    };

    const handleMouseLeave = (id: string) => {
        const video = videoRefs.current[id];
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    };

    return (
        <section className="py-32 px-[5vw] min-h-screen relative border-t border-white/5 w-full">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="w-full space-y-24">
                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <p className="text-neon font-black tracking-[0.3em] uppercase text-xs italic">Meet The Elite</p>
                    <h2 className="text-5xl md:text-8xl font-black uppercase italic leading-[0.85] text-white tracking-tighter">
                        WORLD CLASS <br /><span className="text-neon">COACHES.</span>
                    </h2>
                    <p className="text-white/40 font-medium text-lg max-w-xl mx-auto leading-relaxed">
                        Expert guidance from certified professionals who practice what they preach.
                        No bro-science. Just results.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full">
                    {COACHES.map((coach, index) => (
                        <div
                            key={coach.id}
                            className={`space-y-6 group flex-1 ${index === 1 ? 'md:translate-y-[40px]' : ''}`}
                            onMouseEnter={() => handleMouseEnter(coach.id)}
                            onMouseLeave={() => handleMouseLeave(coach.id)}
                        >
                            {/* Monochrome Motion Card */}
                            <div className="relative rounded-[24px] overflow-hidden aspect-[3/4] bg-zinc-900 border border-white/10 transition-colors duration-500 shadow-2xl">
                                {/* Video Layer: Hover-to-Play */}
                                {coach.video && (
                                    <video
                                        ref={el => videoRefs.current[coach.id] = el}
                                        src={coach.video}
                                        muted
                                        loop
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
                                    />
                                )}

                                {/* Static Image Layer: Visible by default, fades out on hover */}
                                <img
                                    width={600}
                                    height={800}
                                    src={coach.image}
                                    className="w-full h-full object-cover object-top grayscale transition-opacity duration-700 group-hover:opacity-0"
                                    alt={coach.name}
                                />

                                {/* Dark Gradient Anchor (Bottom 30%) */}
                                <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black to-transparent z-10"></div>

                                <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                                    <h4 className="text-3xl font-black uppercase italic text-white tracking-tighter leading-none mb-2">{coach.name}</h4>
                                    <p className="text-[#888888] font-bold text-xs tracking-[0.2em] uppercase">{coach.role}</p>
                                </div>
                            </div>

                            <div className="px-4 flex justify-between items-center border-t border-white/10 pt-4">
                                <p className="text-[#888888] font-bold uppercase tracking-tight text-xs">Experience</p>
                                <p className="text-white font-black uppercase tracking-tight text-sm">{coach.experience}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Coaches;
