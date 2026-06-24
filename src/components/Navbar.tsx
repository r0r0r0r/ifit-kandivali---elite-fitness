import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const navItems = [
        { name: 'ABOUT', path: '/about' },
        { name: 'PILLARS', path: '/pillars' },
        { name: 'COACHES', path: '/coaches' },
        { name: 'RESULTS', path: '/results' },
        { name: 'CONTACT', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0f0f11]/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
            <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20 md:h-24">
                    {/* Logo Section */}
                    <Link to="/" className="flex flex-col justify-center group z-50 relative">
                        <div className="relative flex items-center">
                            <span className="text-3xl md:text-4xl font-orbitron font-bold text-white tracking-[0.15em] leading-none transition-colors duration-300">A2</span>
                            
                            {/* Accent Icon */}
                            <div className="ml-1 md:ml-2 text-neon transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6">
                                    <path d="M20.5 10.5L16 6.5L18.5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 6.5L12 10.5L8 9L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 10.5L13.5 16L10.5 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.5 16L18 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="17.5" cy="3.5" r="1.5" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                        <span className="text-[9px] md:text-[10px] font-brand font-medium text-white/50 tracking-[0.35em] mt-1 uppercase transition-colors duration-300 group-hover:text-white/80">
                            FITNESS
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        <div className="flex items-center gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`text-sm font-medium transition-all duration-300 tracking-[0.15em] uppercase relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-neon after:origin-left after:scale-x-0 outline-none hover:after:scale-x-100 after:transition-transform after:duration-300 ${location.pathname === item.path ? 'text-white after:scale-x-100' : 'text-white/60 hover:text-white'}`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        
                        <Link to="/contact" className="ml-4 border border-neon bg-neon/5 text-neon px-7 py-2.5 font-orbitron font-bold text-sm hover:bg-neon hover:text-black transition-all duration-300 uppercase tracking-widest relative overflow-hidden group">
                           <span className="relative z-10">START TRIAL</span>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden z-50 relative">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`text-white transition-colors duration-300 focus:outline-none ${isMenuOpen ? 'text-neon' : ''}`}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? (
                                <X size={28} strokeWidth={1.5} />
                            ) : (
                                <div className="space-y-1.5 flex flex-col items-end">
                                    <span className="block w-6 h-[2px] bg-current transition-all"></span>
                                    <span className="block w-4 h-[2px] bg-current transition-all"></span>
                                    <span className="block w-6 h-[2px] bg-current transition-all"></span>
                                </div>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-[#0f0f11]/95 backdrop-blur-xl z-40 flex flex-col transition-all duration-500 ease-in-out md:hidden ${
                    isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                <div className="flex-1 flex flex-col justify-center px-8">
                    <div className="flex flex-col space-y-8">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                style={{ transitionDelay: `${index * 50}ms` }}
                                className={`text-4xl font-orbitron font-bold tracking-wider transition-all duration-300 transform ${
                                    isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                } ${location.pathname === item.path ? 'text-neon' : 'text-white/80 hover:text-white'}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className={`mt-16 transform transition-all duration-500 delay-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <Link
                            to="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="block w-full border border-neon bg-neon text-black text-center py-4 font-orbitron font-bold text-lg uppercase tracking-widest hover:bg-transparent hover:text-neon transition-colors duration-300"
                        >
                            START TRIAL
                        </Link>
                    </div>
                </div>

                <div className={`pb-10 px-8 flex items-center justify-between border-t border-white/10 pt-6 transform transition-all duration-500 delay-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div className="text-white/40 text-xs font-brand tracking-widest">
                        A2 PERFORMANCE
                    </div>
                    <div className="flex gap-6 text-white/60">
                        <a href="#" className="hover:text-neon transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-neon transition-colors"><MapPin size={20} /></a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

