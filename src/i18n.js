import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      header: {
        welcome: "Welcome",
        about: "About",
        experience: "Experience",
        education: "Education",
        skills: "Skills",
        contact: "Contact",
      },
      experience: {
        title: "Experience",
        items: [{ title: "Full Stack Developer Intern", organization: "SPS Technologie, Casablanca", period: "Apr 2026 – May 2026", description: "Worked on GestionRH, an HR management web app.", details: ["Frontend: React.js, Redux Toolkit, Tailwind CSS, Material UI.", "Backend: Laravel APIs with Sanctum authentication.", "MySQL, Postman, Git/GitHub.", "Contributed to the Compensation & Benefits module: salary grid, variable pay, salary benchmark."] }],
      },
      education: {
        title: "Education",
        items: [{ title: "DTS in Digital Development, Web Full Stack", organization: "OFPPT ISTA Sidi Moumen, Casablanca", period: "2024 – 2026" }, { title: "PIE, Entrepreneurial Innovation Program", organization: "OFPPT in partnership with UM6P", period: "2026" }, { title: "Baccalaureate, Physical Sciences", organization: "", period: "2024" }],
      },
      skills: {
        title: "Skills",
        labels: { frontend: "Frontend", backend: "Backend", database: "Database", tools: "Tools" },
        groups: { frontend: ["React.js", "React Router", "Redux Toolkit", "JavaScript (ES6+)", "Tailwind CSS", "Material UI", "Framer Motion", "HTML5", "CSS3"], backend: ["PHP", "Laravel", "Laravel Sanctum", "REST API", "MVC"], database: ["MySQL", "SQL"], tools: ["Git", "GitHub", "Postman", "VS Code", "MySQL Workbench"] },
      },
      contact: { title: "Contact", description: "I am based in Casablanca, Morocco. You can reach me by email or through my professional profiles.", emailLabel: "Email", cityLabel: "City", city: "Casablanca, Morocco" },
      footer: { copyright: "© 2026 Adam Bahalq" },
      hero: {
        title: "Adam Bahalq, Full Stack Developer",
        valueStatement:
          "An application is only worth building if it solves a real problem. I start every project with one question: who is this for, and what does it make simpler?",
        sequence: {
          welcome: "Welcome to my portfolio",
          name: "I am Adam Bahalq",
          role: "I am a Full Stack Developer",
        },
        contacts: "My Contacts",
        downloadCv: "Download CV",
        contactMe: "Contact me",
      },
      about: {
        title: "About Me",
        description:
          "An application only has value if it solves a real problem. As a Full Stack Developer, I begin every project with one question: who is it for, and what does it make simpler? From salary grids and variable bonuses in an HR application to reservations and access control for smart parking, I build concrete solutions with React, Laravel, and MySQL, and I am looking for a team that shares this vision.",
        downloadCv: "Download CV",
        moveMe: "Move me",
      },
      projects: {
        title: "My Projects",
        github: "Github",
        demoLive: "Live Demo",
        codePending: "Code link pending",
        items: [
          {
            id: 10,
            name: "Parkova",
            description: "A smart parking and traffic management system developed as the final-year project of the DTS.",
            techStack: ["Laravel 11", "React", "MySQL", "Sanctum", "REST API"],
            features: ["Three roles: Admin, Staff, Driver", "Reservation lifecycle: pending, confirmed, active, completed, cancelled, no-show", "Entry and exit logs", "Vehicle verification by QR code, license plate, RFID or manual entry", "French, Arabic and English support"],
            links: {
              github: "https://github.com/bahalq/frontend-parking/",
              demo: "https://bahalq.github.io/frontend-parking/",
            },
            status: "Final-year project",
            year: "2026",
            image: import.meta.env.BASE_URL + "Parkova.png",
          },
          {
            id: 1,
            name: "Zizou",
            description:
              "A comprehensive booking system for sports venues featuring real-time availability and a dynamic 6-step reservation flow.",
            techStack: [
              "React",
              "Tailwind CSS",
              "Laravel",
              "MySQL",
              "REST API",
            ],
            features: [
              "Multi-user roles (Admin/Client)",
              "Automated price calculation",
              "Flexible time-slot management",
              "Responsive interactive calendar",
            ],
            links: {
              github: "https://github.com/bahalq/frontend-last",
              demo: "https://bahalq.github.io/frontend-last/",
            },
            status: "In Progress",
            year: "2026",
            image: import.meta.env.BASE_URL + "Zizou.png",
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
            image: import.meta.env.BASE_URL + "tic-tac-toe-ai.png",
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
            image: import.meta.env.BASE_URL + "calculator.png",
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
        experience: "Expérience",
        education: "Formation",
        skills: "Compétences",
        contact: "Contact",
      },
      experience: {
        title: "Expérience",
        items: [{ title: "Stagiaire développeur Full Stack", organization: "SPS Technologie, Casablanca", period: "Avr. 2026 – Mai 2026", description: "J'ai travaillé sur GestionRH, une application web de gestion des ressources humaines.", details: ["Frontend : React.js, Redux Toolkit, Tailwind CSS, Material UI.", "Backend : API Laravel avec authentification Sanctum.", "MySQL, Postman, Git/GitHub.", "Contribution au module Compensation & Benefits : grille salariale, rémunération variable, benchmark salarial."] }],
      },
      education: {
        title: "Formation",
        items: [{ title: "DTS en Développement Digital, Web Full Stack", organization: "OFPPT ISTA Sidi Moumen, Casablanca", period: "2024 – 2026" }, { title: "PIE, Programme d'innovation entrepreneuriale", organization: "OFPPT en partenariat avec l'UM6P", period: "2026" }, { title: "Baccalauréat, Sciences physiques", organization: "", period: "2024" }],
      },
      skills: {
        title: "Compétences",
        labels: { frontend: "Frontend", backend: "Backend", database: "Base de données", tools: "Outils" },
        groups: { frontend: ["React.js", "React Router", "Redux Toolkit", "JavaScript (ES6+)", "Tailwind CSS", "Material UI", "Framer Motion", "HTML5", "CSS3"], backend: ["PHP", "Laravel", "Laravel Sanctum", "REST API", "MVC"], database: ["MySQL", "SQL"], tools: ["Git", "GitHub", "Postman", "VS Code", "MySQL Workbench"] },
      },
      contact: { title: "Contact", description: "Je suis basé à Casablanca, au Maroc. Vous pouvez me contacter par e-mail ou via mes profils professionnels.", emailLabel: "E-mail", cityLabel: "Ville", city: "Casablanca, Maroc" },
      footer: { copyright: "© 2026 Adam Bahalq" },
      hero: {
        title: "Adam Bahalq, développeur Full Stack",
        valueStatement:
          "Une application ne mérite d'être créée que si elle résout un vrai problème. Je commence chaque projet par une question : à qui s'adresse-t-elle et que rend-elle plus simple ?",
        sequence: {
          welcome: "Bienvenue sur mon portfolio",
          name: "Je suis Adam Bahalq",
          role: "Je suis Developpeur Full Stack",
        },
        contacts: "Mes contacts",
        downloadCv: "Télécharger le CV",
        contactMe: "Me contacter",
      },
      about: {
        title: "A propos de moi",
        description:
          "Une application n'a de valeur que si elle résout un vrai problème. Développeur Full Stack, je commence chaque projet par une seule question : à qui cela sert-il, et qu'est-ce que cela simplifie ? Des grilles salariales et primes variables d'une application RH aux réservations et contrôles d'accès d'un parking intelligent, je construis avec React, Laravel et MySQL des solutions concrètes, et je recherche une équipe qui partage cette vision.",
        downloadCv: "Telecharger CV",
        moveMe: "Deplace-moi",
      },
      projects: {
        title: "Mes Projets",
        github: "Github",
        codePending: "Lien du code à ajouter",
        demoLive: "Démo Live",
        items: [
          {
            id: 10,
            name: "Parkova",
            description: "Un système intelligent de gestion du stationnement et du trafic, réalisé comme projet de fin d'études du DTS.",
            techStack: ["Laravel 11", "React", "MySQL", "Sanctum", "REST API"],
            features: ["Trois rôles : administrateur, agent et conducteur", "Cycle de réservation : en attente, confirmée, active, terminée, annulée, no-show", "Journaux d'entrée et de sortie", "Vérification du véhicule par QR code, plaque d'immatriculation, RFID ou saisie manuelle", "Prise en charge du français, de l'arabe et de l'anglais"],
            links: { github: null, demo: "https://bahalq.github.io/frontend-parking/" },
            status: "Projet de fin d'études",
            year: "2026",
            image: import.meta.env.BASE_URL + "Parkova.png",
          },
          {
            id: 1,
            name: "Zizou",
            description:
              "Un systeme complet de reservation de terrains sportifs avec disponibilite en temps reel et un parcours dynamique en 6 etapes.",
            techStack: [
              "React",
              "Tailwind CSS",
              "Laravel",
              "MySQL",
              "REST API",
            ],
            features: [
              "Roles multi-utilisateurs (Admin/Client)",
              "Calcul automatique des prix",
              "Gestion flexible des creneaux horaires",
              "Calendrier interactif responsive",
            ],
            links: {
              github: "https://github.com/bahalq/frontend-last",
              demo: "https://bahalq.github.io/frontend-last/",
            },
            status: "En cours",
            year: "2026",
            image: import.meta.env.BASE_URL + "Zizou.png",
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
            image: import.meta.env.BASE_URL + "tic-tac-toe-ai.png",
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
            image: import.meta.env.BASE_URL + "calculator.png",
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
        experience: "\u0627\u0644\u062E\u0628\u0631\u0629",
        education: "\u0627\u0644\u062A\u0639\u0644\u064A\u0645",
        skills: "\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A",
        contact: "\u062A\u0648\u0627\u0635\u0644",
      },
      experience: {
        title: "\u0627\u0644\u062E\u0628\u0631\u0629",
        items: [{ title: "\u0645\u062A\u062F\u0631\u0628 \u0645\u0637\u0648\u0631 Full Stack", organization: "SPS Technologie\u060c \u0627\u0644\u062F\u0627\u0631 \u0627\u0644\u0628\u064A\u0636\u0627\u0621", period: "\u0623\u0628\u0631\u064A\u0644 2026 \u2013 \u0645\u0627\u064A\u0648 2026", description: "\u0639\u0645\u0644\u062A \u0639\u0644\u0649 GestionRH\u060c \u0648\u0647\u0648 \u062A\u0637\u0628\u064A\u0642 \u0648\u064A\u0628 \u0644\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0628\u0634\u0631\u064A\u0629.", details: ["\u0627\u0644\u0648\u0627\u062C\u0647\u0629 \u0627\u0644\u0623\u0645\u0627\u0645\u064A\u0629: React.js \u0648Redux Toolkit \u0648Tailwind CSS \u0648Material UI.", "\u0627\u0644\u0648\u0627\u062C\u0647\u0629 \u0627\u0644\u062E\u0644\u0641\u064A\u0629: Laravel API \u0645\u0639 \u0645\u0635\u0627\u062F\u0642\u0629 Sanctum.", "MySQL \u0648Postman \u0648Git/GitHub.", "\u0633\u0627\u0647\u0645\u062A \u0641\u064A \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u0639\u0648\u064A\u0636\u0627\u062A \u0648\u0627\u0644\u0645\u0632\u0627\u064A\u0627: \u0634\u0628\u0643\u0629 \u0627\u0644\u0631\u0648\u0627\u062A\u0628\u060c \u0627\u0644\u0623\u062C\u0631 \u0627\u0644\u0645\u062A\u063A\u064A\u0631\u060c \u0648\u0645\u0642\u0627\u0631\u0646\u0629 \u0627\u0644\u0631\u0648\u0627\u062A\u0628."] }],
      },
      education: {
        title: "\u0627\u0644\u062A\u0639\u0644\u064A\u0645",
        items: [{ title: "DTS \u0641\u064A \u0627\u0644\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0631\u0642\u0645\u064A\u060c Web Full Stack", organization: "OFPPT ISTA Sidi Moumen\u060c \u0627\u0644\u062F\u0627\u0631 \u0627\u0644\u0628\u064A\u0636\u0627\u0621", period: "2024 \u2013 2026" }, { title: "PIE\u060c \u0628\u0631\u0646\u0627\u0645\u062C \u0627\u0644\u0627\u0628\u062A\u0643\u0627\u0631 \u0627\u0644\u0631\u064A\u0627\u062F\u064A", organization: "OFPPT \u0628\u0627\u0644\u0634\u0631\u0627\u0643\u0629 \u0645\u0639 UM6P", period: "2026" }, { title: "\u0634\u0647\u0627\u062F\u0629 \u0627\u0644\u0628\u0643\u0627\u0644\u0648\u0631\u064A\u0627\u060c \u0627\u0644\u0639\u0644\u0648\u0645 \u0627\u0644\u0641\u064A\u0632\u064A\u0627\u0626\u064A\u0629", organization: "", period: "2024" }],
      },
      skills: {
        title: "\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A",
        labels: { frontend: "\u0627\u0644\u0648\u0627\u062C\u0647\u0629 \u0627\u0644\u0623\u0645\u0627\u0645\u064A\u0629", backend: "\u0627\u0644\u0648\u0627\u062C\u0647\u0629 \u0627\u0644\u062E\u0644\u0641\u064A\u0629", database: "\u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A", tools: "\u0627\u0644\u0623\u062F\u0648\u0627\u062A" },
        groups: { frontend: ["React.js", "React Router", "Redux Toolkit", "JavaScript (ES6+)", "Tailwind CSS", "Material UI", "Framer Motion", "HTML5", "CSS3"], backend: ["PHP", "Laravel", "Laravel Sanctum", "REST API", "MVC"], database: ["MySQL", "SQL"], tools: ["Git", "GitHub", "Postman", "VS Code", "MySQL Workbench"] },
      },
      contact: { title: "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u064A", description: "\u0623\u0642\u064A\u0645 \u0641\u064A \u0627\u0644\u062F\u0627\u0631 \u0627\u0644\u0628\u064A\u0636\u0627\u0621\u060c \u0627\u0644\u0645\u063A\u0631\u0628. \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u064A \u0639\u0628\u0631 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0623\u0648 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0645\u0644\u0641\u0627\u062A\u064A \u0627\u0644\u0645\u0647\u0646\u064A\u0629.", emailLabel: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A", cityLabel: "\u0627\u0644\u0645\u062F\u064A\u0646\u0629", city: "\u0627\u0644\u062F\u0627\u0631 \u0627\u0644\u0628\u064A\u0636\u0627\u0621\u060c \u0627\u0644\u0645\u063A\u0631\u0628" },
      footer: { copyright: "© 2026 \u0622\u062F\u0645 \u0628\u062D\u0627\u0644\u0642" },
      hero: {
        title: "آدم بحالق، مطور Full Stack",
        valueStatement:
          "لا تستحق أيّ application أن تُبنى إلا إذا حلّت مشكلة حقيقية. أبدأ كل مشروع بسؤال واحد: لمن هذا المشروع، وما الذي سيجعله أبسط؟",
        sequence: {
          welcome:
            "\u0645\u0631\u062D\u0628\u0627 \u0628\u0643 \u0641\u064A \u0645\u0644\u0641 \u0623\u0639\u0645\u0627\u0644\u064A",
          name: "\u0623\u0646\u0627 \u0622\u062F\u0645 \u0628\u062D\u0627\u0644\u0642",
          role: "\u0623\u0646\u0627 \u0645\u0637\u0648\u0631 Full Stack",
        },
        contacts:
          "\u062C\u0647\u0627\u062A \u0627\u0644\u0627\u062A\u0635\u0627\u0644",
        downloadCv: "تحميل السيرة الذاتية",
        contactMe: "تواصل معي",
      },
      about: {
        title: "\u0646\u0628\u0630\u0629 \u0639\u0646\u064A",
        description:
          "لا قيمة لأي تطبيق إن لم يحل مشكلة حقيقية. بصفتي مطور Full Stack، أبدأ كل مشروع بسؤال واحد: لمن يخدم، وما الذي يجعله أبسط؟ من شبكات الرواتب والمنح المتغيرة في تطبيق للموارد البشرية، إلى الحجوزات والتحكم في الولوج لمواقف سيارات ذكية، أبني حلولاً عملية باستخدام React وLaravel وMySQL، وأبحث عن فريق يشارك هذه الرؤية.",
        downloadCv:
          "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0633\u064A\u0631\u0629 \u0627\u0644\u0630\u0627\u062A\u064A\u0629",
        moveMe: "\u062D\u0631\u0651\u0643\u0646\u064A",
      },
      projects: {
        title: "\u0645\u0634\u0627\u0631\u064A\u0639\u064A",
        github: "\u062C\u064A\u062A\u0647\u0628",
        demoLive: "\u0639\u0631\u0636 \u062D\u064A",
        codePending: "\u0631\u0627\u0628\u0637 \u0627\u0644\u0643\u0648\u062F \u0642\u064A\u062F \u0627\u0644\u0625\u0636\u0627\u0641\u0629",
        items: [
          {
            id: 1,
            name: "Parkova",
            description:
              "\u0646\u0638\u0627\u0645 \u0645\u062A\u0643\u0627\u0645\u0644 \u0644\u062D\u062C\u0632 \u0627\u0644\u0645\u0644\u0627\u0639\u0628 \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0629 \u064A\u062A\u0636\u0645\u0646 \u062A\u0648\u0641\u0631 \u0627\u0644\u0623\u0648\u0642\u0627\u062A \u0628\u0634\u0643\u0644 \u0641\u0648\u0631\u064A \u0648\u0645\u0633\u0627\u0631 \u062D\u062C\u0632 \u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A \u0645\u0646 6 \u062E\u0637\u0648\u0627\u062A.",
            techStack: ["Laravel 11", "React", "MySQL", "Sanctum", "REST API"],
            features: ["ثلاثة أدوار: المسؤول والموظف والسائق", "دورة الحجز: قيد الانتظار، مؤكد، نشط، مكتمل، ملغى، عدم الحضور", "سجلات الدخول والخروج", "التحقق من المركبة عبر رمز QR أو لوحة الترقيم أو RFID أو الإدخال اليدوي", "دعم الفرنسية والعربية والإنجليزية"],
            links: { github: null, demo: "https://bahalq.github.io/frontend-parking/" },
            status: "مشروع نهاية الدراسة",
            year: "2026",
            image: import.meta.env.BASE_URL + "Parkova.png",
          },
          {
            id: 1,
            name: "Zizou",
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
              github: "https://github.com/bahalq/frontend-last",
              demo: "https://bahalq.github.io/frontend-last/",
            },
            status:
              "\u0642\u064A\u062F \u0627\u0644\u0625\u0646\u062C\u0627\u0632",
            year: "2026",
            image: import.meta.env.BASE_URL + "Zizou.png",
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
            image: import.meta.env.BASE_URL + "tic-tac-toe-ai.png",
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
            image: import.meta.env.BASE_URL + "calculator.png",
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
