"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { siwaImages } from "@/lib/siwaImages";

export default function ContactPage() {
    const { t } = useLanguage();
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={siwaImages.nightDesert}
                        alt="Contact"
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
                        {t.contact.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-sand-100 leading-relaxed">
                        {t.contact.subtitle}
                    </p>
                </motion.div>
            </section>

            {/* Contact Content */}
            <section className="py-24 bg-gradient-to-b from-sand-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <AnimatedSection>
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-desert-600 to-desert-800 flex items-center justify-center flex-shrink-0 shadow-lg">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-desert-900 mb-1">Location</h3>
                                            <p className="text-desert-600">Siwa Oasis, Matrouh Governorate, Egypt</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-desert-600 to-desert-800 flex items-center justify-center flex-shrink-0 shadow-lg">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-desert-900 mb-1">{t.contact.phone}</h3>
                                            <p className="text-desert-600">+20 123 456 7890</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-desert-600 to-desert-800 flex items-center justify-center flex-shrink-0 shadow-lg">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-desert-900 mb-1">{t.contact.email}</h3>
                                            <p className="text-desert-600">info@hossnyinn.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-palm-600 to-palm-800 flex items-center justify-center flex-shrink-0 shadow-lg">
                                            <MessageSquare className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-desert-900 mb-1">{t.contact.whatsapp}</h3>
                                            <p className="text-desert-600">+20 123 456 7890</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Map Placeholder */}
                                <div className="relative h-64 rounded-xl overflow-hidden shadow-xl">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109745.97470906!2d25.519!3d29.203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x144a2f5d3c5c5c5d%3A0x5c5c5c5c5c5c5c5c!2sSiwa%20Oasis%2C%20Egypt!5e0!3m2!1sen!2sus!4v1234567890"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Contact Form */}
                        <AnimatedSection delay={0.2}>
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-desert-200">
                                <h3 className="font-display text-2xl font-bold text-desert-900 mb-6">
                                    {t.contact.formTitle}
                                </h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">{t.contact.name}</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">{t.contact.emailLabel}</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">{t.contact.message}</Label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="flex w-full rounded-md border border-desert-300 bg-white/90 backdrop-blur-sm px-3 py-2 text-sm ring-offset-white placeholder:text-desert-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-desert-500 focus-visible:ring-offset-2 transition-all duration-200 resize-none"
                                        />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full">
                                        {t.contact.send}
                                    </Button>
                                </form>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Success Dialog */}
            <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-2xl">{t.contact.successTitle}</DialogTitle>
                        <DialogDescription className="text-base pt-4">
                            {t.contact.successMessage}
                        </DialogDescription>
                    </DialogHeader>
                    <Button onClick={() => setShowSuccess(false)} className="mt-4">
                        {t.booking.close}
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    );
}
