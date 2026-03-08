import { Link } from "react-router-dom";
import homepageImg from "@/assets/homepage-original.jpeg";
import buttonWork from "@/assets/button-work.png";
import buttonContact from "@/assets/button-contact.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Full original homepage image with clickable hotspots */}
      <div className="relative w-full">
        <img
          src={homepageImg}
          alt="Am.nxos portfolio homepage"
          className="w-full"
        />
        {/* WORK button */}
        <Link
          to="/work"
          className="absolute z-10"
          style={{ right: "7%", top: "44%", width: "48%", padding: "1.5%" }}
          aria-label="Work"
          >
          <img
            src={buttonWork}
            alt="Work"
            className="w-full transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 cursor-pointer"
          />
        </Link>
        {/* CONTACT button */}
        <Link
          to="/contact"
          className="absolute z-10"
          style={{ left: "9%", top: "65%", width: "42%", padding: "1.5%" }}
          aria-label="Contact"
        >
          <img
            src={buttonContact}
            alt="Contact"
            className="w-full transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default Index;
