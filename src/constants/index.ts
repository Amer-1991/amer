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
  amerProfile,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "حول",
  },
  {
    id: "work",
    title: "أعمال",
  },
  {
    id: "contact",
    title: "اتصال",
  },
];

const services: TService[] = [
  {
    title: "مطور ويب",
    icon: web,
  },
  {
    title: "مطور React Native",
    icon: mobile,
  },
  {
    title: "مطور back-end",
    icon: backend,
  },
  {
    title: "مطور AR/VR",
    icon: creator,
  },
  {
    title: "مطور ألعاب Unreal Engine",
    icon: web,
  },
  {
    title: "مصمم 3D Blender",
    icon: mobile,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Unreal Engine",
    icon: threejs, // Using threejs icon as placeholder
  },
  {
    name: "Blender",
    icon: figma, // Using figma icon as placeholder
  },
  {
    name: "AR/VR",
    icon: reactjs, // Using reactjs icon as placeholder
  },
];

const experiences: TExperience[] = [
  {
    title: "مطور AR/VR",
    companyName: "شركة تقنية متقدمة",
    icon: starbucks,
    iconBg: "#383E56",
    date: "مارس 2020 - أبريل 2021",
    points: [
      "تطوير تطبيقات الواقع المعزز والافتراضي باستخدام أحدث التقنيات.",
      "إنشاء تجارب تفاعلية غامرة للمستخدمين في بيئات AR/VR.",
      "العمل مع أجهزة VR مثل Oculus و HTC Vive.",
      "تحسين الأداء وضمان تجربة مستخدم سلسة في بيئات الواقع الافتراضي.",
    ],
  },
  {
    title: "مطور ألعاب Unreal Engine",
    companyName: "استوديو ألعاب",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "يناير 2021 - فبراير 2022",
    points: [
      "تطوير ألعاب ثلاثية الأبعاد باستخدام Unreal Engine 5.",
      "برمجة ميكانيكا اللعب وأنظمة التفاعل المعقدة.",
      "تحسين الأداء والرسومات للعبة.",
      "العمل مع فريق فني لدمج الأصول والرسومات.",
    ],
  },
  {
    title: "مصمم 3D Blender",
    companyName: "استوديو تصميم",
    icon: shopify,
    iconBg: "#383E56",
    date: "يناير 2022 - يناير 2023",
    points: [
      "إنشاء نماذج ثلاثية الأبعاد عالية الجودة باستخدام Blender.",
      "تصميم الشخصيات والبيئات للألعاب والتطبيقات.",
      "إنتاج رسوم متحركة وحركات واقعية.",
      "العمل مع محركات الألعاب لتصدير النماذج والرسوم المتحركة.",
    ],
  },
  {
    title: "مطور Full Stack & 3D",
    companyName: "شركة تقنية متقدمة",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "يناير 2023 - الحالي",
    points: [
      "تطوير تطبيقات ويب كاملة مع دمج تقنيات ثلاثية الأبعاد.",
      "دمج AR/VR مع تطبيقات الويب الحديثة.",
      "إنشاء تجارب تفاعلية غامرة باستخدام Three.js و WebXR.",
      "قيادة مشاريع تقنية معقدة تجمع بين الويب والواقع الافتراضي.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "اعتقدت أنه من المستحيل إنشاء موقع ويب جميل مثل منتجنا، لكن عامر أثبت لي خطأي.",
    name: "سارة أحمد",
    designation: "مديرة مالية",
    company: "شركة التقنية المتقدمة",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "لم أقابل مطور ويب يهتم حقاً بنجاح عملائه مثل عامر.",
    name: "كريم محمد",
    designation: "مدير العمليات",
    company: "شركة الحلول الرقمية",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "بعد أن حسّن عامر موقعنا، زادت حركة المرور بنسبة 50%. لا نستطيع شكره بما فيه الكفاية!",
    name: "فاطمة علي",
    designation: "مديرة التسويق",
    company: "شركة الإبداع",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "هلا AI - المساعد الصوتي",
    description:
      "منصة مساعد ذكاء اصطناعي متعددة المستأجرين مع صوت مباشر عبر LiveKit وتكامل Groq/OpenAI ودعم أدوات التجارة الإلكترونية لسلة وزد.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "fastapi", color: "green-text-gradient" },
      { name: "ai", color: "pink-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/Amer-1991/HALAAI",
  },
  {
    name: "هلا AI - موقع الشركة",
    description:
      "صفحة تعريفية احترافية لشركة هلا AI، تعرض أربعة منتجات ذكاء اصطناعي للتجارة الإلكترونية والتعليم والأسرة والفرق التقنية.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/Amer-1991/HalaiMainCompany",
  },
  {
    name: "توكن فاينانس",
    description:
      "منصة تمويل بلوكتشين متكاملة مع خادم NestJS وواجهة Next.js وعقود Solidity الذكية، تشمل إدارة التوكنات وتتبع المحافظ.",
    tags: [
      { name: "nestjs", color: "blue-text-gradient" },
      { name: "solidity", color: "pink-text-gradient" },
      { name: "prisma", color: "green-text-gradient" },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/Amer-1991/tokenfinance",
  },
  {
    name: "تريد كلون",
    description:
      "منصة تداول اجتماعي متكاملة مع نسخ الصفقات وإدارة المحافظ وبيانات السوق الحية وتتبع الأرباح والخسائر.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "prisma", color: "green-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/Amer-1991/tradeclone",
  },
  {
    name: "مقاول",
    description:
      "منصة إدارة المقاولين والمناقصات مبنية بـ Next.js 15 وtRPC وPrisma، تشمل نشر المناقصات وإدارة العطاءات لقطاع البناء السعودي.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "prisma", color: "green-text-gradient" },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/Amer-1991/muqawil",
  },
  {
    name: "فكرة تحليل سعودي",
    description:
      "منصة تحليل جدوى المشاريع بالذكاء الاصطناعي لرواد الأعمال السعوديين، تنتج تقارير SWOT وتوقعات مالية مع تكامل ميسّر ومنشآت.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "ai", color: "pink-text-gradient" },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/Amer-1991/fikra-tahleel-saudi",
  },
  {
    name: "رفيق التعلم السعودي",
    description:
      "منصة تعلم المنهج السعودي بالذكاء الاصطناعي مع تدريس ذكي وتوليد الدروس والنطق ومتابعة التقدم.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "ai", color: "pink-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/Amer-1991/saudi-learn-pal",
  },
  {
    name: "ديف فلو إنسايت",
    description:
      "منصة إنتاجية المطورين بالذكاء الاصطناعي تجمع بين تحليل الكود وتتبع أداء الفريق وتحسين سير العمل مع واجهة ثنائية اللغة.",
    tags: [
      { name: "nestjs", color: "blue-text-gradient" },
      { name: "prisma", color: "green-text-gradient" },
      { name: "ai", color: "pink-text-gradient" },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/Amer-1991/devflow-insight",
  },
  {
    name: "فن فيست",
    description:
      "منصة أتمتة ذكية تتكامل مع بحر، سوق العمل الحر السعودي، مع توليد عروض بالذكاء الاصطناعي واكتشاف المشاريع التلقائي.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "fastapi", color: "green-text-gradient" },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/Amer-1991/finvest",
  },
  {
    name: "الوالد الذكي",
    description:
      "مساعد مراقبة ذكي بالكاميرات يستخدم YOLO والتعرف على الوجوه مع نموذج Groq لتصنيف الأحداث ونصائح تربوية بالعربية.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "ai", color: "pink-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/Amer-1991/smartparent",
  },
  {
    name: "بيوتي إم",
    description:
      "منصة إدارة وحجز صالونات التجميل متكاملة مع واجهة Laravel وتطبيق Flutter للجوال وتكامل Firebase.",
    tags: [
      { name: "laravel", color: "pink-text-gradient" },
      { name: "flutter", color: "pink-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/Amer-1991/beautyM",
  },
  {
    name: "تحليل المسح الذكي",
    description:
      "تطبيق مسح وتحليل المستندات بالذكاء الاصطناعي مع استخراج النصوص وتصور البيانات وتوليد تقارير PDF.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "ai", color: "pink-text-gradient" },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/Amer-1991/scan-analys-ai",
  },
  {
    name: "فن فيستا السعودية",
    description:
      "لوحة تحليلات مالية تفاعلية للسوق السعودي مع رسوم بيانية Recharts وتصميم متجاوب بـ shadcn/ui.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/Amer-1991/fin-vista-ksa",
  },
  {
    name: "لايت قيت",
    description:
      "منصة اكتشاف وجهات السفر بتصميم بصري مميز مبنية بـ Next.js 14 مع صور جذابة وأداء محسن.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/Amer-1991/LightGate",
  },
  {
    name: "زتكانة",
    description:
      "منصة سوق حديثة مبنية بأحدث تقنيات Next.js 16 و React 19 للسوق السعودي.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "typescript", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/Amer-1991/zatcana",
  },
];

export { services, technologies, experiences, testimonials, projects, amerProfile };
