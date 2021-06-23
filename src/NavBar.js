import React from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/font-awesome.css';
import './css/bootstrap.min.css';
import './css/Hosting.css';
import './css/flexslider.css';



const NavBar = () => {

    let links = [
        {label:"Home", url:"/"},
        {label:"About", url:"about"},
        {label:"Services", url:"services", sub: 
            [
                {label:"sub 1", url:"sub1"},
                {label:"sub 2", url:"sub21"}]
        },
        {label:"Contact Us", url:"contact"}
    ];

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
            <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav navbar-right">

              {links.map( (item, index)=> 
                  
                    
                        (typeof(item.sub) == 'object') ? 
                            <li key={index} className="dropdown">  
                                <Link className="dropdown-toggle" data-toggle="dropdown" to={ item.url } >{ item.label }
                                {/* <b className="caret"></b> */}
                                </Link>

                                <ul className="dropdown-menu">
                                    {item.sub.map( (sub_item, sub_index)=> 
                                        <li  key={sub_index}><Link  to={ sub_item.url } className='sub_links'>{ sub_item.label }</Link></li>
                                    )}
                                </ul>
                                </li>
                                :
                                <li key={index}>  <Link  to={ item.url } >{ item.label }</Link></li>
                                     
                )}

            </ul>
  </div>
  </div>
</nav>
)

}

export default NavBar;