import React from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/font-awesome.css';
import './css/bootstrap.min.css';
import './css/hosting.css';
import './css/flexslider.css';



const NavBar = () => {

     let links = [
        {
        nav_links_id: "2",
        nav_links_name: "Home",
        nav_links_parent: null,
        nav_links_active: "1",
        nav_links_position: "1",
        nav_links_url: "",
        children: [ ]
        },
        {
        nav_links_id: "1",
        nav_links_name: "About ",
        nav_links_parent: null,
        nav_links_active: "1",
        nav_links_position: "2",
        nav_links_url: "about",
        children: [ ]
        },
        {
        nav_links_id: "3",
        nav_links_name: "Services",
        nav_links_parent: null,
        nav_links_active: "1",
        nav_links_position: "3",
        nav_links_url: "services",
        children: [
        {
        nav_links_id: "7",
        nav_links_name: "Site Development",
        nav_links_parent: "3",
        nav_links_active: "1",
        nav_links_position: "1",
        nav_links_url: "development"
        },
        {
        nav_links_id: "8",
        nav_links_name: "Hosting",
        nav_links_parent: "3",
        nav_links_active: "1",
        nav_links_position: "2",
        nav_links_url: "hosting"
        },
        {
        nav_links_id: "9",
        nav_links_name: "Improvement",
        nav_links_parent: "3",
        nav_links_active: "1",
        nav_links_position: "3",
        nav_links_url: "improvement"
        }
        ]
        },
        {
        nav_links_id: "4",
        nav_links_name: "Contact Us",
        nav_links_parent: null,
        nav_links_active: "1",
        nav_links_position: "4",
        nav_links_url: "contact",
        children: [ ]
        }
        ]

return(
    <nav className="navbar navbar-default navbar-fixed-top" role="navigation"> 
      <div className="container">
         <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span>
                <span className="icon-bar"></span> <span className="icon-bar"></span> 
            </button>
            <Link className="navbar-brand" to="/"> 
            <img width="100"  src={ require('./images/logo.png').default  } alt="logo" />
            </Link> </div>
            <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav navbar-right">

              {links.map( (item, index)=> 
                  
                    
                        (typeof(item.children) == 'object' && item.children.length > 0) ? 
                            <li key={index} className="dropdown">  
                                <Link className="dropdown-toggle" data-toggle="dropdown" to={ item.nav_links_url } >{ item.nav_links_name }
                                {/* <b className="caret"></b> */}
                                </Link>

                                <ul className="dropdown-menu">
                                    {item.children.map( (sub_item, sub_index)=> 
                                        <li  key={sub_index}><Link  to={ sub_item.nav_links_url } className='sub_links'>{ sub_item.nav_links_name }</Link></li>
                                    )}
                                </ul>
                                </li>
                                :
                                <li key={index}>  <Link  to={ item.nav_links_url } >{ item.nav_links_name }</Link></li>
                                     
                )}

            </ul>
  </div>
  </div>
</nav>
)

}

export default NavBar;