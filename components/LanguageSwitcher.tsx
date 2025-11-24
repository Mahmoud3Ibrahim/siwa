"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <motion.button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-desert-900 hover:bg-white/30 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Languages className="w-4 h-4" />
            <span className="font-medium text-sm">
                {language === "en" ? "AR" : "EN"}
            </span>
        </motion.button>
    );
}
