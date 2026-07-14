"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/tours",   labelKey: "tours"   as const },
  { href: "/kyushgo", labelKey: "kyushgo" as const },
  { href: "/vision",  labelKey: "vision"  as const },
  { href: "/contact", labelKey: "contact" as const },
];

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isHeroPage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const showDark = isHeroPage && !scrolled;

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border/60"
            : "border-b border-transparent"
        )}
        animate={{
          backgroundColor: scrolled
            ? "rgba(245, 240, 232, 0.95)"
            : "rgba(245, 240, 232, 0)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
        }}
        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="container-site">
          <nav
            aria-label="Main navigation"
            className="flex items-center justify-between h-16 md:h-20"
          >
            {/* Wordmark */}
            <Link
              href="/"
              className="flex flex-col gap-0.5 group"
              aria-label="JourneyMate — ホームへ"
            >
              <span
                className={cn(
                  "text-[1.1rem] font-bold tracking-tight leading-tight transition-colors duration-300 font-serif",
                  showDark ? "text-white" : "text-sumi"
                )}
              >
                JourneyMate
              </span>
              <span
                className={cn(
                  "text-[9px] tracking-[0.12em] font-medium leading-none transition-colors duration-300",
                  showDark ? "text-white/60" : "text-muted"
                )}
              >
                株式会社ジャーニーメイト
              </span>
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-8" role="list">
              {navLinks.map(({ href, labelKey }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "relative flex flex-col items-center text-sm font-medium transition-colors duration-200 py-1 group",
                        showDark
                          ? "text-white/80 hover:text-white"
                          : isActive
                          ? "text-crimson"
                          : "text-body hover:text-sumi"
                      )}
                    >
                      <span>{t(copy.nav[labelKey])}</span>
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-crimson rounded-full"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right: lang toggle + CTA */}
            <div className="hidden md:flex items-center gap-4">
              <div
                className={cn(
                  "flex items-center gap-1 text-xs font-semibold rounded-full border px-3 py-1.5 transition-colors duration-300",
                  showDark
                    ? "border-white/30 text-white/80"
                    : "border-border text-muted"
                )}
              >
                <button
                  onClick={() => setLang("ja")}
                  className={cn(
                    "transition-colors px-1",
                    lang === "ja"
                      ? showDark
                        ? "text-white"
                        : "text-crimson"
                      : "hover:text-sumi"
                  )}
                  aria-pressed={lang === "ja"}
                >
                  JP
                </button>
                <span className="opacity-40">|</span>
                <button
                  onClick={() => setLang("en")}
                  className={cn(
                    "transition-colors px-1",
                    lang === "en"
                      ? showDark
                        ? "text-white"
                        : "text-crimson"
                      : "hover:text-sumi"
                  )}
                  aria-pressed={lang === "en"}>
                  EN
                </button>
              </div>

              <Link
                href="/contact"
                className="text-sm font-semibold px-5 py-2 rounded-full bg-crimson text-white hover:bg-crimson-hover transition-colors duration-200"
              >
                {t(copy.nav.cta)}
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className={cn(
                "md:hidden p-2 rounded-md transition-colors",
                showDark ? "text-white" : "text-sumi"
              )}
              onClick={() => setIsOpen(true)}
              aria-label={t(copy.nav.openMenu)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={22} />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed top-0 right-0 bottom-0 z-[70] w-[min(340px,90vw)] bg-ivory shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="flex items-center justify-between px-6 h-20 border-b border-border">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex flex-col gap-0.5">
                  <span className="text-[1.1rem] font-bold text-sumi font-serif">JourneyMate</span>
                  <span className="text-[9px] tracking-[0.12em] text-muted">株式会社ジャーニーメイト</span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-muted hover:text-sumi transition-colors"
                  aria-label={t(copy.nav.closeMenu)}
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex-1 px-6 py-8">
                <ul className="flex flex-col gap-1" role="list">
                  {navLinks.map(({ href, labelKey }) => {
                    const isActive = pathname === href;
                    return (
                      <li key={href}>
                        <Link
                          href={href}
                          aria-current={isActive ? "page" : undefined}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center justify-between px-4 py-4 rounded-xl text-base font-semibold transition-colors",
                            isActive
                              ? "bg-crimson-light text-crimson"
                              : "text-body hover:bg-ivory-dark hover:text-sumi"
                          )}
                        >
                          <span>{t(copy.nav[labelKey])}</span>
                          <span className="text-xs text-muted font-normal">
                            {lang === "ja" ? copy.nav[labelKey].en : copy.nav[labelKey].ja}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="px-6 pb-8 flex flex-col gap-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => setLang("ja")}
                    className={cn(
                      "flex-1 py-2.5 rounded-lg text-sm font-semibold border transition-colors",
                      lang === "ja"
                        ? "bg-crimson text-white border-crimson"
                        : "border-border text-muted hover:border-sumi hover:text-sumi"
                    )}
                  >
                    日本語
                  </button>
                  <button
                    onClick={() => setLang("en")}
                    className={cn(
                      "flex-1 py-2.5 rounded-lg text-sm font-semibold border transition-colors",
                      lang === "en"
                        ? "bg-crimson text-white border-crimson"
                        : "border-border text-muted hover:border-sumi hover:text-sumi"
                    )}
                  >
                    English
                  </button>
                </div>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center text-sm font-semibold px-5 py-3.5 rounded-full bg-crimson text-white hover:bg-crimson-hover transition-colors"
                >
                  {t(copy.nav.cta)}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
