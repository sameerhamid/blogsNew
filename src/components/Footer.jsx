import React from "react";
import { FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      {/* <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2023 Company, Inc
          </span>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <FaTwitter color="#1C9CEA" fontSize={28} />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <AiFillInstagram color="#DD1E2F" fontSize={30} />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <FaFacebook color="blue" fontSize={28} />
              </a>
            </li>
          </ul>
        </footer>
      </div> */}

      <div className="my_footer">
        <div className="left">
          Copyright © 2023 All rights reserved | This website is made by Sameer
        </div>
        <div className="right_footer">
          <a href="https://github.com/sameerhamid">
            <FaGithub fontSize={26} />
          </a>
          <a href="https://www.instagram.com/sam_____33r/">
            <FaInstagramSquare color="#E00768" fontSize={30} />
          </a>
          <a href="https://www.linkedin.com/in/sameer-ahmad-19b890265/">
            <FaLinkedin color="blue" fontSize={28} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
