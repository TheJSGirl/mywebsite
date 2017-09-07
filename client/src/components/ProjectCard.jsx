import React from 'react';

const ProjectCard = (props) => {
  
  const {project} = props;

  return(
    <div className="col s12 m4 l4">
      <div className="card">
        <div className="card-image">
          <img src="http://lorempixel.com/400/200"/>
          <span className="card-title">{project.title}</span>
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
          <a href={project.links.hosted} target="_blank">View</a> 
          <a href={project.links.github} target="_blank">Github</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;