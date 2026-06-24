import React, { useState } from 'react';
import { Clock, Flame, Users, Zap, Shield, Dumbbell, Wind } from 'lucide-react';

const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

type ClassEntry = {
    time: string;
    name: string;
    coach: string;
    duration: string;
    intensity: 'MODERATE' | 'HIGH' | 'EXTREME';
    spots: number;
    icon: React.ReactNode;
    category: string;
};

const SCHEDULE: Record<string, ClassEntry[]> = {
    MON: [
        { time: '06:00', name: 'Power Lift', coach: 'Arjun Mehta', duration: '60 min', intensity: 'HIGH', spots: 12, icon: <Dumbbell size={16} />, category: 'STRENGTH' },
        { time: '08:30', name: 'HIIT Forge', coach: 'Priya Sharma', duration: '45 min', intensity: 'EXTREME', spots: 5, icon: <Flame size={16} />, category: 'CARDIO' },
        { time: '11:00', name: 'Combat Flow', coach: 'Rahul Singh', duration: '60 min', intensity: 'HIGH', spots: 8, icon: <Shield size={16} />, category: 'COMBAT' },
        { time: '18:00', name: 'Metabolic Burn', coach: 'Priya Sharma', duration: '45 min', intensity: 'EXTREME', spots: 3, icon: <Zap size={16} />, category: 'CARDIO' },
        { time: '20:00', name: 'Recovery & Flex', coach: 'Arjun Mehta', duration: '30 min', intensity: 'MODERATE', spots: 15, icon: <Wind size={16} />, category: 'RECOVERY' },
    ],
    TUE: [
        { time: '06:30', name: 'Olympic Lifting', coach: 'Arjun Mehta', duration: '75 min', intensity: 'HIGH', spots: 10, icon: <Dumbbell size={16} />, category: 'STRENGTH' },
        { time: '09:00', name: 'Cardio Blitz', coach: 'Priya Sharma', duration: '45 min', intensity: 'HIGH', spots: 7, icon: <Flame size={16} />, category: 'CARDIO' },
        { time: '12:00', name: 'Muay Thai Basics', coach: 'Rahul Singh', duration: '60 min', intensity: 'MODERATE', spots: 12, icon: <Shield size={16} />, category: 'COMBAT' },
        { time: '19:00', name: 'Power Hypertrophy', coach: 'Arjun Mehta', duration: '60 min', intensity: 'HIGH', spots: 6, icon: <Dumbbell size={16} />, category: 'STRENGTH' },
    ],
    WED: [
        { time: '06:00', name: 'Early HIIT', coach: 'Priya Sharma', duration: '45 min', intensity: 'EXTREME', spots: 4, icon: <Zap size={16} />, category: 'CARDIO' },
        { time: '10:00', name: 'Functional Strength', coach: 'Arjun Mehta', duration: '60 min', intensity: 'HIGH', spots: 9, icon: <Dumbbell size={16} />, category: 'STRENGTH' },
        { time: '17:00', name: 'Boxing Drills', coach: 'Rahul Singh', duration: '60 min', intensity: 'HIGH', spots: 6, icon: <Shield size={16} />, category: 'COMBAT' },
        { time: '19:30', name: 'Metabolic Burn', coach: 'Priya Sharma', duration: '45 min', intensity: 'EXTREME', spots: 2, icon: <Flame size={16} />, category: 'CARDIO' },
    ],
    THU: [
        { time: '07:00', name: 'Power Lift', coach: 'Arjun Mehta', duration: '60 min', intensity: 'HIGH', spots: 11, icon: <Dumbbell size={16} />, category: 'STRENGTH' },
        { time: '09:30', name: 'Mobility & Core', coach: 'Priya Sharma', duration: '45 min', intensity: 'MODERATE', spots: 14, icon: <Wind size={16} />, category: 'RECOVERY' },
        { time: '18:30', name: 'Combat Conditioning', coach: 'Rahul Singh', duration: '75 min', intensity: 'EXTREME', spots: 5, icon: <Shield size={16} />, category: 'COMBAT' },
        { time: '20:00', name: 'HIIT Forge', coach: 'Priya Sharma', duration: '45 min', intensity: 'EXTREME', spots: 0, icon: <Zap size={16} />, category: 'CARDIO' },
    ],
    FRI: [
        { time: '06:00', name: 'Max Strength', coach: 'Arjun Mehta', duration: '75 min', intensity: 'EXTREME', spots: 8, icon: <Dumbbell size={16} />, category: 'STRENGTH' },
        { time: '09:00', name: 'HIIT Forge', coach: 'Priya Sharma', duration: '45 min', intensity: 'EXTREME', spots: 3, icon: <Flame size={16} />, category: 'CARDIO' },
        { time: '12:00', name: 'Kickboxing', coach: 'Rahul Singh', duration: '60 min', intensity: 'HIGH', spots: 9, icon: <Shield size={16} />, category: 'COMBAT' },
        { time: '18:00', name: 'Power Hypertrophy', coach: 'Arjun Mehta', duration: '60 min', intensity: 'HIGH', spots: 7, icon: <Dumbbell size={16} />, category: 'STRENGTH' },
        { time: '20:00', name: 'Recovery & Flex', coach: 'Priya Sharma', duration: '30 min', intensity: 'MODERATE', spots: 16, icon: <Wind size={16} />, category: 'RECOVERY' },
    ],
    SAT: [
        { time: '07:00', name: 'Elite Challenge', coach: 'All Coaches', duration: '90 min', intensity: 'EXTREME', spots: 10, icon: <Zap size={16} />, category: 'SPECIAL' },
        { time: '09:30', name: 'Open Mat Combat', coach: 'Rahul Singh', duration: '60 min', intensity: 'HIGH', spots: 12, icon: <Shield size={16} />, category: 'COMBAT' },
        { time: '11:30', name: 'Metabolic Circuit', coach: 'Priya Sharma', duration: '45 min', intensity: 'EXTREME', spots: 6, icon: <Flame size={16} />, category: 'CARDIO' },
        { time: '15:00', name: 'Strength Lab', coach: 'Arjun Mehta', duration: '75 min', intensity: 'HIGH', spots: 8, icon: <Dumbbell size={16} />, category: 'STRENGTH' },
    ],
    SUN: [
        { time: '08:00', name: 'Active Recovery', coach: 'Arjun Mehta', duration: '60 min', intensity: 'MODERATE', spots: 20, icon: <Wind size={16} />, category: 'RECOVERY' },
        { time: '10:00', name: 'Community HIIT', coach: 'Priya Sharma', duration: '60 min', intensity: 'HIGH', spots: 10, icon: <Flame size={16} />, category: 'CARDIO' },
        { time: '12:00', name: 'Skill Workshop', coach: 'Rahul Singh', duration: '90 min', intensity: 'MODERATE', spots: 8, icon: <Shield size={16} />, category: 'COMBAT' },
    ],
};

const INTENSITY_CONFIG = {
    MODERATE: { color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/30', dot: 'bg-blue-400' },
    HIGH: { color: 'text-orange-400', bg: 'bg-orange-400/10 border-orange-400/30', dot: 'bg-orange-400' },
    EXTREME: { color: 'text-neon', bg: 'bg-neon/10 border-neon/30', dot: 'bg-neon' },
};

const CATEGORY_COLOR: Record<string, string> = {
    STRENGTH: 'text-orange-400',
    CARDIO: 'text-red-400',
    COMBAT: 'text-yellow-400',
    RECOVERY: 'text-blue-400',
    SPECIAL: 'text-neon',
};

function getTodayAbbr(): string {
    const map = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return map[new Date().getDay()];
}

const ClassSchedule: React.FC = () => {
    const [activeDay, setActiveDay] = useState<string>(getTodayAbbr());

    const classes = SCHEDULE[activeDay] ?? [];

    return (
        <section className="py-16 px-6 relative border-t border-white/5 overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-8 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="space-y-4">
                        <p className="text-neon font-black tracking-[0.3em] uppercase text-xs italic flex items-center gap-3">
                            <span className="w-8 h-1 bg-neon" />
                            Weekly Programme
                        </p>
                        <h2 className="text-5xl md:text-8xl font-black uppercase italic leading-[0.85] text-white tracking-tighter">
                            CLASS<br /><span className="text-neon">SCHEDULE.</span>
                        </h2>
                    </div>
                    <p className="text-white/40 font-medium text-base max-w-xs leading-relaxed md:text-right">
                        Book your slot. Show up. Dominate. Every class is designed to push your limits.
                    </p>
                </div>

                {/* Day Selector */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {DAYS.map(day => {
                        const isToday = day === getTodayAbbr();
                        const isActive = day === activeDay;
                        return (
                            <button
                                key={day}
                                onClick={() => setActiveDay(day)}
                                className={`
                                    relative flex-shrink-0 px-6 py-3 font-orbitron font-bold text-xs tracking-[0.2em] uppercase
                                    transition-all duration-300 border cursor-pointer
                                    ${isActive
                                        ? 'bg-neon text-black border-neon shadow-[0_0_20px_rgba(204,255,0,0.35)]'
                                        : 'bg-white/5 text-white/50 border-white/10 hover:border-white/30 hover:text-white hover:bg-white/10'
                                    }
                                `}
                            >
                                {day}
                                {isToday && !isActive && (
                                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-neon rounded-full" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Stats strip */}
                <div className="grid grid-cols-3 gap-3">
                    {[
                        { label: 'Classes Today', val: `${classes.length}` },
                        { label: 'Spots Available', val: `${classes.reduce((a, c) => a + c.spots, 0)}` },
                        { label: 'Total Minutes', val: `${classes.reduce((a, c) => a + parseInt(c.duration), 0)}` },
                    ].map(s => (
                        <div key={s.label} className="glass rounded-2xl p-3 border border-white/5 text-center">
                            <p className="text-2xl md:text-3xl font-black text-neon font-orbitron leading-none">{s.val}</p>
                            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-2">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* Class Cards */}
                <div className="space-y-3">
                    {classes.map((cls, i) => {
                        const cfg = INTENSITY_CONFIG[cls.intensity];
                        const catColor = CATEGORY_COLOR[cls.category] ?? 'text-white/60';
                        const isFull = cls.spots === 0;

                        return (
                            <div
                                key={i}
                                className={`
                                    group relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6
                                    p-4 rounded-2xl border transition-all duration-400 cursor-pointer
                                    ${isFull
                                        ? 'bg-white/2 border-white/5 opacity-50 cursor-not-allowed'
                                        : 'bg-white/3 border-white/8 hover:bg-white/6 hover:border-neon/25 hover:shadow-[0_0_30px_rgba(204,255,0,0.04)]'
                                    }
                                `}

                            >
                                {/* Time */}
                                <div className="flex-shrink-0 w-20">
                                    <p className="font-orbitron font-bold text-lg text-white leading-none">{cls.time}</p>
                                    <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mt-1">
                                        {parseInt(cls.time.split(':')[0]) < 12 ? 'AM' : 'PM'}
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="hidden sm:block w-px h-10 bg-white/10 flex-shrink-0" />

                                {/* Class icon + name */}
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <div className={`p-2 rounded-lg border ${cfg.bg} ${cfg.color} flex-shrink-0`}>
                                        {cls.icon}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-black text-white uppercase italic tracking-tight text-lg leading-none truncate group-hover:text-neon transition-colors duration-300">
                                            {cls.name}
                                        </p>
                                        <p className="text-white/40 text-xs font-bold uppercase tracking-wider mt-1">{cls.coach}</p>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 sm:flex-nowrap sm:justify-end items-center">
                                    <span className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-widest border rounded ${cfg.bg} ${cfg.color}`}>
                                        {cls.intensity}
                                    </span>
                                    <span className={`text-[10px] font-black uppercase tracking-widest ${catColor}`}>
                                        {cls.category}
                                    </span>
                                </div>

                                {/* Duration + Spots */}
                                <div className="flex items-center gap-4 sm:flex-col sm:items-end flex-shrink-0 text-right">
                                    <div className="flex items-center gap-1.5 text-white/50 text-xs font-bold">
                                        <Clock size={12} />
                                        {cls.duration}
                                    </div>
                                    <div className={`flex items-center gap-1.5 text-xs font-black ${isFull ? 'text-red-400' : 'text-white/50'}`}>
                                        <Users size={12} />
                                        {isFull ? 'FULL' : `${cls.spots} left`}
                                    </div>
                                </div>

                                {/* CTA */}
                                {!isFull && (
                                    <button className="flex-shrink-0 px-5 py-2.5 font-orbitron font-bold text-[10px] tracking-widest uppercase bg-white/5 border border-white/10 text-white/60 hover:bg-neon hover:text-black hover:border-neon transition-all duration-300 rounded cursor-pointer">
                                        BOOK
                                    </button>
                                )}
                                {isFull && (
                                    <span className="flex-shrink-0 px-5 py-2.5 font-orbitron font-bold text-[10px] tracking-widest uppercase border border-red-400/30 text-red-400/60 rounded">
                                        FULL
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/5">
                    <p className="text-white/40 font-medium text-sm">
                        All classes included in every membership tier. No hidden fees.
                    </p>
                    <a
                        href="#contact"
                        className="px-8 py-4 font-orbitron font-bold text-xs tracking-widest uppercase bg-neon text-black hover:scale-105 active:scale-95 transition-transform shadow-[0_0_20px_rgba(204,255,0,0.25)] whitespace-nowrap cursor-pointer"
                    >
                        JOIN & BOOK FREE TRIAL →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ClassSchedule;
