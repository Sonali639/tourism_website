import React from 'react'
import demo from '../Assets/ImagesTourList/maldives1.jpeg'
import './style.css'
import './Singlecard.css'
import maldivesImage from '../Assets/ImagesTourList/maldives1.jpeg';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


function SingleCardDetail() {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://backend-production-9ac3.up.railway.app/api/tour/');
      const jsonData = await response.json();
      setData(jsonData);
      
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  
    return (
     <>
       <div className="card-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '50px', justifyContent: 'center' }}>
  {data.map((item) => (
    <Link to={`/TourDetails/${item.id}`} key={item.id} className="card-link">
      <div className="card">
        <div className="card-image">
          <img src={item.image1} alt="" />
        </div>
        <span className="country-box mt-4">
          <a href="#" className="icon-white text-white">{item.location}</a>
        </span>
        <div className="square-container d-flex align-items-end justify-content-end">
          <div className="box-title icon-white">
            <h4 className="font-weight-bold text-white border-bottom"> <i className="fa fa-map-marker icon-white"></i> {item.location}</h4>
            <h6 className="text-white">{item.price} / per person</h6>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>


     </>
    )
}

export default SingleCardDetail;