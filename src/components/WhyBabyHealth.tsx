"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertOctagon, Heart, Shield } from "lucide-react";
import { useTranslation } from "@/context/i18nContext";

export default function WhyBabyHealth() {
  const { t } = useTranslation();
  const positives = [
    t('whyBabyHealth.positives.guidanceAndReassurance'),
    t('whyBabyHealth.positives.realTimeAudioVisual'),
    t('whyBabyHealth.positives.structuredEducationalInfo')
  ];
  const negatives = [
    t('whyBabyHealth.negatives.clinicalDiagnoses'),
    t('whyBabyHealth.negatives.prescriptionsMedication'),
    t('whyBabyHealth.negatives.replacementPediatricians')
  ];

  return (
    <section id="why-us" className="relative w-full py-24 bg-[#FAF7F4] overflow-hidden border-t border-[#7B7974]/10">
      {/* Decorative Blur */}
      <div className="absolute top-[20%] left-[-200px] w-[500px] h-[500px] rounded-full bg-[#DF7B5E]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-100px] w-[400px] h-[400px] rounded-full bg-[#4B9B9B]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left Column: Why We Built It */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DF7B5E]/10 text-[#DF7B5E] text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5" />
              {t('whyBabyHealth.header.mission')}
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] bg-clip-text text-transparent bg-gradient-to-r from-[#2A2A28] to-[#2B7A7A] group-hover:scale-[1.02] transition-transform duration-300">
            ¿Por qué Aurora?
          </h2>

            <p className="font-sans text-[#4A4946]/90 text-lg font-light leading-relaxed">
              {t('whyBabyHealth.description')}
            </p>

            <blockquote className="border-l-4 border-[#4B9B9B] pl-4 italic text-[#2B7A7A] font-sans font-medium text-base">
              {t('whyBabyHealth.quote')}
            </blockquote>

            <p className="font-sans text-[#7B7974] text-sm leading-relaxed">
              {t('whyBabyHealth.purpose')}
            </p>
          </div>

          {/* Right Column: AI Transparency */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#7B7974]/15 space-y-8 relative overflow-hidden">
            {/* Soft decorative glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#73D2D2]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4B9B9B]/10 text-[#2B7A7A] text-xs font-semibold uppercase tracking-wider mb-4">
                <Shield className="w-3.5 h-3.5" />
                {t('whyBabyHealth.transparency.title')}
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#2A2A28] bg-clip-text text-transparent bg-gradient-to-r from-[#1A1A1A] to-[#1B5A5A] group-hover:scale-[1.03] transition-transform duration-300">
                {t('whyBabyHealth.transparency.subtitle')}
              </h3>
              <p className="font-sans text-sm text-[#7B7974] mt-2">
                {t('whyBabyHealth.transparency.description')}
              </p>
            </div>

            {/* Split Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#7B7974]/10">

              {/* Positives */}
              <div className="space-y-4">
                <span className="font-accent text-[11px] font-bold text-[#2B7A7A] tracking-widest uppercase block">
                  {t('whyBabyHealth.positives.title')}
                </span>
                <ul className="space-y-3.5">
                  {positives.map((item, idx) => (
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-[#4A4946] font-medium"
                    >
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Negatives */}
              <div className="space-y-4">
                <span className="font-accent text-[11px] font-bold text-[#DF7B5E] tracking-widest uppercase block">
                  {t('whyBabyHealth.negatives.title')}
                </span>
                <ul className="space-y-3.5">
                  {negatives.map((item, idx) => (
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-[#4A4946] font-medium"
                    >
                      <AlertOctagon className="w-4.5 h-4.5 text-[#DF7B5E] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="p-4 bg-[#FAF7F4] rounded-2xl border border-[#7B7974]/10 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FAF7F4] border-[2px] border-[#DF7B5E] animate-pulse shrink-0" />
              <p className="font-sans text-xs text-[#7B7974] leading-relaxed">
                <strong>{t('disclaimer.title')}:</strong> {t('disclaimer.description')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}