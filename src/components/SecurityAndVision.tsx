"use client";

import { motion } from "framer-motion";
import { ShieldCheck, EyeOff, Lock, HeartHandshake } from "lucide-react";
import { useTranslation } from "@/context/i18nContext";

export default function SecurityAndVision() {
  const { t } = useTranslation();
  const securityFeatures = [
    {
      title: t('securityVision.features.privateImages.title'),
      desc: t('securityVision.features.privateImages.description'),
      icon: EyeOff,
    },
    {
      title: t('securityVision.features.secureCloud.title'),
      desc: t('securityVision.features.secureCloud.description'),
      icon: Lock,
    },
    {
      title: t('securityVision.features.transparentProcessing.title'),
      desc: t('securityVision.features.transparentProcessing.description'),
      icon: ShieldCheck,
    },
    {
      title: t('securityVision.features.securityFirst.title'),
      desc: t('securityVision.features.securityFirst.description'),
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="w-full">
      {/* Security Section */}
      <section className="relative w-full py-24 bg-white overflow-hidden border-t border-[#7B7974]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left: Animated Shield Visual */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="absolute w-[300px] h-[300px] bg-[#4B9B9B]/10 rounded-full blur-[80px] pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative flex items-center justify-center w-72 h-72 rounded-3xl bg-[#FAF7F4] border border-[#7B7974]/10 shadow-md group"
              >
                {/* SVG Shield with spinning orbit ring */}
                <svg className="w-48 h-48 text-[#4B9B9B]" viewBox="0 0 100 100" fill="none">
                  {/* Outer defense rings */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="#C8E8E8"
                    strokeWidth="1.5"
                    strokeDasharray="6, 6"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="37"
                    stroke="#4B9B9B"
                    strokeWidth="1"
                    strokeDasharray="8, 4"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Shield Path */}
                  <path
                    d="M 50 20 C 58 20, 68 18, 72 25 C 72 45, 68 65, 50 80 C 32 65, 28 45, 28 25 C 32 18, 42 20, 50 20 Z"
                    fill="url(#shieldGrad)"
                    stroke="#2B7A7A"
                    strokeWidth="2.5"
                    className="drop-shadow-md"
                  />
                  {/* Checkmark inside */}
                  <path
                    d="M 40 48 L 47 55 L 60 40"
                    stroke="#FAF7F4"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#73D2D2" />
                      <stop offset="100%" stopColor="#4B9B9B" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </div>

            {/* Right: Security Statements */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="font-accent text-[#4B9B9B] text-xs font-semibold uppercase tracking-wider block mb-3">
                  Seguridad y Visión
                </span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] bg-clip-text text-transparent bg-gradient-to-r from-[#2A2A28] to-[#2B7A7A] group-hover:scale-[1.02] transition-transform duration-300">
                  Confianza Built In
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {securityFeatures.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="p-2.5 rounded-xl bg-[#C8E8E8] text-[#2B7A7A] shrink-0 mt-1">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-sans font-semibold text-base text-[#2A2A28] bg-clip-text text-transparent bg-gradient-to-r from-[#1A1A1A] to-[#1B5A5A] group-hover:scale-[1.02] transition-transform duration-300 mb-1">
                          {feat.title}
                        </h3>
                        <p className="font-sans text-xs text-[#4A4946]/85 leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative w-full py-32 bg-gradient-to-b from-white to-[#FAF7F4] overflow-hidden text-center">
        {/* Atmosphere color gradient ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#73D2D2]/15 to-[#FFD5C2]/15 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-accent text-[#4B9B9B] text-xs font-semibold uppercase tracking-wider block mb-4"
          >
            {t('securityVision.vision.title')}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] bg-clip-text text-transparent bg-gradient-to-r from-[#2A2A28] to-[#2B7A7A] group-hover:scale-[1.02] transition-transform duration-300 mb-8"
          >
            {t('securityVision.vision.headline')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg md:text-xl font-light text-[#4A4946] max-w-2xl mx-auto leading-relaxed"
          >
            {t('securityVision.vision.description')}
          </motion.p>
        </div>
      </section>
    </div>
  );
}