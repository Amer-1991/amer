import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WHATSAPP_HREF =
  "https://wa.me/966596562019?text=" +
  encodeURIComponent("مرحباً نقطة، أريد مناقشة مشروع.");

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: dot moves up + scales down slightly; blobs drift
  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const dotScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const dotOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0]);
  const blobRightX = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const blobLeftX = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-24 md:pt-0"
    >
      <div aria-hidden className="absolute inset-0 bg-grid-faint bg-grid opacity-[0.9]" />
      <div aria-hidden className="absolute inset-0 bg-radial-purple" />

      {/* Parallax blobs */}
      <motion.div
        aria-hidden
        style={{ x: blobRightX }}
        className="blob animate-blob-slow"
        initial={{
          width: 520,
          height: 520,
          top: -120,
          right: -80,
        }}
      >
        <div
          className="h-full w-full"
          style={{
            background: "radial-gradient(circle, #A78BFA 0%, transparent 65%)",
            borderRadius: "50%",
            filter: "blur(72px)",
          }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: blobLeftX }}
        className="blob animate-blob-medium"
        initial={{
          width: 420,
          height: 420,
          bottom: -80,
          left: -60,
          opacity: 0.4,
        }}
      >
        <div
          className="h-full w-full"
          style={{
            background: "radial-gradient(circle, #C4B5FD 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(72px)",
          }}
        />
      </motion.div>

      <div className="container-px relative z-10 grid grid-cols-1 items-center gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
        {/* Copy column */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="flex flex-col gap-7 text-right"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-start"
          >
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              استوديو تقني يجعل الأعمال أذكى
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-ar text-[44px] font-black leading-[1.05] tracking-tight text-ink xs:text-[56px] sm:text-[68px] md:text-[76px] lg:text-[88px]"
          >
            نصنع أعمالاً{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-purple-700">أذكى</span>
              <span
                aria-hidden
                className="absolute -inset-x-1 bottom-2 -z-0 h-3 rounded-full bg-purple-200 md:h-4"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-lg font-medium leading-[1.7] text-muted md:text-xl"
          >
            نحن استوديو نقطة — نبني منصات وتطبيقات ذكية، ونُدمج الأتمتة
            والذكاء الاصطناعي لجعل أعمالك تعمل أسرع وأكفأ.
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 grid grid-cols-3 gap-4 border-t border-hairline pt-6 text-right md:max-w-lg"
          >
            <div>
              <div className="font-display text-2xl font-bold text-ink md:text-3xl">
                15<span className="text-purple-600">+</span>
              </div>
              <div className="text-xs text-muted md:text-sm">سنة خبرة</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-ink md:text-3xl">
                30<span className="text-purple-600">+</span>
              </div>
              <div className="text-xs text-muted md:text-sm">مشروع منفّذ</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-ink md:text-3xl">
                4<span className="text-purple-600">x</span>
              </div>
              <div className="text-xs text-muted md:text-sm">تخصصات</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Dot visual with parallax */}
        <motion.div
          style={{ y: dotY, scale: dotScale, opacity: dotOpacity }}
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
            { x: "6%", y: "10%", label: "مواقع" },
            { x: "84%", y: "14%", label: "iOS / Android" },
            { x: "88%", y: "56%", label: "SaaS" },
            { x: "4%", y: "60%", label: "منصات" },
            { x: "50%", y: "2%", label: "ذكاء اصطناعي" },
            { x: "46%", y: "92%", label: "أتمتة" },
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

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-ink/30 p-1">
          <span className="h-1.5 w-1 animate-float rounded-full bg-ink/40" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
