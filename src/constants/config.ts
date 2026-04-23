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
    email: "hello@nuqta-studio.com",
  },
  hero: {
    name: "استوديو نقطة",
    p: [
      "نصنع أعمالاً أذكى.",
      "استوديو تقني يبني مواقع وتطبيقات ومنصات ذكية تجعل أعمالك تعمل أفضل — بسرعة، دقة، وذوق عالٍ.",
    ],
  },
  contact: {
    p: "تواصل",
    h2: "جاهز لبدء مشروعك؟",
    form: {
      name: { span: "الاسم", placeholder: "اسمك الكامل" },
      email: { span: "البريد الإلكتروني (اختياري)", placeholder: "name@company.com" },
      mobile: { span: "رقم الهاتف (اختياري)", placeholder: "05X XXX XXXX" },
      message: { span: "فكرة المشروع", placeholder: "صِف فكرتك بإيجاز — نردّ خلال ساعات" },
    },
  },
  sections: {
    about: {
      p: "عن الاستوديو",
      h2: "شريكك التقني الذي يجعل أعمالك أذكى.",
      content:
        "استوديو نقطة (Nuqta Dev Studio) شريك تقني صغير ومركّز. نعمل مع الشركات ورواد الأعمال على تحويل العمليات اليدوية إلى أنظمة رقمية ذكية — أتمتة، ذكاء اصطناعي، لوحات تحكم، وتكاملات — حتى تعمل أعمالك أسرع، بتكلفة أقل، وبقرارات أوضح.",
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
