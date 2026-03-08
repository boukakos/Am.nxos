import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-pink-pastel paper-texture flex flex-col items-center justify-center px-6 py-16">
      <Link to="/" className="font-marker text-3xl text-ink-black mb-16 scrapbook-hover inline-block">
        ← Am.nxos
      </Link>

      <h1 className="font-marker text-5xl md:text-6xl text-ink-black mb-12">
        Get in Touch
      </h1>

      <div className="flex flex-col sm:flex-row gap-8">
        <a
          href="https://instagram.com/am.nxos"
          target="_blank"
          rel="noopener noreferrer"
          className="tape scrapbook-hover bg-sticky-yellow px-10 py-8 text-center shadow-lg"
        >
          <span className="font-caveat text-3xl text-ink-black block mb-1">📸</span>
          <span className="font-caveat text-2xl text-ink-black">Instagram</span>
        </a>

        <a
          href="mailto:hello@amnxos.com"
          className="tape scrapbook-hover bg-sticky-yellow px-10 py-8 text-center shadow-lg"
        >
          <span className="font-caveat text-3xl text-ink-black block mb-1">✉️</span>
          <span className="font-caveat text-2xl text-ink-black">Send Email</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
