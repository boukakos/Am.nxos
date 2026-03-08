import { Link } from "react-router-dom";
import goBackButton from "@/assets/go-back-button.png";
import instagramButton from "@/assets/gallery/instagram-button.png";
import emailButton from "@/assets/gallery/email-button.png";

const Contact = () => {
  return (
    <div className="min-h-screen bg-pink-pastel paper-texture flex flex-col items-center justify-center px-6 py-16">
      <Link to="/" className="inline-block mb-16" style={{ width: "12%" }}>
        <img
          src={goBackButton}
          alt="Go Back"
          className="w-full transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 cursor-pointer"
        />
      </Link>

      <h1 className="font-marker text-5xl md:text-6xl text-ink-black mb-12">
        Get in Touch
      </h1>

      <div className="flex flex-col sm:flex-row gap-8 items-center">
        <a
          href="https://instagram.com/am.nxos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
          style={{ width: "250px", marginRight: "130px" }}
        >
          <img
            src={instagramButton}
            alt="Instagram"
            className="w-full transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 cursor-pointer"
          />
        </a>

        <a
          href="mailto:amaliaeuangelou@gmail.com"
          className="inline-block"
          style={{ width: "300px", marginLeft: "80px", marginTop: "-50px" }}
        >
          <img
            src={emailButton}
            alt="Send Email"
            className="w-full transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
