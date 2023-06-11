import React from 'react'
import demo from '../Assets/ImagesTourList/maldives1.jpeg'
import './style.css'
import './Singlecard.css'
import maldivesImage from '../Assets/ImagesTourList/maldives1.jpeg';


function SingleCardDetail() {
let CardData =[
  {
    imageSrc: 'https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gallery-masonry-1-1.jpg',
    country: 'Italy',
    price: '$1,500 / per person',
  },
  {
    imageSrc: 'https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-5.jpg',
    country: 'France',
    price: '$2,000 / per person',
  },
  {
    imageSrc: 'https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-4.jpg',
    country: 'Spain',
    price: '$1,800 / per person',
  },
];

    return (
     <>
      
      <div className="card">
                  <img src={maldivesImage} style={{ height: '450px' }} alt="" />
                  <span className="country-box mt-4">
                    <a href="#" className="icon-white text-white">Italy</a>
                  </span>
                  <div className="square-container d-flex align-items-end justify-content-end">
                    <div className="box-title icon-white">
                      <h4 className="font-weight-bold text-white border-bottom "> <i className="fa fa-map-marker icon-white"></i> Rome</h4>
                      <h6 className="text-white">{CardData.price}/ per person</h6>
                    </div>
                  </div>
                </div>
               


     </>
    )
}

export default SingleCardDetail;