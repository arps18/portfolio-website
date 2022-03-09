import React from "react";
import profile from "../images/image.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMediumM,
  FaEnvelope,
} from "react-icons/fa";

function Card() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl  p-5">
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
            src={profile}
            alt="profile Photo"
          />
        </div>
        <div className="text-center mt-5 ">
          <p className="text-xl sm:text-2xl text-gray-900">Arpan Patel</p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            Web Developer / OS Contributor
          </p>
          <div className="flex align-center justify-center mt-4">
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
        </div>
      </div>
    </div>
  );
}

export default Card;
