import React, { Component } from "react";

// Import data
// import NewsData from "../../Data/News.json";

// Import Gambar
import Gambar1 from "../../../images/News/PenelitiMuda.Webp";
import Gambar2 from "../../../images/News/MHSUnimed.WebP";
import Gambar3 from "../../../images/News/MAN1Malang.WebP";
import Gambar4 from "../../../images/News/UNEJ.WebP";
import Gambar5 from "../../../images/News/PelajarLamongan.WebP";

class CompListNews extends Component {
  render() {
    return (
      <>
        <body>
          <div class="container mt-4">
            <div class="row">
              {/* list 1 awal */}
              <div class="col-lg-3 col-md-6 col-sm-12  mb-4">
                <div class="card">
                  <img
                    src={Gambar1}
                    class="card-img-top img-fluid p-2"
                    alt="Gambar Berita 1"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="/News1">
                        368 YOUNG RESEARCHERS FROM 15 COUNTRIES SHOW OFF AT
                        AISEEF 2023
                      </a>
                    </h5>
                    <p class="card-text">
                      Friday, February 10, 2023, the Faculty of Engineering,
                      Diponegoro University collaborated with the Indonesian
                      Young Scientist Association (IYSA) in organizing an event
                      titled ASEAN Innovative Science Environmental and
                      Entrepreneur Fair (AISEEF) 2023.
                    </p>

                    <h1 className="btn-primary btn">
                      <a href="/News1">Read more</a>
                    </h1>
                  </div>
                </div>
              </div>
              {/* list 1 akhir */}
              {/* List 2 awal */}
              <div class="col-lg-3 col-md-6 col-sm-12  mb-4">
                <div class="card">
                  <img
                    src={Gambar2}
                    class="card-img-top img-fluid p-2"
                    alt="Gambar Berita 2"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="/News2">
                        UNIMED Students Win Silver Medals at AISEEF 2023
                      </a>
                    </h5>
                    <p class="card-text">
                      The Medan State University (UNIMED) student team won a
                      silver medal at the 2023 ASEAN Innovative Science
                      Environmental and Entrepreneur Fair (AISEEF) competition.
                    </p>

                    <h1 className="btn-primary btn">
                      <a href="/News2">Read more</a>
                    </h1>
                  </div>
                </div>
              </div>
              {/* List 2 akhir */}
              {/* List 3 awal */}
              <div class="col-lg-3 col-md-6 col-sm-12  mb-4">
                <div class="card">
                  <img
                    src={Gambar3}
                    class="card-img-top img-fluid p-2"
                    alt="Gambar Berita 3"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="/News3">
                        MAN 1 Malang City Wins Gold Medal at AISEF Southeast
                        Asia Event
                      </a>
                    </h5>
                    <p class="card-text">
                      In the framework of the Southeast Asian Level AISEF KTI
                      and Entrepreneur Competition held at BG Junetion Surabaya.
                      The KTI Competition Team (Scientific Writing Competition)
                      and MAN 1 Entrepreneur Malang City received a Gold Medal.
                    </p>

                    <h1 className="btn-primary btn">
                      <a href="/News3">Read more</a>
                    </h1>
                  </div>
                </div>
              </div>
              {/* List 3 akhir */}

              {/* List 4 awal */}
              <div class="col-lg-3 col-md-6 col-sm-12  mb-4">
                <div class="card">
                  <img
                    src={Gambar4}
                    class="card-img-top img-fluid p-2"
                    alt="Gambar Berita 4"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="/News4">
                        Unej students win gold medal in AISEEF 2022
                        international event
                      </a>
                    </h5>
                    <p class="card-text">
                      In the framework of the Southeast Asian Level AISEF KTI
                      and Entrepreneur Competition held at BG Junetion Surabaya.
                      The KTI Competition Team (Scientific Writing Competition)
                      and MAN 1 Entrepreneur Malang City received a Gold Medal.
                    </p>

                    <h1 className="btn-primary btn">
                      <a href="/News4">Read more</a>
                    </h1>
                  </div>
                </div>
              </div>
              {/* List 4 akhir */}
              {/* List 5 awal */}
              <div class="col-lg-3 col-md-6 col-sm-12  mb-4">
                <div class="card">
                  <img
                    src={Gambar5}
                    class="card-img-top img-fluid p-2"
                    alt="Gambar Berita 5"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="/News5">
                        This Lamongan Student Wins Silver Medal at the
                        International Science Innovation Event
                      </a>
                    </h5>
                    <p class="card-text">
                      Having successfully won a gold medal at the Organization
                      For Creativity Innovation and Invention Promotion (OCIIP)
                      World IP Fair 2021 in Nigeria, this Lamongan student has
                      excelled again.
                    </p>

                    <h1 className="btn-primary btn">
                      <a href="/News5">Read more</a>
                    </h1>
                  </div>
                </div>
              </div>
              {/* List 5 akhir */}
            </div>
          </div>
        </body>
      </>
    );
  }
}
export default CompListNews;
