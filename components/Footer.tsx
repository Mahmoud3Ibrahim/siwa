"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { href: "/", label: t.nav.home },
        { href: "/rooms", label: t.nav.rooms },
        { href: "/experiences", label: t.nav.experiences },
        { href: "/gallery", label: t.nav.gallery },
        { href: "/about-siwa", label: t.nav.aboutSiwa },
        { href: "/sustainability", label: t.nav.sustainability },
        { href: "/booking", label: t.nav.booking },
        { href: "/contact", label: t.nav.contact },
    ];

    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Twitter, href: "#", label: "Twitter" },
    ];

    return (
        <footer className="relative bg-gradient-to-b from-desert-900 to-desert-950 text-sand-50 overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-sand-400 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-desert-600 rounded-full blur-3xl" />
            </div>

            <div className="relative container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="font-display text-3xl font-bold">{t.brand.name}</h3>
                        <p className="text-sand-200 text-sm leading-relaxed">
                            {t.footer.description}
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <social.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.slice(0, 4).map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sand-200 hover:text-sand-50 transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* More Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="font-display text-lg font-semibold mb-4">Explore</h4>
                        <ul className="space-y-2">
                            {quickLinks.slice(4).map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sand-200 hover:text-sand-50 transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="space-y-4"
                    >
                        <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>

                        <div className="flex items-start gap-3 text-sm text-sand-200">
                            <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                            <span>Siwa Oasis, Matrouh Governorate, Egypt</span>
                        </div>

                        <div className="flex items-center gap-3 text-sm text-sand-200">
                            <Phone className="w-4 h-4 flex-shrink-0" />
                            <span>+20 123 456 7890</span>
                        </div>

                        <div className="flex items-center gap-3 text-sm text-sand-200">
                            <Mail className="w-4 h-4 flex-shrink-0" />
                            <span>info@hossnyinn.com</span>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="pt-8 border-t border-white/10 text-center text-sm text-sand-300"
                >
                    <p>
                        © {currentYear} {t.brand.name}. {t.footer.rights}
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
