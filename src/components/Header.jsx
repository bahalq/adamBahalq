import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function Header() {
  const MotionHeader = motion.header;
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const interactionTimerRef = useRef(null);
  const keepVisibleRef = useRef(false);

  const keepHeaderVisible = () => {
    setHidden(false);
    keepVisibleRef.current = true;

    if (interactionTimerRef.current) {
      window.clearTimeout(interactionTimerRef.current);
    }

    interactionTimerRef.current = window.setTimeout(() => {
      keepVisibleRef.current = false;
      setHidden(true);
    }, 10_000);
  };

  useEffect(() => () => {
    if (interactionTimerRef.current) {
      window.clearTimeout(interactionTimerRef.current);
    }
  }, []);

  const navItems = [
    ["home", t("header.welcome")],
    ["about", t("header.about")],
    ["experience", t("header.experience")],
    ["education", t("header.education")],
    ["skills", t("header.skills")],
    ["projects", t("projects.title")],
    ["contact", t("header.contact")],
  ];

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (keepVisibleRef.current) return;

    setHidden(current > previous && current > 150);
  });

  return (
    <div className="flex justify-center overflow-visible">
      <MotionHeader
        animate={{ y: hidden ? -140 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed top-0 z-100 flex w-screen flex-wrap items-center justify-center gap-3 bg-transparent px-3 py-4 backdrop-blur-[3px] backdrop-brightness-50 sm:gap-5 sm:py-5"
      >
        <button
          type="button"
          className="rounded border border-gray-600 p-2 text-gray-200 lg:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => {
            keepHeaderVisible();
            setMenuOpen((open) => !open);
          }}
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        <nav
          className={`${menuOpen ? "flex" : "hidden"} order-3 w-full flex-col items-center gap-4 border-t border-gray-800 pt-4 lg:order-none lg:flex lg:w-auto lg:flex-row lg:border-0 lg:pt-0 lg:gap-5`}
          aria-label="Primary navigation"
        >
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => {
                keepHeaderVisible();
                setMenuOpen(false);
              }}
              className="text-gray-400 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {["en", "fr", "ar"].map((language) => (
            <button
              key={language}
              type="button"
              onClick={() => {
                keepHeaderVisible();
                i18n.changeLanguage(language);
              }}
              aria-label={language.toUpperCase()}
              className={`rounded border px-2 py-1 text-xs transition ${i18n.language === language ? "border-white text-white" : "border-gray-500 text-gray-400"}`}
            >
              {language.toUpperCase()}
            </button>
          ))}
        </div>
      </MotionHeader>
    </div>
  );
}
