"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/utils";

export function Header() {
    const pathname = usePathname();
    const { t, dir } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: t.nav.home },
        { href: "/rooms", label: t.nav.rooms },
        { href: "/experiences", label: t.nav.experiences },
        { href: "/gallery", label: t.nav.gallery },
        { href: "/about-siwa", label: t.nav.aboutSiwa },
        { href: "/sustainability", label: t.nav.sustainability },
        { href: "/booking", label: t.nav.booking },
        { href: "/contact", label: t.nav.contact },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
                isScrolled
                    ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-desert-200/50"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <motion.div
                            className="relative"
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Sparkles className="w-8 h-8 text-desert-700" />
                            <motion.div
                                className="absolute inset-0 bg-desert-400 rounded-full blur-xl opacity-0 group-hover:opacity-50"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>
                        <div>
                            <h1 className="font-display text-2xl font-bold text-desert-900">
                                {t.brand.name}
                            </h1>
                            <p className="text-xs text-desert-600 -mt-1">{t.brand.tagline}</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link key={link.href} href={link.href}>
                                    <motion.div
                                        className={cn(
                                            "relative px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                                            isActive
                                                ? "text-desert-900"
                                                : "text-desert-700 hover:text-desert-900"
                                        )}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeNav"
                                                className="absolute inset-0 bg-gradient-to-r from-sand-200 to-desert-200 rounded-lg -z-10"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Language Switcher & Mobile Menu */}
                    <div className="flex items-center gap-3">
                        <LanguageSwitcher />

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-desert-900 hover:bg-white/30 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-desert-200/50 overflow-hidden"
                    >
                        <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
                            {navLinks.map((link, index) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: dir === "rtl" ? 20 : -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={cn(
                                                "block px-4 py-3 rounded-lg text-sm font-medium transition-all",
                                                isActive
                                                    ? "bg-gradient-to-r from-sand-200 to-desert-200 text-desert-900"
                                                    : "text-desert-700 hover:bg-desert-50"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
