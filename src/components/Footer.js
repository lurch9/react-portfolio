import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="fixed-bottom bg-white px-4">
      <a href="https://github.com/lurch9" target="_blank">
        <FaGithub
          size="2.5rem"
          color="black"
          onMouseOver={({ target }) => (target.style.color = "gray")}
          onMouseOut={({ target }) => (target.style.color = "black")}
        />
      </a>
      <a href="https://www.linkedin.com/in/alex-hann-06739416b/" target="_blank">
        <FaLinkedin
          size="2.5rem"
          onMouseOver={({ target }) => (target.style.color = "rgb(40, 140, 178)")}
          onMouseOut={({ target }) => (target.style.color = "rgb(40, 103, 178)")}
        />
      </a>
    </div>
  );
}