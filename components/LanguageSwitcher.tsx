"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const languageOptions = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "ar", name: "العربية", flag: "🇪🇬" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
];

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLang = languageOptions.find(lang => lang.code === language);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-desert-900 hover:bg-white/30 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Languages className="w-4 h-4" />
                <span className="font-medium text-sm flex items-center gap-2">
                    <span>{currentLang?.flag}</span>
                    <span>{currentLang?.code.toUpperCase()}</span>
                </span>
            </motion.button>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-2 right-0 w-48 bg-white/95 backdrop-blur-xl border border-white/30 rounded-xl shadow-2xl overflow-hidden z-50"
                >
                    {languageOptions.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                setLanguage(lang.code as any);
                                setIsOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-desert-100 transition-colors ${language === lang.code ? "bg-desert-50 font-semibold" : ""
                                }`}
                        >
                            <span className="text-2xl">{lang.flag}</span>
                            <span className="text-desert-900">{lang.name}</span>
                            {language === lang.code && (
                                <span className="ml-auto text-desert-600">✓</span>
                            )}
                        </button>
                    ))}
                </motion.div>
            )}
        </div>
    );
}
