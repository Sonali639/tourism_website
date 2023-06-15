import React from "react";
import Header from "./Header";
import "./style.css";
import Footer from "./Footer";
import { useParams } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import testi from "../Assets/ImagesTourList/04.png";
import { Link } from 'react-router-dom';




function TourDeatils() {
  //create a state for weather data 
  const [weatherData, setWeatherData] = useState(null);
  const { id } = useParams();
  const [tourData, setTourData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [rating, setRating] = useState(0); // Initial rating is 0
  const [isSuitable , setIsSuitable] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState([]);



  //get the rating from the /api/rating endpoint if exist 

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token === undefined) {
          localStorage.removeItem('jwt');
          return;
        }
        //add this token to cookies as jwt
        document.cookie = `jwt=${token}`;

        const response = await fetch(`https://backend-production-9ac3.up.railway.app/api/rating/${id}/`,{
          method: 'GET',
          credentials: 'include',
          headers : {
            'Content-Type': 'application/json',
            'authorization': 'Token ' + token,

          }
          
          
        });
        const data = await response.json();
        console.log(data);
        setRating(data[0].rating);
      } catch (error) {
        console.log('Error fetching rating data:', error);
      }
    };
    fetchComments();
    fetchRating();
  }, [id]);

 
    

  const handleComment = async () => {
    const token = localStorage.getItem("token");
    if (token === undefined) {
      localStorage.removeItem('jwt');
      return;
    }
    //add this token to cookies as jwt
    document.cookie = `jwt=${token}`;

    const response = await fetch(`https://backend-production-9ac3.up.railway.app/api/comment/${id}/`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Token ' + token,
      },
      body: JSON.stringify({
        comment: commentInput,
      }),
    });
    const data = await response.json();
    console.log(data);
    setCommentInput('');
  };

  //


  const handleCommentChange = (event) => {
    setCommentInput(event.target.value);
  };

  const fetchComments = () => {
    // Make a GET request to fetch comments from the API endpoint
    fetch(`https://backend-production-9ac3.up.railway.app/api/comment/${id}/`)
      .then(response => response.json())
      .then(data => {
        // Update the comments state with the fetched data
        setComments(data);
        console.log(comments);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  };

  const fetchWeather = async (city) => {
    //split the city from , and store the first part only in the city variable
    city = city.split(",")[0];
    
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=671533af81664f63ad7192250231306&q=${city}&days=7&aqi=no&alerts=no`
    );
    const data = await response.json();
    //create a array where we store the weather data as objects with text and icon
    const forecast = data.forecast.forecastday.map((day) => {
      return {
        text: day.day.condition.text,
        icon: day.day.condition.icon,
      };
    }
    );
    setWeatherData(forecast);
    checkWeatherConditions(weatherData);

  };



  function getDayLabel(index) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    const dayIndex = (today + index) % 7;
    return daysOfWeek[dayIndex];

  }

  //check if not tourData.location 
  try{
    fetchWeather(tourData.location);
  }
  catch (error) {
    console.error('Error fetching weather data:', error);
  }

  const  handleRatingClick = async (value) => {
    
        setRating(value); // Update the rating state with the clicked value
        const token = localStorage.getItem("token");
        
        //add this token to cookies as jwt
        if (token === undefined) {
          localStorage.removeItem('jwt');
          return;
        }

        // copy the jwt token to the cookies 
        document.cookie = `jwt=${token}`;
        
        
        
        const response = await fetch(`https://backend-production-9ac3.up.railway.app/api/rating/${id}/`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            // pass jwt token in the headerb
            'authorization': 'Token ' + token,
            
            
          },
          body: JSON.stringify({ rating: value }),
        });
        const data = await response.json();
        console.log("POST DATA "+data);

        
    };  
    
  //check if the user has a valid JWT token in local storage
  React.useEffect(() => {
    

    const token = localStorage.getItem("token");
    if (token === undefined) {
      localStorage.removeItem('jwt');
    }
    
    //get jwt from local storage
    const isAuthenticated = !!token; // If token is present, consider the user authenticated
    console.log(token);
    setIsAuthenticated(isAuthenticated);
  }, []);


  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response1 = await fetch(`https://backend-production-9ac3.up.railway.app/api/tour/${id}/`);
        const response2 = await fetch('https://backend-production-9ac3.up.railway.app/api/tour/');
        const [jsonData1, jsonData2] = await Promise.all([response1, response2]);
        
        const data1 = await jsonData1.json();
        const data2 = await jsonData2.json();

        console.log(tourData);
        setTourData(data1);
        setData(data2.slice(0,5));
        setLoading(false);
      } catch (error) {
        console.log('Error fetching tour data:', error);
      }
    };
    fetchTourData();
    
    
  }, [id]);
        
        function checkWeatherConditions(weatherData) {
          let sunnyClearCount = 0;
          
          weatherData.forEach((day) => {
            
            if (day.text.toLowerCase() === "sunny" || day.text.toLowerCase() === "clear") {
              sunnyClearCount++;
            }
          });
        
          if (sunnyClearCount >= 4 ) {
            //set isSuitable to false
            setIsSuitable(true);
          }
          
        }
        
  if (loading) {
    return <div>Loading...</div>;
  }
  

  

  
   

  return (
    <>
      <section className="bg-img-about">
        <Header />
        <div className="py-5 px-5">
          <div className="container-fluid py-5">
            <div className="row pt-md-5 ">
              <div className="mainHeading2 , text-white"><span>{tourData.title}</span> </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='py-5'>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <div className="tour-img">
                <div>
                    <img width="100%" height="" src="https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
            </div>
                </div>
                <div className="col-md-6">
                    <div className="content-details">
                        <div className="detail-title font-33px">Jaipur</div>
                        <div className='font-18px pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus esse amet nostrum alias iusto earum libero quod atque. Accusantium, totam repellendus voluptatem delectus maiores atque molestiae vero eveniet reprehenderit nam. Quia iusto harum ullam!</div>
                    </div>
                </div>
            </div>
           
        </div>
      </section> */}

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div>
              {isAuthenticated ? (
                <>
                <div className="tour-title  font-30px">{tourData.title}</div>
                <div className="font-18px row pb-1 pt-2"> <span className="col"> < i class="fa fa-plane"></i>  Travel | Lifestyle | Explore</span> 
                <span className="col text-right">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <span
                          key={value}
                          className={`fa fa-star ${value <= rating ? 'checked' : ''}`}
                          onClick={() => handleRatingClick(value)}
                        ></span>
                      ))}
                    </span>  
                </div> 
</>

              ):(<div className="tour-title  font-30px"></div>)}
                <div className="row">
                  <div className="col-6">
                    <img
                      src={tourData.image1}
                      alt=""
                      width="100%"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={tourData.image2}
                      alt=""
                      width="100%"
                    />
                  </div>
                </div>
                <div className="tour-para font-18px py-4">
                  {tourData.description}
                </div>

                <a href=""> <div className="text-right pb-3 text-green">Click here for Booking <i class="fa fa-angle-right"></i></div></a>
                <div className="card mb-3">
  <div className="card-body">
    <h5 className="card-title">Weather Forecast</h5>
    <div className="weather-forecast d-flex flex-row">
      {weatherData &&
        weatherData.map((day, index) => (
          <div key={index} className="weather-day mr-3">
            <div className="weather-label">{getDayLabel(index)}</div>
            <img src={day.icon} alt={day.text} className="weather-icon" />
            <div className="weather-text">{day.text}</div>
            
          </div>
        ))}
    </div>
  </div>
</div>
          {isSuitable ? (
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">Weather is suitable!</h4>
              <p>
                The weather is suitable for this tour. You can book this tour
                with confidence.
                </p>
                </div>
                ) : (
                  <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">Weather is not suitable!</h4>
                    <p>
                      The weather is not suitable for this tour. You can still book
                      this tour but we recommend you to check the weather forecast
                      again before booking.
                      </p>
                      </div>
                      )}
                <div
                  className="detailDays"
                  style={{
                    backgroundColor: "#f4f4ee",
                    backgroundImage:
                      "linear-gradient(url(https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/landing-img-42a.png)",
                  }}
                >      
                  <div className="p-5">
                    <div
                      className="p-5 font-italic"
                      style={{
                        borderLeft: "2px solid rgb(83, 123, 101)",
                        backgroundColor: "white",
                      }}
                    >
                      <div className="day1" >
                      <p style={{ whiteSpace: 'pre-line' }}>
                        {tourData.dayDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {isAuthenticated ? (
                <>
                    <div className="bookbutton pt-2">
                      <Link to={`/TourReservationForm/${tourData.id}`}>
                        <button type="button" class="btn btn-outline-success btn-darkgreen py-2 px-5 ">Book Now</button>
                      </Link>
                    </div>
                </>
              ):(

                <>
                  <div className="bookbutton pt-2">
                    <Link to={`/signup`}>
                      <button type="button" class="btn btn-outline-success btn-darkgreen py-2 px-5 ">Book Now</button>
                    </Link>
                  </div>
                </>
              ) }

            {/* Comment Section */}
            <br></br>
            <br></br>
                

            <div>
              
                <h2>Comments</h2>
                <div id="comments">
                </div>
                <form id="commentForm"   >
                  <textarea id="commentInput" placeholder="Write a comment..." 
                  onChange={handleCommentChange}
                  value={commentInput}

                  rows="3"></textarea>
                  <button type="submit" onClick={handleComment}>Post Comment</button>
                </form>
              </div>



                <br></br>

                <div>
                <h2>Comments</h2>
                <hr></hr>
                    <div id="comments">
                      {comments.map(comment => (
                        <div key={comment.user} className="comment">
                          <p>{comment.comment}</p>
                          <p className="comment-author">By {comment.user}</p>
                        </div>
                        
                      ))}
                </div>
              
            </div>
            
            
            {/* Comment section over */}
            
            </div>
            
            
             
             
              

            <div className="col-md-4">
              <div>
                <div className="" style={{ backgroundColor: "#f4f4ee" }}>
                  <div className="search-city px-5 py-4">
                    <form action="">
                      <input
                        className="form-control searchbar mr-sm-2 pl-3 py-3 my-3 "
                        style={{ fontSize: "15px" }}
                        type="search"
                        placeholder="Search Destination"
                        aria-label="Search"
                      />
                      <button
                        className="btn btn-outline-success btn-darkgreen py-3 my-1 my-sm-0  btn-block"
                        style={{ fontSize: "15px" }}
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </div>

                <div className=" pt-4">
                  <div className="bg-green">
                    <div className="categories px-5 py-3">
                      <div className="font-22px py-3 border-bottom">
                        Categories
                      </div>
                      <div className="category-list font-18px">
                        <div className="category-item py-2 border-bottom">
                          Food
                        </div>
                        <div className="category-item py-2 border-bottom">
                          Camping
                        </div>
                        <div className="category-item py-2 border-bottom">
                          BonFire
                        </div>
                        <div className="category-item py-2 border-bottom">
                          AVT
                        </div>
                        <div className="category-item py-2 border-bottom">
                          riding
                        </div>
                        <div className="category-item py-2 ">Adventure</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="other-tour bg-green mt-4 py-4">
                  <div className="px-5">
                    <div className="border-bottom py-3">Other Tour</div>
                    <div className="other-tour-blocks">
                      {data.map((item) => (
          <Link to={`/TourDetails/${item.id}`} key={item.id} className="card-link">

                      <div className="row py-3 border-bottom">
                        <div className="col-md-5">
                          <a href="">
                            <img
                              src={item.image2}
                              alt=""
                              width="100%"
                              height="85rem"
                            />
                          </a>
                        </div>
                        <div className="col-md-6">
                          <a href="">
                            {" "}
                            <div className="font-16px">
                              <b>{item.title}</b>{" "}
                            </div>
                            <div className="font-12px">{item.location}</div>
                          </a>
                        </div>
                      </div>
                      </Link>
                      ))}



                    </div>
                  </div>
                  
{/* feedback1*/}
<div>
  <div className="p-4 bg-green">
    <div className="feedback text-center " ></div>
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
      
      <Footer/>
    </>
  );
  
}

export default TourDeatils;
