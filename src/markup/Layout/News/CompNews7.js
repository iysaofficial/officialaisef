import React, { Component } from "react";
import Header1 from "../Header1";
import Footer1 from "../Footer1";
import PageTitleNews from "../PageTitleNews";
// Import data
import Gambar from "../../../images/News/Onsoed.webp";

class CompNews7 extends Component {
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
                  Unsoed delegates win four medals at the AISEEF 2024 event
                </h3>

                <div class="full-image text-center mb-5" data-aos="zoom-in">
                  <img src={Gambar} class="img-fluid" alt="GAGAL" />
                </div>

                <p class="ratkankir">
                  Universitas Jenderal Soedirman (Unsoed) Purwokerto again made
                  brilliant achievements in the international arena through its
                  participation in the Asean Innovative Science Environmental
                  and Entrepreneur Fair (AISEEF) 2024. In this prestigious
                  event, the Unsoed delegation won four proud medals. The four
                  delegation teams participated in the Innovation Science and
                  Entrepreneur categories.
                </p>

                <p class="ratkankir">
                  The 5th AISEEF attracted 447 teams from 17 different
                  countries, including the United Arab Emirates, Kazakhstan,
                  Romania, Iran, New Zealand, Turkey, Macedonia, Portugal, the
                  United States, South Korea, China, Thailand, Singapore, Hong
                  Kong, the Philippines, Malaysia, and Indonesia. The
                  participation was divided into 152 offline teams and 295
                  online teams.
                </p>

                <p class="ratkankir">
                  In the Entrepreneur category, the Unsoed delegation led by
                  Aqilah Rahma Adiningrum (Food Technology 2021) won a gold
                  medal with a work entitled "Lowsea: Salty Seasoning from Green
                  Seaweed and Genjer Extract as an Alternative to Reduce the
                  Prevalence of Hypertention in Pregnant Women". Aqilah
                  explained that the idea stemmed from the team's observation of
                  the potential of local wisdom in overcoming the problem of
                  hypertension in pregnant women, by creating a low-sodium
                  seasoning.
                </p>

                <p class="ratkankir">
                  In the same category, the Unsoed delegation led by Aisha Dara
                  Shaina (Animal Husbandry 2021) won a bronze medal with a work
                  entitled "Jero.tech: Biodegradable Paperbags Towards the Green
                  Economy Trend". Meanwhile, in the Innovation Science category,
                  the Unsoed delegation led by Annas Abdillah (Electrical
                  Engineering 2020) won a silver medal with a work entitled
                  "DesMoCam (Detection Smoking Camera): IoT with Machine
                  Learning Integration for Active Smoker Detection to Support
                  Smart Cities in Indonesia".
                </p>

                <p class="ratkankir">
                  In the same category, the Unsoed delegation led by Puji Nur
                  Safitri (Agrotechnology 2021) won a bronze medal with a work
                  entitled "Nanoencapsulation Based on Chinese Betel Leaf
                  Flavonoid Isolate (Peperomia pellucia L.) as a Functional
                  Drink for GERD Recovery".
                </p>

                <p class="ratkankir">
                  The AISEEF 5th 2024 competition was held in a hybrid manner
                  starting from the submission stage on January 15, 2024,
                  presentation and question and answer session on February 2,
                  2024, to the announcement of the winners on February 5, 2024.
                </p>
                <p>
                  Source :
                  <a
                    href="https://jateng.antaranews.com/berita/524562/delegasi-unsoed-sabet-empat-medali-di-ajang-aiseef-2024"
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
export default CompNews7;
