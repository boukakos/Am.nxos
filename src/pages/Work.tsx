import { Link } from "react-router-dom";
import cutoutCeramic from "@/assets/cutout-ceramic.png";
import cutoutIllustrations from "@/assets/cutout-illustrations.png";
import cutoutTattoo from "@/assets/cutout-tattoo.png";

const categories = [
  { img: cutoutCeramic, label: "Ceramic\n& Clay", path: "/work/ceramics", delay: "0.2s" },
  { img: cutoutIllustrations, label: "Illustrations", path: "/work/illustrations", delay: "0.4s" },
  { img: cutoutTattoo, label: "Tattoo", path: "/work/tattoos", delay: "0.6s" },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-lilac paper-texture flex flex-col items-center justify-center px-6 py-16">
      <Link to="/" className="font-marker text-3xl text-ink-black mb-12 scrapbook-hover inline-block">
        ← Am.nxos
      </Link>

      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center justify-center">
        {categories.map((cat) => (
          <Link
            key={cat.path}
            to={cat.path}
            className="scrapbook-hover tape flex flex-col items-center opacity-0 animate-fade-in"
            style={{ animationDelay: cat.delay }}
          >
            <img
              src={cat.img}
              alt={cat.label}
              className="w-40 md:w-52 lg:w-60 drop-shadow-xl"
            />
            <span className="font-caveat text-2xl md:text-3xl text-ink-black mt-4 whitespace-pre-line text-center leading-tight">
              {cat.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
