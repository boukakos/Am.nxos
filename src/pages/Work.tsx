import { Link } from "react-router-dom";
import workPageImg from "@/assets/cutout-work-page.jpeg";

const categories = [
  { label: "Ceramic\n& Clay", path: "/work/ceramics", x: "3%", y: "10%", w: "28%" },
  { label: "Illustrations", path: "/work/illustrations", x: "35%", y: "5%", w: "30%" },
  { label: "Tattoo", path: "/work/tattoos", x: "66%", y: "8%", w: "30%" },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-lilac paper-texture flex flex-col items-center px-6 py-16">
      <Link to="/" className="font-marker text-3xl text-ink-black mb-12 scrapbook-hover inline-block">
        ← Am.nxos
      </Link>

      {/* Original image as background with clickable hotspots */}
      <div className="relative w-full max-w-4xl">
        <img
          src={workPageImg}
          alt="Work categories"
          className="w-full rounded-sm"
        />
        {/* Invisible clickable overlays on each cutout */}
        {categories.map((cat) => (
          <Link
            key={cat.path}
            to={cat.path}
            className="absolute scrapbook-hover block"
            style={{
              left: cat.x,
              top: cat.y,
              width: cat.w,
              height: "80%",
            }}
            aria-label={cat.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
