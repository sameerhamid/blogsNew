import React from "react";
import { Link } from "react-router-dom";

const Header = ({ tab, setTab }) => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"></ul>

          <div className="text-end">
            <Link
              to="/"
              type="button"
              className="btn btn-outline-light me-2"
              onClick={() => setTab("home")}>
              Home
            </Link>
            <Link
              to="add-new"
              type="button"
              className="btn btn-warning"
              onClick={() => setTab("create-post")}>
              Add New Blog
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
