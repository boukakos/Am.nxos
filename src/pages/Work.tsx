import { Link } from "react-router-dom";
import goBackButton from "@/assets/go-back-button.png";
import ceramicButton from "@/assets/gallery/ceramic-and-clay-button.png";
import illustrationButton from "@/assets/gallery/illystation-button.png";
import paintingButton from "@/assets/gallery/button-painting.png";
import tattooButton from "@/assets/gallery/tattoo-button.png";

const categories = [
  { src: ceramicButton, alt: "Ceramic & Clay", path: "/work/ceramics" },
  { src: illustrationButton, alt: "Illustrations", path: "/work/illustrations" },
  { src: paintingButton, alt: "Paintings", path: "/work/paintings" },
  { src: tattooButton, alt: "Tattoo", path: "/work/tattoos" },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-pink-pastel flex flex-col items-center px-6 py-16">
      <Link to="/" className="inline-block mb-12" style={{ width: "12%" }}>
        <img
          src={goBackButton}
          alt="Go Back"
          className="w-full transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 cursor-pointer"
        />
      </Link>

      <div className="flex flex-col items-center gap-10 w-full max-w-md">
        {categories.map((cat) => (
          <Link
            key={cat.path}
            to={cat.path}
            className="inline-block"
            style={{ width: "80%" }}
          >
            <img
              src={cat.src}
              alt={cat.alt}
              className="w-full transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
