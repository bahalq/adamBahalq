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
        welcome: "\u0645\u0631\u062d\u0628\u0627",
        about: "\u0646\u0628\u0630\u0629",
      },
      hero: {
        sequence: {
          welcome:
            "\u0645\u0631\u062d\u0628\u0627 \u0628\u0643 \u0641\u064a \u0645\u0644\u0641 \u0627\u0639\u0645\u0627\u0644\u064a",
          name: "أنا آدم بحالق",
          role:
            "أنا مطور مواقع ويب",
        },
        contacts: "\u062c\u0647\u0627\u062a \u0627\u0644\u0627\u062a\u0635\u0627\u0644",
      },
      about: {
        title: "\u0646\u0628\u0630\u0629 \u0639\u0646\u064a",
        description:
          "\u0627\u0646\u0627 \u0645\u0637\u0648\u0631 \u0648\u064a\u0628 \u0645\u062a\u0643\u0627\u0645\u0644 \u0634\u063a\u0648\u0641 \u0628\u0628\u0646\u0627\u0621 \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0648\u064a\u0628 \u062d\u062f\u064a\u062b\u0629 \u0648\u0639\u0627\u0644\u064a\u0629 \u0627\u0644\u0627\u062f\u0627\u0621 \u0648\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062a\u0648\u0633\u0639. \u0627\u0633\u062a\u0645\u062a\u0639 \u0628\u062d\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a \u0627\u0644\u0645\u0639\u0642\u062f\u0629\u060c \u0648\u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u0627\u062f\u0627\u0621\u060c \u0648\u062a\u0637\u0648\u064a\u0631 \u062e\u0628\u0631\u062a\u064a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0628\u0634\u0643\u0644 \u0645\u0633\u062a\u0645\u0631.",
        downloadCv:
          "\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0633\u064a\u0631\u0629 \u0627\u0644\u0630\u0627\u062a\u064a\u0629",
        moveMe: "\u062d\u0631\u0643\u0646\u064a",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language.slice(0,2) || "fr",
  fallbackLng: navigator.language.slice(0.2) || "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
