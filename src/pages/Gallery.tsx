import { useParams, Link } from "react-router-dom";
import goBackButton from "@/assets/go-back-button.png";

import ceramics1 from "@/assets/gallery/ceramics-1.png";
import ceramics2 from "@/assets/gallery/ceramics-2.png";
import illustrations1 from "@/assets/gallery/illustrations-1.png";
import illustrations2 from "@/assets/gallery/illustrations-2.png";
import tattoos1 from "@/assets/gallery/tattoos-1.png";
import tattoos2 from "@/assets/gallery/tattoos-2.png";

export const galleryData: Record<string, { title: string; images: { src: string; caption: string }[] }> = {
  ceramics: {
    title: "Ceramic & Clay",
    images: [
      { src: ceramics1, caption: "Handcrafted ceramic vase" },
      { src: ceramics2, caption: "Clay sculpture piece" },
    ],
  },
  illustrations: {
    title: "Illustrations",
    images: [
      { src: illustrations1, caption: "Portrait illustration" },
      { src: illustrations2, caption: "Character sketch" },
    ],
  },
  tattoos: {
    title: "Tattoo",
    images: [
      { src: tattoos1, caption: "Floral tattoo design" },
      { src: tattoos2, caption: "Fine line tattoo art" },
    ],
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
        <Link to="/work" className="inline-block mb-10" style={{ width: "12%" }}>
          <img
            src={goBackButton}
            alt="Go Back"
            className="w-full transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 cursor-pointer"
          />
        </Link>

        <h1 className="font-marker text-4xl md:text-5xl text-ink-black mb-10">
          {data.title}
        </h1>

        <div className="columns-1 sm:columns-2 gap-6 space-y-6">
          {data.images.map((img, i) => (
            <Link
              key={i}
              to={`/work/${category}/${i}`}
              className="block break-inside-avoid tape scrapbook-hover opacity-0 animate-fade-in overflow-hidden rounded-sm"
              style={{ animationDelay: `${0.2 + i * 0.2}s` }}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full object-cover"
              />
              <p className="font-caveat text-lg text-ink-black text-center mt-2 pb-2">{img.caption}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
