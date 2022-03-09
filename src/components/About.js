import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";

function About() {
  return (
    <div className="max-w-4xl mt-20 mx-auto">
      <p className="text-2xl text-black md:text-4xl font-bold text-center">
        Hey 👋
      </p>
      <p className="text-base text-gray-600 leading-relaxed mt-4 md:text-xl  text-center">
        I develop awesome Websites using HTML,CSS,Javascript, Applications using
        Flutter & everything in between. Contributing to OpenSource is my
        favourite activity! I enjoy Public Speaking and had a few as well! I
        love to pen down ocassionally Blogs as well!
      </p>
      <ScrollIntoView selector="#tech">
        <div className="mx-auto p-20">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-300" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default About;
