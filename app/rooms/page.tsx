"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siwaImages } from "@/lib/siwaImages";

export default function RoomsPage() {
    const { t } = useLanguage();

    const rooms = [
        {
            name: t.rooms.room1Name,
            description: t.rooms.room1Desc,
            price: t.rooms.room1Price,
            image: siwaImages.roomSaltLake,
            features: [t.rooms.feature1, t.rooms.feature2, t.rooms.feature4, t.rooms.feature6],
        },
        {
            name: t.rooms.room2Name,
            description: t.rooms.room2Desc,
            price: t.rooms.room2Price,
            image: siwaImages.roomDesertStar,
            features: [t.rooms.feature1, t.rooms.feature3, t.rooms.feature5, t.rooms.feature6],
        },
        {
            name: t.rooms.room3Name,
            description: t.rooms.room3Desc,
            price: t.rooms.room3Price,
            image: siwaImages.roomPalmGarden,
            features: [t.rooms.feature2, t.rooms.feature3, t.rooms.feature4, t.rooms.feature5],
        },
        {
            name: t.rooms.room4Name,
            description: t.rooms.room4Desc,
            price: t.rooms.room4Price,
            image: siwaImages.roomSuite,
            features: [t.rooms.feature1, t.rooms.feature2, t.rooms.feature4, t.rooms.feature5],
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={siwaImages.saltHotelInterior}
                        alt="Rooms"
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
                        {t.rooms.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-sand-100 leading-relaxed">
                        {t.rooms.subtitle}
                    </p>
                </motion.div>
            </section>

            {/* Rooms Grid */}
            <section className="py-24 bg-gradient-to-b from-sand-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {rooms.map((room, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <Card className="group overflow-hidden border-0 shadow-2xl h-full">
                                    <div className="relative h-80 overflow-hidden">
                                        <Image
                                            src={room.image}
                                            alt={room.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <h3 className="font-display text-3xl font-bold text-white mb-2">
                                                {room.name}
                                            </h3>
                                            <p className="text-sand-200 text-lg">{room.price}</p>
                                        </div>
                                    </div>

                                    <CardHeader>
                                        <CardDescription className="text-base leading-relaxed text-desert-700">
                                            {room.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent>
                                        <h4 className="font-semibold text-desert-900 mb-3">{t.rooms.featuresTitle}</h4>
                                        <ul className="space-y-2">
                                            {room.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2 text-desert-600">
                                                    <Check className="w-4 h-4 text-palm-600 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
