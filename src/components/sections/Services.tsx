import { motion } from "framer-motion";

import { services } from "../../constants";
import { config } from "../../constants/config";
import { SectionWrapper } from "../../hoc";

type ServiceCardProps = {
  index: number;
  title: string;
  description: string;
  icon: string;
};

const serviceMeta: { description: string; accent: string }[] = [
  {
    description: "مواقع تسويقية، لوحات تحكم، ومنصات SaaS بأحدث التقنيات.",
    accent: "from-purple-500 to-purple-700",
  },
  {
    description: "تطبيقات iOS وAndroid عبر React Native — أداء أصيل وكود واحد.",
    accent: "from-purple-400 to-purple-600",
  },
  {
    description: "تجارب 3D تفاعلية داخل المتصفح — Three.js وWebXR.",
    accent: "from-purple-600 to-purple-800",
  },
  {
    description: "ألعاب وتجارب بصرية بجودة استوديو عبر Unreal Engine وBlender.",
    accent: "from-purple-500 to-purple-900",
  },
];

const ServiceCard = ({ index, title, description, icon }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay: index * 0.08 }}
    className="group relative overflow-hidden rounded-3xl border border-hairline bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lift"
  >
    {/* Corner gradient */}
    <div
      aria-hidden
      className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-purple-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
    />
    {/* Index */}
    <span className="absolute left-8 top-8 font-display text-xs font-bold text-muted">
      0{index + 1}
    </span>

    <div className="relative flex flex-col items-start gap-5">
      <div className="rounded-2xl bg-purple-50 p-3 ring-1 ring-purple-100">
        <img src={icon} alt="" className="h-10 w-10" />
      </div>

      <h3 className="font-ar text-2xl font-black text-ink md:text-[28px]">
        {title}
      </h3>

      <p className="text-base leading-[1.75] text-muted">{description}</p>

      <div className="mt-2 flex items-center gap-2 text-sm font-bold text-purple-600 opacity-0 transition-all duration-300 group-hover:translate-x-[-4px] group-hover:opacity-100">
        استفسر عن هذه الخدمة
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="-scale-x-100"
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <div>
      <div className="flex flex-col items-start gap-3">
        <span className="eyebrow">{config.sections.services.p}</span>
        <h2 className="headline max-w-3xl">
          {config.sections.services.h2}
        </h2>
        <p className="mt-2 max-w-2xl text-lg leading-[1.7] text-muted">
          {config.sections.services.content}
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
        {services.map((service, i) => (
          <ServiceCard
            key={service.title}
            index={i}
            title={service.title}
            icon={service.icon}
            description={serviceMeta[i]?.description ?? ""}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Services, "services");
