import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  { id: "services", title: "الخدمات" },
  { id: "work", title: "أعمالنا" },
  { id: "about", title: "عن الاستوديو" },
  { id: "contact", title: "تواصل" },
];

const services: TService[] = [
  { title: "مواقع وتطبيقات ويب", icon: web },
  { title: "تطبيقات الجوال", icon: mobile },
  { title: "تجارب AR / VR و 3D", icon: creator },
  { title: "ألعاب Unreal Engine", icon: backend },
];

const technologies: TTechnology[] = [
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: reactjs },
  { name: "Next.js", icon: redux },
  { name: "Node.js", icon: nodejs },
  { name: "Tailwind", icon: tailwind },
  { name: "Three.js", icon: threejs },
  { name: "MongoDB", icon: mongodb },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Figma", icon: figma },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
];

const experiences: TExperience[] = [
  {
    title: "تجارب AR/VR تفاعلية",
    companyName: "Nuqta Studio",
    icon: starbucks,
    iconBg: "#EDE9FE",
    date: "2020 — الآن",
    points: [
      "بناء تجارب واقع معزز/افتراضي باستخدام Unity وWebXR.",
      "دمج AR في تطبيقات الويب والموبايل عبر Three.js.",
      "تحسين الأداء على أجهزة Oculus وVive.",
    ],
  },
  {
    title: "ألعاب ثلاثية الأبعاد — Unreal Engine",
    companyName: "Nuqta Studio",
    icon: tesla,
    iconBg: "#F5F3FF",
    date: "2021 — الآن",
    points: [
      "تطوير ألعاب 3D باستخدام Unreal Engine 5.",
      "برمجة ميكانيكا اللعب وأنظمة التفاعل.",
      "تحسين الأداء والرسومات والإضاءة.",
    ],
  },
  {
    title: "تصميم 3D — Blender",
    companyName: "Nuqta Studio",
    icon: shopify,
    iconBg: "#EDE9FE",
    date: "2022 — الآن",
    points: [
      "نمذجة ثلاثية الأبعاد عالية الجودة.",
      "تصميم شخصيات وبيئات للألعاب والويب.",
      "رسوم متحركة واقعية لسلاسل المنتجات.",
    ],
  },
  {
    title: "منصات Full-Stack",
    companyName: "Nuqta Studio",
    icon: meta,
    iconBg: "#F5F3FF",
    date: "2023 — الآن",
    points: [
      "بناء تطبيقات ويب كاملة بـ React وNode.js.",
      "دمج أنظمة الدفع والمصادقة وإدارة المستخدمين.",
      "قيادة مشاريع تقنية معقدة من الفكرة إلى الإطلاق.",
    ],
  },
];

// Testimonials empty until real client permissions are collected.
const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: "منصة هلا AI",
    description:
      "مساعد ذكاء اصطناعي متعدد المستأجرين مع صوت مباشر، تكامل Groq/OpenAI ودعم منصات التجارة (سلة، زد).",
    tags: [
      { name: "Python", color: "text-purple-700" },
      { name: "FastAPI", color: "text-purple-600" },
      { name: "AI", color: "text-purple-500" },
    ],
    image: carrent,
    sourceCodeLink: "https://nuqta.dev/#contact",
  },
  {
    name: "هلا AI — الموقع التعريفي",
    description:
      "صفحة تعريفية لمنتجات ذكاء اصطناعي في التجارة الإلكترونية والتعليم — تصميم وتطوير.",
    tags: [
      { name: "React", color: "text-purple-700" },
      { name: "Tailwind", color: "text-purple-600" },
    ],
    image: jobit,
    sourceCodeLink: "https://nuqta.dev/#contact",
  },
  {
    name: "Token Finance",
    description:
      "منصة تمويل بلوكتشين: NestJS + Next.js + Solidity. إدارة توكنات، محافظ، وعقود ذكية.",
    tags: [
      { name: "NestJS", color: "text-purple-700" },
      { name: "Solidity", color: "text-purple-600" },
      { name: "Prisma", color: "text-purple-500" },
    ],
    image: tripguide,
    sourceCodeLink: "https://nuqta.dev/#contact",
  },
  {
    name: "TradeClone",
    description:
      "منصة تداول اجتماعي: نسخ الصفقات، محافظ، بيانات السوق الحية، وتتبّع الأرباح.",
    tags: [
      { name: "Next.js", color: "text-purple-700" },
      { name: "Prisma", color: "text-purple-600" },
    ],
    image: carrent,
    sourceCodeLink: "https://nuqta.dev/#contact",
  },
  {
    name: "مقاول — منصة مناقصات",
    description:
      "Next.js 15 + tRPC + Prisma — نشر المناقصات وإدارة العطاءات لقطاع البناء السعودي.",
    tags: [
      { name: "Next.js", color: "text-purple-700" },
      { name: "tRPC", color: "text-purple-600" },
      { name: "Prisma", color: "text-purple-500" },
    ],
    image: jobit,
    sourceCodeLink: "https://nuqta.dev/#contact",
  },
  {
    name: "تجربة AR تفاعلية",
    description:
      "تجربة واقع معزّز داخل المتصفح عبر Three.js وWebXR — عرض منتجات بصيغة تفاعلية.",
    tags: [
      { name: "Three.js", color: "text-purple-700" },
      { name: "WebXR", color: "text-purple-600" },
    ],
    image: tripguide,
    sourceCodeLink: "https://nuqta.dev/#contact",
  },
];

export { services, technologies, experiences, testimonials, projects };
