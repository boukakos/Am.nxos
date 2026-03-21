import { Link } from "react-router-dom";
import type { CSSProperties } from "react";
import goBackButton from "@/assets/go-back-button.png";
import getInTouchHead from "@/assets/gallery/Get_in_touch_head.png";
import instagramButton from "@/assets/gallery/instagram-button.png";
import emailButton from "@/assets/gallery/email-button.png";

const imageButtonClassName = "w-full transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 cursor-pointer";

const contactHeaderLayout = {
  x: 0,
  y: -110,
  maxWidth: "19rem",
  marginTop: "0.25rem",
  marginBottom: "-10rem",
};

const Contact = () => {
  // Tweak these values in contactHeaderLayout to adjust header size and position quickly.
  const contactHeaderStyle: CSSProperties = {
    display: "block",
    width: "100%",
    maxWidth: contactHeaderLayout.maxWidth,
    transform: `translate(${contactHeaderLayout.x}px, ${contactHeaderLayout.y}px)`,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: contactHeaderLayout.marginTop,
    marginBottom: contactHeaderLayout.marginBottom,
  };

  return (
    <div className="min-h-screen bg-pink-pastel paper-texture px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="relative z-20 inline-block mb-2" style={{ width: "12%" }}>
          <img
            src={goBackButton}
            alt="Go Back"
            className={imageButtonClassName}
          />
        </Link>

        <img
          src={getInTouchHead}
          alt="Get in Touch"
          style={contactHeaderStyle}
        />

        <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
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
              className={imageButtonClassName}
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
              className={imageButtonClassName}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
