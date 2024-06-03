import React from "react";
import Header from "../../../Layout/Header1";
import Footer from "../../../Layout/Footer1";
import PageTitle from "./../../../Layout/PageTitle";
import bnr1 from "./../../../../images/banner/bnr4.jpg";

const kategori = () => {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- inner page banner --> */}
        <div
          className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt"
          style={{ backgroundImage: "url(" + bnr1 + ")" }}
        >
          <PageTitle motherMenu="List of Winners" activeMenu="List of Winner" />
        </div>
        {/* <!-- inner page banner END --> */}

          <div class="container page">
            <div className="text-center">
              <h3>Choose based on the Category of the event you are participating in</h3>
            </div>
            <div className=" wrapper-btn text-center">
              <a
                href="https://drive.google.com/file/d/1VEN5ToFoa8jdB9FpNeeXGIn64v7MPsL6/view?usp=sharing"
                target="_blank"
                className="btn btn-primary m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Special Award{" "}
              </a>
              <a
                href="/jenjangofl24"
                className="btn btn-primary m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                AISEEF OFFLINE{" "}
              </a>
              <a
                href="/jenjangonl24"
                className="btn btn-primary m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                AISEEF ONLINE{" "}
              </a>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default kategori;
