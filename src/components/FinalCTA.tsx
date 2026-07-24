"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslation } from "@/context/i18nContext";

export default function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section id="cta" className="relative w-full min-h-[90vh] flex flex-col justify-between bg-[#FAF7F4] overflow-hidden">

      {/* Dynamic Aurora Glow Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-[20%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#73D2D2]/25 to-[#DF7B5E]/20 blur-[130px] animate-float" />
        <div className="absolute top-[10%] right-[10%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#A7F3D0]/20 to-[#FFD5C2]/20 blur-[120px] animate-float" style={{ animationDelay: "3s" }} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DF7B5E]/10 text-[#DF7B5E] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Empezar
          </div>

          <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-[1.15] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2A2A28] to-[#2B7A7A] group-hover:scale-[1.02] transition-transform duration-300">
            Descubre Aurora
          </h2>

          <p className="font-sans text-lg md:text-xl text-[#4A4946] font-light max-w-xl mx-auto mb-10 leading-relaxed">
            La forma más inteligente de entender y responder al llanto de tu bebé.
          </p>

          {/* Access CTA */}
          <motion.a
            href="https://d272sj5fujdytw.cloudfront.net/#/auth"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold text-white bg-[#2B7A7A] hover:bg-[#2A2A28] transition-all shadow-md"
          >
            Acceder ahora
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

      {/* Apple-style minimalist Footer */}
      <footer className="w-full py-8 border-t border-[#7B7974]/10 bg-white/40 backdrop-blur-sm z-10 px-6 md:px-12 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-[#7B7974] font-medium">
            <span>
              {String(t('footer.copyright')).replace('{year}', String(new Date().getFullYear()))}
            </span>
            <div className="hidden md:block w-1 h-1 rounded-full bg-[#7B7974]/40" />
            <span className="font-accent tracking-widest text-[#4B9B9B] uppercase font-bold text-[10px]">
              {t('footer.projectAurora')}
            </span>
          </div>

          <div className="flex gap-6 text-xs text-[#7B7974] font-semibold">
            <a href="#" className="hover:text-[#2A2A28] transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="hover:text-[#2A2A28] transition-colors">
              {t('footer.terms')}
            </a>
            <a href="#" className="hover:text-[#2A2A28] transition-colors">
              {t('footer.hipaa')}
            </a>
          </div>
        </div>
      </footer>

    </section>
  );
}