import React, { Component } from "react";
import Header1 from "../Header1";
import Footer1 from "../Footer1";
import PageTitleNews from "../PageTitleNews";
// Import data
import Gambar from "../../../images/News/PelajarLamongan.WebP";

class CompNews5 extends Component {
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
                  This Lamongan Student Wins Silver Medal at the International
                  Science Innovation Event
                </h3>

                <div class="full-image text-center mb-5" data-aos="zoom-in">
                  <img src={Gambar} class="img-fluid" alt="GAGAL" />
                </div>

                <p class="ratkankir">
                  Having successfully won a gold medal at the Organization For
                  Creativity Innovation and Invention Promotion (OCIIP) World IP
                  Fair 2021 in Nigeria, this Lamongan student has excelled
                  again. This time, he won the Silver Medal at the 2022 Asian
                  Innovative Science Environmental and Entrepreneur Fair
                  (AISEEF).
                </p>

                <p class="ratkankir">
                  The student with a myriad of achievements is Mohammad Haryo
                  Mukti Wibowo, a grade VIII student of SMP Negeri 2 Lamongan
                  who succeeded in eliminating 508 participants from 22
                  countries through the scientific work of teenagers LaDoS
                  Edible Drinking Straw. Ryo, as this smart student is usually
                  called, won a Silver Medal at the 2022 Asian Innovative
                  Science Environmental and Entrepreneur Fair (AISEEF) event
                  held by the Faculty of Engineering, Diponegoro University,
                  Semarang.
                </p>

                <p class="ratkankir">
                  "This event is held online and offline. The selection was
                  carried out step by step from February 2 to 5," Mohammad Haryo
                  Mukti Wibowo told reporters on Thursday (10/2/2022). Ryo
                  revealed that he could win the Silver Medal at the
                  international event by utilizing Sea Wine or Latoh and Dragon
                  Fruit Skin. These two ingredients, he uses as an
                  environmentally friendly drink straw.
                </p>

                <p class="ratkankir">
                  "This idea came about because of the amount of plastic waste
                  that makes the environment damaged. Plastic waste is difficult
                  to decompose in a short time, while organic waste such as
                  dragon fruit skin is also rarely used optimally, "said Ryo.
                  Reflecting on this, said Ryo, Team Sneda Innovation Club (SIC)
                  then tried to provide a solution by making environmentally
                  friendly straws that can be eaten or decomposed in the short
                  term. Sea grapes, according to Ryo, are used as straw coatings
                  so that they are not quickly damaged when exposed to water or
                  used for drinking.
                </p>

                <p class="ratkankir">
                  "Sea grapes have a function as a flavor neutralizer and also
                  as a straw coating to make it more durable," said Ryo. What
                  Ryo achieved also received appreciation from his school. The
                  Principal of SMPN 2 Lamongan Yayuk Setia Rahayu admitted that
                  he was proud of Ryo who for the second time succeeded in
                  making the school, Lamongan and the nation proud. For Ryo's
                  achievements, Yayuk hopes that this can make more enthusiasm
                  for the school in improving coaching in the field of
                  Olympiades and Youth Scientific Work.
                </p>

                <p class="ratkankir">
                  "Great, congratulations to Mas Ryo for the second time to make
                  Indonesia and Lamongan proud, especially SMPN 2 Lamongan in
                  the international event," said Yayuk proudly. Yayuk hopes that
                  what Ryo has done will be an example and example for other
                  students to excel more. In addition, continued Yayuk, Ryo's
                  achievement can be a trigger for schools to be even more
                  active in educating students. "Hopefully more students will
                  follow in Mas Ryo's footsteps to win the Championship. The
                  point doesn't stop at just one student. And we will stop at
                  nothing to keep achieving," he concluded.
                </p>
                <p>
                  Source :
                  <a
                    href="https://www.detik.com/jatim/jatim-moncer/d-5936894/pelajar-lamongan-ini-raih-silver-medal-di-ajang-inovasi-sains-internasional"
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
export default CompNews5;
