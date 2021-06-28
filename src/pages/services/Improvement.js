
const Improvement = () =>  {


    return (
        <div className="container">
        <div className="row FeatLayout">
           <div className="col-md-5 Featimg"> 
           
           <img src={ require('../../images/improvment.jpg').default} alt="feature" className="img-responsive center-block"/></div>
           <div className="col-md-7">
             <h1>Site Improvment</h1>
             <p className="lead">Improve your current site</p>
             <p></p>
             <ul className="ticklist">
               <li>SEO (Search Engine Optimization)</li>
               <li>PPC (Online Advertising)</li>
               <li>Add Functionality </li>
               <li>Improve Functionality</li>
            
             </ul>
           </div>
         </div>
       
         </div>
    );
}

export default Improvement;