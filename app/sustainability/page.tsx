"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Sun, Users, Landmark } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siwaImages } from "@/lib/siwaImages";

export default function SustainabilityPage() {
    const { t } = useLanguage();

    const principles = [
        {
            icon: Leaf,
            title: t.sustainability.principle1Title,
            description: t.sustainability.principle1Desc,
            image: siwaImages.sustainDesert,
        },
        {
            icon: Sun,
            title: t.sustainability.principle2Title,
            description: t.sustainability.principle2Desc,
            image: siwaImages.sustainPeople,
        },
        {
            icon: Users,
            title: t.sustainability.principle3Title,
            description: t.sustainability.principle3Desc,
            image: siwaImages.sustainLocal,
        },
        {
            icon: Landmark,
            title: t.sustainability.principle4Title,
            description: t.sustainability.principle4Desc,
            image: siwaImages.sustainCulture,
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={siwaImages.oasisPalms}
                        alt="Sustainability"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 text-center px-4 max-w-4xl mx-auto"
                >
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
                        {t.sustainability.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-sand-100 leading-relaxed">
                        {t.sustainability.subtitle}
                    </p>
                </motion.div>
            </section>

            {/* Principles with small images */}
            <section className="py-24 bg-gradient-to-b from-sand-100 to-sand-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {principles.map((principle, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <Card className="h-full group hover:shadow-2xl transition-shadow border-0 shadow-xl">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={principle.image}
                                            alt={principle.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-palm-600 to-palm-800 flex items-center justify-center shadow-lg">
                                                <principle.icon className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-2xl">{principle.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base leading-relaxed">
                                            {principle.description}
                                        </CardDescription>
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
