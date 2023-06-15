import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './loading.css';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const TourReservationForm = () => {
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [tourData, setTourData] = useState(null);
  const [tourDate , setTourDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Track whether the form is being submitted
  

  const navigate = useNavigate();


  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await fetch(`https://backend-production-9ac3.up.railway.app/api/tour/${id}/`);
        const data = await response.json();

        setTourData(data);
      } catch (error) {
        console.log('Error fetching tour data:', error);
      }
    };

    fetchTourData();
  }, [id]);
  
  

  const handleGroupSizeChange = (e) => {
    const size = parseInt(e.target.value);
    //convert tour price into int by spliting it into 2 
    const priceString = tourData.price ;
    const pricePerPerson =  parseFloat(priceString.replace(/[^\d.-]/g, ""));; // Check if tourData exists
    
    setGroupSize(size);
    const totalPrice = size * pricePerPerson;
    setTotalPrice(totalPrice || 0); // Set totalPrice to 0 if NaN
    
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  
  const handleDateChange = (e) => {
    setTourDate(e.target.value);
  };

  


  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here

    
    
    
    const bookingData = {
      first_name: firstName,
      last_name: lastName,
      email : email,
      phone_number: phone,
      group_size: groupSize,
      selected_date: tourDate,
      totalPrice: totalPrice,
    };
    console.log('Booking data:', bookingData);
    //get token from the local storage
    const token = localStorage.getItem("token");
    
    document.cookie = `jwt=${token}`;
    

    // Send the data to the Booking/<int:pk>/ endpoint
    // You can make an API request using a library like Axios or fetch to send the data to the server
    // Example using fetch:
    fetch(`https://backend-production-9ac3.up.railway.app/api/Booking/${id}/`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Token ' + token,
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Booking response:', data);
        // Handle the booking response as needed
        // Redirect the user to a success page or display a confirmation message
        alert("Payment Completed ! You have successfully booked the tour. Enjoy the Journey!")
        navigate("/home");
        
      })
      .catch((error) => {
        console.log('Error booking:', error);
        // Handle the error, show an error message, or redirect to an error page

      });
  };

  
  

  const [selectedDate, setSelectedDate] = useState(null);

  


  return (
    <div className="container py-5 px-md-5 px-sm-0" style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0),rgba(0, 0, 0, 0)), url(https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/landing-img-42a.png)",
      }}>
      <h1 className='font-weight-bold'>Tour Reservation Form</h1>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div class="row pt-3">
            <div class="col-md-6 col-sm-12">
              <input
                type="text"
                className="form-control border-input py-3 px-3"
                placeholder="First name"
                name='firstName' onChange={handleFirstNameChange}
              />
            </div>
            <div class="col-md-6 col-sm-12">
              <input type="text" className="form-control border-input py-3 px-3" placeholder="Last name" 
              name="lastName"  onChange={handleLastNameChange}              />
            </div>
          </div>

          <div class="row pt-3">
            <div class="col-md-6 col-sm-12">
              <input
                type="text"
                className="form-control border-input py-3 px-3"
                placeholder="Email *"
                name="email"
                onChange={handleEmailChange}
              />
            </div>
            <div class="col-md-6 col-sm-12">
              <input type="tel" className="form-control border-input py-3 px-3"  id="phone" name="phone" placeholder="Phone Number" 
              onChange={handlePhoneChange}
              pattern="[6-9]{1}[0-9]{9}" required/>
            </div>
          </div>

          <div class="row pt-3">
            <div class="col-md-6 col-sm-12">
               <input type="date" className="form-control border-input py-3 px-3"   onChange = {handleDateChange}
                placeholder="date" id="birthday" name="birthday"></input>
            </div>
            <div class="col-md-6">
              <input type="number" id="quantity"  className="form-control border-input py-3 px-3"
                placeholder="How Many People are you Booking for?" name="quantity" min="1" max="8"  
                onChange={handleGroupSizeChange}  ></input>
            </div>
          </div>

   
<div className="d-flex float-right">
          <div class=" py-2 text-right mt-3  px-5 " style={{backgroundColor:'rgb(255,255,255)', border:'1px solid rgb(20,55,35)'}}>
              <div>Total price : RS {totalPrice}</div>
            </div>
            </div>

{/*---paymet--*/}
<div className="payment pt-5">
<div className="title-payment" style={{fontWeight:'600', fontSize:'20px'}}>
  Pay Now
  <br></br>
  
          
        
{/* 
          <PayPalScriptProvider
        options={{ "client-id": "AQhQixAYw4WhRYxzxNjVP19mqY0udQd9sQqRiiILXkeGs7PFr3_FEPuQtuv7srG4fxjfuXsoYSIIBVCU" }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: {totalPrice},
                  },
                },
              ],
            });
          }}
          onApprove={handleSubmit}
        />
      </PayPalScriptProvider>
    </div>
</div> */}

<PayPalScriptProvider options={{ clientId: "AQhQixAYw4WhRYxzxNjVP19mqY0udQd9sQqRiiILXkeGs7PFr3_FEPuQtuv7srG4fxjfuXsoYSIIBVCU" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
  </PayPalScriptProvider>



          {/* <div className="pt-4 col-md-3 pl-0">
          <button
              type="submit"
              className={`btn font-10px text-white btn-dark px-5 btn-block border-input py-3 ${isSubmitting ? 'is-submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="loader" /> // Add a loader animation inside the button during submission
              ) : (
                'Pay Now'
              )}
            </button>
        </div> */}
        </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default TourReservationForm;