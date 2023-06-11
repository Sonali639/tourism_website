import React from "react";
import Header from "./Header";
import './style.css'
import google from '../Assets/ImagesAbout/google.png'
function Signup() {

    return (
      <>
  
  <section className="bg-img-Login">
    <Header />
    <div style={{ backgroundImage: 'url(https://wnderland.qodeinteractive.com/wp-content/uploads/2019/10/h5-bckg-img-02.jpg?id=1249)' }}>
      <div className="row">
        <div className="col-md-3">
          <div className="pt-5">
            <img src="images/login-img-flight-path.png" alt="" width="100%" />
          </div>
        </div>
  
        <div className="col-md-6">
          <section className="login py-5 px-4">
            <div style={{ backgroundColor: 'white' }} className="px-5 mt-2 pb-5">
              <div className="font-33px pt-5 pb-1 ">Create Account</div>
  <div className="round">
  <button type="button" class="mt-5 py-3 btn btn-primary round-btn btn-lg btn-block" style={{fontSize:'16px', fontWeight:'bold'}}> <img src={google} className="pb-1" alt="" width="20px"/> Login with Google</button>
  </div>

  <div className="px-3 py-3" style={{ display: 'flex', alignItems: 'center' }}>
      <hr style={{ flexGrow: 1, border: 'none', borderTop: '1px solid grey' }} />
      <div style={{ margin: '0 10px' }}>or</div>
      <hr style={{ flexGrow: 1, border: 'none', borderTop: '1px solid grey' }} />
    </div>

              <div className="pt-">
                <form action="">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="font-16px">email <span className="text-peach">*</span></label>
                    <input type="text" className="border-input form-control font-italic py-3 px-3" style={{ fontSize: 'small' }} />
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="font-16px">Username <span className="text-peach">*</span></label>
                    <input type="text" className="border-input form-control font-italic py-3 px-3" style={{ fontSize: 'small' }} />
                  </div>

                  <div className="form-group pt-2">
                    <label htmlFor="exampleInputPassword1" className="font-16px">Password <span className="text-peach">*</span></label>
                    <input type="password" className="form-control border-input py-3 px-3" id="exampleInputPassword1" />
                  </div>
                  <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label className="form-check-label" for="inlineCheckbox1" style={{fontSize:'14px'}}>I agree to all term & privacy Policy</label>
</div>


                  
  
                  <div className="pt-4">
                    <button type="submit" className="btn font-12px text-white btn-dark px-5 btn-block border-input py-3" style={{fontWeight:'bold'}}>SIGNUP</button>
                  </div>
  
                  <div className="text-center pt-2 " style={{fontSize:'13px'}}>Do you have an Account ? <a href="/login"><b className="text-peach">Login</b></a></div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
  
  
      </>
    );
  }
  
  export default Signup;