import { motion } from "framer-motion";

import { amerProfile } from "../../assets";
import { config } from "../../constants/config";
import { experiences } from "../../constants";
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
            — مطوّر فول-ستاك بخبرة 5+ سنوات في الويب والموبايل وتجارب AR/VR
            وألعاب Unreal Engine. نعمل بنموذج "فريق مركّز" بدل الوكالات الضخمة.
          </p>
        </div>

        {/* Experience timeline */}
        <div className="mt-4">
          <h3 className="mb-6 font-ar text-xl font-black text-ink">الخبرات</h3>
          <ol className="relative border-r-2 border-dashed border-purple-200 pr-6">
            {experiences.map((exp, i) => (
              <motion.li
                key={`${exp.title}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="mb-8 last:mb-0"
              >
                <span
                  aria-hidden
                  className="absolute -right-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-white bg-purple-500 shadow"
                />
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                    {exp.date}
                  </span>
                  <h4 className="font-ar text-lg font-black text-ink">
                    {exp.title}
                  </h4>
                  <ul className="mt-2 flex flex-col gap-1.5 text-[15px] leading-[1.6] text-muted">
                    {exp.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 rounded-full bg-purple-400" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
