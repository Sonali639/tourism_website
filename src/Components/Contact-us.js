import React from 'react'
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
  return (
<div>
<section className='bg-img-contact'>
        <Header />
        <div className='py-5 px-5'>
            <div className="container-fluid py-5">
                <div className="row pt-md-5 ">
                    <div className='font-50px , text-white'>Contact </div>
                </div>
            </div>
            </div>
        </section>

    <section className='py-5'>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/mellisa-slide1-graphic3.png"
              alt=""
              width="90%"
            />
          </div>
          <div className="col-md-6">
            <div>
              <div className="font-24px">GET IN TOUCH</div>
              <div className="pb-4 pt-3 font-18px">
                For all business and collaboration enquiries please contact{' '}
                <span style={{ color: '#f2756a' }}>itmtraveler@example.com</span> For any other enquiries please use
                the form below. ? 🙂
              </div>
              <form action="">
                <div className="form-group">
                  <input
                    type="text"
                    className="border-input form-control font-italic py-3 px-3"
                    style={{ fontSize: 'small' }}
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="border-input form-control font-italic py-3 px-3"
                    style={{ fontSize: 'small' }}
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group ">
                  <textarea
                    className="form-control border-input font-italic py-3 px-3"
                    style={{ fontSize: 'small' }}
                    id="exampleFormControlTextarea1"
                    placeholder="Your Message.."
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark px-5 border-input py-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="location p-5 ">
      <iframe
        className="w-100"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.702293008251!2d78.02701791392224!3d30.330984781778955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929f068305623%3A0x4e045d7e90a59d87!2sInstitute%20of%20Technology%20%26%20Management!5e0!3m2!1sen!2sin!4v1662501341094!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>

<Footer/>

</div>
    )
} 
export default Contact;