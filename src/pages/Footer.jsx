import React from "react";
import { Link } from "react-router-dom";
import { SiTwitter, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full py-14 bg-black text-white  flex justify-around items-center ">
      <div className="flex gap-5 cursor-pointer">
        <a href="https://mobile.twitter.com/home" target="_anil">
          <SiTwitter size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/anil-kumar-7311a3211/"
          target="_anil"
        >
          <SiLinkedin size={25} />
        </a>
      </div>

      <div>
        <span>© 2022 THEROOMIS PVT. LTD. </span>
        <div className="ml-12">
          {" "}
          Country{" "}
          <span className="font-bold hover:text-cyan-300 cursor-pointer">
            India USA UAE
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
