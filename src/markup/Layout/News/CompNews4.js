import React, { Component } from "react";
import Header1 from "../Header1";
import Footer1 from "../Footer1";
import PageTitleNews from "../PageTitleNews";
// Import data
import Gambar from "../../../images/News/UNEJ.WebP";

class CompNews4 extends Component {
  render() {
    return (
      <>
        <Header1 />

        <div className="page-content bg-white">
          <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt">
            <PageTitleNews
              motherMenu="Media Coverage"
              activeMenu="Unej students win gold medal in AISEEF 2022
              international event"
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
                  Unej students win gold medal in AISEEF 2022 international
                  event
                </h3>

                <div class="full-image text-center mb-5" data-aos="zoom-in">
                  <img src={Gambar} class="img-fluid" alt="GAGAL" />
                </div>

                <p class="ratkankir">
                  Students of the Faculty of Agriculture, University of Jember
                  (Unej), East Java won a gold medal in the international
                  scientific paper event in the environmental field Asean
                  Innovative Science Environmental and Entrepreneur Fair
                  (AISEEF) 2022.
                </p>

                <p class="ratkankir">
                  The international competition organized by the Indonesia Young
                  Scientist Association (IYSA) with Diponegoro University on
                  February 2-4, 2022 was attended by 447 teams from 20
                  countries. "Our paper was raised from concerns in the
                  management of liquid waste produced by the textile industry
                  because the liquid waste if not managed properly can damage
                  the soil and water environment," said the Head of the Student
                  Team who won the gold medal, Danil Eka Fahrudin in a media
                  briefing received by ANTARA in Jember, Friday.
                </p>

                <p class="ratkankir">
                  Danil and his friends, namely Nur Laila Magvira, Ahmad
                  Burhanudin, Reza Maulana, and Safira Ummah submitted a
                  scientific paper entitled "Textile Wastewater Bioremediation
                  Using Bacterial Enzyme for Free Pollutant Industrial
                  Environment". "Waste is toxic and when released carelessly
                  into the environment or into the soil, it will damage the
                  physical soil because the good bacteria that make up the soil
                  will die. Similarly, if it is released into the water, for
                  example into the river, it is even more dangerous," he said.
                </p>

                <p class="ratkankir">
                  He said liquid waste from the textile industry cannot
                  decompose by itself and if disposed of carelessly, the impact
                  will leave deposits or residues that will continue to poison
                  soil and water because they cannot be decomposed. "Therefore,
                  we conducted research on how to decompose liquid waste
                  produced by the textile industry by itself. We added liquid
                  waste samples from the textile industry to the bacterium
                  'pseudomonas aeruginosa' as a decomposer," said the
                  Agrotechnology Study Program student.
                </p>

                <p class="ratkankir">
                  He explained that pseudomonas aeruginosa bacteria can
                  decompose water that has been contaminated with fabric dyes,
                  so that after textile wastewater is decomposed from fabric
                  dyes and toxins, the waste can be safely released into the
                  environment. "In our study, it showed that liquid textile
                  waste supplemented with pseudomonas aeruginosa slowly faded in
                  color. It takes about a month for the water to become clean
                  which indicates all the colors and toxins have decomposed," he
                  said.
                </p>

                <p class="ratkankir">
                  Although his scientific work is still limited to the results
                  of research in the laboratory, he hopes that it can be
                  implemented soon to help manage textile industry liquid waste
                  that has the potential to damage the environment. "The price
                  of bacterial isolate is still fairly expensive, but it can
                  still be propagated independently. The price per 100 milli
                  liters ranges from Rp300 to 400 thousand, but the bacteria can
                  be cultured, so it can save costs because once purchased it
                  can be used forever by multiplying it yourself, "said Danil
                  Eka Fahrudin.
                </p>
                <p>
                  Source :
                  <a
                    href="https://www.antaranews.com/berita/2711785/mahasiswa-unej-sabet-medali-emas-ajang-internasional-aiseef-2022"
                    target="_blank"
                    rel='noreferrer noopener'
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
export default CompNews4;
