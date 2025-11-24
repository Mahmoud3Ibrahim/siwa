"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Users, Bed, CheckSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { siwaImages } from "@/lib/siwaImages";

export default function BookingPage() {
    const { t } = useLanguage();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [formData, setFormData] = useState({
        checkIn: "",
        checkOut: "",
        guests: "",
        roomType: "",
        extras: [] as string[],
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowConfirmation(true);
    };

    const toggleExtra = (extra: string) => {
        setFormData(prev => ({
            ...prev,
            extras: prev.extras.includes(extra)
                ? prev.extras.filter(e => e !== extra)
                : [...prev.extras, extra]
        }));
    };

    const extras = [
        { id: "safari", label: t.booking.extraSafari },
        { id: "saltLake", label: t.booking.extraSaltLake },
        { id: "hotSprings", label: t.booking.extraHotSprings },
        { id: "stargazing", label: t.booking.extraStargazing },
        { id: "dinner", label: t.booking.extraDinner },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={siwaImages.saltHotel2}
                        alt="Booking"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 text-center px-4 max-w-4xl mx-auto"
                >
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
                        {t.booking.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-sand-100 leading-relaxed">
                        {t.booking.subtitle}
                    </p>
                </motion.div>
            </section>

            {/* Booking Form */}
            <section className="py-24 bg-gradient-to-b from-sand-50 to-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection>
                        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-desert-200">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Check-in */}
                                <div className="space-y-2">
                                    <Label htmlFor="checkIn" className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {t.booking.checkIn}
                                    </Label>
                                    <Input
                                        id="checkIn"
                                        type="date"
                                        required
                                        value={formData.checkIn}
                                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                                    />
                                </div>

                                {/* Check-out */}
                                <div className="space-y-2">
                                    <Label htmlFor="checkOut" className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {t.booking.checkOut}
                                    </Label>
                                    <Input
                                        id="checkOut"
                                        type="date"
                                        required
                                        value={formData.checkOut}
                                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                                    />
                                </div>

                                {/* Guests */}
                                <div className="space-y-2">
                                    <Label htmlFor="guests" className="flex items-center gap-2">
                                        <Users className="w-4 h-4" />
                                        {t.booking.guests}
                                    </Label>
                                    <Select value={formData.guests} onValueChange={(value) => setFormData({ ...formData, guests: value })}>
                                        <SelectTrigger>
                                            <SelectValue placeholder={t.booking.guests} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">1</SelectItem>
                                            <SelectItem value="2">2</SelectItem>
                                            <SelectItem value="3">3</SelectItem>
                                            <SelectItem value="4">4</SelectItem>
                                            <SelectItem value="5+">5+</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Room Type */}
                                <div className="space-y-2">
                                    <Label htmlFor="roomType" className="flex items-center gap-2">
                                        <Bed className="w-4 h-4" />
                                        {t.booking.roomType}
                                    </Label>
                                    <Select value={formData.roomType} onValueChange={(value) => setFormData({ ...formData, roomType: value })}>
                                        <SelectTrigger>
                                            <SelectValue placeholder={t.booking.selectRoom} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="saltLake">{t.rooms.room1Name}</SelectItem>
                                            <SelectItem value="desertStar">{t.rooms.room2Name}</SelectItem>
                                            <SelectItem value="palmGarden">{t.rooms.room3Name}</SelectItem>
                                            <SelectItem value="heritage">{t.rooms.room4Name}</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Extras */}
                                <div className="space-y-3">
                                    <Label className="flex items-center gap-2">
                                        <CheckSquare className="w-4 h-4" />
                                        {t.booking.extras}
                                    </Label>
                                    <div className="space-y-2">
                                        {extras.map((extra) => (
                                            <label key={extra.id} className="flex items-center gap-3 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.extras.includes(extra.id)}
                                                    onChange={() => toggleExtra(extra.id)}
                                                    className="w-4 h-4 rounded border-desert-300 text-desert-700 focus:ring-desert-500"
                                                />
                                                <span className="text-sm text-desert-700 group-hover:text-desert-900">
                                                    {extra.label}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <Button type="submit" size="lg" className="w-full text-lg">
                                    {t.booking.submit}
                                </Button>
                            </form>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Confirmation Dialog */}
            <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-2xl">{t.booking.confirmTitle}</DialogTitle>
                        <DialogDescription className="text-base pt-4">
                            {t.booking.confirmMessage}
                        </DialogDescription>
                    </DialogHeader>
                    <Button onClick={() => setShowConfirmation(false)} className="mt-4">
                        {t.booking.close}
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    );
}
