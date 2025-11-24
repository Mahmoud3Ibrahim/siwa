"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, History, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedSection } from "@/components/AnimatedSection";
import { siwaImages } from "@/lib/siwaImages";

export default function AboutSiwaPage() {
    const { t } = useLanguage();

    const sections = [
        {
            icon: MapPin,
            title: t.aboutSiwa.section1Title,
            description: t.aboutSiwa.section1Text,
            image: siwaImages.desertDunes,
        },
        {
            icon: History,
            title: t.aboutSiwa.section2Title,
            description: t.aboutSiwa.section2Text,
            image: siwaImages.saltLakeReflection, // Using Siwa3.jpg
        },
        {
            icon: Sparkles,
            title: t.aboutSiwa.section3Title,
            description: t.aboutSiwa.section3Text,
            image: siwaImages.oasisPalms,
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={siwaImages.desertSafari}
                        alt="About Siwa"
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
                        {t.aboutSiwa.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-sand-100 leading-relaxed">
                        {t.aboutSiwa.subtitle}
                    </p>
                </motion.div>
            </section>

            {/* Content Sections */}
            <section className="py-24 bg-gradient-to-b from-sand-100 to-sand-200">
                <div className="container mx-auto px-4">
                    <div className="space-y-24">
                        {sections.map((section, index) => (
                            <AnimatedSection key={index}>
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                    <div className={`relative h-[400px] rounded-2xl overflow-hidden group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                        <Image
                                            src={section.image}
                                            alt={section.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    </div>

                                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-desert-600 to-desert-800 flex items-center justify-center shadow-xl">
                                            <section.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h2 className="font-display text-4xl font-bold text-desert-900">
                                            {section.title}
                                        </h2>
                                        <p className="text-lg text-desert-600 leading-relaxed">
                                            {section.description}
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
