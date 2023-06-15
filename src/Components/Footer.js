import React from 'react'

export default function Footer() {
 
    const icon = {
        color: "rgb(58, 89, 71)",
        fontSize: "22px"
    };

    return (
        <section style={{paddingTop: "5rem"}} className="FooterBG">
            <footer>
                <div className="container">

                    <div className="row bottom-border2 pb-5">
                        <div className="col-md-4 col-sm-12 mr-md-4">
                            <div className="footer-logo pb-2"> <img className="img-fluid" src="https://scontent.fdel27-1.fna.fbcdn.net/v/t39.30808-6/353666300_111536638635343_8369915585296198628_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pMUKeX4rQSQAX-m5t0Z&_nc_ht=scontent.fdel27-1.fna&oh=00_AfA8BH-pGVSkbbgIl2Nnd4LftvtiRul37Ra05g54uZCn1g&oe=648FAEFF" alt="logo" /> </div>
                            <p className="text-dark">Quisque imperdiet sapien porttito the bibendum sellentesque the commodo erat acar accumsa lobortis, enim diam the nesuen.</p>
                            <div className="icos">
                                <a href="https://www.facebook.com/profile.php?id=100093370220244&mibextid=ZbWKwL">

                                <i className=" fa fa-facebook px-1" style={icon} aria-hidden="true"></i>
                                </a>
                                <a href="https://instagram.com/wanderwaytravels?igshid=MzRlODBiNWFlZA=="    >
                                <i className="fa fa-instagram px-1" style={icon} aria-hidden="true"></i>
                                </a>
                                <i className=" fa fa-twitter px-1" style={icon} aria-hidden="true"></i>
                                <i className=" fa fa-envelope px-1" style={icon} aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 pl-md-5">
                            <div className="section-title3 text-dark pt-3">Quick Links</div>
                            <ul className="text-dark">
                                <li>About</li>
                                <li>Tours</li>
                                <li>Destinations</li>
                                <li>Blogs</li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <div className="section-title3 text-dark pt-3">Subscribe</div>
                            <p className="text-dark">Sign up for our monthly blogletter to stay informed about travel and tours</p>
                            <div className="email">
                                <form action="#">
                                    <input type="email" placeholder="Email Address" required="" style={{backgroundColor: "rgb(255, 255, 255)"}} />
                                </form>
                            </div>
                            <div className="icos pt-4">
                                <i className="fa fa-instagram px-2" style={icon} aria-hidden="true"></i>
                                <i className=" fa fa-facebook px-2" style={icon} aria-hidden="true"></i>
                                <i className=" fa fa-twitter px-2" style={icon} aria-hidden="true"></i>
                                <i className=" fa fa-envelope px-2" style={icon} aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="footerData py-3">©2023 sonali. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </section>
    )
}

