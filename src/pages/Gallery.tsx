import { useParams, Link } from "react-router-dom";

import ceramics1 from "@/assets/gallery/ceramics-1.png";
import ceramics2 from "@/assets/gallery/ceramics-2.png";
import illustrations1 from "@/assets/gallery/illustrations-1.png";
import illustrations2 from "@/assets/gallery/illustrations-2.png";
import tattoos1 from "@/assets/gallery/tattoos-1.png";
import tattoos2 from "@/assets/gallery/tattoos-2.png";

const galleryData: Record<string, { title: string; images: string[] }> = {
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
    <div className="min-h-screen bg-paper-white paper-texture px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Go back tape button */}
        <Link
          to="/work"
          className="inline-block bg-sticky-yellow px-6 py-3 font-caveat text-xl text-ink-black rotate-[-2deg] scrapbook-hover shadow-md mb-10"
        >
          ← Go Back
        </Link>

        <h1 className="font-marker text-4xl md:text-5xl text-ink-black mb-10">
          {data.title}
        </h1>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 gap-6 space-y-6">
          {data.images.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid tape scrapbook-hover opacity-0 animate-fade-in overflow-hidden rounded-sm"
              style={{ animationDelay: `${0.2 + i * 0.2}s` }}
            >
              <img
                src={img}
                alt={`${data.title} work ${i + 1}`}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
