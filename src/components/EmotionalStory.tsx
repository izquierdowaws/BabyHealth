"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "@/context/i18nContext";

export default function EmotionalStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Define opacity and y translations for each step
  // Step 1: 02:13 AM
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [40, 0, 0, -40]);

  // Step 2: Your baby is crying.
  const opacity2 = useTransform(scrollYProgress, [0.22, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.22, 0.3, 0.4, 0.45], [40, 0, 0, -40]);

  // Step 3: You are not sure why.
  const opacity3 = useTransform(scrollYProgress, [0.42, 0.5, 0.6, 0.65], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.42, 0.5, 0.6, 0.65], [40, 0, 0, -40]);

  // Step 4: Should you worry?
  const opacity4 = useTransform(scrollYProgress, [0.62, 0.7, 0.76, 0.8], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.62, 0.7, 0.76, 0.8], [40, 0, 0, -40]);

  // Step 5: Should you wait?
  const opacity5 = useTransform(scrollYProgress, [0.78, 0.83, 0.88, 0.91], [0, 1, 1, 0]);
  const y5 = useTransform(scrollYProgress, [0.78, 0.83, 0.88, 0.91], [40, 0, 0, -40]);

  return (
    <div id="emotional-story" ref={containerRef} className="relative h-[450vh] bg-[#2A2A28]">
      {/* Sticky screen container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6">

        {/* Subtle dark ambient glow */}
        <div className="absolute top-[30%] left-[20%] w-[350px] h-[350px] rounded-full bg-[#DF7B5E]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-[#4B9B9B]/5 blur-[150px] pointer-events-none" />

        {/* Step 1: 02:13 AM */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute text-center"
        >
          <span className="font-accent text-[#FAF7F4] text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
            {t('emotionalStory.step1.time')}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-[#FFFFFF] group-hover:scale-[1.02] transition-transform duration-300">
            {t('emotionalStory.step1.timeValue')}
          </h2>
        </motion.div>

        {/* Step 2: Your baby is crying. */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute text-center max-w-4xl"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-[#FFFFFF] group-hover:scale-[1.02] transition-transform duration-300">
            {t('emotionalStory.step2.babyCrying')}
          </h2>
        </motion.div>

        {/* Step 3: You are not sure why. */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute text-center max-w-4xl"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-[#FFFFFF] group-hover:scale-[1.02] transition-transform duration-300">
            {t('emotionalStory.step3.notSureWhy')}
          </h2>
        </motion.div>

        {/* Step 4: Should you worry? */}
        <motion.div
          style={{ opacity: opacity4, y: y4 }}
          className="absolute text-center max-w-4xl"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-[#FFFFFF] group-hover:scale-[1.02] transition-transform duration-300">
            {t('emotionalStory.step4.shouldWorry')}
          </h2>
        </motion.div>

        {/* Step 5: Should you wait? */}
        <motion.div
          style={{ opacity: opacity5, y: y5 }}
          className="absolute text-center max-w-4xl"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-[#FFFFFF] group-hover:scale-[1.02] transition-transform duration-300">
            {t('emotionalStory.step5.shouldWait')}
          </h2>
        </motion.div>

      </div>
    </div>
  );
}