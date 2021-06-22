  export default function AboutUsHome() {
    return (
      <div className="container">
      <div className="row PageHead">
        <div className="col-md-12">
          <h1>About Us</h1>
          <h3>We are a hard working team.</h3>
        </div>
      </div>
      
      <div className="row">
        <div className="col-sm-12 features">
          <p>We are a small team, and you can get to talk to qualified developers. We aim to give you honest advice, and we keep our prices compative will still maintain a quality priduct. <a href="%3C?php%20echo%20base_url('about');?%3E">Read more ...</a></p>
        </div>
      </div>
  
      <div className="row mainFeatures" id="features">
        <div className="col-sm-6 col-md-4">
          <div className="img-thumbnail">
       
            <img alt="secure" height="88"  src={ require('../images/fast_img.png').default  } width="85" />
              <div className="caption">
                <h4>Super Fast</h4>
                <p>We give a fast service, we answer most emails within the hour.</p>
              </div>
          </div>
        </div>
        
        <div className="col-sm-6 col-md-4 col-sm-offset-3 col-md-offset-0">
          <div className="img-thumbnail">
            <img alt="secure" height="88"  src={ require('../images/support_img.png').default  } width="85" />

            <div className="caption">
              <h4>Reliable</h4>
              <p>We provide a top service, with our dedicated sales and support team.</p>
            </div>
          </div>
        </div>
  
        <div className="col-sm-6 col-md-4">
          <div className="img-thumbnail">
          <img alt="secure" height="88"  src={ require('../images/secure_img.png').default  } width="85" />

            <div className="caption">
              <h4>Secure</h4>
              <p>We take privacy &and; security very seriously, all information provided to us will be kept private.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
  


