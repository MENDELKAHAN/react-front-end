import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {

  const  data = 
  {
    social_media: [
    {
    social_media_id: "1",
    social_media_link: "https://www.facebook.com/onlineforultd/",
    social_media_icon: "icon-facebook-logo1",
    social_media_name: "Facebook",
    social_media_active: "1"
    },
    {
    social_media_id: "2",
    social_media_link: "https://twitter.com/onlineforul",
    social_media_icon: "icon-instagram-logo1",
    social_media_name: "Twitter",
    social_media_active: "1"
    },
    {
    social_media_id: "3",
    social_media_link: "https://www.linkedin.com/in/mendelkahan/?originalSubdomain=uk",
    social_media_icon: "icon-linkedin-logo",
    social_media_name: "Linkedin",
    social_media_active: "1"
    }
    ],
    email: [
    {
    info_id: "1",
    info_name: "email",
    info_value: "mendy@onlineforu.co.uk"
    }
    ],
    tel: [
    {
    info_id: "2",
    info_name: "tel",
    info_value: "07503661320"
    }
    ],
    footer_nav: [
    {
    nav_links_id: "2",
    nav_links_name: "Home",
    nav_links_parent: null,
    nav_links_active: "1",
    nav_links_position: "1",
    nav_links_url: ""
    },
    {
    nav_links_id: "1",
    nav_links_name: "About ",
    nav_links_parent: null,
    nav_links_active: "1",
    nav_links_position: "2",
    nav_links_url: "about"
    },
    {
    nav_links_id: "3",
    nav_links_name: "Services",
    nav_links_parent: null,
    nav_links_active: "1",
    nav_links_position: "3",
    nav_links_url: "services"
    },
    {
    nav_links_id: "4",
    nav_links_name: "Contact Us",
    nav_links_parent: null,
    nav_links_active: "1",
    nav_links_position: "4",
    nav_links_url: "contact"
    }
    ]
    }

    return (
    <>
    <div className="footer">
      <div className="container">
        <div className="row footerlinks">
          <div className="col-sm-4 col-md-2">
            <p>Contact Us</p>
            <ul>
              <li><a href={`tel:${data.tel[0].info_value}`} target="_blank" rel="noopener noreferrer">{data.tel[0].info_value}</a></li>
              <li><a href={`mailto:${data.email[0].info_value}`} target="_blank" rel="noopener noreferrer">{data.email[0].info_name}</a></li>
            </ul>
          </div>
          <div className="col-sm-4 col-md-2">
            <p>Social media</p>
            <ul>

              {data.social_media.map( (social_media_data, index)=> (
                  <li key={index}><a href={social_media_data.social_media_link} target="_blank" >Follow on {social_media_data.social_media_name}</a></li>
              ))}

            </ul>

          </div>
          <div className="col-sm-4 col-md-2">
            <p>Links</p>
            <ul>
              {data.footer_nav.map( (footer_nav_data, index)=> (
                  <li key={index}><Link to={footer_nav_data.nav_links_url}>{footer_nav_data.nav_links_name}</Link></li>
                  ))}
              
            </ul>
          </div>
          <div className="col-sm-8 col-md-4">
            <p>LEGAL TERMS</p>
            <ul>
              <li><a href="#" data-toggle="modal" data-target="#terms_model">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-sm-4 col-md-2">
            <div className="pull-right"><img height="250" src={ require('../images/logo.png').default}  alt="logo" /></div>
          </div>
        </div>
      </div>
    </div>

    <div className="row copyright">
        <div className="col-sm-12 col-md-12 text-center">
          <p>Copyright &copy; 2019. Onlineforu LTD</p>
        </div>
      </div>



       <div className="modal fade" id="terms_model" tabindex="-1" role="dialog" aria-labelledby="terms_model" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Terms and Privacy</h5>
        
      </div>
      <div className="modal-body">
        Text comming
      </div>
      
    </div>
  </div>
</div> 

      </>








    )
}

export default Footer;









