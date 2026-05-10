import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookingHub } from "./booking-hub";

export function RedVibeHero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* --- THE REEL BACKGROUND --- */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source
                        src="/videos/red-vibe.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-red-900/20 to-transparent" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* --- CONTENT OVERLAY --- */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center px-4"
            >
                <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white uppercase leading-none drop-shadow-[0_0_15px_rgba(255,0,0,0.7)]">
                    PULSE OF <br />
                    <span className="text-red-600">NOIDA GAMING</span>
                </h1>
                <p className="mt-6 text-gray-300 text-lg font-medium max-w-lg mx-auto uppercase tracking-[0.2em]">
                    Experience the high-octane setup in Sector 75,
                    Noida
                </p>

                <div className="mt-10 flex gap-4 justify-center">
                    <BookingHub>
                        <Button
                            size="lg"
                            className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 shadow-red-glow"
                        >
                            BOOK NOW
                        </Button>
                    </BookingHub>
                </div>
            </motion.div>

            {/* ACCERNITY DYNAMICS: SCANLINES */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%]" />
        </section>
    );
}
