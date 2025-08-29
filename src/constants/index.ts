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
    title: "منشئ محتوى",
    icon: creator,
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
];

const experiences: TExperience[] = [
  {
    title: "مطور React.js",
    companyName: "شركة تقنية",
    icon: starbucks,
    iconBg: "#383E56",
    date: "مارس 2020 - أبريل 2021",
    points: [
      "تطوير وصيانة تطبيقات الويب باستخدام React.js والتقنيات ذات الصلة.",
      "التعاون مع فرق متعددة الوظائف بما في ذلك المصممين ومديري المنتجات والمطورين الآخرين لإنشاء منتجات عالية الجودة.",
      "تنفيذ التصميم المتجاوب وضمان التوافق مع مختلف المتصفحات.",
      "المشاركة في مراجعات الكود وتقديم ملاحظات بناءة للمطورين الآخرين.",
    ],
  },
  {
    title: "مطور React Native",
    companyName: "شركة تطبيقات",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "يناير 2021 - فبراير 2022",
    points: [
      "تطوير وصيانة تطبيقات الهاتف المحمول باستخدام React Native.",
      "العمل مع فرق التصميم والتطوير لإنشاء تجارب مستخدم مميزة.",
      "تحسين أداء التطبيقات وضمان استقرارها.",
      "المشاركة في تطوير استراتيجيات التطبيق وخطط النمو.",
    ],
  },
  {
    title: "مطور ويب",
    companyName: "شركة تجارة إلكترونية",
    icon: shopify,
    iconBg: "#383E56",
    date: "يناير 2022 - يناير 2023",
    points: [
      "تطوير منصات التجارة الإلكترونية باستخدام أحدث التقنيات.",
      "تحسين تجربة المستخدم وزيادة معدلات التحويل.",
      "العمل مع أنظمة الدفع والشحن المختلفة.",
      "ضمان أمان البيانات وحماية خصوصية المستخدمين.",
    ],
  },
  {
    title: "مطور Full Stack",
    companyName: "شركة تقنية متقدمة",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "يناير 2023 - الحالي",
    points: [
      "تطوير تطبيقات كاملة من الواجهة الأمامية إلى الخلفية.",
      "استخدام تقنيات حديثة مثل Three.js لإنشاء تجارب تفاعلية ثلاثية الأبعاد.",
      "إدارة قواعد البيانات وتحسين الأداء.",
      "قيادة مشاريع تقنية معقدة وتوجيه فرق التطوير.",
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

export { services, technologies, experiences, testimonials, projects };
