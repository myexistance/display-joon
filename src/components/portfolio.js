import React from "react";

//import stock
import coffee from "../img/coffeeFinder.jpg";
import coffeeUX from "../img/coffeeFinderUX.jpg";
import news from "../img/news.jpg";
import newsFinder from "../img/newsfinder.jpg";
import argenda from "../img/Argenda.jpg";
import stripe from "../img/stripeapi.png";
import rank from "../img/RANK.png"


class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          <div className="row">
          <div className="col-md-4">
              <div className="work-box">


                  <div className="work-img">
                    <a href="https://rank2021.herokuapp.com/" target="_blank">
                      <img src={rank} alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">MTV News</h2>
                        <div className="w-more">
                          <span className="col-sm-8 w-ctegory">
                            <a>React, Mapbox, Superagent</a>
                          </span>
                          <span className="col-sm-4 w-ctegory">
                          <a href="https://github.com/myexistance/RANK"><i class="fa fa-github fa-lg" aria-hidden="true"> github</i></a>
                          </span>

                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

          <div className="col-md-4">
            <div className="work-box">


                <div className="work-img">
                  <a href="https://joonstripe.herokuapp.com/" target="_blank">
                    <img src={stripe} alt="" className="img-fluid" />
                  </a>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-12">
                      <h2 className="w-title">T-shirt selling app using Stripe</h2>
                      <div className="w-more">
                        <span className="col-sm-8 w-ctegory">
                          <a>NodeJS, Express, Heroku deploy</a>
                        </span>
                        <span className="col-sm-4 w-ctegory">
                        <a href="https://github.com/myexistance/StripeAPI"><i class="fa fa-github fa-lg" aria-hidden="true"> github</i></a>
                        </span>

                      </div>{/*w-more*/}
                    </div>{/*col-sm-12*/}
                  </div>{/*row*/}
                </div>{/*work-content*/}
            </div>{/*work-box*/}
          </div>{/*col-md-4*/}

            <div className="col-md-4">
              <div className="work-box">


                  <div className="work-img">
                    <a href="https://myexistance.github.io/CoffeeFinderFinal/" target="_blank">
                      <img src={coffee} alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">Coffee Finder</h2>
                        <div className="w-more">
                          <span className="col-sm-8 w-ctegory">
                            <a>HTML5 CSS3 Bootstrap VanillaJS</a>
                          </span>
                          <span className="col-sm-4 w-ctegory">
                          <a href="https://github.com/myexistance/CoffeeFinderFinal"><i class="fa fa-github fa-lg" aria-hidden="true"> github</i></a>
                          </span>

                        </div>{/*w-more*/}
                      </div>{/*col-sm-12*/}
                    </div>{/*row*/}
                  </div>{/*work-content*/}
              </div>{/*work-box*/}
            </div>{/*col-md-4*/}

            

            <div className="col-md-4">
              <div className="work-box">


                  <div className="work-img">
                    <a href="https://myexistance.github.io/argenda/" target="_blank">
                      <img src={argenda} alt="" className="img-fluid" />
                    </a>
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="w-title">2020 Diary</h2>
                        <div className="w-more">
                          <span className="col-sm-8 w-ctegory">
                            <a>mdbreact ReactJS</a>
                          </span>
                          <span className="col-sm-4 w-ctegory">
                          <a href="https://github.com/myexistance/argenda"><i class="fa fa-github fa-lg" aria-hidden="true"> github</i></a>
                          </span>

                        </div>{/*w-more*/}
                      </div>{/*col-sm-12*/}
                    </div>{/*row*/}
                  </div>{/*work-content*/}
              </div>{/*work-box*/}
            </div>{/*col-md-4*/}


          </div>{/*row*/}
        </div>{/*container*/}
      </section>
    );
  }
}

export default Portfolio;
