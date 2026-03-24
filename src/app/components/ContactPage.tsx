import { useState } from "react";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="px-6 md:px-12 pt-12 pb-10 text-center">
        <p className="text-[9px] tracking-[0.3em] text-neutral-300 mb-3">CONTACT</p>
        <div className="h-px w-8 bg-neutral-200 mx-auto" />
      </div>

      <div className="max-w-lg mx-auto px-6 pb-28">
        {/* Intro */}
        <div className="text-center mb-12">
          <h2
            className="tracking-[0.2em] text-neutral-700 mb-4"
            style={{ fontFamily: "'Georgia', serif", fontSize: "15px", fontWeight: 400 }}
          >
            LET'S WORK TOGETHER
          </h2>
          <p className="text-[12px] text-neutral-400 leading-relaxed">
            I'd love to hear about your project. Please fill out the form below and I'll be in touch
            as soon as possible.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16">
            <div className="w-12 h-12 border border-neutral-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-neutral-400 text-lg">✓</span>
            </div>
            <p
              className="tracking-[0.15em] text-neutral-700 text-[12px]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Thank you for reaching out.
            </p>
            <p className="text-neutral-400 text-[11px] mt-2 tracking-wide">
              I'll be in touch with you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[9px] tracking-[0.2em] text-neutral-400 mb-2">
                NAME *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border-b border-neutral-200 py-2 text-[12px] text-neutral-700 bg-transparent outline-none focus:border-neutral-500 transition-colors placeholder-neutral-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-[9px] tracking-[0.2em] text-neutral-400 mb-2">
                EMAIL *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border-b border-neutral-200 py-2 text-[12px] text-neutral-700 bg-transparent outline-none focus:border-neutral-500 transition-colors placeholder-neutral-300"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-[9px] tracking-[0.2em] text-neutral-400 mb-2">
                SUBJECT
              </label>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full border-b border-neutral-200 py-2 text-[12px] text-neutral-700 bg-transparent outline-none focus:border-neutral-500 transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="text-neutral-300">Select a subject</option>
                <option value="editorial">Editorial Assignment</option>
                <option value="portrait">Portrait Session</option>
                <option value="collaboration">Creative Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-[9px] tracking-[0.2em] text-neutral-400 mb-2">
                MESSAGE *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border-b border-neutral-200 py-2 text-[12px] text-neutral-700 bg-transparent outline-none focus:border-neutral-500 transition-colors resize-none placeholder-neutral-300"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full text-[10px] tracking-[0.25em] text-white bg-neutral-900 px-8 py-4 hover:bg-neutral-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </div>
          </form>
        )}

        {/* Contact info */}
        <div className="mt-16 pt-10 border-t border-neutral-100 text-center space-y-3">
          <p className="text-[9px] tracking-[0.25em] text-neutral-300">FIND ME</p>
          <div className="flex justify-center gap-8 mt-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.15em] text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              INSTAGRAM
            </a>
            <a
              href="mailto:hello@karllyfeng.com"
              className="text-[10px] tracking-[0.15em] text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              EMAIL
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
