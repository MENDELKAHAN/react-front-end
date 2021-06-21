import React from "react";
import {Link} from 'react-router-dom';


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
    <nav>
        <ul>
              {links.map( (item, index)=> 
                  <li>  <Link key={index} to={ item.url } >{ item.label }</Link>
                    {
                        (typeof(item.sub) == 'object') ? 
                            <ul>
                            {item.sub.map( (sub_item, sub_index)=> 
                                <li><Link key={index} to={ sub_item.url } >{ sub_item.label }</Link></li>
                            )}
                            </ul>
                            :
                            ''
                    }
                  
                  
                  </li>
                )}

            </ul>
    </nav>
)

}


 {/* {item.sub.map( (sub_item, sub_index)=> (
                        <li>  <Link key={sub_index} to={ sub_item.url } >{ sub_item.label }</Link></li>
                        ) 
                    )    
                } */}


export default NavBar;