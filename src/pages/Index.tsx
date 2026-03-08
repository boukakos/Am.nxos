import { Link } from "react-router-dom";
import homepageImg from "@/assets/homepage-original.jpeg";

const Index = () => {
  return (
    <div className="min-h-screen bg-pink-pastel flex justify-center">
      <div className="relative w-full max-w-md mx-auto">
        <img
          src={homepageImg}
          alt="Am.nxos portfolio homepage"
          className="w-full h-auto"
        />
        {/* WORK sticky note hotspot */}
        <Link
          to="/work"
          className="absolute scrapbook-hover block"
          style={{ right: "8%", top: "38%", width: "30%", height: "18%" }}
          aria-label="Work"
        />
        {/* CONTACT sticky note hotspot */}
        <Link
          to="/contact"
          className="absolute scrapbook-hover block"
          style={{ left: "15%", top: "60%", width: "30%", height: "20%" }}
          aria-label="Contact"
        />
      </div>
    </div>
  );
};

export default Index;
