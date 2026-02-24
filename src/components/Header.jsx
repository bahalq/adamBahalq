import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Header() {
  const MotionHeader = motion.header;
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const { t, i18n } = useTranslation();

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = (scrollY.getPrevious() ?? 0);
    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <div className="flex justify-center overflow-visible">
      <MotionHeader
        animate={{
          y: hidden ? -140 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex w-screen justify-evenly py-5 bg-transparent top-0 scale-z-100
         fixed backdrop-blur-[3px] backdrop-brightness-50 z-100"
      >
        <a href="#home" className="text-gray-400 relative group">
          {t("header.welcome")}
          <span className="absolute left-1/2 bottom-0 h-px bg-gray-300 w-full -translate-x-1/2 scale-x-50 group-hover:scale-x-100 origin-center transition-transform duration-300"></span>
        </a>
        <a href="#about" className="text-gray-400 relative group">
          {t("header.about")}
          <span className="absolute left-1/2 bottom-0 h-px bg-gray-300 w-full -translate-x-1/2 scale-x-50 group-hover:scale-x-100 origin-center transition-transform duration-300"></span>
        </a>
        <a href="#projects" className="text-gray-400 relative group">
          {t("projects.title")}
          <span className="absolute left-1/2 bottom-0 h-px bg-gray-300 w-full -translate-x-1/2 scale-x-50 group-hover:scale-x-100 origin-center transition-transform duration-300"></span>
        </a>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => i18n.changeLanguage("en")}
            className={`px-2 py-1 border rounded text-xs transition ${
              i18n.language === "en"
                ? "border-white text-white"
                : "border-gray-500 text-gray-400"
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => i18n.changeLanguage("fr")}
            className={`px-2 py-1 border rounded text-xs transition ${
              i18n.language === "fr"
                ? "border-white text-white"
                : "border-gray-500 text-gray-400"
            }`}
          >
            FR
          </button>
          <button
            type="button"
            onClick={() => i18n.changeLanguage("ar")}
            className={`px-2 py-1 border rounded text-xs transition ${
              i18n.language === "ar"
                ? "border-white text-white"
                : "border-gray-500 text-gray-400"
            }`}
          >
            AR
          </button>
        </div>
      </MotionHeader>
    </div>
  );
}
