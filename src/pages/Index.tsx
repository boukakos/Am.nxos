import { Link } from "react-router-dom";
import characterImg from "@/assets/character-3d.png";
import stickyWork from "@/assets/sticky-work.png";
import stickyContact from "@/assets/sticky-contact.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Top section - pink */}
      <section className="relative bg-pink-pastel min-h-[60vh] flex items-end overflow-hidden">
        {/* Am.nxos title */}
        <h1 className="absolute top-8 left-8 md:left-16 font-marker text-5xl md:text-7xl text-ink-black leading-none z-10 select-none">
          Am.<br />nxos
        </h1>

        {/* 3D Character */}
        <div className="relative ml-auto mr-8 md:mr-24 -mb-12 z-10">
          <img
            src={characterImg}
            alt="3D character in yellow tracksuit"
            className="w-64 md:w-80 lg:w-96 drop-shadow-xl"
          />
        </div>
      </section>

      {/* Bottom section - paper white */}
      <section className="relative bg-paper-white paper-texture min-h-[60vh] px-8 md:px-16 py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          {/* Receipt / About Me */}
          <div className="receipt w-72 shrink-0 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-center mb-3">
              <span className="inline-block border-2 border-ink-black rounded-full px-4 py-1 font-marker text-sm tracking-wide">
                ABOUT ME
              </span>
            </div>
            <p className="text-center text-xs tracking-widest mb-3">★ ★ ★</p>
            <div className="flex justify-center mb-2">
              <span className="text-lg tracking-wider">●●●●●●●●●●●●●●●●●</span>
            </div>
            <p className="text-sm font-bold">✂ AMALIA ✂</p>
            <p className="text-sm">THESSALONIKI, GR</p>
            <p className="text-sm mb-3">VISUAL ARTIST</p>
            <div className="flex justify-center mb-2">
              <span className="text-lg tracking-wider">●●●●●●●●●●●●●●●●●</span>
            </div>
            <p className="text-sm">ILLUSTRATIONS</p>
            <p className="text-sm">TATOOS</p>
            <p className="text-sm mb-3">& MIXED MEDIA</p>
            <div className="flex justify-center mb-2">
              <span className="text-lg tracking-wider">●●●●●●●●●●●●●●●●●</span>
            </div>
            <p className="text-center text-xs tracking-widest mb-1">★ ★ ★</p>
            <div className="flex justify-center">
              <span className="text-2xl tracking-tighter">|||||||||||||||</span>
            </div>
          </div>

          {/* Sticky Notes */}
          <div className="flex flex-col sm:flex-row gap-10 items-center flex-1 justify-center pt-8">
            <Link to="/work" className="scrapbook-hover tape block opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <img
                src={stickyWork}
                alt="Work - sticky note"
                className="w-44 md:w-52 drop-shadow-lg"
              />
            </Link>

            <Link to="/contact" className="scrapbook-hover tape block opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <img
                src={stickyContact}
                alt="Contact - sticky note"
                className="w-44 md:w-52 drop-shadow-lg"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom pink strip */}
      <div className="h-24 bg-pink-pastel" />
    </div>
  );
};

export default Index;
