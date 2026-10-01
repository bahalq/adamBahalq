import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const MotionHeader = motion.header;
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const { t, i18n } = useTranslation();

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(current > previous && current > 150);
  });

  return (
    <div className="flex justify-center overflow-visible">
      <MotionHeader
        animate={{ y: hidden ? -140 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed top-0 z-100 flex w-screen flex-wrap items-center justify-center gap-3 bg-transparent px-3 py-4 backdrop-blur-[3px] backdrop-brightness-50 sm:gap-5 sm:py-5"
      >
        <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-5" aria-label="Primary navigation">
          <a href="#home" className="text-gray-400 hover:text-white">{t("header.welcome")}</a>
          <a href="#about" className="text-gray-400 hover:text-white">{t("header.about")}</a>
          <a href="#experience" className="text-gray-400 hover:text-white">{t("header.experience")}</a>
          <a href="#education" className="text-gray-400 hover:text-white">{t("header.education")}</a>
          <a href="#skills" className="text-gray-400 hover:text-white">{t("header.skills")}</a>
          <a href="#projects" className="text-gray-400 hover:text-white">{t("projects.title")}</a>
          <a href="#contact" className="text-gray-400 hover:text-white">{t("header.contact")}</a>
        </nav>
        <div className="flex items-center gap-2">
          {["en", "fr", "ar"].map((language) => (
            <button
              key={language}
              type="button"
              onClick={() => i18n.changeLanguage(language)}
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
