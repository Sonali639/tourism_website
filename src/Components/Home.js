import React from "react";
import Header from "./Header";
import "./style.css";
import Slider from "react-slick";
import Travel from "../Assets/Videos/travelvideo.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testi from "../Assets/ImagesTourList/04.png";
import "./VideoOverlay.css";
{
  /*import Typewriter from 'typewriter-effect/dist/core';
new Typewriter('#typewriter', {
  strings: ['Live, Travel, Explore','Travel, dream, repeat.', 'Wander, Dream, Discover.'],
  autoStart: true,
});*/
}
// import Videos from '../Assets/Videos/travelvideo.mp4'

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
  };

  // const videoSrc = "../Assets/Videos/travelvideo.mp4";

  return (
    <div>
      {/* <BackToTopButton/> */}

      <div className="bg-img-home">
        <Header />
        <Slider {...sliderSettings}>
          <div className="py-5 my-5">
            <div className="py-5 px-5">
              <div className="container-fluid py-5">
                <div className=" pt-md-">
                  <div className=" text-white mainHeading2"><span>Explore The World</span> with Us</div>
                  <div className="text-white "  style={{fontSize:'20px'}}>Unleash your wanderlust with our tourism website. Discover stunning destinations, immerse in diverse cultures, and create unforgettable memories. Explore curated tours, indulge in local experiences, and let your travel dreams come true. Start your adventure today!</div>
                  <div className="travel-list-btn  pt-4">
                 <a href="./tourList"><button
                    type="button"
                    class="btn btn-outline-success btn-white py-3 px-5 " >
                    Explore Tours
                  </button>
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add more slider items as needed */}
          <div className="py-5 my-5">
            <div className="py-5 px-5">
              <div className="container-fluid py-5">
                <div className="pt-md-5">
                  <div className="font-50px text-white">Home title 2</div>
                  <div className="travel-list-btn pt-4">
                 <a href="./tourList"><button
                    type="button"
                    class="btn btn-outline-success btn-white py-3 px-5 " >
                    Explore HolyPlaces
                  </button>
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 my-5">
            <div className="py-5 px-5">
              <div className="container-fluid py-5">
              <div className="pt-md-5">
                  <div className="font-50px text-white">Home title 3</div>
                  <div className="travel-list-btn pt-4">
                 <a href="./tourList"><button
                    type="button"
                    class="btn btn-outline-success btn-white py-3 px-5 " >
                    Explore HolyPlaces
                  </button>
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 my-5">
            <div className="py-5 px-5">
              <div className="container-fluid py-5">
              <div className="pt-md-5">
                  <div className="font-50px text-white">Home title 4</div>
                  <div className="travel-list-btn pt-4">
                 <a href="./tourList"><button
                    type="button"
                    class="btn btn-outline-success btn-white py-3 px-5 " >
                    Explore HolyPlaces
                  </button>
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <section
        className="py-5"
        style={{
          backgroundImage:
            "url(https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/10/landing-pattern-gallery.jpg)",
        }}
      >
        <div className="container">
          <div className="row px-5 d-flex align-items-center pt-5">
            <div className="col-md-6 col-sm-12">
              <img
                src="https://images.unsplash.com/photo-1634149537214-dde37e11dd80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                alt=""
                width="90%"
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="font-33px pt-5">
                SO MANY STUNNING POST VARIATIONS{" "}
              </div>
              <div className="font-18px py-4">
                Packed full with amazing layouts which are great for showcasing
                all kinds of posts straight out of the box! Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Vero expedita voluptas
                accusamus odio, nostrum cupiditate?{" "}
              </div>
            </div>

            <div className="col-md-6 col-sm-12 pt-5">
              <div className="py-5">
                <div className="font-33px pt-5">
                  SO MANY STUNNING POST VARIATIONS{" "}
                </div>
                <div className="font-18px py-4">
                  Packed full with amazing layouts which are great for
                  showcasing all kinds of posts straight out of the box!{" "}
                </div>

                {/*video*/}
                {/* <section>
  <div>
    <video>
      <source src={Videos} type="Assets/Video/mp4" />
      your browser does not support video tag
    </video>
  </div>
</section> */}

                <div>
                  <img
                    width="19"
                    height="30"
                    src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/pin-img.png"
                    className="attachment-full size-full"
                    alt="d"
                    loading="lazy"
                  />
                  Lorem ipsum dolor sit amet consectetur
                </div>

                <div className="pt-4">
                  <img
                    width="19"
                    height="30"
                    src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/pin-img.png"
                    className="attachment-full size-full"
                    alt="d"
                    loading="lazy"
                  />
                  Lorem ipsum dolor sit amet consectetur
                </div>

                <div className="pt-4">
                  <img
                    width="19"
                    height="30"
                    src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/pin-img.png"
                    className="attachment-full size-full"
                    alt="d"
                    loading="lazy"
                  />
                  Lorem ipsum dolor sit amet consectetur
                </div>

                <div className="pt-4">
                  <img
                    width="19"
                    height="30"
                    src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/pin-img.png"
                    className="attachment-full size-full"
                    alt="d"
                    loading="lazy"
                  />
                  Lorem ipsum dolor sit amet consectetur
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 pt-5">
              <img
                className="pt-5"
                src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/landing-posts-img-3.jpg"
                alt=""
                width="100%"
              />
            </div>
          </div>
        </div>
      </section>

      {/* tour 1 row */}
      <section className="py-5">
        <div className="container-fluid px-5 py-3">
          <div>
            <div className="row text-center">
              <div className="col-md-2 border-grey-hover py-3">
                <div className="tour-img">
                  <img
                    src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/beach-category.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <div className="font-14px pt-3">Beaches</div>
                  <div className="font-8px">4 destinations</div>
                </div>
              </div>
              <div className="col-md-2 border-grey-hover py-3">
                <div className="tour-img">
                  <img
                    src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/dog-category.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <div className="font-14px pt-3">Dog-Friendly</div>
                  <div className="font-8px">2 destinations</div>
                </div>
              </div>
              <div className="col-md-2 border-grey-hover py-3">
                <div className="tour-img">
                  <img
                    src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/restorant-category.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <div className="font-14px pt-3">Resturants</div>
                  <div className="font-8px">8 destinations</div>
                </div>
              </div>
              <div className="col-md-2 border-grey-hover py-3">
                <div className="tour-img">
                  <img
                    src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/night-category.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <div className="font-14px pt-3">Over Night</div>
                  <div className="font-8px">12 destinations</div>
                </div>
              </div>
              <div className="col-md-2 border-grey-hover py-3">
                <div className="tour-img">
                  <img
                    src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/camping-category.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <div className="font-14px pt-3">Camping</div>
                  <div className="font-8px">4 destinations</div>
                </div>
              </div>
              <div className="col-md-2 border-grey-hover py-3">
                <div className="tour-img">
                  <img
                    src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/low-budget-category.png"
                    alt=""
                  />
                </div>
                <div className="content">
                  <div className="font-14px pt-3">Low budget</div>
                  <div className="font-8px">6 destinations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-5"
        style={{
          backgroundImage:
            "url(https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h5-bckg-img-02.jpg?id=1249)",
        }}
      >
        <div className="container-fluid py-5">
          <div className="row pt-5 pl-5">
            <div className="col-md-6 pl-5">
              <div className="font-33px">FINDING THE PERFECT TRAILS</div>
              <div className="font-18px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                molestias impedit eius ea cupiditate fugit rerum eaque ad
                dolores veniam.
              </div>
              <div className="row">
                <div className="travel-list-btn col pt-4">
                 <a href="./tourList"><button
                    type="button"
                    class="btn btn-outline-success btn-darkgreen py-3 px-5 " >
                    Explore Tours
                  </button>
                  </a>
                </div>
                <div className="col">
                  <img
                    className="pt-4 pl-4"
                    src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/10/landing-plane-img.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img
                width="80%"
                src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h1-img-01.png"
                className="attachment-full size-full"
                alt="s"
                loading="lazy"
                srcSet="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h1-img-01.png 700w, https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h1-img-01-600x439.png 600w, https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h1-img-01-300x219.png 300w"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section
        style={{
          paddingTop: "8rem",
          backgroundImage:
            "url(https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/10/landing-pattern-gallery.jpg)",
        }}
      >
        <div
          className="py-5"
          style={{
            backgroundImage:
              "url(https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/10/landing-pattern-gallery.jpg)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-7 about px-0 order-sm-0 order-2 pt-sm-0 pt-4">
                <div className="autoplay">
                  <div className="px-1">
                    <div className="feedback text-center">
                      <img className="feedback-img w-50 mx-auto" alt="" />
                      <div className="icons pt-2">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </div>
                      <div className="section-title3">Shweta Chauhan</div>
                      <p className="paragraph">Photographer</p>
                      <p className="paragraph2">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus...
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div
                className="col-md-5 pl-4 align-middle order-sm-1 order-1"
                style={{
                  backgroundImage:
                    "url(https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/10/landing-pattern-gallery.jpg)",
                }}
              >
                <div className="section_subtitle">Our Testimonials</div>
                <div className="font-33px">
                  <span className="colourChange">Customer Says</span>
                </div>
                <p className="font-18px pt-3">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor.
                </p>
                <p className="font-18px pt-1">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula Lorem ipsum dolor sit amet consectetur.
                </p>
                <div className="row tour-list pl-3">
                  <button
                    type="button"
                    className="btn-BG-coloured px-4 btn-lg btn"
                  >
                    All Tours{" "}
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="pb-5 container">
        <div
          className="d-flex align-items-center text-black py-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0),rgba(0, 0, 0, 0)), url(https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/landing-img-42a.png)",
          }}
        >
          <div className="container">
            <div className="row pt-4">
              <div className="col-md-6 mt-30 pt-5">
                <p>
                  <i className="fa fa-star icon-white" aria-hidden="true"></i>
                  <i className="fa fa-star icon-white" aria-hidden="true"></i>
                  <i className="fa fa-star icon-white" aria-hidden="true"></i>
                  <i className="fa fa-star icon-white" aria-hidden="true"></i>
                  <i className="fa fa-star icon-white" aria-hidden="true"></i>
                </p>
                <h5 className="font-18px">
                  We Provide Top Destinations Expecially For You Book Now and
                  Enjoy! <br /> Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Accusamus, similique! Animi, ipsum. Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Quos{" "}
                  <br /> <br /> perferendis laborum necessitatibu s incidunt
                  facilis. Voluptatem cupiditate repellendus eos ad quis.{" "}
                </h5>

                {/*}   <div className=" ">
                  <p>    <h5 className="font-18px"><i className="fa fa-phone fa-3x" style={{fontSize:'28px' , color:'black'}} aria-hidden="true"></i>        Call Now</h5>
</p>
    </div> */}

                <div className="pt-">
                  <a href="tel:855-333-4444">
                    <h5
                      className="text-black "
                      style={{ color: "rgb(58, 89, 71)", fontWeight: "600" }}
                    >
                      <i
                        className="fa fa-phone fa-3x pr-2"
                        style={{ fontSize: "28px", color: "black" }}
                        aria-hidden="true"
                      ></i>{" "}
                      855 333 4444
                    </h5>
                  </a>
                </div>

                {/*}   <p>
                <i className="fa fa-check icon-white pr-2" aria-hidden="true"></i>
                <small>Call us, it's toll-free.</small>
  </p> */}
              </div>
              <div className="col-md-6">
                <div className="testimonial-box">
                  <div className="head-box">
                    <h6>Testimonials</h6>
                    <h4>Travelers Reviews</h4>
                  </div>
                  <div className="autoplay">
                    <div className="px-1">
                      <div className="feedback text-center"></div>
                      <div className="paragraph2">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Repellendus exercitationem, qui magni impedit id
                          natus sequi iste voluptates beatae, dolorum
                          perspiciatis rerum odit quibusdam asperiores
                          consequuntur facilis neque, laborum deleniti.
                        </p>
                      </div>
                      <div className="row pt-2">
                        <div className="col-md-4 pl-4 mt">
                          <img className="w-75 h-75" src={testi} alt="" />
                        </div>
                        <div className="col-md-4">
                          <div className="pt-">
                            <i
                              className="fa fa-star text-warning"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star text-warning"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star text-warning"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star text-warning"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star text-warning"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <h6
                            className="text-dark mb-0"
                            style={{ fontSize: "1rem" }}
                          >
                            Nolan White
                          </h6>
                          <span
                            className="text-dark"
                            style={{ fontSize: "0.875rem" }}
                          >
                            Guest review
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*video*/}
      {/* <section className="pt-5">
    <div className="video-container " >
 <video style={{height:'500px',objectFit:'cover', width:'100%'}} autoPlay muted loop>
  <source src={Travel} type="video/mp4" width="100%"/>
  </video>    
    </div>
    </section> */}
      <section className="pt-5">
        <div className="video-container">
          <video
            style={{ height: "500px", objectFit: "cover", width: "100%" }}
            autoPlay
            muted
            loop
          >
            <source src={Travel} type="video/mp4" width="100%" />
          </video>
          <div className="text-overlay">
            <h1 className="overlay-text " id="typewriter">
              Lorem ipsum dolor sit.
            </h1>
          </div>
          <div className="gradient-overlay"></div>
        </div>
      </section>
    </div>
  );
}
export default Home;
