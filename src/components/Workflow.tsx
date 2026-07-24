"use client";

import { motion } from "framer-motion";
import { Camera, CloudUpload, Cpu, HeartHandshake, Eye } from "lucide-react";
import { useTranslation } from "@/context/i18nContext";

export default function Workflow() {
  const { t } = useTranslation();
  const steps = [
    {
      num: "01",
      title: t('workflow.steps.capture.title'),
      desc: t('workflow.steps.capture.description'),
      icon: Camera,
      color: "from-[#DF7B5E] to-[#F0B9A8]",
    },
    {
      num: "02",
      title: t('workflow.steps.upload.title'),
      desc: t('workflow.steps.upload.description'),
      icon: CloudUpload,
      color: "from-[#4B9B9B] to-[#73D2D2]",
    },
    {
      num: "03",
      title: t('workflow.steps.analyze.title'),
      desc: t('workflow.steps.analyze.description'),
      icon: Cpu,
      color: "from-[#2B7A7A] to-[#C8E8E8]",
    },
    {
      num: "04",
      title: t('workflow.steps.understand.title'),
      desc: t('workflow.steps.understand.description'),
      icon: Eye,
      color: "from-[#FFD5C2] to-[#F7A38B]",
    },
    {
      num: "05",
      title: t('workflow.steps.act.title'),
      desc: t('workflow.steps.act.description'),
      icon: HeartHandshake,
      color: "from-[#DF7B5E] to-[#73D2D2]",
    },
  ];

  return (
    <section id="workflow" className="relative w-full py-24 bg-white overflow-hidden scroll-mt-6">
      {/* Background decorations */}
      <div className="absolute top-[40%] right-[-100px] w-[350px] h-[350px] rounded-full rounded-full bg-[#73D2D2]/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 font-accent text-[#DF7B5E] text-xs font-semibold uppercase tracking-wider block mb-3"
          >
            {t('workflow.processTitle')}
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-2 h-2 bg-[#DF7B5E]/20 rounded-full transition-transform duration-300"
            />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] bg-clip-text text-transparent bg-gradient-to-r from-[#1A1A1A] to-[#1B5A5A] group-hover:scale-[1.02] transition-transform duration-300"
          >
            {t('workflow.mainHeadline')}
          </motion.h2>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[68px] left-[8%] right-[8%] h-[2px] bg-neutral-100 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-[#DF7B5E] via-[#4B9B9B] to-[#73D2D2] origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                >
                  {/* Icon Circle */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${step.color} p-[1px] shadow-sm group-hover:shadow-md transition-all`}>
                      <div className="w-full h-full rounded-[15px] bg-white flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#2A2A28] group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    {/* Index Badge */}
                    <div className="absolute -top-2 -right-2 bg-[#2A2A28] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                      {step.num}
                    </div>
                  </div>

                  {/* Text Details */}
                  <h3 className="font-serif font-bold text-xl text-[#2A2A28] mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#1A1A1A] to-[#1B5A5A] group-hover:scale-[1.03] transition-transform duration-300">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-[#4A4946]/85 leading-relaxed max-w-[240px]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}