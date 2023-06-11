import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import team1Image from '../Assets/ImagesAbout/team1.jpg'
import jaipur1 from '../Assets/gallery/jaipur1.jpg'
import jaipur2 from '../Assets/gallery/jaipur2.jpg'
import jaipur3 from '../Assets/gallery/jaipur3.jpg'
import jaipur4 from '../Assets/gallery/jaipur4.jpg'
import jaipur5 from '../Assets/gallery/jaipur5.jpg'
import jaipur6 from '../Assets/gallery/jaipur6.jpg'

import jk1 from '../Assets/gallery/j&k1.jpg'
import jk2 from '../Assets/gallery/j&k2.jpg'
import jk3 from '../Assets/gallery/j&k3.jpg'
import jk4 from '../Assets/gallery/j&k4.jpg'
import jk5 from '../Assets/gallery/j&k5.jpg'
import jk6 from '../Assets/gallery/j&k6.jpg'

import Kerala1 from '../Assets/gallery/kerala1.jpg'
import Kerala2 from '../Assets/gallery/kerala2.jpg'
import Kerala3 from '../Assets/gallery/kerala3.jpg'
import Kerala4 from '../Assets/gallery/kerala4.jpg'
import Kerala5 from '../Assets/gallery/kerala3.jpg'
import Kerala6 from '../Assets/gallery/kerala2.jpg'




function Gallery() {

let imgs=[
    'https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gallery-masonry-1-1.jpg',
  'z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-5.jpg',
    'https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-4.jpg'
]

    return (
     <>

      <section className='bg-img-gallery'>
        <Header />
        <div className='py-5 px-5'>
            <div className="container-fluid py-5">
                <div className="row pt-md-5 ">
                    <div className='font-50px , text-white'>Gallery </div>
                </div>
            </div>
            </div>
        </section>


     {/*jaipur*/}
    <section className="py-5">
      <div className="container-fluid px-5">
        <div className="title text-center py-3">
          <div className="font-10px-letter-spacing " style={{ color: '#f2756a' }}>
            <i className="fa fa-map-marker"></i> Jaipur
          </div>
          <div className="font-24px left-right-line">
            <span>The Pink City</span>
          </div>
        </div>
        <div className="images">
          <div className="row">
            <div className="col-md-4 px-1">
              <div className="py-1">
                <a href="">
                <img src={jaipur6} alt="Team 1" width="100%" />
                </a>
              </div>
              <div className="py-1">
                <a href="">
                  <img
                    src={jaipur2}
                    alt=""
                    width="100%"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-4 px-1">
              <div className="py-1">
                <a href="">
                  <img
                    src={jaipur3}
                    alt=""
                    width="100%"
                  />
                </a>
              </div>
              <div className="py-1">
                <a href="">
                  <img
                    src={jaipur4}
                    alt=""
                    width="100%"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-4 px-1">
              <div className="py-1">
                <a href="">
                  <img
                    src={jaipur5}
                    alt=""
                    width="100%"
                  />
                </a>
              </div>
              <div className="py-1">
                <a href="">
                  <img
                    src={jaipur1}
                    alt=""
                    width="100%"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

{/*Jammu and Kashmir */}
<section className="py-5">
      <div className="container-fluid px-5">
        <div className="title text-center py-3">
          <div className="font-10px-letter-spacing " style={{ color: '#f2756a' }}>
            <i className="fa fa-map-marker"></i> Jammu and Kashmir
          </div>
          <div className="font-24px left-right-line">
            <span>Paradise on Earth</span>
          </div>
        </div>
        <div className="images">
          <div className="row">
            <div className="col-md-4 px-1">
              <div className="py-1">
                <a href="">
                <img src={jk1} alt="Team 1" width="100%" />
                </a>
              </div>
              <div className="py-1">
                <a href="">
                  <img
                    src={jk2}
                    alt=""
                    width="100%"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-4 px-1">
              <div className="py-1">
                <a href="">
                  <img
                    src={jk3}
                    alt=""
                    width="100%"
                  />
                </a>
              </div>
              <div className="py-1">
                <a href="">
                  <img
                    src={jk4}
                    alt=""
                    width="100%"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-4 px-1">
              <div className="py-1">
                <a href="">
                  <img
                    src={jk5}
                    alt=""
                    width="100%"
                  />
                </a>
              </div>
              <div className="py-1">
                <a href="">
                  <img
                    src={jk6}
                    alt=""
                    width="100%"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


{/*Kerala */}
<section className="py-5">
      <div className="container-fluid px-5">
        <div className="title text-center py-3">
          <div className="font-10px-letter-spacing " style={{ color: '#f2756a' }}>
            <i className="fa fa-map-marker"></i> Kerala
          </div>
          <div className="font-24px left-right-line">
            <span>God's Own City</span>
          </div>
        </div>
        <div className="images">
          <div className="row">
            <div className="col-md-4 px-1">
              <div className="py-1">
                <a href="">
                <img src={Kerala1} alt="Team 1" width="100%" />
                </a>
              </div>
              <div className="py-1">
                <a href="">
                  <img
                    src={Kerala2}
                    alt=""
                    width="100%"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-4 px-1">
              <div className="py-1">
                <a href="">
                  <img
                    src={Kerala3}
                    alt=""
                    width="100%"
                  />
                </a>
              </div>
              <div className="py-1">
                <a href="">
                  <img
                    src={Kerala4}
                    alt=""
                    width="100%"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-4 px-1">
              <div className="py-1">
                <a href="">
                  <img
                    src={Kerala5}
                    alt=""
                    width="100%"
                  />
                </a>
              </div>
              <div className="py-1">
                <a href="">
                  <img
                    src={Kerala6}
                    alt=""
                    width="100%"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

{/* <section className="py-5">
    <div className="container-fluid px-5">
        <div className="title text-center py-3">
            <div className="font-10px-letter-spacing " style={{color: "#f2756a"}}><i className="fa fa-map-marker"></i> Jaipur
            </div>
            <div className="font-24px left-right-line"><span>The Pink City</span> </div>
        </div>
        <div className="images">
            <div className="row">
                <div className="col-md-4 px-1">
                    <div className="py-1">
                        <a href=""><img
                                src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gallery-masonry-1-1.jpg"
                                alt="img1" width="100%"/></a>
                    </div>
                    <div>
                        <a href=""><img
                                src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-5.jpg"
                                alt="" width="100%"/></a>
                    </div>


                </div>
                <div className="col-md-4 px-1">
                    <div className="py-1">
                        <a href=""><img
                                src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-4.jpg"
                                alt="" width="100%"/></a>
                    </div>
                    <div className="py-1">
                        <a href=""><img
                                src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-2.jpg"
                                alt="" width="100%"/></a>
                    </div>
                </div>
                <div className="col-md-4 px-1">
                    <div className="py-1">
                        <a href=""><img
                                src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-1.jpg"
                                alt="" width="100%"/></a>
                    </div>
                    <div className="py-1">
                        <a href=""><img
                                src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-3.jpg"
                                alt="" width="100%"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> */}


{/* <!------havelock-island & -----> */}

{/* <section className="py-5">
    <div className="container-fluid px-5">
        <div className="title text-center py-3">
            <div className="font-10px-letter-spacing " style={{color: "#f2756a"}}><i className="fa fa-map-marker"></i> Jammu & kashmir
            </div>
            <div className="font-24px left-right-line"><span>Paradise on Earth</span> </div>
        </div>
        <div className="images">
            <div className="row">
                <div className="col-md-4 px-1">
                    <div className="py-1">
                        <a href="#"><img
                                src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gallery-masonry-1-1.jpg"
                                alt="" width="100%"/></a>
                    </div>
                    <div>
                        <a href=""><img
                                src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-5.jpg"
                                alt="" width="100%"/></a>
                    </div>


                </div>
                <div className="col-md-4 px-1">
                    <div className="py-1">
                        <a href=""><img
                                src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-4.jpg"
                                alt="" width="100%"/></a>
                    </div>
                    <div className="py-1">
                        <a href=""><img
                                src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-2.jpg"
                                alt="" width="100%"/></a>
                    </div>
                </div>
                <div className="col-md-4 px-1">
                    <div className="py-1">
                        <a href=""><img
                                src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-1.jpg"
                                alt="" width="100%"/></a>
                    </div>
                    <div className="py-1">
                        <a href=""><img
                                src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-3.jpg"
                                alt="" width="100%"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section className="py-5">
    <div className="container-fluid px-5">
        <div className="title text-center py-3">
            <div className="font-10px-letter-spacing " style={{color: "#f2756a"}}><i className="fa fa-map-marker"></i> Jaipur
            </div>
            <div className="font-24px left-right-line"><span>The Pink City</span> </div>
        </div>
        <div className="images">
            <div className="row">
                <div className="col-md-4 px-1">
                    <div className="py-1">
                        <a href=""><img
                                src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gallery-masonry-1-1.jpg"
                                alt="" width="100%"/></a>
                    </div>
                    <div>
                        <a href=""><img
                                src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-5.jpg"
                                alt="" width="100%"/></a>
                    </div>


                </div>
                <div className="col-md-4 px-1">
                    <div className="py-1">
                        <a href=""><img
                                src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-4.jpg"
                                alt="" width="100%"/></a>
                    </div>
                    <div className="py-1">
                        <a href=""><img
                                src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-2.jpg"
                                alt="" width="100%"/></a>
                    </div>
                </div>
                <div className="col-md-4 px-1">
                    <div className="py-1">
                        <a href=""><img
                                src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-1.jpg"
                                alt="" width="100%"/></a>
                    </div>
                    <div className="py-1">
                        <a href=""><img
                                src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-3.jpg"
                                alt="" width="100%"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> */}

<Footer/>

     </>
    )
}

export default Gallery;