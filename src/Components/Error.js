import React from 'react'
import './style.css'

function Error() {

    let imgs = [
        'https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gallery-masonry-1-1.jpg',
        'z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-5.jpg',
        'https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/02/gall-masnry-3-4.jpg'
    ]
  
      

    return (
        <>

            <section>
                <div className="">
                    <div className="card bg-dark text-white">
                        <img className="card-img" src="https://images.unsplash.com/photo-1484910292437-025e5d13ce87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1214&q=80" alt="Card image" />
                        <div className="card-img-overlay text-center " style={{top: '200px'}}>
                            <div className="mainHeading2 " style={{fontSize:'100px'}}><span>404</span>404</div>
                            <p className="card-text ">Oops! Page Not Found</p>
                            <p className="card-text">We couldn't connect you to the page you're looking for</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Error;