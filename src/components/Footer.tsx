import React from "react";
// @ts-ignore
import imgGithub from "../IMGS/img_github.png";
// @ts-ignore
import imgInstagram from "../IMGS/img_instagram.png";
// @ts-ignore
import imgLinkedin from "../IMGS/img_linkedin.png";

const Footer: React.FC = () => {
  return (
    <footer>
      <a className="glassIco" href="https://github.com/khalilsalomao">
        <img src={imgGithub} alt="Github" />
      </a>
      <a className="glassIco" href="https://www.instagram.com/khalilsallomao/">
        <img src={imgInstagram} alt="Instagram" />
      </a>
      <a className="glassIco" href="https://www.linkedin.com/in/khalilsalomao/">
        <img src={imgLinkedin} alt="LinkedIn" />
      </a>
    </footer>
  );
};

export default Footer;