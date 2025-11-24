"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Leaf, Droplets, Utensils, ArrowRight, Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siwaImages } from "@/lib/siwaImages";

export default function HomePage() {
    const { t } = useLanguage();
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    const highlights = [
        {
            icon: Sparkles,
            title: t.home.highlight1Title,
            description: t.home.highlight1Desc,
            image: siwaImages.saltHotel1,
        },
        {
            icon: Leaf,
            title: t.home.highlight2Title,
            description: t.home.highlight2Desc,
            image: siwaImages.oasisPalms,
        },
        {
            icon: Droplets,
            title: t.home.highlight3Title,
            description: t.home.highlight3Desc,
            image: siwaImages.saltLake1,
        },
        {
            icon: Utensils,
            title: t.home.highlight4Title,
            description: t.home.highlight4Desc,
            image: siwaImages.traditionalFood,
        },
    ];

    const testimonials = [
        {
            text: t.home.testimonial1,
            author: t.home.testimonial1Author,
        },
        {
            text: t.home.testimonial2,
            author: t.home.testimonial2Author,
        },
        {
            text: t.home.testimonial3,
            author: t.home.testimonial3Author,
        },
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y: heroY, scale: heroScale }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={siwaImages.heroMain}
                        alt="Siwa Oasis"
                        fill
                        className="object-cover"
                        priority
                        quality={75}
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
                </motion.div>

                <div className="absolute inset-0 z-10">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            initial={{
                                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                                opacity: Math.random() * 0.5 + 0.3,
                            }}
                            animate={{
                                y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080)],
                                opacity: [null, Math.random() * 0.5 + 0.3],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        />
                    ))}
                </div>

                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="relative z-20 text-center px-4 max-w-5xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                            {t.hero.title}
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-xl md:text-2xl text-sand-100 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        {t.hero.subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link href="/booking">
                            <Button size="lg" className="group text-lg px-8 py-6 shadow-2xl">
                                {t.hero.ctaBook}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/about-siwa">
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 shadow-2xl">
                                {t.hero.ctaDiscover}
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
                        <motion.div
                            className="w-1 h-2 bg-white rounded-full"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </section>

            {/* Highlights */}
            <section className="py-24 bg-gradient-to-b from-sand-100 to-sand-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-sand-200 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-desert-200 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />

                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-desert-900 mb-4">
                            {t.home.whyTitle}
                        </h2>
                        <p className="text-xl text-desert-600 max-w-2xl mx-auto">
                            {t.home.whySubtitle}
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {highlights.map((highlight, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <Card className="group h-full overflow-hidden border-0 shadow-xl">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={highlight.image}
                                            alt={highlight.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4">
                                            <highlight.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-xl">{highlight.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base leading-relaxed">
                                            {highlight.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rooms Teaser */}
            <AnimatedSection className="py-24 bg-sand-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[500px] rounded-2xl overflow-hidden group">
                            <Image
                                src={siwaImages.roomDesertStar}
                                alt="Rooms"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                        </div>

                        <div className="space-y-6">
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-desert-900">
                                {t.nav.rooms}
                            </h2>
                            <p className="text-lg text-desert-600 leading-relaxed">
                                {t.rooms.subtitle}
                            </p>
                            <Link href="/rooms">
                                <Button size="lg" className="group">
                                    Explore Rooms
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Testimonials */}
            <section className="py-24 bg-gradient-to-b from-sand-100 to-desert-50 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-desert-900 mb-4">
                            {t.home.testimonialsTitle}
                        </h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <AnimatedSection key={index} delay={index * 0.15}>
                                <Card className="h-full bg-white/60 backdrop-blur-sm border-0 shadow-xl">
                                    <CardHeader>
                                        <Quote className="w-10 h-10 text-desert-400 mb-4" />
                                        <CardDescription className="text-base text-desert-800 leading-relaxed italic">
                                            {testimonial.text}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center gap-2">
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-desert-500 text-desert-500" />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-sm font-medium text-desert-900 mt-2">
                                            {testimonial.author}
                                        </p>
                                    </CardContent>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <AnimatedSection className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={siwaImages.starryNight}
                        alt="Starry Night"
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl md:text-6xl font-bold text-white mb-8"
                    >
                        Begin Your Siwa Journey
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href="/booking">
                            <Button size="lg" className="text-lg px-12 py-7 shadow-2xl">
                                {t.hero.ctaBook}
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </AnimatedSection>
        </div>
    );
}
