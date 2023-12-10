import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ tab, setTab }) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark my_sidebar">
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">My Blogs</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => setTab("home")}>
          <Link to="/" className={`nav-link ${tab === "home" && "active"}`}>
            Home
          </Link>
        </li>
        <li className="nav-item" onClick={() => setTab("create-post")}>
          <Link
            to="add-new"
            className={`nav-link ${tab === "create-post" && "active"}`}>
            Add New Blog
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="https://github.com/sameerhamid"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          target="_blank">
          <img
            src="https://avatars.githubusercontent.com/u/93476000?v=4"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Sameer</strong>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
