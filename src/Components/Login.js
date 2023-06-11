import React from "react";
import Header from "./Header";

function Login() {

  return (
    <>

<section className="bg-img-Login">
  <Header />
  <div style={{ backgroundImage: 'url(https://wnderland.qodeinteractive.com/wp-content/uploads/2019/10/h5-bckg-img-02.jpg?id=1249)' }}>
    <div className="row">
      <div className="col-md-4">
        <div className="pt-5">
          <img src="images/login-img-flight-path.png" alt="" width="100%" />
        </div>
      </div>

      <div className="col-md-5">
        <section className="login py-5 px-4">
          <div style={{ backgroundColor: 'white' }} className="px-5 mt-2 pb-5">
            <div className="font-33px pt-5 pb-1">Login</div>

            <div className="pt-4">
              <form action="">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1" className="font-16px">Username or email address <span className="text-peach">*</span></label>
                  <input type="text" className="border-input form-control font-italic py-3 px-3" style={{ fontSize: 'small' }} />
                </div>

                <div className="form-group pt-2">
                  <label htmlFor="exampleInputPassword1" className="font-16px">Password <span className="text-peach">*</span></label>
                  <input type="password" className="form-control border-input py-3 px-3" id="exampleInputPassword1" />
                </div>

                <u><a href=""><div className="text-right pb-2 text-peach font-16px">Forget Password ?</div></a></u>

                <div className="pt-4">
                  <button type="submit" className="btn font-10px text-white btn-dark px-5 btn-block border-input py-3">LOGIN</button>
                </div>

                <div className="text-center pt-2">Don't have an Account ? <a href="/signup"><b className="text-peach">Signup</b></a></div>
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

export default Login;
