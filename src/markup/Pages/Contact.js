import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from './../Layout/Header1';
import Footer from './../Layout/Footer1';

import bgimg from './../../images/background/bg2.jpg';

class Contact extends Component {

    render() {
        return (
            <>
                <Header />
                <div className="full-section">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary-dark contact-page" style={{ backgroundImage: "url(" + bgimg + ")" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-xs-4">
                                    <div className="row text-white">
                                    </div>
                                </div>
                                <div className="col-lg-8 col-xs-8">
                                    <form className="inquiry-form dzForm"  action="https://formspree.io/f/maygobnk" method='POST'>
                                        <div className="dzFormMsg"></div>
                                        <h3 className="box-title m-t0 m-b10">Contact Us<span className="bg-primary"></span></h3>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-user text-primary"></i></span>
                                                        <input name="Name" type="text" required className="form-control" placeholder="First Name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-mobile text-primary"></i></span>
                                                        <input name="text" type="text" required className="form-control" placeholder="Phone" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-email text-primary"></i></span>
                                                        <input name="Email" type="email" className="form-control" required placeholder="Your Email Id" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-agenda text-primary"></i></span>
                                                        <textarea name="Message" rows="4" className="form-control" required placeholder="Your Message"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button name="submit" type="submit" value="Submit" className="site-button button-lg"> <span>Submit</span> </button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default Contact;