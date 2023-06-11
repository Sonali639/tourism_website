import React from 'react'
import './style.css'
import Header from './Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import team1Image from '../Assets/ImagesAbout/team1.jpg';
import team2Image from '../Assets/ImagesAbout/team2.jpg';
import team3Image from '../Assets/ImagesAbout/team3.jpg';
import team4Image from '../Assets/ImagesAbout/team4.jpg';
import bgImage from '../Assets/ImagesAbout/question-mark-bg-final.png';
import Footer from "./Footer";
// import Images from '../Assets/Images/question-mark-bg-final.png';

const images = [
    { id: 1, src: require('../Assets/ImagesAbout/team1.jpg').default, alt: 'Image 1' },
    { id: 2, src: require('../Assets/ImagesAbout/team2.jpg').default, alt: 'Image 2' },
    { id: 3, src: require('../Assets/ImagesAbout/team3.jpg').default, alt: 'Image 3' },
    { id: 4, src: require('../Assets/ImagesAbout/team4.jpg').default, alt: 'Image 3' },
  ];

export default function About() {

    // javascript
    const icon = {
        color: "rgb(237, 234, 225)",
        fontSize: "16px",
        backgroundColor: "rgb(58, 89, 71)"
    };

    const autoplayAdventure = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    const autoplayTeam = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
    };


    return (
        <>

        <section className='bg-img-about'>
        <Header />
        <div className='py-5 px-5'>
            <div className="container-fluid py-5">
                <div className="row  ">
                <div className=" pt-md-5 ">
              <div class="mainSubtitle2 text-white">
              Travel unleashed
              </div>
              <div className=" text-white pt-2">
                {" "}
                <h5 class="mainHeading2">
                  {" "}
                  <span>About</span> US
                </h5>
              </div>
            </div>
                    {/* <div className='font-50px , text-white'>About Us</div> */}
                </div>
            </div>
            </div>
        </section>

            <section className="py-5 mt-md-5">
                <div className="container py-5"
                    style={{ backgroundImage: "linear-gradient(to right, #f1f1f1 60%, rgba(255, 255, 255, 0.4) 40%), url(${bgImage})" }} >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 pl-4">
                                <div>
                                    <div className="font-33px pb-4">Who we are <i className="fa fa-question"
                                        style={{ color: "#f2756a", fontSize: "35px" }}></i> </div>
                                    <div className="font-18px">We are the dreamweavers, the architects of extraordinary journeys that leave an indelible mark on your soul. At Wanderway, we breathe life into your wanderlust, unveiling hidden treasures and curating immersive experiences that transcend the ordinary.
                                        <br /><br />
                                        With our passion for exploration and a touch of magic, we invite you to embark on a voyage beyond imagination. Welcome to Wanderway, where dreams become reality.
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7" >
                                <div className="row px-0">
                                    <div className="col-md-6">
                                        <div style={{ backgroundColor: "#839184" }} className="p-4">
                                            <div className="text-white font-22px py-2">Vision</div>
                                            <div className="font-18px text-white">Empowering discovery through immersive journeys that redefine travel.</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div style={{ backgroundColor: "#839184" }} className="p-4">
                                            <div className="text-white font-22px py-2">Mission</div>
                                            <div className="font-18px  text-white">Ignite wanderlust. Foster connections. Transform lives. One journey at a time.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/*check*/}
            <section className="adventure py-5" style={{backgroundImage:'url("https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/landing-img-42a.png/path/to/your/image.jpg")'}}>
                <div className="container py-5">
                    <div>
                        <Slider {...autoplayAdventure}> {/* Pass the autoplayAdventure object as props */}

                            {/* treaking */}
                            <div>
                                <div className="p-2">
                                    <div>
                                        <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h1-img-11.png" alt="" />
                                    </div>
                                    <div className="font-22px text-mid-grey py-1">Treaking</div>
                                    <div className="font-14px">Start your engines and get ready for an adventure</div>
                                </div>
                            </div>


                            {/* camping*/}

                            <div>
                                <div className="p-2 ">
                                    <div> <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h1-img-10.png"
                                        alt="" /></div>
                                    <div className="font-22px text-mid-grey py-1">Camping</div>
                                    <div className="font-14px">Start your engines and get ready for an adventure</div>
                                </div>
                            </div>


                            {/*bonfire*/}
                            <div>
                                <div className="p-2 ">
                                    <div> <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h1-img-09.png"
                                        alt="" /></div>
                                    <div className="font-22px text-mid-grey py-1">Bonfire</div>
                                    <div className="font-14px">Start your engines and get ready for an adventure</div>
                                </div>
                            </div>


                            {/*Cycling*/}
                            <div>
                                <div className="p-2 ">
                                    <div> <img src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/fishing-category.png"
                                        alt="" /></div>
                                    <div className="font-17px">Cycling</div>
                                    <div className="font-14px">Thrilling off-road experience public roads maximum security.</div>
                                </div>
                            </div>


                            {/*scuba diving*/}
                            <div>
                                <div className="p-2 ">
                                    <div> <img src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/fishing-category.png"
                                        alt="" /></div>
                                    <div className="font-17px">Scuba Diving</div>
                                    <div className="font-14px">drenaline-pumping excursions for the experienced.</div>
                                </div>
                            </div>


                            {/*avt*/}
                            <div className="p-2 ">
                                <div> <img src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/fishing-category.png"
                                    alt="" /></div>
                                <div className="font-17px">ATV</div>
                                <div className="font-14px">Start your engines and get ready for an adventure</div>
                            </div>


                            {/*paradliging*/}
                             <div>
                        <div className="p-2 ">
                            <div> <img src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/fishing-category.png"
                                alt=""/ ></div>
                            <div className="font-17px">Paragliding</div>
                            <div className="font-14px">Wild landscapes and rough rivers and you will rafting.</div>
                        </div>
                    </div>


{/*-fishing*/}
                    <div>
                        <div className="p-2 ">
                            <div> <img src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/fishing-category.png"
                                alt="" /></div>
                            <div className="font-17px">Fishing</div>
                            <div className="font-14px">Start your engines and get ready for an adventure</div>
                        </div>
                    </div>
                   


                </Slider>
            </div>
        </div >
            </section >



        {/* <!----------something- about us--------> */ }
        < section className = "py-5"
    style = {{ backgroundImage: "url(https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/10/landing-pattern-gallery.jpg)" }
} />
    < div className = "container" >
        <div className="row">
            <div className="col-md-8">
                <div>
                    <div className="font-14px text-peach"><i className="fa fa-map-marker"></i> website name</div>
                    <div className="font-33px py-3">WE ARE A TEAM OF <br /> PASSIONATE TRAVELER</div>
                    <div className="font-18px pl-5 pt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Cursus vitae congue mauris rhoncus aenean vel. Suspendisse
                        sed nisi lacus sed viverra tellus. Urna duis convallis convallis tellus.
                        <br /><br />
                        Interdum velit laoreet. In pellentesque massa placerat duis. Arcu cursus euismod quis
                        viverra nibh cras pulvinar mattis. Blandit libero volutpat sed cras ornare arcu dui vivamus.
                        Integer eget aliquet nibh praesent. Volutpat commodo sed egestas egestas.
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                        ullamcorper mattis.
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div>
                    <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h3-rev-img-05.png" alt="" width="100%" />
                </div>
            </div>
        </div>
            </div >





    {/*<!----------our team--------------->*/ }
    < section className = "our-team text-center py-5" >

        <div className="container py-5">
            <div className="top-text-section py-4">
                <div className="font-33px pb-2">Our Team</div>
                <div className="font-18px">We have a team of professionals, dedicated to providing excellent service to <br />
                    ensure the enjoyment of your vacation.</div>
            </div>

            <Slider {...autoplayAdventure}> {/* Pass the autoplayAdventure object as props */}
            <div>
                        <div className="px-2">
                            <div className="card bg-dark text-white">
                            <img className="card-img" src={team4Image} alt="Team 4" width="100%" />

                                <div className="card-img-overlay background-gradient-img">
                                    <div className="content background-gradient p-4">
                                        <h5 className=" text-dark font-19px" style={{ fontWeight: "600" }}>Carlos Cimino</h5>

                                        <div className="social-icons pt-2">
                                            <div className=" icos ">
                                                <i className="fa fa-instagram p-2 mr-1"
                                                    style={icon}
                                                    aria-hidden="true"></i>
                                                <i className=" fa fa-facebook p-2 mr-1"
                                                    style={icon}
                                                    aria-hidden="true"></i>
                                                <i className=" fa fa-twitter p-2 mr-1"
                                                    style={icon}
                                                    aria-hidden="true"></i>
                                                <i className=" fa fa-envelope p-2 "
                                                    style={icon}
                                                    aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div style={{ border: "none" }}>
                        <div className="px-2">
                            <div className="card bg-dark text-white">
                            <img className="card-img" src={team3Image} alt="Team 3" width="100%" />
                                <div className="card-img-overlay background-gradient-img">
                                    <div className="content background-gradient p-4">
                                        <h5 className=" text-dark font-19px" style={{ fontWeight: "600" }}>Carlos Cimino</h5>
                                        {/* <!-- <p className="text-dark py-0" style="font-size: 16px; ">Marketing</p> --> */}
                                        <div className="social-icons pt-2">
                                            <div className=" icos ">
                                                <i className="fa fa-instagram p-2 mr-1"
                                                    style={icon}
                                                    aria-hidden="true"></i>
                                                <i className=" fa fa-facebook p-2 mr-1"
                                                    style={icon}
                                                    aria-hidden="true"></i>
                                                <i className=" fa fa-twitter p-2 mr-1"
                                                    style={icon}
                                                    aria-hidden="true"></i>
                                                <i className=" fa fa-envelope p-2 "
                                                    style={icon}
                                                    aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="px-2">
                            <div className="card bg-dark text-white">
                                <img className="card-img" src={team1Image} alt="Team 1" width="100%" />
                                <div className="card-img-overlay background-gradient-img">
                                    <div className="content background-gradient p-4">
                                        <h5 className=" text-dark font-19px" style={{ fontWeight: "600" }}>Carlos Cimino</h5>
                                        {/* <!-- <p className="text-dark py-0" style="font-size: 16px; ">Marketing</p> --> */}
                                        <div className="social-icons pt-2">
                                            <div className=" icos ">
                                                <i className="fa fa-instagram p-2 mr-1"
                                                    style={icon}
                                                    aria-hidden="true"></i>
                                                <i className=" fa fa-facebook p-2 mr-1"
                                                    style={icon}
                                                    aria-hidden="true"></i>
                                                <i className=" fa fa-twitter p-2 mr-1"
                                                    style={icon}
                                                    aria-hidden="true"></i>
                                                <i className=" fa fa-envelope p-2 "
                                                    style={icon}
                                                    aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="px-2">
                            <div className="card bg-dark text-white">
                            <img className="card-img" src={team2Image} alt="Team 2" width="100%" />
                                <div className="card-img-overlay background-gradient-img">
                                    <div className="content background-gradient p-4">
                                        <h5 className=" text-dark font-19px" style={{ fontWeight: "600" }}>Carlos Cimino</h5>
                                        {/* <!-- <p className="text-dark py-0" style="font-size: 16px; ">Marketing</p> --> */}
                                        <div className="social-icons pt-2">
                                            <div className=" icos ">
                                                <i className="fa fa-instagram p-2 mr-1"
                                                    style={icon}
                                                    aria-hidden="true"></i>
                                                <i className=" fa fa-facebook p-2 mr-1"
                                                    style={icon}
                                                    aria-hidden="true"></i>
                                                <i className=" fa fa-twitter p-2 mr-1"
                                                    style={icon}
                                                    aria-hidden="true"></i>
                                                <i className=" fa fa-envelope p-2 "
                                                    style={icon}
                                                    aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Slider>

        </div>
            </section >
            <Footer/>

        </>
    );
}




