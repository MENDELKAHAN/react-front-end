import { Link } from "react-router-dom";

function AboutUsHome() {

<div class="container"> <div class="row PageHead">
  
    <div class="col-md-12">
      <h1>About Us</h1>
      <h3>We are a hard working team.</h3>
    </div>
  </div>
 

  <div class="row">
    <div class="col-sm-12 features">
      <!-- <h4>The Team</h4> -->
      <p>We are a small team, and you can get to talk to qualified developers. We aim to give you honest advice, and we keep our prices compative will still maintain a quality priduct. <a href="<?php echo base_url('about');?>">Read more ... </a></p>
    </div>
   
  </div>


  <!--============== Main Features ==============-->
  
  <div class="row mainFeatures" id="features">
    

    <div class="col-sm-6 col-md-4">
      <div class="img-thumbnail"> <img src="<?php echo 'asserts/images/fast_img.png';?>" width="85" height="88" alt="secure">
        <div class="caption">
          <h4>Super Fast</h4>
          <p>We give a fast service, we answer most emails within the hour.</p>
        </div>
      </div>
    </div>


    <div class="col-sm-6 col-md-4 col-sm-offset-3 col-md-offset-0">
      <div class="img-thumbnail"> <img src="<?php echo 'asserts/images/support_img.png';?>" width="85" height="88" alt="secure">
        <div class="caption">
          <h4>Reliable</h4>
          <p>We provide a top service, with our dedicated sales and support team.</p>
        </div>
      </div>
    </div>
  


  <div class="col-sm-6 col-md-4">
      <div class="img-thumbnail"> <img src="<?php echo 'asserts/images/secure_img.png';?>" width="85" height="88" alt="secure">
        <div class="caption">
          <h4>Secure</h4>
          <p>We take privacy & security very seriously, all information provided to us will be kept private.</p>
        </div>
      </div>
    </div>
    </div>
  
  
  


</div>
}

export default AboutUsHome;