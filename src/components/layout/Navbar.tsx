import { useEffect, useState } from "react";

import { navLinks } from "../../constants";

const WHATSAPP_HREF = "https://wa.me/966596562019?text=" + encodeURIComponent(
  "مرحباً نقطة، أريد مناقشة مشروع."
);

const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((s) => {
        const top = (s as HTMLElement).getBoundingClientRect().top;
        const height = (s as HTMLElement).offsetHeight;
        if (top < 140 && top + height > 140) setActive(s.id);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-hairline bg-white/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-2.5"
        >
          <span className="relative inline-flex h-8 w-8 items-center justify-center md:h-9 md:w-9">
            <span
              className="absolute inset-0 rounded-full bg-purple-500 opacity-60 blur-md transition-all group-hover:opacity-90 group-hover:blur-lg"
            />
            <span
              className="relative h-full w-full rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 35% 30%, #C4B5FD 0%, #8B5CF6 45%, #5B21B6 100%)",
              }}
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-ar text-lg font-black text-ink md:text-xl">
              استوديو نقطة
            </span>
            <span className="font-display text-[10px] font-medium tracking-[0.18em] text-muted md:text-[11px]">
              NUQTA DEV STUDIO
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className={`text-[15px] font-bold transition-colors ${
                  active === nav.id
                    ? "text-purple-700"
                    : "text-ink/80 hover:text-purple-700"
                }`}
              >
                {nav.title}
              </a>
            </li>
          ))}
          <li>
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2.5 text-sm">
              ابدأ مشروعك
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setToggle(!toggle)}
          aria-label="فتح القائمة"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-white md:hidden"
        >
          <span className="relative flex h-5 w-5 flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-ink transition-all ${
                toggle ? "translate-y-[9px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-ink transition-all ${
                toggle ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-ink transition-all ${
                toggle ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          toggle ? "max-h-96 border-t border-hairline bg-white" : "max-h-0"
        }`}
      >
        <ul className="container-px flex flex-col gap-4 py-6">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                onClick={() => setToggle(false)}
                className="block py-2 text-base font-bold text-ink"
              >
                {nav.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 w-full"
              onClick={() => setToggle(false)}
            >
              ابدأ مشروعك
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
