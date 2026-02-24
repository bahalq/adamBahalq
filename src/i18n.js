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
      projects: {
        title: "My Projects",
        github: "Github",
        demoLive: "Live Demo",
        items: [
          {
            id: 1,
            name: "bookMyPitch",
            description:
              "A comprehensive booking system for sports venues featuring real-time availability and a dynamic 6-step reservation flow.",
            techStack: ["React", "Tailwind CSS", "PHP", "MySQL", "REST API"],
            features: [
              "Multi-user roles (Admin/Client)",
              "Automated price calculation",
              "Flexible time-slot management",
              "Responsive interactive calendar",
            ],
            links: {
              github: "https://github.com/bahalq/booking-app-frontend",
              demo: "https://bookmypitch.vercel.app/",
            },
            status: "In Progress",
            year: "2026",
            image: "/bookmypitch.png",
          },
          {
            id: 2,
            name: "Tic Tac Toe AI",
            description:
              "A smart Tic Tac Toe game built with an intelligent AI opponent using the Minimax algorithm to ensure optimal decision-making.",
            techStack: ["JavaScript", "React", "CSS"],
            features: [
              "Minimax AI algorithm",
              "Game state management",
              "Winner detection system",
              "Restart & score tracking",
              "Responsive UI design",
            ],
            links: {
              github: "https://github.com/bahalq/tic-tac-toe-ai",
              demo: "https://bahalq.github.io/Tik-Tac-Toe/",
            },
            status: "Completed",
            year: "2025",
            image: "/tic-tac-toe-ai.png",
          },
          {
            id: 7,
            name: "Smart Calculator",
            description:
              "A fully functional calculator application built with JavaScript and modern web technologies, supporting basic arithmetic operations with a clean and responsive UI.",
            techStack: ["HTML", "CSS", "JavaScript"],
            features: [
              "Basic arithmetic operations (+, -, x, /)",
              "Responsive button layout",
              "Keyboard input support",
              "Clear and delete functionalities",
            ],
            links: {
              github: "https://github.com/bahalq/Calculator",
              demo: "https://bahalq.github.io/Calculator/",
            },
            status: "Completed",
            year: "2025",
            image: "/calculator.png",
          },
        ],
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
      projects: {
        title: "Mes Projets",
        github: "Github",
        demoLive: "Démo Live",
        items: [
          {
            id: 1,
            name: "bookMyPitch",
            description:
              "Un systeme complet de reservation de terrains sportifs avec disponibilite en temps reel et un parcours dynamique en 6 etapes.",
            techStack: ["React", "Tailwind CSS", "PHP", "MySQL", "REST API"],
            features: [
              "Roles multi-utilisateurs (Admin/Client)",
              "Calcul automatique des prix",
              "Gestion flexible des creneaux horaires",
              "Calendrier interactif responsive",
            ],
            links: {
              github: "https://github.com/bahalq/booking-app-frontend",
              demo: "https://bookmypitch.vercel.app/",
            },
            status: "En cours",
            year: "2026",
            image: "/bookmypitch.png",
          },
          {
            id: 2,
            name: "Tic Tac Toe AI",
            description:
              "Un jeu Tic Tac Toe intelligent avec un adversaire IA base sur l'algorithme Minimax pour garantir des decisions optimales.",
            techStack: ["JavaScript", "React", "CSS"],
            features: [
              "Algorithme IA Minimax",
              "Gestion de l'etat du jeu",
              "Detection du gagnant",
              "Redemarrage et suivi du score",
              "Interface responsive",
            ],
            links: {
              github: "https://github.com/bahalq/tic-tac-toe-ai",
              demo: "https://bahalq.github.io/Tik-Tac-Toe/",
            },
            status: "Termine",
            year: "2025",
            image: "/tic-tac-toe-ai.png",
          },
          {
            id: 7,
            name: "Smart Calculator",
            description:
              "Une application calculatrice complete construite avec JavaScript et des technologies web modernes, avec une interface propre et responsive.",
            techStack: ["HTML", "CSS", "JavaScript"],
            features: [
              "Operations arithmetiques de base (+, -, x, /)",
              "Disposition des boutons responsive",
              "Support du clavier",
              "Fonctions clear et delete",
            ],
            links: {
              github: "https://github.com/bahalq/Calculator",
              demo: "https://bahalq.github.io/Calculator/",
            },
            status: "Termine",
            year: "2025",
            image: "/calculator.png",
          },
        ],
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
      projects: {
        title: "\u0645\u0634\u0627\u0631\u064A\u0639\u064A",
        github: "\u062C\u064A\u062A\u0647\u0628",
        demoLive: "\u0639\u0631\u0636 \u062D\u064A",
        items: [
          {
            id: 1,
            name: "bookMyPitch",
            description:
              "\u0646\u0638\u0627\u0645 \u0645\u062A\u0643\u0627\u0645\u0644 \u0644\u062D\u062C\u0632 \u0627\u0644\u0645\u0644\u0627\u0639\u0628 \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0629 \u064A\u062A\u0636\u0645\u0646 \u062A\u0648\u0641\u0631 \u0627\u0644\u0623\u0648\u0642\u0627\u062A \u0628\u0634\u0643\u0644 \u0641\u0648\u0631\u064A \u0648\u0645\u0633\u0627\u0631 \u062D\u062C\u0632 \u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A \u0645\u0646 6 \u062E\u0637\u0648\u0627\u062A.",
            techStack: ["React", "Tailwind CSS", "PHP", "MySQL", "REST API"],
            features: [
              "\u0623\u062F\u0648\u0627\u0631 \u0645\u062A\u0639\u062F\u062F\u0629 \u0644\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 (\u0623\u062F\u0645\u0646/\u0639\u0645\u064A\u0644)",
              "\u062D\u0633\u0627\u0628 \u0622\u0644\u064A \u0644\u0644\u0623\u0633\u0639\u0627\u0631",
              "\u0625\u062F\u0627\u0631\u0629 \u0645\u0631\u0646\u0629 \u0644\u0644\u0641\u062A\u0631\u0627\u062A \u0627\u0644\u0632\u0645\u0646\u064A\u0629",
              "\u062A\u0642\u0648\u064A\u0645 \u062A\u0641\u0627\u0639\u0644\u064A \u0645\u062A\u062C\u0627\u0648\u0628",
            ],
            links: {
              github: "https://github.com/bahalq/booking-app-frontend",
              demo: "https://bookmypitch.vercel.app/",
            },
            status: "\u0642\u064A\u062F \u0627\u0644\u0625\u0646\u062C\u0627\u0632",
            year: "2026",
            image: "/bookmypitch.png",
          },
          {
            id: 2,
            name: "Tic Tac Toe AI",
            description:
              "\u0644\u0639\u0628\u0629 Tic Tac Toe \u0630\u0643\u064A\u0629 \u0628\u0645\u0646\u0627\u0641\u0633 \u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064A \u064A\u0639\u062A\u0645\u062F \u0639\u0644\u0649 \u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 Minimax \u0644\u0627\u062A\u062E\u0627\u0630 \u0642\u0631\u0627\u0631\u0627\u062A \u0645\u062B\u0627\u0644\u064A\u0629.",
            techStack: ["JavaScript", "React", "CSS"],
            features: [
              "\u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 Minimax \u0644\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A",
              "\u0625\u062F\u0627\u0631\u0629 \u062D\u0627\u0644\u0629 \u0627\u0644\u0644\u0639\u0628\u0629",
              "\u0646\u0638\u0627\u0645 \u0627\u0643\u062A\u0634\u0627\u0641 \u0627\u0644\u0641\u0627\u0626\u0632",
              "\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0628\u062F\u0621 \u0648\u062A\u062A\u0628\u0639 \u0627\u0644\u0646\u0642\u0627\u0637",
              "\u0648\u0627\u062C\u0647\u0629 \u0645\u062A\u062C\u0627\u0648\u0628\u0629",
            ],
            links: {
              github: "https://github.com/bahalq/tic-tac-toe-ai",
              demo: "https://bahalq.github.io/Tik-Tac-Toe/",
            },
            status: "\u0645\u0643\u062A\u0645\u0644",
            year: "2025",
            image: "/tic-tac-toe-ai.png",
          },
          {
            id: 7,
            name: "Smart Calculator",
            description:
              "\u062A\u0637\u0628\u064A\u0642 \u0622\u0644\u0629 \u062D\u0627\u0633\u0628\u0629 \u0643\u0627\u0645\u0644 \u0645\u0628\u0646\u064A \u0628\u0640 JavaScript \u0648\u062A\u0642\u0646\u064A\u0627\u062A \u0648\u064A\u0628 \u062D\u062F\u064A\u062B\u0629\u060C \u064A\u0648\u0641\u0631 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u062D\u0633\u0627\u0628\u064A\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0628\u0648\u0627\u062C\u0647\u0629 \u0646\u0638\u064A\u0641\u0629 \u0648\u0645\u062A\u062C\u0627\u0648\u0628\u0629.",
            techStack: ["HTML", "CSS", "JavaScript"],
            features: [
              "\u0639\u0645\u0644\u064A\u0627\u062A \u062D\u0633\u0627\u0628\u064A\u0629 \u0623\u0633\u0627\u0633\u064A\u0629 (+, -, x, /)",
              "\u062A\u0631\u062A\u064A\u0628 \u0623\u0632\u0631\u0627\u0631 \u0645\u062A\u062C\u0627\u0648\u0628",
              "\u062F\u0639\u0645 \u0625\u062F\u062E\u0627\u0644 \u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0641\u0627\u062A\u064A\u062D",
              "\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0645\u0633\u062D \u0648\u0627\u0644\u062D\u0630\u0641",
            ],
            links: {
              github: "https://github.com/bahalq/Calculator",
              demo: "https://bahalq.github.io/Calculator/",
            },
            status: "\u0645\u0643\u062A\u0645\u0644",
            year: "2025",
            image: "/calculator.png",
          },
        ],
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
