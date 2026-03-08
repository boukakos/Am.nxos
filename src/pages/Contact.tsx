import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-pink-pastel paper-texture flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
      <Link to="/" className="font-marker text-2xl text-ink-black mb-12 scrapbook-hover inline-block rotate-1">
        ← Am.nxos
      </Link>

      <h1 className="font-marker text-4xl md:text-5xl text-ink-black mb-14 -rotate-2">
        Get in Touch
      </h1>

      <div className="relative">
        <a
          href="https://instagram.com/am.nxos"
          target="_blank"
          rel="noopener noreferrer"
          className="tape scrapbook-hover bg-sticky-yellow px-10 py-8 text-center shadow-lg inline-block rotate-3"
        >
          <span className="font-caveat text-3xl text-ink-black block mb-1">📸</span>
          <span className="font-caveat text-2xl text-ink-black">Instagram</span>
        </a>

        <a
          href="mailto:hello@amnxos.com"
          className="tape scrapbook-hover bg-sticky-yellow px-10 py-8 text-center shadow-lg inline-block -rotate-[5deg] ml-[-12px] mt-4 relative z-10"
        >
          <span className="font-caveat text-3xl text-ink-black block mb-1">✉️</span>
          <span className="font-caveat text-2xl text-ink-black">Send Email</span>
        </a>

        {/* Decorative tape */}
        <div className="absolute -top-3 left-[40%] w-14 h-5 bg-tape-beige/60 rotate-[10deg] rounded-sm shadow-sm" />
      </div>
    </div>
  );
};

export default Contact;
