import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import footerImg from "../../assets/new-york-times-logo-footer.png";

const Footer = () => {
  return (
    <div className="w-full h-[200px] sm:h-[100px] border-t-2 border-gray-300 flex flex-col justify-center items-center sm:flex-row sm:justify-center sm:items-center gap-2 sm:gap-6">
      <div className="">
        <img
          className="h-[80px] sm:h-[60px] w-[60px] object-cover"
          src={footerImg}
          alt="logo footer new york times"
        />
      </div>
      <div className="flex gap-2 items-center">
        <h4 className="text-black text-lg font-bold">
          Creado por Matias Arias
        </h4>
        <FaHeart className="text-xl text-red-800" />
      </div>

      <div className="flex gap-6">
        <a href="https://github.com/matiarias" target="_blank">
          <FaGithub className="text-4xl md:text-3xl hover:text-red-800" />
        </a>
        <a href="https://www.linkedin.com/in/matiasarias27" target="_blank">
          <FaLinkedinIn className="text-4xl md:text-3xl hover:text-red-800" />
        </a>
        <a href="https://www.instagram.com/_matiarias/?hl=es" target="_blank">
          <FaInstagram className="text-4xl md:text-3xl hover:text-red-800" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
