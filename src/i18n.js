import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      header: {
        welcome: "Welcome",
        about: "About",
      },
      hero: {
        sequence: {
          welcome: "Welcome to my portfolio",
          name: "I am Adam Bahalq",
          role: "I am a Full Stack Developer",
        },
        contacts: "My Contacts",
      },
      about: {
        title: "About Me",
        description:
          "I am a passionate Full Stack Web Developer focused on building scalable, modern, and high-performance web applications. I enjoy solving complex problems, optimizing performance, and continuously improving my technical expertise.",
        downloadCv: "Download CV",
        moveMe: "Move me",
      },
    },
  },
  fr: {
    translation: {
      header: {
        welcome: "Bienvenue",
        about: "A propos",
      },
      hero: {
        sequence: {
          welcome: "Bienvenue sur mon portfolio",
          name: "Je suis Adam Bahalq",
          role: "Je suis Developpeur Full Stack",
        },
        contacts: "Mes contacts",
      },
      about: {
        title: "A propos de moi",
        description:
          "Je suis un developpeur web Full Stack passionne, axe sur la creation d'applications web modernes, evolutives et performantes. J'aime resoudre des problemes complexes, optimiser les performances et ameliorer en continu mon expertise technique.",
        downloadCv: "Telecharger CV",
        moveMe: "Deplace-moi",
      },
    },
  },
  ar: {
    translation: {
      header: {
        welcome: "\u0645\u0631\u062D\u0628\u0627",
        about: "\u0646\u0628\u0630\u0629",
      },
      hero: {
        sequence: {
          welcome: "\u0645\u0631\u062D\u0628\u0627 \u0628\u0643 \u0641\u064A \u0645\u0644\u0641 \u0623\u0639\u0645\u0627\u0644\u064A",
          name: "\u0623\u0646\u0627 \u0622\u062F\u0645 \u0628\u062D\u0627\u0644\u0642",
          role: "\u0623\u0646\u0627 \u0645\u0637\u0648\u0631 Full Stack",
        },
        contacts: "\u062C\u0647\u0627\u062A \u0627\u0644\u0627\u062A\u0635\u0627\u0644",
      },
      about: {
        title: "\u0646\u0628\u0630\u0629 \u0639\u0646\u064A",
        description:
          "\u0623\u0646\u0627 \u0645\u0637\u0648\u0631 \u0648\u064A\u0628 \u0645\u062A\u0643\u0627\u0645\u0644 \u0634\u063A\u0648\u0641 \u0628\u0628\u0646\u0627\u0621 \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0648\u064A\u0628 \u062D\u062F\u064A\u062B\u0629 \u0648\u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u0623\u062F\u0627\u0621 \u0648\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0648\u0633\u0639. \u0623\u0633\u062A\u0645\u062A\u0639 \u0628\u062D\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062A \u0627\u0644\u0645\u0639\u0642\u062F\u0629\u060C \u0648\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0623\u062F\u0627\u0621\u060C \u0648\u062A\u0637\u0648\u064A\u0631 \u062E\u0628\u0631\u062A\u064A \u0627\u0644\u062A\u0642\u0646\u064A\u0629 \u0628\u0634\u0643\u0644 \u0645\u0633\u062A\u0645\u0631.",
        downloadCv: "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0633\u064A\u0631\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629",
        moveMe: "\u062D\u0631\u0651\u0643\u0646\u064A",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language.slice(0, 2) || "fr",
  fallbackLng: navigator.language.slice(0, 2) || "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
