import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ThemeButton from "./Element/ThemeButton/ThemeButton";

import Homepage from "./Pages/Homepage1";
import Error403 from "./Pages/Error/Error403";
import Error404 from "./Pages/Error/Error404";
import Error405 from "./Pages/Error/Error405";

// Import News
import PageNews from "./Pages/News/PageNews";
import CompListNews from "./Layout/News/CompListNews";
import CompNews1 from "./Layout/News/CompNews1";
import CompNews2 from "./Layout/News/CompNews2";
import CompNews3 from "./Layout/News/CompNews3";
import CompNews4 from "./Layout/News/CompNews4";
import CompNews5 from "./Layout/News/CompNews5";
import CompNews6 from "./Layout/News/CompNews6";
import CompNews7 from "./Layout/News/CompNews7";
import CompNews8 from "./Layout/News/CompNews8";
import CompNews9 from "./Layout/News/CompNews9";  

import Faqs from "./Pages/Faq";
import Contact from "./Pages/Contact";
import ProtfolioFullWidth from "./Pages/Protfolio/ProtfolioFullWidth";
import Listwinner from "./Pages/Protfolio/Listwinner";

import ScrollToTop from "./Element/ScrollToTop";

class Markup extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <div className="page-wraper">
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/error-403" exact component={Error403} />
            <Route path="/error-405" exact component={Error405} />
            <Route path="/faqs" exact component={Faqs} />
            <Route path="/contact" exact component={Contact} />

            {/* Variabel News */}
            <Route path="/PageNews" exact component={PageNews} />
            <Route path="/CompListNews" exact component={CompListNews} />
            <Route path="/News1" exact component={CompNews1} />
            <Route path="/News2" exact component={CompNews2} />
            <Route path="/News3" exact component={CompNews3} />
            <Route path="/News4" exact component={CompNews4} />
            <Route path="/News5" exact component={CompNews5} />
            <Route path="/News6" exact component={CompNews6} />
            <Route path="/News7" exact component={CompNews7} />
            <Route path="/News8" exact component={CompNews8} />
            <Route path="/News9" exact component={CompNews9} />

            <Route path="/gallery-event" exact component={ProtfolioFullWidth} />
            <Route path="/Listwinner" exact component={Listwinner} />
            <Route path="*" exact={true} component={Error404} />
          </Switch>
        </div>
        <ScrollToTop />
        <ThemeButton />
      </BrowserRouter>
    );
  }
}

export default Markup;
