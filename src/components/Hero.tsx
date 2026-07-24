"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Sparkles, Moon, Sun } from "lucide-react";
import { useTranslation } from "@/context/i18nContext";

const PARTICLES = Array.from({ length: 15 }, (_, index) => ({
  x: (index * 37 + 11) % 100,
  y: (index * 61 + 7) % 100,
  size: 4 + ((index * 7) % 8),
  delay: ((index * 13) % 50) / 10,
}));

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t, locale, setLocale, isDarkMode, toggleDarkMode } = useTranslation();

  // Mouse tracking for interactive glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Center the coordinates around the cursor
    mouseX.set(e.clientX - rect.left - 200);
    mouseY.set(e.clientY - rect.top - 200);
  };

  const particles = PARTICLES;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen overflow-hidden flex flex-col justify-between bg-[#FAF7F4] select-none"
    >
      {/* Header Navigation */}
      <header className="w-full py-5 px-6 md:px-12 flex justify-between items-center z-30">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#4B9B9B] via-[#73D2D2] to-[#DF7B5E] flex items-center justify-center shadow-md">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-serif font-bold text-xl text-[#2A2A28] tracking-wide">Aurora</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4"
        >
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.preventDefault();
                setLocale(locale === 'es' ? 'en' : 'es');
              }}
              className="flex items-center gap-1 text-sm font-medium text-[#4A4946] hover:text-[#2A2A28] transition-colors p-2 rounded hover:bg-white/50"
            >
              {locale === 'es' ? 'English' : 'Español'}
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-1 p-2 rounded hover:bg-white/50"
            title={isDarkMode ? 'Light mode' : 'Dark mode'}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#why-us"
            className={`hidden sm:inline-block text-sm font-medium text-[#4A4946] hover:text-[#2A2A28] transition-colors`}
          >
            {t('header.ourMission')}
          </a>
          <a
            href="#aws-architecture"
            className={`hidden sm:inline-block text-sm font-medium text-[#4A4946] hover:text-[#2A2A28] transition-colors`}
          >
            {t('header.architecture')}
          </a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://d272sj5fujdytw.cloudfront.net/#/auth"
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#FAF7F4] bg-[#2B7A7A] hover:bg-[#2A2A28] transition-all shadow-sm"
          >
            {t('header.requestDemo')}
          </motion.a>
        </motion.div>
      </header>

      {/* Aurora Glow Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft atmospheric base meshes */}
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-[#73D2D2]/15 blur-[120px] animate-float" />
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-[#FFD5C2]/20 blur-[130px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[40%] right-[30%] w-[400px] h-[400px] rounded-full bg-[#A7F3D0]/12 blur-[100px] animate-float" style={{ animationDelay: "4s" }} />

        {/* Interactive Mouse-following glow */}
        <motion.div
          style={{ x: glowX, y: glowY }}
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#73D2D2]/20 to-[#DF7B5E]/15 blur-[100px]"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {particles.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0.1, y: `${p.y}%`, x: `${p.x}%` }}
            animate={{
              y: [`${p.y}%`, `${p.y - 15}%`, `${p.y}%`],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 8 + p.delay * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
            className="absolute rounded-full bg-[#4B9B9B]/30"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
          />
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4B9B9B]/10 text-[#2B7A7A] text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DF7B5E] animate-ping" />
            {t('hero.projectAurora')}
          </div>

          {/* Headline */}
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2A2A28] to-[#2B7A7A] group-hover:scale-[1.02] transition-transform duration-300"
          >
            BabyHealth
          </h1>

          {/* Subheadline */}
          <p
            className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-[#2B7A7A] via-[#DF7B5E] to-[#DF7B5E]"
          >
            Entendiendo el llanto de tu bebé, un paso a la vez.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#aws-architecture"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#2A2A28] hover:bg-[#2B7A7A] text-white font-medium flex items-center justify-center gap-2 group transition-all shadow-lg"
            >
              {t('hero.ctaLearn')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#why-us"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-[#FAF7F4] text-[#2A2A28] font-medium border border-[#7B7974]/20 flex items-center justify-center transition-all shadow-sm"
            >
              {t('hero.ctaExplore')}
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Footer hint */}
      <div className="w-full py-6 flex justify-center z-10 pointer-events-none">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-xs font-semibold uppercase tracking-widest text-[#7B7974] flex flex-col items-center gap-2"
        >
          {t('hero.footerHint')}
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#7B7974] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}