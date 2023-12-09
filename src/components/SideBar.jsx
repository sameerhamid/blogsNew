import React from "react";

const SideBar = ({ tab, setTab }) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark my_sidebar">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">Socials</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => setTab("home")}>
          <a href="#" className={`nav-link ${tab === "home" && "active"}`}>
            Home
          </a>
        </li>
        <li className="nav-item" onClick={() => setTab("create-post")}>
          <a
            href="#"
            className={`nav-link ${tab === "create-post" && "active"}`}>
            Creat Post
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
