import { motion } from "framer-motion";
import { Monitor, Swords, Tv, Coffee, Headphones, Trophy } from "lucide-react";

export const OurFeatures = () => {
    return (
        <section className="relative py-24 px-8 z-10 bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-4">
                        PREMIUM{' '}
                        <span className="text-red-600">SERVICES</span>
                    </h2>
                    <p className="text-gray-500 uppercase tracking-widest text-sm font-bold">
                        Beyond the Screen: The Ultimate Gaming Culture
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: (
                                <Monitor className="text-red-600" />
                            ),
                            title: 'Next-Gen PS5 Slots',
                            desc: 'High-refresh rate 4K displays with the latest titles (FC24/25, Mortal Kombat, Spider-Man 2).',
                            tag: 'POPULAR',
                        },
                        {
                            icon: <Swords className="text-red-600" />,
                            title: 'Squad Tournaments',
                            desc: 'Regular local community meetups and high-stakes 1v1 or team brackets.',
                            tag: 'EVENTS',
                        },
                        {
                            icon: <Tv className="text-red-600" />,
                            title: 'Live Watch-Parties',
                            desc: 'Big screen vibes for Champions League, World Cup, and major E-Sports finals.',
                            tag: 'SOCIAL',
                        },
                        {
                            icon: <Coffee className="text-red-600" />,
                            title: 'Gamer Fuel & Snax',
                            desc: 'Chill zone with snacks and drinks to keep the grind going all night.',
                            tag: 'CHILL',
                        },
                        {
                            icon: (
                                <Headphones className="text-red-600" />
                            ),
                            title: 'Pro Gear Audio',
                            desc: 'Immersive spatial audio headsets for every station—hear every footstep.',
                            tag: 'TECH',
                        },
                        {
                            icon: <Trophy className="text-red-600" />,
                            title: 'Membership Perks',
                            desc: 'Loyalty slots, discounted night-outs, and early access to new game launches.',
                            tag: 'VIP',
                        },
                    ].map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="relative group p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-red-600/40 transition-all overflow-hidden"
                        >
                            {/* Subtle Background Glow on Hover */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-red-600/10 rounded-2xl group-hover:bg-red-600 group-hover:text-white transition-colors">
                                        {service.icon}
                                    </div>
                                    <span className="text-[10px] font-black tracking-widest text-red-600 border border-red-600/30 px-2 py-1 rounded">
                                        {service.tag}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}