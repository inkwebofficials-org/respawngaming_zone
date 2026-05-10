'use client';

import Head from 'next/head';
import { Button } from '@/components/ui/button';

import { InstagramIcon as Instagram } from '@/common/instagram';
import { RedVibeHero } from './home/red-vibe-hero';
import { BookingHub } from './home/booking-hub';
import { OurFeatures } from './home/our-features';
import Link from 'next/link';
import data from '@/data';
import { Footer } from './home/footer';

export default function RespawnLanding() {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500 overflow-x-hidden font-sans">
            <Head>
                <title>RESPAWN | Real Games. Real Vibes.</title>
            </Head>

            {/* --- GRID BACKGROUND --- */}
            <div
                className="fixed inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* --- NAV --- */}
            <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 backdrop-blur-md border-b border-white/10">
                <div className="text-2xl font-black tracking-tighter italic">
                    RESPAWN<span className="text-cyan-500">.</span>
                </div>
                <div className="flex gap-6 items-center">
                    <Link
                        href={data.instagram_link}
                        target="_blank"
                        className="hover:text-cyan-400 transition-colors"
                    >
                        <Instagram size={20} />
                    </Link>
                    <BookingHub>
                        <Button
                            variant="outline"
                            className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold"
                        >
                            BOOK SLOT
                        </Button>
                    </BookingHub>
                </div>
            </nav>

            {/* --- HERO SECTION --- */}
            <RedVibeHero />

            {/* --- FEATURES (Accernity style cards) --- */}
            <OurFeatures />

            {/* --- CONTACT / FOOTER --- */}
            <Footer />
        </div>
    );
}
