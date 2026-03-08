import { useParams, Link } from "react-router-dom";
import { galleryData } from "./Gallery";
import goBackButton from "@/assets/go-back-button.png";

const PhotoDetail = () => {
  const { category, photoId } = useParams<{ category: string; photoId: string }>();
  const data = galleryData[category || ""];
  const index = parseInt(photoId || "0", 10);
  const img = data?.images[index];

  if (!data || !img) {
    return (
      <div className="min-h-screen bg-paper-white flex items-center justify-center font-marker text-2xl">
        Photo not found.{" "}
        <Link to="/work" className="underline ml-2">Go back</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-pastel paper-texture flex flex-col items-center justify-center px-6 py-12">
      <Link to={`/work/${category}`} className="inline-block mb-10 self-start ml-4 md:ml-16" style={{ width: "12%" }}>
        <img
          src={goBackButton}
          alt="Go Back"
          className="w-full transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 cursor-pointer"
        />
      </Link>

      <div className="tape scrapbook-hover max-w-2xl w-full">
        <img
          src={img.src}
          alt={img.caption}
          className="w-full rounded-sm shadow-xl"
        />
      </div>

      <p className="font-caveat text-2xl text-ink-black mt-6">
        {img.caption} — {index + 1} / {data.images.length}
      </p>
    </div>
  );
};

export default PhotoDetail;
