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
    name: "تطبيق تأجير السيارات",
    description:
      "منصة ويب تسمح للمستخدمين بالبحث وحجز وإدارة تأجير السيارات من مختلف المزودين، مما يوفر حلاً مريحاً وفعالاً لاحتياجات النقل.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "منصة البحث عن الوظائف",
    description:
      "تطبيق ويب يتيح للمستخدمين البحث عن فرص العمل وعرض نطاقات الرواتب المتوقعة للمناصب والعثور على الوظائف المتاحة بناءً على موقعهم الحالي.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "دليل السفر",
    description:
      "منصة شاملة لحجز السفر تسمح للمستخدمين بحجز الرحلات الجوية والفنادق وسيارات التأجير، وتقدم توصيات مدروسة للوجهات الشائعة.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, amerProfile };
