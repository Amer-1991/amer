import { motion } from "framer-motion";

const WHATSAPP_HREF =
  "https://wa.me/966596562019?text=" +
  encodeURIComponent("مرحباً نقطة، أريد مناقشة مشروع.");

const Hero = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-24 md:pt-0"
    >
      {/* Background grid */}
      <div aria-hidden className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.9]" />
      {/* Soft radial behind content */}
      <div aria-hidden className="absolute inset-0 bg-radial-purple" />
      {/* Animated blobs */}
      <div
        aria-hidden
        className="blob animate-blob-slow"
        style={{
          width: "520px",
          height: "520px",
          top: "-120px",
          right: "-80px",
          background: "radial-gradient(circle, #A78BFA 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="blob animate-blob-medium"
        style={{
          width: "420px",
          height: "420px",
          bottom: "-80px",
          left: "-60px",
          background: "radial-gradient(circle, #C4B5FD 0%, transparent 70%)",
          opacity: 0.4,
        }}
      />

      <div className="container-px relative z-10 grid grid-cols-1 items-center gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
        {/* Copy column */}
        <div className="flex flex-col gap-7 text-right">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-start"
          >
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              استوديو تطوير برمجي
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-ar text-[44px] font-black leading-[1.05] tracking-tight text-ink xs:text-[56px] sm:text-[68px] md:text-[76px] lg:text-[88px]"
          >
            نقطة{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-purple-700">البداية</span>
              <span
                aria-hidden
                className="absolute -inset-x-1 bottom-2 -z-0 h-3 rounded-full bg-purple-200 md:h-4"
              />
            </span>{" "}
            لمنتجك الرقمي
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-lg font-medium leading-[1.7] text-muted md:text-xl"
          >
            نحن استوديو نقطة — نبني مواقع وتطبيقات وتجارب ثلاثية الأبعاد بجودة
            عالية وسرعة تسليم تحترم وقتك.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              ابدأ مشروعك
              <svg
                width="18"
                height="18"
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
            </a>
            <a href="#work" className="btn-ghost">
              شاهد أعمالنا
            </a>
          </motion.div>

          {/* Trust mini-stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 grid grid-cols-3 gap-4 border-t border-hairline pt-6 text-right md:max-w-lg"
          >
            <div>
              <div className="font-display text-2xl font-bold text-ink md:text-3xl">15+</div>
              <div className="text-xs text-muted md:text-sm">مشروع منفّذ</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-ink md:text-3xl">
                5<span className="text-purple-600">y</span>
              </div>
              <div className="text-xs text-muted md:text-sm">خبرة تقنية</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-ink md:text-3xl">
                4<span className="text-purple-600">x</span>
              </div>
              <div className="text-xs text-muted md:text-sm">تخصصات</div>
            </div>
          </motion.div>
        </div>

        {/* Dot visual column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto h-[280px] w-[280px] xs:h-[340px] xs:w-[340px] md:h-[440px] md:w-[440px] lg:h-[520px] lg:w-[520px]"
        >
          <span className="absolute inset-0 animate-pulse-ring rounded-full border border-purple-300" />
          <span
            className="absolute inset-0 animate-pulse-ring rounded-full border border-purple-300"
            style={{ animationDelay: "1.2s" }}
          />
          <span className="absolute inset-8 rounded-full border border-dashed border-purple-200" />
          <div
            className="absolute inset-[18%] animate-float rounded-full shadow-glow"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, #DDD6FE 0%, #A78BFA 30%, #7C3AED 60%, #4C1D95 100%)",
            }}
          />
          {[
            { x: "8%", y: "14%", label: "React" },
            { x: "82%", y: "20%", label: "Next.js" },
            { x: "86%", y: "72%", label: "Three.js" },
            { x: "6%", y: "76%", label: "Node" },
          ].map((b, i) => (
            <div
              key={i}
              className="absolute animate-float rounded-full border border-hairline bg-white/90 px-3 py-1.5 font-display text-xs font-bold text-ink shadow-soft backdrop-blur"
              style={{ left: b.x, top: b.y, animationDelay: `${i * 0.4}s` }}
            >
              {b.label}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-ink/30 p-1">
          <span className="h-1.5 w-1 animate-float rounded-full bg-ink/40" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
