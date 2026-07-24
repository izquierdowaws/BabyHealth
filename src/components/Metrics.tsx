"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useTranslation } from "@/context/i18nContext";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(0, { damping: 20, stiffness: 70 });
  const displayValue = useTransform(spring, (latest) => Math.floor(latest));

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, value, spring]);

  useEffect(() => {
    return displayValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
  }, [displayValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Metrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true });
  const { t } = useTranslation();

  // Stopwatch countdown for "Seconds"
  const [seconds, setSeconds] = useState(15);
  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 3) {
          clearInterval(interval);
          return 3;
        }
        return prev - 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section ref={containerRef} className="w-full py-24 bg-white overflow-hidden border-t border-[#7B7974]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-center">

          {/* Metric 1: 24/7 Availability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center p-8 rounded-3xl bg-[#FAF7F4] border border-[#7B7974]/10 relative group hover:shadow-lg transition-all"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#DF7B5E]/10 flex items-center justify-center text-[#DF7B5E]">
              ✓
            </div>
            <span className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-[#2A2A28] tracking-tight leading-none mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1A1A1A] to-[#1B5A5A] group-hover:scale-[1.02] transition-transform duration-300">
              <Counter value={24} suffix="/7" />
            </span>
            <span className="font-accent text-xs font-bold text-[#7B7974] uppercase tracking-widest">
              {t('metrics.availability')}
            </span>
            <p className="font-sans text-sm text-[#4A4946] mt-3 leading-relaxed max-w-[240px]">
              {t('metrics.availabilityDesc')}
            </p>
          </motion.div>

          {/* Metric 2: 1 Photo Needed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center p-8 rounded-3xl bg-[#FAF7F4] border border-[#7B7974]/10 relative group hover:shadow-lg transition-all"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#4B9B9B]/10 flex items-center justify-center text-[#4B9B9B]">
              ✓
            </div>
            <span className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-[#2A2A28] tracking-tight leading-none mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1A1A1A] to-[#1B5A5A] group-hover:scale-[1.02] transition-transform duration-300">
              <Counter value={1} />
            </span>
            <span className="font-accent text-xs font-bold text-[#7B7974] uppercase tracking-widest">
              {t('metrics.onePhoto')}
            </span>
            <p className="font-sans text-sm text-[#4A4946] mt-3 leading-relaxed max-w-[240px]">
              {t('metrics.onePhotoDesc')}
            </p>
          </motion.div>

          {/* Metric 3: Seconds to Receive Guidance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center p-8 rounded-3xl bg-[#FAF7F4] border border-[#7B7974]/10 relative group hover:shadow-lg transition-all"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#73D2D2]/10 flex items-center justify-center text-[#2B7A7A]">
              ✓
            </div>
            <span className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-[#2A2A28] tracking-tight leading-none mb-4 min-w-[150px] inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#1A1A1A] to-[#1B5A5A] group-hover:scale-[1.02] transition-transform duration-300">
              {seconds}s
            </span>
            <span className="font-accent text-xs font-bold text-[#7B7974] uppercase tracking-widest">
              {t('metrics.responseTime')}
            </span>
            <p className="font-sans text-sm text-[#4A4946] mt-3 leading-relaxed max-w-[240px]">
              {t('metrics.responseTimeDesc')}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}