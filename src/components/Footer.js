import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMediumM,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex justify-center mt-4">
        <a
          href="https://github.com/arps18"
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
        >
          <FaGithub />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href=""
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-orange-600 hover:bg-orange-600 rounded-full hover:text-white transition-colors duration-300"
        >
          <FaEnvelope />
          <span className="sr-only">Mail</span>
        </a>
        <a
          href="https://twitter.com/arps_1899"
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
        >
          <FaTwitter />
          <span className="sr-only">Twitter</span>
        </a>
        <a
          href="https://medium.com/@arpanp99"
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800 hover:bg-blue-800 rounded-full hover:text-white transition-colors duration-300"
        >
          <FaMediumM />
          <span className="sr-only">Medium</span>
        </a>
      </div>
      <div className="flex justify-center mt-4">
        <p className="text-black mb-4 pr-2 ">
          Built with
          <span className="mr-2" role="img" aria-label="heart">
            💖
          </span>
          by
          <a
            className="text-orange-500 hover:underline ml-2"
            href="mailto:arpanp99@gmail.com"
          >
            Arpan
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
