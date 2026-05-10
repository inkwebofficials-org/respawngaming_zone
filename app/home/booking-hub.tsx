import { Button } from '@/components/ui/button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import { MessageCircle, Phone, MapPin } from 'lucide-react'; // Added MapPin

import { InstagramIcon as Instagram } from '@/common/instagram';

export function BookingHub({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Drawer>
            <DrawerTrigger asChild>{children}</DrawerTrigger>
            <DrawerContent className="bg-[#0a0a0a] border-t border-red-900/50 text-white p-6">
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader className="text-center">
                        <DrawerTitle className="text-5xl font-black italic tracking-tighter uppercase leading-none">
                            <span className="text-transparent stroke-white stroke-2 [text-shadow:0_0_10px_rgba(255,255,255,0.3)] [-webkit-text-stroke:1px_white]">
                                SQUAD
                            </span>{' '}
                            <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.6)]">
                                UP
                            </span>
                        </DrawerTitle>
                        <DrawerDescription className="text-gray-400">
                            Choose your platform to reserve your slot
                            at Respawn.
                        </DrawerDescription>
                    </DrawerHeader>

                    <div className="grid gap-3 p-4">
                        {/* WHATSAPP */}
                        <a
                            href="https://wa.me/918796032444?text=Hey! I want to book a slot at Respawn Gaming Zone."
                            target="_blank"
                            className="flex items-center justify-between p-4 bg-green-600/10 border border-green-600/30 rounded-xl hover:bg-green-600/20 transition-all group"
                        >
                            <div className="flex items-center gap-3">
                                <MessageCircle className="text-green-500" />
                                <span className="font-bold">
                                    WhatsApp
                                </span>
                            </div>
                            <span className="text-xs text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                Instant
                            </span>
                        </a>

                        {/* INSTAGRAM */}
                        <a
                            href="https://www.instagram.com/respawngaming_zone/"
                            target="_blank"
                            className="flex items-center justify-between p-4 bg-purple-600/10 border border-purple-600/30 rounded-xl hover:bg-purple-600/20 transition-all group"
                        >
                            <div className="flex items-center gap-3">
                                <Instagram className="text-purple-500" />
                                <span className="font-bold">
                                    Instagram DM
                                </span>
                            </div>
                        </a>

                        {/* DIRECT CALL */}
                        <a
                            href="tel:+918796032444"
                            className="flex items-center justify-between p-4 bg-red-600/10 border border-red-600/30 rounded-xl hover:bg-red-600/20 transition-all group"
                        >
                            <div className="flex items-center gap-3">
                                <Phone className="text-red-500" />
                                <span className="font-bold">
                                    Direct Call
                                </span>
                            </div>
                            <span className="text-xs text-red-500">
                                8796032444
                            </span>
                        </a>

                        {/* ADDRESS / GOOGLE MAPS */}
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Respawn+Gaming+Zone+Sector+75+Noida"
                            target="_blank"
                            className="flex items-start justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group mt-2"
                        >
                            <div className="flex gap-3">
                                <MapPin
                                    className="text-gray-400 group-hover:text-white transition-colors shrink-0"
                                    size={20}
                                />
                                <div className="flex flex-col">
                                    <span className="font-bold text-sm">
                                        Find Us
                                    </span>
                                    <span className="text-xs text-gray-400 leading-tight">
                                        Sector 75, Noida, Uttar
                                        Pradesh 201301
                                    </span>
                                </div>
                            </div>
                            <span className="text-[10px] text-gray-500 border border-gray-700 px-2 py-1 rounded">
                                MAP
                            </span>
                        </a>
                    </div>

                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button
                                variant="ghost"
                                className="text-gray-500 hover:text-white transition-colors"
                            >
                                Back to Site
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
