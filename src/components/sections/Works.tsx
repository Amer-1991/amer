import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { config } from "../../constants/config";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
      className="group overflow-hidden rounded-3xl border border-hairline bg-white transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lift"
    >
      <a
        href={sourceCodeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-purple-700 opacity-0 shadow-soft backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
            عرض المشروع
            <svg
              width="14"
              height="14"
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

        <div className="p-6 md:p-7">
          <h3 className="font-ar text-xl font-black leading-tight text-ink md:text-2xl">
            {name}
          </h3>
          <p className="mt-3 text-[15px] leading-[1.7] text-muted">
            {description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className="inline-flex items-center gap-1 rounded-full bg-purple-50 px-2.5 py-1 text-xs font-bold text-purple-700"
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.article>
  );
};

const Works = () => {
  return (
    <div>
      <div className="flex flex-col items-start gap-3">
        <span className="eyebrow">{config.sections.works.p}</span>
        <h2 className="headline max-w-3xl">{config.sections.works.h2}</h2>
        <p className="mt-2 max-w-2xl text-lg leading-[1.7] text-muted">
          {config.sections.works.content}
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} index={i} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");
