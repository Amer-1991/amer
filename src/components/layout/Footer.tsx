import { navLinks } from "../../constants";

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-hairline bg-white">
      <div className="container-px py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative inline-flex h-9 w-9">
                <span
                  className="h-full w-full rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 30%, #C4B5FD 0%, #8B5CF6 45%, #5B21B6 100%)",
                  }}
                />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-ar text-xl font-black text-ink">
                  استوديو نقطة
                </span>
                <span className="font-display text-[11px] font-medium tracking-[0.2em] text-muted">
                  NUQTA DEV STUDIO
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-[1.8] text-muted">
              استوديو تطوير برمجي متخصّص في بناء مواقع وتطبيقات وتجارب ثلاثية
              الأبعاد. نقطة البداية لمنتجك الرقمي.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-ar text-sm font-bold uppercase tracking-widest text-muted">
              روابط
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="text-[15px] font-medium text-ink hover:text-purple-700"
                  >
                    {n.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-ar text-sm font-bold uppercase tracking-widest text-muted">
              تواصل
            </h4>
            <ul className="flex flex-col gap-2.5 text-[15px]">
              <li>
                <a
                  className="text-ink hover:text-purple-700"
                  href="mailto:hello@nuqta-studio.com"
                >
                  hello@nuqta-studio.com
                </a>
              </li>
              <li>
                <a
                  className="text-ink hover:text-purple-700"
                  href="https://wa.me/966590800681"
                  target="_blank"
                  rel="noopener noreferrer"
                  dir="ltr"
                >
                  +966 590 800 681
                </a>
              </li>
              <li className="text-muted">المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-hairline pt-6 text-xs text-muted md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} استوديو نقطة — Nuqta Dev Studio. جميع الحقوق محفوظة.</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            صُنع بعناية في <strong className="text-ink">السعودية</strong>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
