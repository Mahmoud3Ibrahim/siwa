"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedSection } from "@/components/AnimatedSection";
import { siwaImages } from "@/lib/siwaImages";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function GalleryPage() {
    const { t } = useLanguage();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const galleryImages = [
        siwaImages.gallery1,
        siwaImages.gallery2,
        siwaImages.gallery3,
        siwaImages.gallery4,
        siwaImages.gallery5,
        siwaImages.gallery6,
        siwaImages.gallery7,
        siwaImages.gallery8,
        siwaImages.gallery9,
        siwaImages.gallery10,
        siwaImages.gallery11,
        siwaImages.gallery12,
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={siwaImages.oasisPalms}
                        alt="Gallery"
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
                        {t.gallery.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-sand-100 leading-relaxed">
                        {t.gallery.subtitle}
                    </p>
                </motion.div>
            </section>

            {/* Gallery Grid */}
            <section className="py-24 bg-gradient-to-b from-sand-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {galleryImages.map((image, index) => (
                            <AnimatedSection key={index} delay={index * 0.05}>
                                <motion.div
                                    className="relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-shadow"
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <div className="relative aspect-[4/3]">
                                        <Image
                                            src={image}
                                            alt={`Gallery ${index + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                <DialogContent className="max-w-5xl p-0 border-0 bg-transparent">
                    {selectedImage && (
                        <div className="relative w-full h-[80vh]">
                            <Image
                                src={selectedImage}
                                alt="Gallery"
                                fill
                                className="object-contain"
                            />
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
