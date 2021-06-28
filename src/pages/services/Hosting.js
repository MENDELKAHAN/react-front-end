import React from "react";

const Hosting = () => {
    return(
<>
<div className="container"> 
  
  
  <div className="row PageHead" id="pricing">
    <div className="col-md-12">
      <h1>Hosting Plans & Pricing</h1>
      <h3>Tailored plans and pricing to suit your needs</h3>
    </div>
  </div>
  <div className="row">

      <div className="col-sm-6 col-md-3 PlanPricing">
      <div className="planName"> <span className="price">£35</span>
        <h3>Basic</h3>
        <p>Yearly Plan</p>
      </div>
      <div className="planFeatures">
        <ul>
          <li>Unlimited Storage Space</li>
          <li>Unlimited Bandwidth</li>
          <li>1 Domain</li>
          <li>Support at fee</li>
          <li><br/></li>
          <li><br/></li>
        </ul>
      </div>
    </div>


    <div className="col-sm-6 col-md-3 PlanPricing">
      <div className="planName"> <span className="price">£50</span>
        <h3>Standard</h3>
        <p>Yearly Plan</p>
      </div>
      <div className="planFeatures">
        <ul>
          <li>Unlimited Storage Space</li>
          <li>Unlimited Bandwidth</li>
          <li>1 Domains</li>
          <li>2 Databases</li>
          
          
          <li>Support at fee</li>
          <li><br/></li>
        </ul>
      </div>
    </div>
     <div className="col-sm-6 col-md-3 PlanPricing">
      <div className="planName"> <span className="price">£100</span>
        <h3>Standard Plus</h3>
        <p>Yearly Plan</p>
      </div>
      <div className="planFeatures">
        <ul>
          <li>Unlimited Storage Space</li>
          <li>Unlimited Bandwidth</li>

          <li>2 Domains</li>
          <li>2 Databases</li>
          <li>Free basic Support</li>
          <li><br/></li>
        </ul>
      </div>
    </div>

      <div className="col-sm-6 col-md-3 PlanPricing">
      <div className="planName"> <span className="price">£125</span>
        <h3>Ultimate</h3>
        <p>Yearly Plan</p>
      </div>
      <div className="planFeatures">
        <ul>
          <li>Unlimited Storage Space</li>
          <li>Unlimited Bandwidth</li>
          <li>10 Domains</li>
          <li>2 Databases</li>
           <li>1 Free SSL</li>
          <li>Free basic Support</li>
        </ul>
      </div>
    </div>

    
  </div>
</div>


<div className="domain" id="development">
<div className="container"> 
  
 
  
  <div className="row FeatLayout">
    <div className="col-md-5 Featimg"> 
    <img src={ require('../../images/pc_image.jpg').default}  alt="feature" className="img-responsive center-block" />

    </div>
    <div className="col-md-7">
      <h1>Extras</h1>
      <p className="lead">Hosting Services</p>
      <p>Our hosting plans are charged yearly, we also offer;</p>
      <ul className="ticklist">
        <li>Free advice</li>
        <li>Bug fixing</li>
        <li>SSL security</li>
        <li>30 days site and database backup.</li>
        
      </ul>
    </div>
  </div>
  
  
  
    
</div>
</div>

</>

    );
}

export default Hosting;