type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: { span: string; placeholder: string };
      email: { span: string; placeholder: string };
      mobile: { span: string; placeholder: string };
      message: { span: string; placeholder: string };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    services: Required<TSection>;
    works: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
  };
};

export const config: TConfig = {
  html: {
    title: "استوديو نقطة | Nuqta Dev Studio",
    fullName: "Nuqta Dev Studio",
    email: "hello@nuqta.dev",
  },
  hero: {
    name: "استوديو نقطة",
    p: [
      "نقطة البداية لمنتجك الرقمي.",
      "نُحوّل الأفكار إلى مواقع وتطبيقات وتجارب تفاعلية — بسرعة، دقة، وذوق عالٍ.",
    ],
  },
  contact: {
    p: "تواصل",
    h2: "جاهز لبدء مشروعك؟",
    form: {
      name: { span: "الاسم", placeholder: "اسمك الكامل" },
      email: { span: "البريد الإلكتروني (اختياري)", placeholder: "name@company.com" },
      mobile: { span: "رقم الهاتف (اختياري)", placeholder: "+966 5X XXX XXXX" },
      message: { span: "فكرة المشروع", placeholder: "صِف فكرتك بإيجاز — نردّ خلال ساعات" },
    },
  },
  sections: {
    about: {
      p: "عن الاستوديو",
      h2: "نقطة تبدأ منها المنتجات الكبيرة.",
      content:
        "استوديو نقطة (Nuqta Dev Studio) وكالة تطوير صغيرة ومركّزة. نعمل مع رواد الأعمال والشركات الناشئة على بناء منتجات رقمية نظيفة وسريعة وآمنة. نبتعد عن التعقيد الزائد، ونركّز على التسليم في الوقت، بكود قابل للصيانة وتجربة مستخدم تُلهم.",
    },
    services: {
      p: "خدماتنا",
      h2: "ما نقدّمه.",
      content:
        "أربع خدمات رئيسية نغطّيها بجودة عالية — من المواقع التسويقية إلى التطبيقات والتجارب ثلاثية الأبعاد.",
    },
    works: {
      p: "أعمال مختارة",
      h2: "مشاريع نفخر بها.",
      content:
        "عينة من أعمالنا الأخيرة في الويب والتطبيقات والتجارب ثلاثية الأبعاد. اضغط لمشاهدة التفاصيل أو تواصل معنا لمناقشة مشروعك.",
    },
    experience: {
      p: "خبرتنا",
      h2: "خلفيّة تقنيّة قوية.",
    },
    feedbacks: {
      p: "آراء العملاء",
      h2: "ما يقولون عنّا.",
    },
  },
};
