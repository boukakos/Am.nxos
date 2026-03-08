import { useParams, Link } from "react-router-dom";

import ceramics1 from "@/assets/gallery/ceramics-1.png";
import ceramics2 from "@/assets/gallery/ceramics-2.png";
import illustrations1 from "@/assets/gallery/illustrations-1.png";
import illustrations2 from "@/assets/gallery/illustrations-2.png";
import tattoos1 from "@/assets/gallery/tattoos-1.png";
import tattoos2 from "@/assets/gallery/tattoos-2.png";

export const galleryData: Record<string, { title: string; images: string[] }> = {
  ceramics: {
    title: "Ceramic & Clay",
    images: [ceramics1, ceramics2],
  },
  illustrations: {
    title: "Illustrations",
    images: [illustrations1, illustrations2],
  },
  tattoos: {
    title: "Tattoo",
    images: [tattoos1, tattoos2],
  },
};

const rotations = ["rotate-2", "-rotate-3", "rotate-1", "-rotate-2", "rotate-3", "-rotate-1"];

const Gallery = () => {
  const { category } = useParams<{ category: string }>();
  const data = galleryData[category || ""];

  if (!data) {
    return (
      <div className="min-h-screen bg-paper-white flex items-center justify-center font-marker text-2xl">
        Category not found.{" "}
        <Link to="/work" className="underline ml-2">Go back</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper-white paper-texture px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/work"
          className="inline-block bg-sticky-yellow px-5 py-2.5 font-caveat text-lg text-ink-black -rotate-2 scrapbook-hover shadow-md mb-8"
        >
          ← Go Back
        </Link>

        <h1 className="font-marker text-3xl md:text-4xl text-ink-black mb-8 rotate-1">
          {data.title}
        </h1>

        {/* Scattered gallery layout */}
        <div className="flex flex-wrap gap-6 justify-center">
          {data.images.map((img, i) => (
            <Link
              key={i}
              to={`/work/${category}/${i}`}
              className={`tape scrapbook-hover opacity-0 animate-fade-in ${rotations[i % rotations.length]} max-w-[280px] md:max-w-[320px]`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <img
                src={img}
                alt={`${data.title} work ${i + 1}`}
                className="w-full h-auto shadow-lg"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
