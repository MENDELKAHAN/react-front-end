import React from "react";


const Projects = ()=>
{
    return(
		<>
        <div className="domain">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center" style={{marginTop: "1em"}} >
						<h1>Some Of Our Projects</h1>
					</div>

 		
 		<div className="col-md-6 project">
 			<a  target="_blank" rel="noreferrer" href="https://ycwholesale.co.uk">
 				<img alt=""    src={ require('../images/projects/yc.PNG').default}/>
 			</a>
 		</div>
 		<div className="col-md-6 project">
 			<a target="_blank" rel="noreferrer" href="https://www.groceriesrus.co.uk/">
 				<img alt=""  src={ require('../images/projects/grus.PNG').default} />
 			</a>
 		</div>
 	</div>

 	<div className="row">
 		<div className="col-md-6 project">
 			<a target="_blank" rel="noreferrer" href="https://www.hatcentre.co.uk/">
 				<img alt=""    src={ require('../images/projects/hc.PNG').default}/>
 			</a>
 		</div>
 	
 		<div className="col-md-6 project">
 			<a  target="_blank" rel="noreferrer" href="http://onlineforu.org/royalsilver/">
 				<img alt=""   src={ require('../images/projects/rc.PNG').default} />
 			</a>
 		</div>
 	</div>

 	<div className="row">
 		<div className="col-md-6 project"><a  target="_blank" rel="noreferrer" href="https://aceproservices.co.uk/"><img alt=""   src={ require('../images/projects/aps.PNG').default} /></a></div>
 		<div className="col-md-6 project"><a  target="_blank" rel="noreferrer" href="https://electriciandirect.co.uk/"><img alt=""  src={ require('../images/projects/ed.PNG').default}/></a></div>

 	</div>
 	<div className="row">
 		<div className="col-md-6 project"><a  target="_blank" rel="noreferrer" href="https://www.newsheet.co.uk/"><img alt=""   src={ require('../images/projects/ns.PNG').default} /></a></div>
 		<div className="col-md-6 project"><a  target="_blank" rel="noreferrer" href="http://holocaust-awareness.org"><img alt=""   src={ require('../images/projects/ha.PNG').default} /></a></div>
	</div>
 	<div className="row">

 		<div className="col-md-6 project"><a  target="_blank" rel="noreferrer" href="https://www.localnewsadvertiser.co.uk/"><img alt=""   src={ require('../images/projects/ln.PNG').default} /></a></div>
	
 		<div className="col-md-6 project"><a  target="_blank" rel="noreferrer" href="http://onlineforu.co.uk/esy"><img alt=""   src={ require('../images/projects/esy.PNG').default} /></a></div>
 	</div>

 	<div className="row">

 		<div className="col-md-6 project"><a  target="_blank" rel="noreferrer" href="https://kindness-advantage.com/"><img alt=""   src={ require('../images/projects/kind.PNG').default} /></a></div>
	
 		
 	</div>


	<div className="col-md-12 text-center" style={{marginTop: "1em"}}>
		<h1>Admin Panels</h1>
	</div>
	<div className="row">
		<div className="col-md-12 project">
			 <h3>This is an admin panel created for property management Company</h3>
			 <img alt="" src={ require('../images/projects/admin001.png').default} />
			 
		</div>
		<div className="col-md-12 project">
			 <h3>This is an admin panel was design for a embroidery management system</h3>
			 <img alt="" src={ require('../images/projects/admin002.png').default} />
			 
		</div>
	</div>

</div>
</div>
</>

    )
}


export default Projects;

