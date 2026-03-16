import { useParams, Link } from "react-router-dom";
import type { CSSProperties } from "react";
import goBackButton from "@/assets/go-back-button.png";

import ceramic1 from "@/assets/gallery/ceramic-1.jpeg";
import ceramic12 from "@/assets/gallery/ceramic-1.2.jpeg";
import ceramic2 from "@/assets/gallery/ceramic-2.jpeg";
import headCeramicClay from "@/assets/gallery/head_ceramic&clay.png";
import headIllustration from "@/assets/gallery/head_illustartion.png";
import headTattoo from "@/assets/gallery/head_tattoo.png";
import illustration1 from "@/assets/gallery/illustration-1.jpeg";
import illustration2 from "@/assets/gallery/illustration-2.jpeg";
import illustration3 from "@/assets/gallery/illustration-3.jpeg";
import illustration4 from "@/assets/gallery/illustration-4.jpeg";
import illustration5 from "@/assets/gallery/illustration-5.jpeg";
import headPainting from "@/assets/gallery/head-painting.png";
import painting1 from "@/assets/gallery/painting-1.jpeg";
import painting2 from "@/assets/gallery/painting-2.jpeg";
import tattoo1 from "@/assets/gallery/tattoo-1.jpeg";
import tattoo2 from "@/assets/gallery/tattoo-2.jpeg";
import tattoo3 from "@/assets/gallery/tattoo-3.jpeg";
import tattoo4 from "@/assets/gallery/tattoo-4.jpeg";
import tattoo5 from "@/assets/gallery/tattoo-5.jpeg";

type GalleryImage = {
  src: string;
  caption: string;
  detailImages?: { src: string; caption?: string }[];
};

type TitleLayout = {
  x: number;
  y: number;
  maxWidth: string;
  marginBottom: string;
  marginTop?: string;
};

export const galleryData: Record<string, { title: string; titleImage: string; titleLayout: TitleLayout; images: GalleryImage[] }> = {
  ceramics: {
    title: "Ceramic & Clay",
    titleImage: headCeramicClay,
    titleLayout: {
      x: -50,
      y: -110,
      maxWidth: "19rem",
      marginBottom: "-12rem",
      marginTop: "100rem",
    },
    images: [
      {
        src: ceramic1,
        caption: "Ceramic Set - Piece 1",
        detailImages: [
          { src: ceramic1, caption: "Ceramic Set - Piece 1" },
          { src: ceramic12, caption: "Ceramic Set - Piece 1.2" },
        ],
      },
      { src: ceramic2, caption: "Ceramic Set - Piece 2" },
    ],
  },
  illustrations: {
    title: "Illustrations",
    titleImage: headIllustration,
    titleLayout: {
      x: -50,
      y: -110,
      maxWidth: "19rem",
      marginBottom: "-12rem",
      marginTop: "100rem",
    },
    images: [
      { src: illustration1, caption: "h amalia einai to pio omorfo plasma toy kosmoy kai thn agapaw PARA MA PARA POLU" },
      { src: illustration2, caption: "Illustration Series - Piece 2" },
      { src: illustration3, caption: "Illustration Series - Piece 3" },
      { src: illustration4, caption: "Illustration Series - Piece 4" },
      { src: illustration5, caption: "Illustration Series - Piece 5" },
    ],
  },
  paintings: {
    title: "Paintings",
    titleImage: headPainting,
    titleLayout: {
      x: -50,
      y: -70,
      maxWidth: "16rem",
      marginBottom: "-10rem",
      marginTop: "100rem",
    },
    images: [
      { src: painting1, caption: "Painting Collection - Piece 1" },
      { src: painting2, caption: "Painting Collection - Piece 2" },
    ],
  },
  tattoos: {
    title: "Tattoo",
    titleImage: headTattoo,
    titleLayout: {
      x: -50,
      y: -110,
      maxWidth: "19rem",
      marginBottom: "-12rem",
      marginTop: "-10rem",
    },
    images: [
      { src: tattoo1, caption: "Tattoo Collection - Piece 1" },
      { src: tattoo2, caption: "Tattoo Collection - Piece 2" },
      { src: tattoo3, caption: "Tattoo Collection - Piece 3" },
      { src: tattoo4, caption: "Tattoo Collection - Piece 4" },
      { src: tattoo5, caption: "Tattoo Collection - Piece 5" },
    ],
  },
};

const Gallery = () => {
  const { category } = useParams<{ category: string }>();
  const data = galleryData[category || ""];
  const titleStyle: CSSProperties = {
    display: "block",
    width: "100%",
    maxWidth: data?.titleLayout.maxWidth,
    transform: `translate(${data?.titleLayout.x ?? 0}px, ${data?.titleLayout.y ?? 0}px)`,
    marginBottom: data?.titleLayout.marginBottom,
    marginLeft: "auto",
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-pink-pastel flex items-center justify-center font-marker text-2xl">
        Category not found.{" "}
        <Link to="/work" className="underline ml-2">Go back</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-pastel paper-texture px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Link to="/work" className="inline-block mb-2" style={{ width: "12%" }}>
          <img
            src={goBackButton}
            alt="Go Back"
            className="w-full transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 cursor-pointer"
          />
        </Link>

        <div>
          <img
            src={data.titleImage}
            alt={data.title}
            style={titleStyle}
          />
        </div>

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
