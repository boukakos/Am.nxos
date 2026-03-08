import { useParams, Link } from "react-router-dom";
import { galleryData } from "./Gallery";

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
      <Link
        to={`/work/${category}`}
        className="inline-block bg-sticky-yellow px-6 py-3 font-caveat text-xl text-ink-black rotate-[-2deg] scrapbook-hover shadow-md mb-10 self-start ml-4 md:ml-16"
      >
        ← Go Back
      </Link>

      <div className="tape scrapbook-hover max-w-2xl w-full">
        <img
          src={img}
          alt={`${data.title} work ${index + 1}`}
          className="w-full rounded-sm shadow-xl"
        />
      </div>

      <p className="font-caveat text-2xl text-ink-black mt-6">
        {data.title} — {index + 1} / {data.images.length}
      </p>
    </div>
  );
};

export default PhotoDetail;
