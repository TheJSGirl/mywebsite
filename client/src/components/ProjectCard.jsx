import React from 'react';

const ProjectCard = (props) => {
  
  const {project} = props;
 

  return(
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          
           <img src={"/images/" + project.screen} alt=""/>
           <span className="card-title black">{project.title}</span>
        </div>
        <div className="card-content">
          <p>{project.description}</p>
        </div>
        <div className="card-action">
          {
            project.tech.map((item) => {
              return <p key={item} className= "chip">{item}  &nbsp; &nbsp;</p>
            })
          }
        </div>
        <div className="card-action">
          {
           (project.links.hosted) ? <a href={project.links.hosted} target="_blank">View</a> : ' '
          }
          {
            (project.links.github) ? <a href={project.links.github}>Github</a> : ' '
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;