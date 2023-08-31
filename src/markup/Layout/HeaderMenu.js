import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderMenu extends Component {
  render() {
    return (
      <>
        <ul className="nav navbar-nav">
          <li>
            <Link to={"./"}>
              <span className="ti-home"></span> Home{" "}
            </Link>
          </li>

          <li>
            <Link to={"#"}>
              List Of Winners <i className="fa fa-chevron-down"></i>{" "}
            </Link>
            <ul className="sub-menu left">
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1ji1welz8f3ApJZeTM3PsfSaHdtQZ2RYWkt_jwgMRRt0/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  List of Winner 2022
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/spreadsheets/d/1Fo7itbnl6YqsXy543HCq4wFC11-Zk6ifnxUeH9F4l0Q/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  List of Winner 2023
                </a>
              </li>
              <li>
                <Link
                  to={"./Listwinner"}
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  Special Award 2023
                </Link>
              </li>
            </ul>
          </li>

          {/* PRESSRELEASE */}
          <li>
            <Link to={"#"}>
              Media Coverage <i className="fa fa-chevron-down"></i>
              {""}
            </Link>
            <ul className="sub-menu left">
              <li>
                <a href="/PageNews" rel="noreferrer" className="dez-page">
                  News
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1UdQv8-5s3M6Z-tNXfZAmS-jWoFuSM_sH/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                  className="dez-page"
                >
                  Press Release 2023
                </a>
              </li>
            </ul>
          </li>

          {/* PAGES*/}
          <li>
            <a
              href="https://drive.google.com/file/d/1TmCK_U8rYBSFkVUPsI-w2u_Kj0YxuZU0/view?usp=share_link"
              target="_blank"
              rel="noreferrer noopener"
              className="dez-page"
            >
              Guide Book
            </a>
          </li>
          <li>
            {/* <Link to={'#'}>
              About AISEEF <i className="fa fa-chevron-down"></i>{' '}
            </Link> */}
            {/* className="sub-menu left" */}
          </li>

          <li>
            <Link to={"#"}>
              Curation <i className="fa fa-chevron-down"></i>{" "}
            </Link>
            <ul className="sub-menu left">
              <li>
                {/* <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="dez-page"
                >
                  Curation 2021
                </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="dez-page"
                  >
                    Curation 2022
                  </a>
                </li>  */}
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/1cBMZXryRSq5QrVDx3B0_UqU_QaKVvdMR?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="dez-page"
                  >
                    Curation 2021
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/1yYtOcWtTBfM1ICxLSjKWtb0VdcyK4trk?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="dez-page"
                  >
                    Curation 2022
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/1z0Iabx2X9TJ3tNm5ejm2ALEDykX0_Aip?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="dez-page"
                  >
                    Curation 2023
                  </a>
                </li>
              </li>
            </ul>
          </li>
          <li>
            <Link to={"./Faqs"} rel="noreferrer noopener" className="dez-page">
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to={"./gallery-event"}
              rel="noreferrer noopener"
              className="dez-page"
            >
              Gallery Event
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              Certificate <i className="fa fa-chevron-down"></i>{" "}
            </Link>
            <ul className="sub-menu left">
              <li>
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/1z0Iabx2X9TJ3tNm5ejm2ALEDykX0_Aip?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="dez-page"
                  >
                    Certificate Supervisor
                  </a>
                </li>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to={"./contact"}
              rel="noreferrer noopener"
              className="dez-page"
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* <li> */}
        {/* <a
            href="https://drive.google.com/drive/folders/12UFs2SrShkCtkI1JY5dW8XUiR2TT-c18?usp=share_link"
          >
            Certificate Supervisor
          </a>
        </li> */}
      </>
    );
  }
}
export default HeaderMenu;
