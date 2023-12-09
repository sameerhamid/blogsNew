import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"></a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2023 Company, Inc
          </span>
        </div>

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
    </div>
  );
};

export default Footer;
