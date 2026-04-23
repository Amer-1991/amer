import { motion } from "framer-motion";

import { amerProfile } from "../../assets";
import { config } from "../../constants/config";
import { SectionWrapper } from "../../hoc";

const About = () => {
  return (
    <div className="grid grid-cols-1 gap-14 md:grid-cols-[auto_1fr] md:items-start md:gap-16 lg:gap-20">
      {/* Founder photo */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto md:mx-0"
      >
        <div className="relative h-[240px] w-[240px] md:h-[300px] md:w-[300px]">
          {/* Decorative circles */}
          <span className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-purple-100" />
          <span className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-purple-200" />
          {/* Ring */}
          <span className="absolute inset-0 animate-pulse-ring rounded-full border-2 border-purple-300" />
          {/* Photo */}
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-lift">
            <img
              src={amerProfile}
              alt="عامر الودعاني — مؤسس استوديو نقطة"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Verified badge */}
          <span className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full border border-purple-200 bg-white px-3 py-1.5 text-xs font-bold text-purple-700 shadow-soft">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l2.39 4.84L20 8l-3.9 3.8.92 5.36L12 14.77 6.98 17.16 7.9 11.8 4 8l5.61-1.16L12 2z" />
            </svg>
            مستقل موثّق
          </span>
        </div>
      </motion.div>

      {/* Copy + experience */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-start gap-3">
          <span className="eyebrow">{config.sections.about.p}</span>
          <h2 className="headline max-w-2xl">{config.sections.about.h2}</h2>
          <p className="mt-2 max-w-2xl text-lg leading-[1.8] text-muted">
            {config.sections.about.content}
          </p>
          <p className="max-w-2xl text-lg leading-[1.8] text-muted">
            يقود الاستوديو <strong className="text-ink">عامر الودعاني</strong>{" "}
            — مطوّر فول-ستاك بخبرة 15+ سنة في الويب والموبايل وتجارب AR/VR
            وألعاب Unreal Engine. نعمل بنموذج "فريق مركّز" بدل الوكالات الضخمة.
          </p>
        </div>

        {/* Capabilities — flat chip list, no timeline */}
        <div className="mt-2 flex flex-wrap gap-2">
          {[
            "تطبيقات ويب",
            "تطبيقات جوال",
            "ذكاء اصطناعي",
            "أتمتة الأعمال",
            "لوحات تحكم",
            "AR / VR",
            "Unreal Engine",
            "Blender 3D",
          ].map((cap) => (
            <span
              key={cap}
              className="inline-flex items-center rounded-full border border-hairline bg-mist px-3 py-1.5 text-sm font-bold text-ink transition-colors hover:border-purple-300 hover:text-purple-700"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
