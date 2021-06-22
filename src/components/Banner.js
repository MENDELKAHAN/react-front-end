import { Link } from "react-router-dom";

function Banner() {
    return (



<div className="jumbotron masthead">
  <div className="container"> 
    
    
    <div className="flexslider">
      
    <div className="flex-viewport" style={{overflow: "hidden", position: "relative"}}>
        <ul className="slides" style={{width: "1000%", marginLeft: "-2820px"}}>
            <li className="clone" aria-hidden="true" style={{width: "940px", float: "left", display: "block"}}>
                <div className="slide3">
                    <div className="hero-unit">

                        <h1>Get Your Business Noticed Online</h1>
                        <h3>Let our professionals improve your site with organic SEO and ppc adds</h3>
                        <div className="slider-actions text-center"> 
              <Link to="https://new.onlineforu.co.uk/site/services/improvment#development" className="btn blue_background  btn-lg">Explore Features </Link> 
  </div>

           
          </div>
        </div></li>
        <li style={{width: "940px", float: "left", display: "block"}} className="">
          <div className="hero-unit">
            <h1>Affordable Hosting Solution</h1>
            <h3>We offer cheap and affordable hosting</h3>
            <div className="slider-actions text-center"> 
            <Link to="https://new.onlineforu.co.uk/site/services/hosting#development" className="btn blue_background btn-lg">Explore Features</Link> 
            <Link to="https://new.onlineforu.co.uk/site/services/hosting#pricing" className="btn orange_background  btn-lg">Plans and Pricing</Link> </div>
          </div>
        </li>

        <li style={{width: "940px", float: "left", display: "block"}} className="">
          <div className="slide2">
            <div className="hero-unit">


            <h1>We Can Build Your Website</h1>
            <h3>Want to take you business to the web? We can do it!</h3>
            <div className="slider-actions text-center"> 
            <Link to="https://new.onlineforu.co.uk/site/services/development#development" className="btn btn-lg blue_background">Explore Features</Link> 
            <Link to="https://new.onlineforu.co.uk/site/services/development#pricing" className="btn orange_background btn-lg">Plans and Pricing</Link> </div>
          </div>


            
          </div>
        </li>
        <li style={{width: "940px", float: "left", display: "block"}} className="flex-active-slide">
          <div className="slide3">
 <div className="hero-unit">

            <h1>Get Your Business Noticed Online</h1>
            <h3>Let our professionals improve your site with organic SEO and ppc adds</h3>
            <div className="slider-actions text-center"> 
              <Link to="https://new.onlineforu.co.uk/site/services/improvment#development" className="btn blue_background  btn-lg">Explore Features </Link> 
  </div>

           
          </div>
        </div></li>
      <li style={{width: "940px", float: "left", display: "block"}} className="clone" aria-hidden="true">
          <div className="hero-unit">
            <h1>Affordable Hosting Solution</h1>
            <h3>We offer cheap and affordable hosting</h3>
            <div className="slider-actions text-center"> 
              <Link to="https://new.onlineforu.co.uk/site/services/hosting#development" className="btn blue_background btn-lg">Explore Features</Link> 
              <Link to="https://new.onlineforu.co.uk/site/services/hosting#pricing" className="btn orange_background  btn-lg">Plans and Pricing</Link> </div>
          </div>
        </li></ul></div>
        <ol className="flex-control-nav flex-control-paging"><li><Link className="">1</Link></li>
        <li><Link className="">2</Link></li><li><Link className="flex-active">3</Link></li></ol>
        <ul className="flex-direction-nav"><li><Link className="flex-prev" to="#">Previous</Link></li>
        <li><Link className="flex-next" href="#">Next</Link></li></ul></div>
  </div>
</div>

    )}


export default Banner;