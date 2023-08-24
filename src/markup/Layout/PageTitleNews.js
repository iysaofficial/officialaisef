import React from "react";
import { Link } from "react-router-dom";

const PageTitleNews = ({ motherMenu, activeMenu }) => {
  return (
    <div className="container">
      <div className="dlab-bnr-inr-entry">
        <h1 className="text-white">{motherMenu}</h1>

        <div className="breadcrumb-row">
          <ul className="list-inline">
            <li>
              <Link to={"/PageNews"}>News</Link>
            </li>
            <li className="ml-1">{activeMenu}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageTitleNews;
