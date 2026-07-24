"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Camera, Mic, Sparkles } from "lucide-react";
import { useTranslation } from "@/context/i18nContext";

export default function ProductReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"photo" | "sound" | "guidance">("photo");
  const { t } = useTranslation();

  // Scroll animations for scaling and blurring the smartphone mockup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1.05, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 1, 1, 0.4]);
  const blurValue = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["blur(15px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
  const y = useTransform(scrollYProgress, [0, 0.4, 1], [100, 0, -100]);

  // Content for tabs
  const tabDetails = {
    photo: {
      title: t('productReveal.tabs.photo.title'),
      desc: t('productReveal.tabs.photo.description'),
      icon: Camera,
      color: "#DF7B5E",
      image: "/pic01.png", // Fallback to pic01.png
    },
    sound: {
      title: t('productReveal.tabs.sound.title'),
      desc: t('productReveal.tabs.sound.description'),
      icon: Mic,
      color: "#4B9B9B",
      image: "/pic03.png", // Fallback to pic03.png
    },
    guidance: {
      title: t('productReveal.tabs.guidance.title'),
      desc: t('productReveal.tabs.guidance.description'),
      icon: Sparkles,
      color: "#73D2D2",
      image: "/pic05.png", // Fallback to pic05.png
    },
  };

  return (
    <section ref={containerRef} className="relative w-full py-24 lg:py-36 bg-[#FAF7F4] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-[#73D2D2]/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-[#FFD5C2]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center relative z-10">
            <span className="font-accent text-[#4B9B9B] text-xs font-semibold uppercase tracking-wider mb-3 inline-flex items-center gap-2">
              {t('productReveal.tryAurora')}
              <span className="w-1.5 h-1.5 rounded-full bg-[#4B9B9B]/50" />
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#2A2A28] to-[#2B7A7A] group-hover:scale-[1.02] transition-transform duration-300">
              {t('productReveal.headline')}
            </h2>

            {/* Feature Selectors */}
            <div className="space-y-4">
              {(Object.keys(tabDetails) as Array<keyof typeof tabDetails>).map((key) => {
                const tab = tabDetails[key];
                const Icon = tab.icon;
                const isActive = activeTab === key;

                return (
                  <motion.div
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                      isActive
                        ? "bg-white shadow-md border-[#7B7974]/15"
                        : "bg-transparent border-transparent hover:bg-white/50"
                    }`}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="flex gap-4 items-start">
                      <div
                        className="p-3 rounded-xl flex items-center justify-center transition-colors"
                        style={{
                          backgroundColor: isActive ? `${tab.color}15` : "#FAF7F4",
                        }}
                      >
                        <Icon
                          className="w-5 h-5"
                          style={{ color: isActive ? tab.color : "#7B7974" }}
                        />
                      </div>
                      <div>
                        <h3
                          className={`font-sans font-semibold text-lg transition-all ${isActive ? "bg-clip-text text-transparent bg-gradient-to-r from-[#1A1A1A] to-[#1B5A5A] hover:scale-[1.02]" : "bg-clip-text text-transparent bg-gradient-to-r from-[#4A4946] to-[#4A4946] hover:text-[#4B9B9B]/50"}`}
                        >
                          {tab.title}
                        </h3>
                        <p className="font-sans text-sm text-[#4A4946]/80 mt-1 leading-relaxed">
                          {tab.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Smartphone Mockup Reveal */}
          <div className="lg:col-span-7 flex justify-center items-center relative">
            {/* Soft decorative glow ring */}
            <div className="absolute w-[80%] aspect-square max-w-[480px] bg-gradient-to-tr from-[#73D2D2]/20 to-[#DF7B5E]/20 rounded-full blur-[60px] pointer-events-none" />

            <motion.div
              style={{ scale, opacity, filter: blurValue, y }}
              className="relative w-full max-w-[340px] aspect-[9/19.5] rounded-[50px] border-[8px] border-[#2A2A28] bg-black shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Phone Camera Notch (Dynamic Island style) */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-between px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-900/50" />
              </div>

              {/* Internal Screen Content */}
              <div className="relative w-full h-full flex flex-col bg-[#FAF7F4] z-10 pt-10">
                {/* Header of mock app */}
                <div className="px-4 py-3 flex justify-between items-center border-b border-[#7B7974]/10 bg-white">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded bg-gradient-to-tr from-[#4B9B9B] to-[#DF7B5E]" />
                    <span className="font-serif font-bold text-xs text-[#2A2A28]">BabyHealth</span>
                  </div>
                  <span className="text-[10px] font-semibold text-[#4B9B9B] uppercase tracking-wider">
                    {t('productReveal.online')}
                  </span>
                </div>

                {/* Displaying mockup screen image with animation */}
                <div className="relative flex-1 w-full bg-neutral-100 overflow-hidden">
                  {/* We transition between tab images inside the phone screen */}
                  {Object.keys(tabDetails).map((key) => {
                    const tab = tabDetails[key as keyof typeof tabDetails];
                    const isTabActive = activeTab === key;

                    return (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isTabActive ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <Image
                          src={tab.image}
                          alt={tab.title}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, 400px"
                          priority
                        />
                      </motion.div>
                    );
                  })}
                </div>

                {/* Bottom App Bar */}
                <div className="px-5 py-4 bg-white border-t border-[#7B7974]/10 flex justify-between items-center">
                  <Camera className={`w-5 h-5 ${activeTab === "photo" ? "text-[#DF7B5E]" : "text-neutral-400"}`} />
                  <Mic className={`w-5 h-5 ${activeTab === "sound" ? "text-[#4B9B9B]" : "text-neutral-400"}`} />
                  <Sparkles className={`w-5 h-5 ${activeTab === "guidance" ? "text-[#73D2D2]" : "text-neutral-400"}`} />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}