const ContactUs = () => {


    return(
        <>
        <div className="container" id="contact">
        <div className="row PageHead">
          <div className="col-md-12">
            <h1>Contact Us</h1>
            <h3>Keep in touch with us. we are here to help you</h3>
          </div>
        </div>
        <div className="row ContactUs">
          <div className="col-md-6">
            <div className="row">
              <div className="col-sm-6">
               
              </div>
      
              {/* <div className="col-sm-6">
            
                <address>
      
                <strong> {office_address_road} {info_value} {/office_address_road}</strong><br>
               {office_address_town}{info_value} {/office_address_town} {office_address_postcode}{info_value} {/office_address_postcode}<br>
                United Kingdom<br>
               
                <abbr title="Phone">T: </abbr>{tel}{info_value}{/tel}<br>
                <br>
                </address>
              </div> */}
            </div>
            <div className="row">
              <div className="col-md-12 mapwrap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.712020929573!2d-0.21311758407314826!3d51.57351261368781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761094bb6b9a43%3A0x2df98b6b61c245f6!2s42+Hamilton+Rd%2C+London+NW11+9EJ!5e0!3m2!1sen!2suk!4v1561483859917!5m2!1sen!2suk" width="100%" height="250" frameborder="0" style={{border:0}}/>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <form className="form" id="phpcontactform" method="post" action="<?php echo base_url('contact/submit');?>">
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Full Name" name="data[messages_name]" id="name" />
              </div>
              <div className="form-group">
                <input className="form-control" type="email" placeholder="Email" name="data[messages_email]" id="email" />
              </div>
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Mobile Number" name="data[messages_phone]" id="mobile" />
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="10" name="data[messages_note]" placeholder="Your Message" id="message"></textarea>
              </div>
              <div className="form-group">
                <p>
                  <input className="btn orange_background btn-lg" type="submit" value="Send Message" />
                </p>
                <span className="loading"></span> </div>
            </form>
          </div>
        </div>
      </div>
      </>
    )
}


export default ContactUs;