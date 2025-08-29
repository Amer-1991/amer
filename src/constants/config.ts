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
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      mobile: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "عامر الودعاني",
    fullName: "عامر الودعاني",
    email: "ameralwadani@mail.com",
  },
  hero: {
    name: "عامر الودعاني",
    p: ["مطور فول-ستاك ومؤسس تقني", "أحوّل فكرتك إلى موقع/تطبيق جاهز للإطلاق—سريع، آمن، وقابل للتوسع"],
  },
  contact: {
    p: "تواصل معي",
    h2: "اتصل بي.",
    form: {
      name: {
        span: "اسمك",
        placeholder: "ما اسمك؟",
      },
      email: { 
        span: "بريدك الإلكتروني (اختياري)", 
        placeholder: "ما بريدك الإلكتروني؟" 
      },
      mobile: { 
        span: "رقم هاتفك (اختياري)", 
        placeholder: "ما رقم هاتفك؟" 
      },
      message: {
        span: "رسالتك",
        placeholder: "ماذا تريد أن تقول؟",
      },
    },
  },
  sections: {
    about: {
      p: "مقدمة",
      h2: "نظرة عامة.",
      content: `أنا مطوّر برمجيات فول-ستاك ومؤسّس تقني بخبرة قوية في TypeScript وJavaScript، ومتخصّص في React وNode.js وThree.js لبناء مواقع وتطبيقات حديثة وتجارب ثلاثية الأبعاد. أعمل بسرعة وبجودة عالية، وأتعاون عن قرب مع العملاء لتحويل الأفكار إلى حلول عملية آمنة، قابلة للتوسّع وسهلة الاستخدام تحلّ مشاكل حقيقية وتحقق أثرًا ملموسًا. لنحوّل فكرتك إلى منتج جاهز للإطلاق.`,
    },
    experience: {
      p: "ما قمت به حتى الآن",
      h2: "الخبرة العملية.",
    },
    feedbacks: {
      p: "ماذا يقول الآخرون",
      h2: "التوصيات.",
    },
    works: {
      p: "أعمالي",
      h2: "المشاريع.",
      content: `المشاريع التالية تعرض مهاراتي وخبرتي من خلال
    أمثلة حقيقية من عملي. كل مشروع موصوف بإيجاز مع
    روابط لمستودعات الكود والعروض التوضيحية المباشرة.
    يعكس قدرتي على حل المشاكل المعقدة والعمل مع
    تقنيات مختلفة وإدارة المشاريع بفعالية.`,
    },
  },
};
