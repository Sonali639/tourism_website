
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';

const TourReservationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log("Form submitted!");
  };

  const handleGroupSizeChange = (e) => {
    const size = parseInt(e.target.value);
    const pricePerPerson = 100; // Assuming the price per person is $100
    setGroupSize(size);
    setTotalPrice(size * pricePerPerson);
  };

  const [selectedDate, setSelectedDate] = useState(null);


  return (
    <div className="container py-5 px-md-5 px-sm-0" style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0),rgba(0, 0, 0, 0)), url(https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/landing-img-42a.png)",
      }}>
      <h1 className='font-weight-bold'>Tour Reservation Form</h1>
      <div>
        <form action="">
          <div class="row pt-3">
            <div class="col-md-6 col-sm-12">
              <input
                type="text"
                className="form-control border-input py-3 px-3"
                placeholder="First name"
              />
            </div>
            <div class="col-md-6 col-sm-12">
              <input type="text" className="form-control border-input py-3 px-3" placeholder="Last name" />
            </div>
          </div>

          <div class="row pt-3">
            <div class="col-md-6 col-sm-12">
              <input
                type="text"
                className="form-control border-input py-3 px-3"
                placeholder="Email *"
              />
            </div>
            <div class="col-md-6 col-sm-12">
              <input type="tel" className="form-control border-input py-3 px-3"  id="phone" name="phone" placeholder="Phone Number" pattern="[6-9]{1}[0-9]{9}" required/>
            </div>
          </div>

          <div class="row pt-3">
            <div class="col-md-6 col-sm-12">
               <input type="date" className="form-control border-input py-3 px-3"
                placeholder="date" id="birthday" name="birthday"></input>
            </div>
            {/* <div class="col-md-6 col-sm-12">
              <div>Total pr</div>
            </div> */}
          </div>

          <div class="row pt-3">
            <div class="col-md-6">
              <input type="number" id="quantity"  className="form-control border-input py-3 px-3"
                placeholder="How Many People are you Booking for?" name="quantity" min="1" max="8"></input>
            </div>
          </div>

          <div class=" py-2 text-right mt-3 col-md-6 " style={{backgroundColor:'rgb(255,255,255)', border:'1px solid rgb(20,55,35)'}}>
              <div>Total price : $200</div>
            </div>

          <div className="pt-4 col-md-3 pl-0">
                  <button type="submit" className="btn font-10px text-white btn-dark px-5 btn-block border-input py-3">Cofirm Booking</button>
        </div>

        </form>
      </div>
    </div>
  );
};

export default TourReservationForm;
