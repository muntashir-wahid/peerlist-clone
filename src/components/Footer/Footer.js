import React from "react";
import logo from "./../../assets/images/PeerlistWhite.webp";
import footerLine from "./../../assets/images/footerline.svg";
import FooterLinks from "./FooterLinks";

const footerLinks = [
  { link: "/", content: "Individuals" },
  { link: "/", content: "Recruiters" },
  { link: "/", content: "Find Jobs" },
  { link: "/", content: "Blog" },
  { link: "/", content: "Changelog" },
  { link: "/", content: "Content" },
  { link: "/", content: "Code of conduct" },
  { link: "/", content: "Privecy for humans" },
  { link: "/", content: "Terms and conditions" },
];

const Footer = () => {
  return (
    <footer className="bg-black-dark text-white">
      <div className="custome-container lg:pt-20 pt-10">
        <div className="flex gap-6 items-start justify-between flex-wrap py-4">
          <div>
            <img className="w-36" src={logo} alt="Logo" />
            <p className="text-base font-light mb-6 mt-1">
              The Professional Network you were waiting for.
            </p>
            <button>Join Peerlist</button>
          </div>
          <ul className="list-none grid grid-cols-2 lg:grid-cols-3">
            {footerLinks.map((link, i) => (
              <FooterLinks key={i} data={link} />
            ))}
          </ul>
        </div>
        <div>
          <img className="py-4" src={footerLine} alt="" />
          <p className="text-sm font-light text-center py-4">
            &#169; 2023 Peerlist.Inc
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
