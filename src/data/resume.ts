export interface Skill {
  name: string;
  level: number; // 0–100
  category: "frontend" | "backend" | "tools";
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export const personalInfo = {
  name: "Kol'chugin Roman",
  age: 20,
  role: "Fullstack Developer",
  phone: "+7 918 009 46 49",
  email: "fustroman23@mail.ru",
  telegram: "@Rimich23",
  telegramLink: "https://t.me/Rimich23",
  about:
    "Молодой и амбициозный Fullstack-разработчик с опытом работы в React, C++ и Python. Люблю создавать быстрые, чистые и масштабируемые приложения. Готов к сложным задачам и новым вызовам.",
};

export const skills: Skill[] = [
  { name: "React / TypeScript", level: 85, category: "frontend" },
  { name: "HTML / CSS / Tailwind", level: 80, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 82, category: "frontend" },
  { name: "Python", level: 78, category: "backend" },
  { name: "C++", level: 75, category: "backend" },
  { name: "Node.js / Express", level: 65, category: "backend" },
  { name: "REST API", level: 72, category: "backend" },
  { name: "Git / GitHub", level: 80, category: "tools" },
  { name: "Docker", level: 55, category: "tools" },
  { name: "PostgreSQL / SQLite", level: 60, category: "tools" },
];

export const projects: Project[] = [
  {
    title: "Portfolio & Resume Site",
    description:
      "Персональный сайт-резюме в стиле Warning Zone. Разработан на React + TypeScript с анимациями и адаптивной вёрсткой.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    title: "Task Manager App",
    description:
      "Fullstack приложение для управления задачами с авторизацией, REST API и хранением данных в PostgreSQL.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "C++ Game Engine (2D)",
    description:
      "Простой 2D игровой движок, написанный на C++ с использованием SFML. Поддерживает физику и систему частиц.",
    tech: ["C++", "SFML", "CMake"],
  },
  {
    title: "Python Data Parser",
    description:
      "Скрипт для парсинга и анализа данных из открытых источников с визуализацией через matplotlib.",
    tech: ["Python", "BeautifulSoup", "Pandas", "Matplotlib"],
  },
];

export const experiences: Experience[] = [
  {
    company: "Freelance",
    role: "Fullstack Developer",
    period: "2023 — настоящее время",
    description: [
      "Разработка веб-приложений на React + TypeScript",
      "Создание REST API на Python / Node.js",
      "Работа с базами данных PostgreSQL и SQLite",
    ],
  },
  {
    company: "Учебные проекты",
    role: "Junior Developer",
    period: "2022 — 2023",
    description: [
      "Разработка консольных приложений на C++",
      "Написание скриптов автоматизации на Python",
      "Вёрстка адаптивных сайтов",
    ],
  },
];
