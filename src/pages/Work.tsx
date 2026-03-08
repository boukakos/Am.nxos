import { Link } from "react-router-dom";
import cutoutCeramic from "@/assets/cutout-ceramic.png";
import cutoutIllustrations from "@/assets/cutout-illustrations.png";
import cutoutTattoo from "@/assets/cutout-tattoo.png";

const Work = () => {
  return (
    <div className="min-h-screen bg-lilac paper-texture flex flex-col items-center px-4 py-12 overflow-hidden">
      <Link to="/" className="font-marker text-2xl text-ink-black mb-8 scrapbook-hover inline-block -rotate-2">
        ← Am.nxos
      </Link>

      {/* Organic collage cluster */}
      <div className="relative w-full max-w-xl min-h-[600px] mx-auto">
        {/* Ceramic vase - left, tilted */}
        <Link
          to="/work/ceramics"
          className="absolute left-0 md:left-4 top-0 scrapbook-hover tape opacity-0 animate-fade-in block"
          style={{ animationDelay: "0.2s" }}
        >
          <img src={cutoutCeramic} alt="Ceramic & Clay" className="w-36 md:w-44 drop-shadow-xl -rotate-3" />
          <span className="font-caveat text-xl text-ink-black block mt-2 -rotate-2">Ceramic<br/>& Clay</span>
        </Link>

        {/* Face / Illustrations - center, overlapping */}
        <Link
          to="/work/illustrations"
          className="absolute left-1/2 -translate-x-1/2 top-[-10px] scrapbook-hover tape opacity-0 animate-fade-in block z-10"
          style={{ animationDelay: "0.4s" }}
        >
          <img src={cutoutIllustrations} alt="Illustrations" className="w-40 md:w-52 drop-shadow-xl rotate-2" />
          <span className="font-caveat text-xl text-pink-pastel block mt-2 text-center rotate-1">Illustrations</span>
        </Link>

        {/* Tattoo flower - right, tilted other way */}
        <Link
          to="/work/tattoos"
          className="absolute right-0 md:right-4 top-12 scrapbook-hover tape opacity-0 animate-fade-in block"
          style={{ animationDelay: "0.6s" }}
        >
          <img src={cutoutTattoo} alt="Tattoo" className="w-36 md:w-44 drop-shadow-xl rotate-[5deg]" />
          <span className="font-caveat text-xl text-secondary-foreground block mt-2 text-right rotate-3">Tattoo</span>
        </Link>

        {/* Floating tape accents */}
        <div className="absolute left-[30%] top-[55%] w-14 h-5 bg-tape-beige/60 -rotate-[12deg] rounded-sm shadow-sm" />
        <div className="absolute right-[20%] top-[80%] w-12 h-5 bg-tape-beige/70 rotate-[8deg] rounded-sm shadow-sm" />
      </div>
    </div>
  );
};

export default Work;
