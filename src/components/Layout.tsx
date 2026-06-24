import React from 'react';
import { Outlet } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen overflow-x-hidden flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20 md:pt-24">
                <Outlet />
            </main>
            <Footer />

            {/* Floating WhatsApp/Contact Button */}
            <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-neon text-black p-4 rounded-full shadow-[0_0_20px_rgba(204,255,0,0.4)] hover:scale-110 active:scale-95 transition-all animate-bounce-slow flex items-center justify-center group"
                aria-label="Chat on WhatsApp"
            >
                <div className="absolute inset-0 bg-neon rounded-full animate-ping opacity-20"></div>
                <MessageCircle size={28} className="relative z-10 fill-black" />

                {/* Tooltip */}
                <span className="absolute right-full mr-4 bg-black/90 text-white text-xs font-bold py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
                    Chat with us
                </span>
            </a>
        </div>
    );
};

export default Layout;
