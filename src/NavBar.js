import React from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const NavBar = () => {

    let links = [
        {label:"Home", url:"/"},
        {label:"Products", url:"products"},
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
                <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span>
                <span class="icon-bar"></span> <span class="icon-bar"></span> 
            </button>
            <Link class="navbar-brand" to="/"> 
            <img width="100"  src={ require('./images/logo.png').default  } alt="logo" />
            </Link> </div>
            
            <ul className="nav navbar-nav navbar-right">

              {links.map( (item, index)=> 
                  <li>  <Link key={index} to={ item.url } >{ item.label }</Link>
                    {
                        (typeof(item.sub) == 'object') ? 
                            <ul>
                            {item.sub.map( (sub_item, sub_index)=> 
                                <li><Link key={index} to={ sub_item.url } className='sub_links'>{ sub_item.label }</Link></li>
                            )}
                            </ul>
                            :
                            ''
                    }
                  
                  
                  </li>
                )}

            </ul>
         
 
  </div>
</nav>
)

}


 {/* {item.sub.map( (sub_item, sub_index)=> (
                        <li>  <Link key={sub_index} to={ sub_item.url } >{ sub_item.label }</Link></li>
                        ) 
                    )    
                } */}


export default NavBar;