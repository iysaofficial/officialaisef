import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import Slider1 from './../../images/main/aisef1.jpg';
import Slider2 from './../../images/main/aisef2.jpg';
import Slider3 from './../../images/main/aisef3.jpg';
import Slider4 from './../../images/main/coming.jpg';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="owl-nav">
      <div className="owl-next la la-angle-right" onClick={onClick} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="owl-nav">
      <div
        className=" owl-prev la la-angle-left"
        onClick={onClick}
        style={{ zIndex: 1 }}
      />
    </div>
  );
}

class HomeOwlSlider extends Component {
  render() {
    var settings = {
      arrows: true,
      dots: true,
      slidesToShow: 1,
      infinite: true,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <Slider
        className="owl-slider owl-carousel owl-theme owl-none"
        {...settings}
      >
        <div className="item slide-item">
          <div className="slide-item-img">
            <img src={Slider4} className="w-100" alt="" />
          </div>
          <div className="slide-content overlay-primary">
            <div className="slide-content-box container">
              <div className="max-w600 text-white">
                <h2 className="text-white font-weight-400">
                  ASEAN INNOVATIVE SCIENCE ENVIRONMENTAL AND ENTREPRENEUR FAIR
                  <br />
                </h2>

                <h2 className="text-white font-weight-400">
                  <b>OPEN REGISTRATION!</b>
                  <br />
                </h2>

                <figure>
                  <a
                    href="https://bit.ly/REGISTRATION-AISEEF-2024"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="site-button m-r10 white button-lg"
                  >
                    Registration
                  </a>
                </figure>
                <a
                  href="https://www.youtube.com/watch?v=f0irpFOXnsE"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="site-button m-r10 white button-lg"
                >
                  After Movie
                </a>
                {/* <a
                  href="https://drive.google.com/file/d/1TmCK_U8rYBSFkVUPsI-w2u_Kj0YxuZU0/view?usp=sharing"
                  className="site-button outline outline-2 button-lg"
                >
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="item slide-item">
          <div className="slide-item-img">
            <img src={Slider1} className="w-100" alt="" />
          </div>
          <div className="slide-content overlay-primary">
            <div className="slide-content-box container">
              <div className="max-w600 text-white">
                <h2 className="text-white font-weight-400">
                ASEAN INNOVATIVE SCIENCE ENVIRONMENTAL AND ENTREPRENEUR FAIR
                  <br />
                </h2>

                <h2 className="text-white font-weight-400">
                  <b>OPEN REGISTRATION!</b>
                  <br />
                </h2>

                <figure>
                  <a
                    href="https://bit.ly/REGISTRATION-AISEEF-2024"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="site-button m-r10 white button-lg"
                  >
                    Registration
                  </a>
                </figure>
                <a
                  href="https://www.youtube.com/watch?v=f0irpFOXnsE"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="site-button m-r10 white button-lg"
                >
                  After Movie
                </a>
                {/* <a
                  href="https://drive.google.com/file/d/1TmCK_U8rYBSFkVUPsI-w2u_Kj0YxuZU0/view?usp=sharing"
                  className="site-button outline outline-2 button-lg"
                >
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="item slide-item">
          <div className="slide-item-img">
            <img src={Slider3} className="w-100" alt="" />
          </div>
          <div className="slide-content overlay-primary">
            <div className="slide-content-box container">
              <div className="max-w600 text-white">
                <h2 className="text-white font-weight-400">
                ASEAN INNOVATIVE SCIENCE ENVIRONMENTAL AND ENTREPRENEUR FAIR
                  <br />
                </h2>

                <h2 className="text-white font-weight-400">
                  <b>OPEN REGISTRATION!</b>
                  <br />
                </h2>

                <figure>
                  <a
                    href="https://bit.ly/REGISTRATION-AISEEF-2024"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="site-button m-r10 white button-lg"
                  >
                    Registration
                  </a>
                </figure>
                <a
                  href="https://www.youtube.com/watch?v=f0irpFOXnsE"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="site-button m-r10 white button-lg"
                >
                  After Movie
                </a>
                {/* <a
                  href="https://drive.google.com/file/d/1TmCK_U8rYBSFkVUPsI-w2u_Kj0YxuZU0/view?usp=sharing"
                  className="site-button outline outline-2 button-lg"
                >
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="item slide-item">
          <div className="slide-item-img">
            <img src={Slider2} className="w-100" alt="" />
          </div>
          <div className="slide-content overlay-primary">
            <div className="slide-content-box container">
              <div className="max-w600 text-white">
                <h2 className="text-white font-weight-400">
                ASEAN INNOVATIVE SCIENCE ENVIRONMENTAL AND ENTREPRENEUR FAIR
                  <br />
                </h2>

                <h2 className="text-white font-weight-400">
                  <b>OPEN REGISTRATION!</b>
                  <br />
                </h2>

                <figure>
                  <a
                    href="https://bit.ly/REGISTRATION-AISEEF-2024"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="site-button m-r10 white button-lg"
                  >
                    Registration
                  </a>
                </figure>
                <a
                  href="https://www.youtube.com/watch?v=f0irpFOXnsE"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="site-button m-r10 white button-lg"
                >
                  After Movie
                </a>
                {/* <a
                  href="https://drive.google.com/file/d/1TmCK_U8rYBSFkVUPsI-w2u_Kj0YxuZU0/view?usp=sharing"
                  className="site-button outline outline-2 button-lg"
                >
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default HomeOwlSlider;
