"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import Button from "@/components/ui/Button";
import ToriiSilhouette from "@/components/ui/ToriiSilhouette";
import KamonMotif from "@/components/ui/KamonMotif";
import { staggerContainer, fadeUp } from "@/lib/animations";

export default function Hero() {
  const { lang, t } = useLang();

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-sky-gradient">
      {/* Torii silhouette — bottom right, vermillion red */}
      <div className="absolute bottom-0 right-0 w-56 sm:w-72 lg:w-96 drop-shadow-lg">
        <ToriiSilhouette opacity={0.7} className="w-full h-auto" color="#BF2B2B" />
      </div>

      {/* Kamon motif — top left */}
      <div className="absolute top-24 left-8 lg:top-32 lg:left-16">
        <KamonMotif size={160} color="white" opacity={0.1} />
      </div>

      {/* Content */}
      <div className="container-site relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p variants={fadeUp} className="text-eyebrow text-white/80 mb-6">
            {t(copy.home.hero.label)}
          </motion.p>

          <motion.h1 variants={fadeUp} className="text-display text-white mb-4 drop-shadow-sm">
            {lang === "ja"
              ? copy.home.hero.headlineJa.split("\n").map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))
              : copy.home.hero.headlineEn.split("\n").map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
          </motion.h1>

          <motion.p variants={fadeUp} className="text-white/70 text-lg mb-6 font-serif tracking-wide">
            {lang === "ja"
              ? copy.home.hero.headlineEn.replace("\n", " ")
              : copy.home.hero.headlineJa.replace("\n", "")}
          </motion.p>

          <motion.p variants={fadeUp} className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl mb-10">
            {t(copy.home.hero.subheadline)}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Button as="link" href="/tours" size="lg">
              {t(copy.home.hero.cta1)}
            </Button>
            <Button as="link" href="/contact" variant="ghost" size="lg" className="border-white/40 text-white hover:bg-white/20">
              {t(copy.home.hero.cta2)}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-[10px] text-white/50 tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-white/40"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
