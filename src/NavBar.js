import React from "react";
import {Link} from 'react-router-dom';


const NavBar = () => {

    let links = [
        {label:"Home", url:"/"},
        {label:"Products", url:"products"},
        {label:"Services", url:"services"},
        {label:"Contact Us", url:"contact"}
    ];

return(
    <nav>
        <ul>
              {links.map( (item, index)=> (
                  <li>  <Link key={index} to={ item.url } >{ item.label }</Link></li>
                ) )    }

            </ul>
    </nav>
)

}


export default NavBar;