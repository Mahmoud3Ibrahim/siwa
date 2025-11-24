"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Waves, Flame, Stars, UtensilsCrossed } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedSection } from "@/components/AnimatedSection";
import { siwaImages } from "@/lib/siwaImages";

export default function ExperiencesPage() {
    const { t } = useLanguage();

    const experiences = [
        {
            icon: Compass,
            title: t.experiences.exp1Title,
            description: t.experiences.exp1Desc,
            image: siwaImages.desertSafari,
        },
        {
            icon: Waves,
            title: t.experiences.exp2Title,
            description: t.experiences.exp2Desc,
            image: siwaImages.saltLakeSunset,
        },
        {
            icon: Flame,
            title: t.experiences.exp3Title,
            description: t.experiences.exp3Desc,
            image: siwaImages.hotSpringNight,
        },
        {
            icon: Stars,
            title: t.experiences.exp4Title,
            description: t.experiences.exp4Desc,
            image: siwaImages.starryNight,
        },
        {
            icon: UtensilsCrossed,
            title: t.experiences.exp5Title,
            description: t.experiences.exp5Desc,
            image: siwaImages.siwanDinner,
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={siwaImages.desertDunes}
                        alt="Experiences"
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
                        {t.experiences.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-sand-100 leading-relaxed">
                        {t.experiences.subtitle}
                    </p>
                </motion.div>
            </section>

            {/* Experiences */}
            <section className="py-24 bg-gradient-to-b from-sand-100 to-sand-200">
                <div className="container mx-auto px-4">
                    <div className="space-y-24">
                        {experiences.map((exp, index) => (
                            <AnimatedSection key={index}>
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                    <div className={`relative h-[400px] rounded-2xl overflow-hidden group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                        <Image
                                            src={exp.image}
                                            alt={exp.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                            quality={75}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    </div>

                                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-desert-600 to-desert-800 flex items-center justify-center shadow-xl">
                                            <exp.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h2 className="font-display text-4xl font-bold text-desert-900">
                                            {exp.title}
                                        </h2>
                                        <p className="text-lg text-desert-600 leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
