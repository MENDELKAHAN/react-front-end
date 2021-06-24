

import React from "react";

const Testimonials = () => {


    const testimonials = [
        {
        testimonials_id: "1",
        testimonials_position: "Director",
        testimonials_name: "Samson Kahan",
        testimonials_description: "Thanks for our website and your continues support. You guys were great and I don't know how i would have done it with out you.",
        testimonials_active: "1",
        fk_image_id: "1",
        testimonials_company: "Ace Pro Services ",
        image_id: "1",
        image_folder: "logo",
        image_name: "ace_pro.jpg"
        },
        {
        testimonials_id: "3",
        testimonials_position: "Director",
        testimonials_name: "Moishe Kahan",
        testimonials_description: "Putting together a website is a task, finding the right individual or company is even more complex. I did my search around looking for this particular company that has the ability to create, design and optimised my web site. So luckily I meet Mendel at Onlineforu, not only they have great taste in design but they can guide you through the process and beyond.",
        testimonials_active: "1",
        fk_image_id: "2",
        testimonials_company: "The local news & Newsheet",
        image_id: "2",
        image_folder: "logo",
        image_name: "localnews.png"
        },
        {
        testimonials_id: "4",
        testimonials_position: "Director",
        testimonials_name: "Rivky Wajsman ",
        testimonials_description: "Your professional services have been extremely helpful to our online company. your expertise in all manners of linnworks and amazon are vital to our company's success. ",
        testimonials_active: "1",
        fk_image_id: null,
        testimonials_company: "True case Ltd",
        image_id: null,
        image_folder: null,
        image_name: null
        },
        {
        testimonials_id: "5",
        testimonials_position: "Director",
        testimonials_name: "Chuni Kahan",
        testimonials_description: "Mendi at Onlineforu created our website with professionalism, patience, and efficiency. Any concerns raised were dealt with almost immediately, and he constantly strove to ensure customer satisfaction. We are incredibly pleased with our website.",
        testimonials_active: "1",
        fk_image_id: null,
        testimonials_company: "Barron Properties ",
        image_id: null,
        image_folder: null,
        image_name: null
        }
        ];





    return(
      
        <div className="block free_quotes bg-1 bottom-sm">
            <div className="container testimonials"> 
                <div>
                    <h1>What our Customers say</h1>
                        <div className="container"> 
                            <div className="flexslider">
                            <ul className="slides">
       
                                {testimonials.map( (data, index)=> (
       
                                    <li>
                                        <div className="hero-unit">
                                
                                            <h3>{data.testimonials_description}</h3>
                                            <p>{data.testimonials_name} <br/> <span>{data.testimonials_position} </span> {data.testimonials_company}</p>
                                            if (data.image_folder !== null){
                                               //    <img width="150" src={ require(`../images/${data.image_folder}/${data.image_name}`).default }  />
                                            })
                                            
                                                                                       

                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Testimonials;