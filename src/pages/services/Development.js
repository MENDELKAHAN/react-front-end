import React from "react";

const Development = () => {

    return(
<>
          
  <div className="container" id="pricing"> 
      <div className="row PageHead">
        <div className="col-md-12">
        <h1>Compare Hosting Price Plans</h1>
        <h3></h3>
    </div>
  </div>
  <div className="row ComparePlans">
    <div className="col-md-3 CompareList hidden-sm hidden-xs">
      <div className="planHead1"></div>
      <div className="planFeatures">
        <ul>
          <li>Template Based</li>
          <li>Pages</li>
          <li>Databases</li>
          <li>Admin Panel</li>
          
          <li>Starting Price</li>
          <li>Information</li>
        </ul>
      </div>
    </div>
    <div className="col-sm-6 col-md-3 pricing1">
      <div className="planHead2">
        <h3>Static</h3>
      </div>
      <div className="planFeatures">
        <ul className="visible-sm visible-xs">
          <li>Teplate Based: Yes, customer pays for template</li>
          <li>Pages: up to 10</li>
          <li>Databases: No</li>
          <li>Admin Panel: No</li>
          <li>Starting Price: £250</li>
          <li>Extra features can be added for a fee</li>
        </ul>
        <ul className="hidden-sm hidden-xs">
          <li>Yes, customer pays for template</li>
          <li>Up to 5</li>
          <li><img src={ require('../../images/cross.png').default}  alt="cross"/></li>
          <li><img src={ require('../../images/cross.png').default}  alt="cross"/></li>

          <li>£399</li>
          <li>Extra features can be added for a fee</li>
       
        </ul>
      </div>
      <p> <a href="#" role="button" className="btn orange_background btn-lg"></a> </p>
    </div>



    <div className="col-sm-6 col-md-3 pricing2">
      <div className="planHead3">
        <h3>Hybrid</h3>
      </div>
      <div className="planFeatures">
        <ul className="visible-sm visible-xs">
          <li>Teplate Based: Yes, customer pays for template</li>
          <li>Pages: up to 10</li>
          <li>Databases: Yes</li>
          <li>Admin Panel: No</li>
          <li>Starting Price: £500</li>
          <li>Hybrid, means a database is created but no admin panal</li>
        </ul>
        <ul className="hidden-sm hidden-xs">
          <li>Yes, customer pays for template</li>
          <li>Up to 10</li>
          <li><img src={ require('../../images/tick.png').default}  alt="cross"/></li>
          <li><img src={ require('../../images/cross.png').default}  alt="cross"/></li>
          <li>£750</li>
          <li>Hybrid, means a database is created but no admin panal</li>
       
        </ul>
      </div>
      <p> <a href="#" role="button" className="btn blue_background btn-lg"></a> </p>
    </div>
    <div className="col-sm-6 col-md-3 col-sm-offset-3 col-md-offset-0 pricing1">
      <div className="planHead2">
        <h3>dynamic</h3>
      </div>
       <div className="planFeatures">
          <ul className="visible-sm visible-xs">
            <li>Teplate Based: Yes, customer pays for template</li>
            <li>Pages: 10</li>
            <li>Databases: Yes</li>
            <li>Admin Panel: Yes</li>
            <li>Starting Price: £1000</li>
            <li>There is almost no limit what can be done just ask</li>
          </ul>
          <ul className="hidden-sm hidden-xs">
            <li>Yes, customer pays for template</li>
            <li>Up to 5</li>
            <li><img src={ require('../../images/tick.png').default}  alt="cross"/></li>
            <li><img src={ require('../../images/tick.png').default}  alt="cross"/></li>
            <li>£1000</li>
            <li>There is almost no limit what can be done just ask</li>
         
          </ul>
        </div>
      <p> <a href="#" role="button" className="btn orange_background   btn-lg"></a> </p>
    </div>
  </div>



  
  

    <div className="row">
      <div className="col-sm-12">
        <h3 style={{textAlign: 'center'}}>Other services</h3>
    
     <div className="row">
      <div className="col-sm-6">

      <h4>Custom Tempates</h4>
      <p>We offer Custom Tempates. Our graphic designers will design you a Custom template based on your requirments.</p>
    </div>
    <div className="col-sm-6 features">
      <h4>E-commerce</h4>
      <p>We build e-commerce websites using Magento, Opencart etc</p>
    </div>

    <div className="col-sm-6 features">
      <h4>App Development</h4>
      <p>Need an app for your business, feel free to contact us to discuss.</p>
    </div>
  </div>
</div>
</div>
</div>

 



        <div className="domain" id="development">
            <div className="container"> 
                <div className="row PageHead">
                    <div className="col-md-12">
                        <h1>Areas we have worked In</h1>
                        <h3>We develop using the latest programming languages and we are always up for a challenge, just ask.  You the customer can come to us with a problem, our aim will be to find a solution.</h3>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-12">
                        <h2>Web based Languages</h2>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-6 features"> 
                        <img src={ require('../../images/projects/hc.PNG').default} alt="icon" className="img-responsive" />
                        <h4>HTML5</h4>
                        <p> HTML stands for Hyper Text Markup Language, it is the W3 standard markup language for creating Web pages. it is used to build the page strucure.</p>
                    </div>
                    <div className="col-sm-6 features"> 
                        <img src={ require('../../images/css.png').default} alt="icon" className="img-responsive" />
                        <h4>CSS3</h4>
                        <p>CSS stands for Cascading Style Sheets, it helps design the HTML.</p>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-6 features"> <img src={ require('../../images/php.png').default} alt="icon" className="img-responsive" />
                    <h4>PHP7</h4>
                    <p>PHP is a server side scriting language, that helps makes the site dynamic and interactive. it is also high on site security. PHP7 was relived on Dec 2018, this made PHP a fully object oriented programming language.</p>
                    </div>
                    
                    <div className="col-sm-6 features"> <img height="100" src={ require('../../images/mysql.png').default} alt="icon" className="img-responsive" />
                    <h4>MySQL</h4>
                    <p>SQL is a standard language for storing, manipulating and retrieving data in databases, it stands for Structured Query Language. MySQL is owned by Oracle, and is an open source relational database management system (RDBMS) based on SQL.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6 features"> <img src={ require('../../images/javascript.png').default}  alt="icon" className="img-responsive" />
                    <h4>JavaScript</h4>
                    <p> JavaScript  is a lightweight, frontend programming language. it is becoming more important by the day as mor for the site functionality is being moved to the front end of the site.</p>
                    </div>

                    <div className="col-sm-6 features"> <img src={ require('../../images/bootstrap.png').default}  alt="icon" className="img-responsive" />
                    <h4>Bootstrap</h4>
                    <p>Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                    <h2>Other Languages and Frameworks</h2>
                    
                    </div>
                </div>

                
                    <div className="col-sm-3 features"> <img src={ require('../../images/java.png').default} alt="icon" className="img-responsive"/></div>
                    <div className="col-sm-3 features"> <img src={ require('../../images/kotlin.jpg').default} alt="icon" className="img-responsive"/></div>
                    <div className="col-sm-3 features"> <img src={ require('../../images/codignitor.jpg').default} alt="icon" className="img-responsive"/></div>
                        <div className="col-sm-3 features"> <img src={ require('../../images/symfony.png').default} alt="icon" className="img-responsive"/></div>






                </div>
                </div>
                </>
    )

}


export default Development;