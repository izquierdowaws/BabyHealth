"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { useTranslation } from "@/context/i18nContext";

export default function Preloader() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF7F4]"
        >
          <div className="flex flex-col items-center max-w-md px-6 text-center">
            {/* Heartbeat Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative mb-6"
            >
              <div className="absolute inset-0 bg-[#4B9B9B]/20 rounded-full blur-xl animate-heartbeat scale-150" />
              <Heart className="h-16 w-16 text-[#DF7B5E] relative z-10 animate-heartbeat" fill="#DF7B5E" />
            </motion.div>

            {/* Logo */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-serif text-4xl font-bold tracking-tight leading-[1.15] mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#1A1A1A] to-[#1B5A5A] group-hover:scale-[1.02] transition-transform duration-300"
            >
              BabyHealth
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-[#2A2A28] font-sans text-sm md:text-base tracking-widest uppercase font-medium"
            >
              {t('preloader.tagline')}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}