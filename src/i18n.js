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
      welcome: "مرحبا",
      about: "نبذة",
    },
    hero: {
      sequence: {
        welcome: "مرحبا بك في ملف اعمالي",
        name: "أنا آدم بحالق",
        role: "أنا مطور مواقع ويب",
      },
      contacts: "جهات الاتصال",
    },
    about: {
      title: "نبذة عني",
      description:
        "انا مطور ويب متكامل شغوف ببناء تطبيقات ويب حديثة وعالية الاداء وقابلة للتوسع. استمتع بحل المشكلات المعقدة، وتحسين الاداء، وتطوير خبرتي التقنية بشكل مستمر.",
      downloadCv: "تحميل السيرة الذاتية",
      moveMe: "حركني",
    },
  },
}
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
