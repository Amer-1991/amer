import { technologies } from "../../constants";

const Tech = () => {
  // Duplicate for seamless marquee
  const list = [...technologies, ...technologies];
  return (
    <section className="border-y border-hairline bg-white py-12 md:py-16">
      <div className="container-px mb-8 flex flex-col items-start gap-2">
        <span className="eyebrow">تقنياتنا</span>
        <h3 className="font-ar text-xl font-black text-ink md:text-2xl">
          نعمل بأحدث أدوات الصناعة
        </h3>
      </div>

      <div className="relative overflow-hidden">
        {/* Gradient mask edges */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent"
        />
        <div className="flex w-[200%] animate-marquee items-center gap-10">
          {list.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex shrink-0 items-center gap-3 rounded-2xl border border-hairline bg-mist px-5 py-3 transition-all hover:border-purple-200 hover:bg-white"
            >
              <img src={t.icon} alt={t.name} className="h-7 w-7 object-contain" />
              <span className="font-display text-sm font-bold text-ink">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
