import React, { Component } from "react";
import Header1 from "../../Layout/Header1";
import Footer1 from "../../Layout/Footer1";
import PageTitle from "../../Layout/PageTitle";
import CompListNews from "../../Layout/News/CompListNews";

// import news

class PageNews extends Component {
  render() {
    return (
      <>
        <Header1 />

        <div className="page-content bg-white">
          <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt">
            <PageTitle motherMenu="Media Coverage" activeMenu="News" />
          </div>
        </div>
        <CompListNews />

        <Footer1 />
      </>
    );
  }
}
export default PageNews;
