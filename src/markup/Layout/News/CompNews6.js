import React, { Component } from "react";
import Header1 from "../Header1";
import Footer1 from "../Footer1";
import PageTitleNews from "../PageTitleNews";
// Import data
import Gambar from "../../../images/News/et.png";

class CompNews6 extends Component {
  render() {
    return (
      <>
        <Header1 />

        <div className="page-content bg-white">
          <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt">
            <PageTitleNews
              motherMenu="Media Coverage"
              activeMenu="This Lamongan Student Wins Silver Medal at the
              International Science Innovation Event"
            />
          </div>
        </div>
        <section class="News-detail">
          <div class="container">
            <div class="row">
              <div
                class="berita col-lg-9 mx-auto col-md-11 col-12 my-5 pt-3"
                data-aos="fade-up"
              >
                <h3 class="mb-3 text-center text-capitalize">
                  ITB and Unsri Team Take 3rd Place at AISEEF 2024 with Learning
                  Media Platform
                </h3>

                <div class="full-image text-center mb-5" data-aos="zoom-in">
                  <img src={Gambar} class="img-fluid" alt="GAGAL" />
                </div>

                <p class="ratkankir">
                  The Bandung Institute of Technology (ITB) team, in
                  collaboration with Sriwijaya University (UNSRI), won a bronze
                  medal in the ASEAN Innovative Science, Environmental, And
                  Entrepreneur Fair (AISEEF) 2024 competition. The competition
                  was organized by the Indonesian Young Scientist Association
                  (IYSA) in collaboration with the Indonesia International
                  Institute for Life-Sciences (I3L). The final presentation of
                  this agenda was held on Friday (2/2/2024)..
                </p>

                <p class="ratkankir">
                  The team members are Irfan Walhidayah, M Furqan Nazuli, Yuli
                  Maulani (School of Electrical Engineering and Informatics
                  ITB), Triana Manalu (School of Architecture Planning and
                  Policy Development ITB) and Izzati Adha Pratitis (Nursing
                  Science Sriwijaya University). The work they produced was
                  titled "BLS Sriwijaya: Innovation of Asynchronous Learning
                  Media Basic Life Support as an Effort to Improve the
                  Intellectual Capacity of Indonesian Students."
                </p>

                <p class="ratkankir">
                  BLS Sriwijaya is a platform that aims to improve nursing
                  students' ability in basic life support (BHD) by utilizing
                  information and communication technology. The work explains
                  that the utilization of information and communication
                  technology is very important in improving the ability of
                  nursing students to overcome emergency situations such as
                  respiratory arrest and cardiac arrest. They created a
                  website-based learning media innovation that allows
                  asynchronous learning, which allows self-learning. This
                  research uses the Research and Development (R&D) method with
                  the ADDIE model(Analysis, Design, Development, Implementation,
                  Evaluation).
                </p>

                <p class="ratkankir">
                  In-depth research on BHD shows that nursing students'
                  knowledge is influenced by the learning they participate in.
                  Web-based learning media allows repeated access, anytime and
                  anywhere, according to students' needs. This is particularly
                  important as nurses are often the first to attend and help
                  patients in emergency conditions inside and outside the
                  hospital.
                </p>

                <p class="ratkankir">
                  The BLS Sriwijaya platform, which was developed using
                  technologies such as Visual Studio Code, Trello, Adobe
                  Photoshop, Figma, Draw.io, Miro, and Laravel Framework, has
                  services to register, login, visit the course page, class
                  page, exam page, and home page. Testing shows that this
                  website prototype has a very high level of feasibility and
                  usability, and provides a satisfying user experience.
                </p>

                <p class="ratkankir">
                  Not only that, the team has a development plan that includes
                  expanding the website's functions, improving the midwifery
                  module, establishing a BLS forum, developing a mobile
                  application, and various additional features such as live
                  practice videos and award certificates. They also plan to
                  develop a mobile application called "My BLS Sriwijaya" to make
                  it more accessible to users.
                </p>
                <p>
                  Source :
                  <a
                    href="https://www.itb.ac.id/berita/kolaborasi-membawa-kemenangan-tim-itb-dan-unsri-raih-juara-3-aiseef-2024-dengan-platform-media-pembelajaran/60519"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Click Here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer1 />
      </>
    );
  }
}
export default CompNews6;
