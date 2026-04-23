import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { SectionWrapper } from "../../hoc";

const faqs = [
  {
    q: "كم تكلفة تصميم موقع إلكتروني في السعودية؟",
    a: "تبدأ أسعار تصميم المواقع من 3,000 ريال للموقع التعريفي، وتصل إلى 30,000+ ريال للمنصات والمتاجر المتكاملة. نرسل عرض سعر مجاني خلال ساعات بعد فهم احتياجاتك.",
  },
  {
    q: "كم تكلفة تطوير تطبيق جوال في 2026؟",
    a: "تطبيق iOS و Android متكامل يبدأ من 15,000 ريال للتطبيقات البسيطة، وحتى 80,000+ ريال للتطبيقات المعقدة. نستخدم React Native لتقليل التكلفة وتوحيد الكود.",
  },
  {
    q: "كم من الوقت يستغرق تطوير موقع أو تطبيق؟",
    a: "المواقع التعريفية: 2-4 أسابيع. المنصات والمتاجر: 6-10 أسابيع. التطبيقات: 8-16 أسبوع حسب التعقيد. نسلّم على مراحل بجدول زمني واضح.",
  },
  {
    q: "هل تعملون مع الشركات الناشئة؟",
    a: "نعم. نعمل مع رواد الأعمال والشركات الناشئة على MVP بسرعة وبتكلفة مناسبة، مع إمكانية التوسع لاحقاً.",
  },
  {
    q: "ما هي التقنيات التي تستخدمونها؟",
    a: "React، Next.js، TypeScript، Node.js للويب. React Native للموبايل. Python و OpenAI API للذكاء الاصطناعي. Unreal Engine و Blender للتجارب ثلاثية الأبعاد.",
  },
  {
    q: "هل تقدّمون صيانة بعد التسليم؟",
    a: "نعم. باقات صيانة شهرية وسنوية تشمل التحديثات والدعم. بالإضافة إلى 30 يوم دعم مجاني بعد التسليم.",
  },
  {
    q: "هل تعملون في مدن خارج الرياض؟",
    a: "نعم. نخدم الرياض، جدة، الدمام، مكة، المدينة، وجميع مناطق المملكة، بالإضافة إلى الإمارات، الكويت، قطر، البحرين، وعمان عن بُعد.",
  },
  {
    q: "كيف أبدأ مشروعاً مع استوديو نقطة؟",
    a: "تواصل عبر واتساب على +966596562019 أو نموذج الاتصال في الموقع. سنحدد استشارة مجانية ثم نرسل عرض سعر مفصّل خلال ساعات.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <div className="flex flex-col items-start gap-3">
        <span className="eyebrow">الأسئلة الشائعة</span>
        <h2 className="headline max-w-3xl">كل ما تحتاج معرفته قبل البدء.</h2>
        <p className="mt-2 max-w-2xl text-lg leading-[1.7] text-muted">
          أجوبة شفافة عن الأسئلة الأكثر شيوعاً. إن لم تجد إجابتك — راسلنا مباشرة
          عبر واتساب.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-3">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "border-purple-300 bg-white shadow-soft"
                  : "border-hairline bg-white hover:border-purple-200"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right md:px-7 md:py-6"
              >
                <span className="font-ar text-base font-black text-ink md:text-lg">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={`flex h-8 w-8 flex-none items-center justify-center rounded-full transition-all ${
                    isOpen
                      ? "rotate-180 bg-purple-600 text-white"
                      : "bg-purple-50 text-purple-700"
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-[15px] leading-[1.8] text-muted md:px-7 md:pb-7 md:text-base">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(FAQ, "faq");
