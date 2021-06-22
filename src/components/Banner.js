import { Link } from "react-router-dom";

function Banner() {
    return (
      <div className="jumbotron masthead">
        <div className="container"> 
 
    
          <div className="flexslider">
            <ul className="slides">
            <li>
              <div className="hero-unit">
                <h1>Affordable Hosting Solution</h1>
                <h3>We offer cheap and affordable hosting</h3>
                <div className="slider-actions text-center"> 
                  <Link to={'services/hosting#development'} className="btn blue_background btn-lg">Explore Features</Link> 
                  <Link to={'services/hosting#pricing'} className="btn orange_background  btn-lg">Plans and Pricing</Link> </div>
              </div>
            </li>

            <li>
              <div className="slide2">
                <div className="hero-unit">
                  <h1>We Can Build Your Website</h1>
                  <h3>Want to take you business to the web? We can do it!</h3>
                  <div className="slider-actions text-center"> 
                     <Link to={'services/development#development'} className="btn btn-lg blue_background">Explore Features</Link> 
                    <Link to={'services/development#pricing'} className="btn orange_background btn-lg">Plans and Pricing</Link> </div>
                  </div>
                </div>
            </li>
        <li>
          <div className="slide3">
            <div className="hero-unit">

              <h1>Get Your Business Noticed Online</h1>
              <h3>Let our professionals improve your site with organic SEO and ppc adds</h3>
              <div className="slider-actions text-center"> 
                <Link to={'services/improvment#development'} className="btn blue_background  btn-lg">Explore Features </Link> 
              </div>

           
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>




    )}


export default Banner;