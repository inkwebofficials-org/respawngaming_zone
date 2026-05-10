import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import { InstagramIcon as Instagram } from '@/common/instagram';
import data from '@/data';

export function Footer() {
    return (
        <footer className="py-20 border-t border-white/10 bg-black/50">
            <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-4xl font-black mb-6 italic tracking-tighter uppercase">
                        RESPAWN{' '}
                        <span className="text-red-600">
                            GAMING ZONE
                        </span>
                    </h2>
                    <div className="space-y-4 text-gray-400">
                        {/* GOOGLE MAPS LINK */}
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${data.address_query}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:text-white transition-colors group"
                        >
                            <MapPin
                                size={20}
                                className="group-hover:text-red-500 transition-colors"
                            />
                            <span>
                                Sector 75, Noida, Uttar Pradesh 201301
                            </span>
                        </a>

                        {/* PHONE CALL LINK */}
                        <a
                            href={`tel:${data.phone}`}
                            className="flex items-center gap-3 hover:text-white transition-colors group"
                        >
                            <Phone
                                size={20}
                                className="group-hover:text-red-500 transition-colors"
                            />
                            <span>+91 87960 32444</span>
                        </a>

                        {/* INSTAGRAM LINK */}
                        <Link
                            href={data.instagram_link}
                            target="_blank"
                            className="flex items-center gap-3 hover:text-red-500 transition-colors cursor-pointer"
                        >
                            <Instagram size={20} />
                            <span>@respawngaming_zone</span>
                        </Link>
                    </div>
                </div>

                {/* INTERACTIVE CALL TO ACTION BOX */}
                <Link
                    href={data.instagram_link}
                    target="_blank"
                    className="relative group overflow-hidden rounded-2xl h-48 bg-red-900/10 flex items-center justify-center border border-red-500/20 hover:border-red-500/50 transition-all shadow-[0_0_20px_rgba(220,38,38,0.1)]"
                >
                    {/* Subtle Hover Animation Background */}
                    <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="text-center relative z-10">
                        <p className="font-black text-2xl uppercase mb-2 italic tracking-tighter">
                            Ready to{' '}
                            <span className="text-red-600">
                                Respawn?
                            </span>
                        </p>
                        <p className="text-sm text-gray-400 group-hover:text-white transition-colors">
                            DM us on Instagram for <br /> exclusive
                            launch invites & slots.
                        </p>
                    </div>

                    {/* Accernity Dynamic: Floating Corner Glow */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-600/20 blur-[50px] group-hover:bg-red-600/40 transition-all" />
                </Link>
            </div>

            <div className="max-w-6xl mx-auto px-8 mt-20 pt-8 border-t border-white/5 text-[10px] text-gray-600 uppercase tracking-[0.3em] flex justify-between">
                <span>© 2026 Respawn Gaming Zone</span>
                <span>Built for the Squad</span>
            </div>
        </footer>
    );
}
