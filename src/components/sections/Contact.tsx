import React, { useState } from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { config } from "../../constants/config";

const WHATSAPP_NUMBER = "966596562019";
const INITIAL_STATE = { name: "", email: "", mobile: "", message: "" };

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const Contact = () => {
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const msg = [
      "مرحباً نقطة،",
      "",
      `الاسم: ${form.name || "—"}`,
      form.email ? `البريد: ${form.email}` : "",
      form.mobile ? `الهاتف: ${form.mobile}` : "",
      "",
      "فكرة المشروع:",
      form.message || "—",
    ]
      .filter(Boolean)
      .join("\n");

    // Fire conversion + custom event
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-18105891921/REPLACE_WITH_LABEL",
      });
      window.gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "contact_form",
      });
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setForm(INITIAL_STATE);
    setLoading(false);
  };

  return (
    <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_1fr] md:items-start md:gap-16">
      {/* Left: copy */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start gap-6"
      >
        <span className="eyebrow">{config.contact.p}</span>
        <h2 className="headline max-w-xl">{config.contact.h2}</h2>
        <p className="max-w-md text-lg leading-[1.7] text-muted">
          أرسل لنا فكرة مشروعك وسنردّ خلال ساعات. يمكنك أيضاً التواصل مباشرة
          عبر واتساب.
        </p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            "مرحباً نقطة، أريد مناقشة مشروع."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3 font-bold text-white shadow-soft transition-transform hover:scale-[1.02]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          واتساب مباشر
        </a>

        <div className="mt-6 flex flex-col gap-2 text-sm text-muted">
          <div>البريد: <a className="text-ink hover:text-purple-700" href="mailto:hello@nuqta.dev">hello@nuqta.dev</a></div>
          <div>الهاتف: <span className="text-ink" dir="ltr">+966 596 562 019</span></div>
          <div>الموقع: <span className="text-ink">المملكة العربية السعودية</span></div>
        </div>
      </motion.div>

      {/* Right: form */}
      <motion.form
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 rounded-3xl border border-hairline bg-white p-7 shadow-soft md:p-9"
      >
        {(["name", "email", "mobile"] as const).map((f) => {
          const field = config.contact.form[f];
          return (
            <label key={f} className="flex flex-col gap-2">
              <span className="text-sm font-bold text-ink">{field.span}</span>
              <input
                name={f}
                type={f === "email" ? "email" : f === "mobile" ? "tel" : "text"}
                value={form[f]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={f === "name"}
                className="rounded-2xl border border-hairline bg-mist px-4 py-3 text-base text-ink placeholder:text-muted focus:border-purple-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200"
              />
            </label>
          );
        })}

        <label className="flex flex-col gap-2">
          <span className="text-sm font-bold text-ink">
            {config.contact.form.message.span}
          </span>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder={config.contact.form.message.placeholder}
            required
            className="resize-none rounded-2xl border border-hairline bg-mist px-4 py-3 text-base text-ink placeholder:text-muted focus:border-purple-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-200"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary justify-center disabled:opacity-60"
        >
          {loading ? "جارٍ الإرسال..." : "إرسال عبر واتساب"}
        </button>

        <p className="text-center text-xs text-muted">
          بالضغط على إرسال، سيتم فتح واتساب مع تعبئة الرسالة تلقائياً.
        </p>
      </motion.form>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
