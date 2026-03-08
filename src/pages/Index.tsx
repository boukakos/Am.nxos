import { Link } from "react-router-dom";
import characterImg from "@/assets/character-3d.png";
import stickyWork from "@/assets/sticky-work.png";
import stickyContact from "@/assets/sticky-contact.png";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Split background */}
      <div className="absolute inset-0">
        <div className="h-[55%] bg-pink-pastel" />
        <div className="h-[45%] bg-paper-white paper-texture" />
      </div>

      {/* Content canvas */}
      <div className="relative z-10 max-w-lg mx-auto min-h-screen px-4 py-8">
        {/* Am.nxos title - top left, slightly rotated */}
        <h1 className="font-marker text-5xl md:text-6xl text-ink-black leading-[0.85] -rotate-3 ml-2 mb-0 select-none">
          Am.<br />nxos
        </h1>

        {/* Character - overlapping right, pushed up */}
        <div className="flex justify-end -mt-16 mr-[-20px]">
          <img
            src={characterImg}
            alt="3D character in yellow tracksuit"
            className="max-h-[340px] w-auto drop-shadow-xl rotate-2"
          />
        </div>

        {/* Collage cluster zone - receipt + sticky notes overlapping */}
        <div className="relative mt-[-40px] min-h-[500px]">
          {/* Receipt - left side, slight rotation */}
          <div className="absolute left-0 top-0 w-56 md:w-64 rotate-[1deg] z-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <div className="receipt">
              <div className="text-center mb-2">
                <span className="inline-block border-2 border-ink-black rounded-full px-3 py-0.5 font-marker text-xs tracking-wide">
                  ABOUT ME
                </span>
              </div>
              <p className="text-center text-[10px] tracking-widest mb-2">★ ★ ★</p>
              <div className="flex justify-center mb-1.5">
                <span className="text-sm tracking-wider">●●●●●●●●●●●●●●●</span>
              </div>
              <p className="text-xs font-bold">✂ AMALIA ✂</p>
              <p className="text-xs">THESSALONIKI, GR</p>
              <p className="text-xs mb-2">VISUAL ARTIST</p>
              <div className="flex justify-center mb-1.5">
                <span className="text-sm tracking-wider">●●●●●●●●●●●●●●●</span>
              </div>
              <p className="text-xs">ILLUSTRATIONS</p>
              <p className="text-xs">TATOOS</p>
              <p className="text-xs mb-2">& MIXED MEDIA</p>
              <div className="flex justify-center mb-1.5">
                <span className="text-sm tracking-wider">●●●●●●●●●●●●●●●</span>
              </div>
              <p className="text-center text-[10px] tracking-widest mb-1">★ ★ ★</p>
              <div className="flex justify-center">
                <span className="text-lg tracking-tighter">|||||||||||||||</span>
              </div>
            </div>
          </div>

          {/* WORK sticky - right side, overlapping receipt */}
          <Link
            to="/work"
            className="absolute right-4 top-8 z-20 scrapbook-hover tape rotate-3 opacity-0 animate-fade-in block"
            style={{ animationDelay: "0.35s" }}
          >
            <img
              src={stickyWork}
              alt="Work"
              className="w-40 md:w-48 drop-shadow-lg"
            />
          </Link>

          {/* CONTACT sticky - center-left, lower, overlapping both */}
          <Link
            to="/contact"
            className="absolute left-16 top-[260px] z-20 scrapbook-hover tape -rotate-[4deg] opacity-0 animate-fade-in block"
            style={{ animationDelay: "0.5s" }}
          >
            <img
              src={stickyContact}
              alt="Contact"
              className="w-40 md:w-48 drop-shadow-lg"
            />
          </Link>

          {/* Decorative tape piece floating */}
          <div
            className="absolute right-8 top-[320px] w-16 h-6 bg-tape-beige/70 rotate-[15deg] rounded-sm shadow-sm z-30 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          />
        </div>
      </div>

      {/* Bottom pink strip */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-pink-pastel z-0" />
    </div>
  );
};

export default Index;
