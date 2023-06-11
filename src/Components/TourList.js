import React from "react";
import Header from "./Header";
import maldivesImage from '../Assets/ImagesTourList/maldives1.jpeg';
import canadaImage from '../Assets/ImagesTourList/canada1.jpeg';
import italyImage from '../Assets/ImagesTourList/italy1.jpg';
import franceImage from '../Assets/ImagesTourList/france1.jpeg';
import greeceImage from '../Assets/ImagesTourList/greece1.jpeg';
import dubaiImage from '../Assets/ImagesTourList/dubai1.jpg';
import SingleCardDetail from "./SingleCard";
import Footer from "./Footer";

function Gallery() {
  let imgs = [
    "https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gallery-masonry-1-1.jpg",
    "z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-5.jpg",
    "https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-4.jpg",
  ];

  return (
    <>

      <section className="bg-img-TourList">
        <Header />
        <div className="py-5 px-5">
          <div className="container-fluid py-5">
            <div className=" pt-md-5 ">
              <div class="mainSubtitle2 text-white">
                Choose Your Destinations
              </div>
              <div className=" text-white pt-2">
                {" "}
                <h5 class="mainHeading2">
                  {" "}
                  <span>popular</span> Destinations
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="destination1" style={{ padding: "5rem" }}>
        <div className="container d-flex fa-align-center justify-content-center">
          <div className="row">

            <div className="col-md-4 col-sm-12 p-3 mt-2">
              <a href="./TourDetails">
                {/* <div className="card wh-93">
                  <img src={maldivesImage} alt="" />
                  <div className="card-img-overlay " style={{ top: "90%" }}>
                    <h4 className="font-weight-bold ">
                      <a className="text-white border-bottom  " href="#">
                        <i className="fa fa-map-marker icon-white"></i> Maldives
                      </a>
                    </h4>
                  </div>
                </div> */}
                <SingleCardDetail/>
              </a>
            </div>

            <div className="col-md-4 col-sm-12 p-3 mt-2">
              <a href="./TourDetails">
                {/* <div className="card wh-93">
                  <img src={canadaImage} alt="" />
                  <div className="card-img-overlay" style={{ top: "90%" }}>
                    <h4 className="font-weight-bold">
                      <a className="text-white border-bottom" href="#">
                        <i className="fa fa-map-marker icon-white"></i> Canada
                      </a>
                    </h4>
                  </div>
                </div> */}
<SingleCardDetail/>

              </a>
            </div>


            <div className="col-md-4 col-sm-12 p-3 mt-2">
              <a href="./TourDetails">
            <SingleCardDetail/>
              </a>
            </div>


            <div className="col-md-4 col-sm-12 p-3 mt-2">
              <a href="./TourDetails">
                {/* <div className="card wh-93">
                  <img src={franceImage} alt="" />
                  <div className="card-img-overlay" style={{ top: "90%" }}>
                    <h4 className="font-weight-bold">
                      <a className="text-white border-bottom" href="#">
                        <i className="fa fa-map-marker icon-white"></i> France
                      </a>
                    </h4>
                  </div>
                </div> */}
                <SingleCardDetail />
              </a>
            </div>


            <div className="col-md-4 col-sm-12 p-3 mt-2">
              <a href="./TourDetails">
               <SingleCardDetail/>
              </a>
            </div>


            <div className="col-md-4 col-sm-12 p-3 mt-2">
              <a href="./TourDetails">
                <SingleCardDetail/>
              </a>
            </div>




            {/* Repeat the same pattern for other destinations */}
            {/* Italy, France, Greece, Dubai */}
          </div>
        </div>
      </section>

<Footer/>
    </>
  );
}

export default Gallery;
