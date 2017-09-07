import React from 'react';
import projectData from '../projects/data';

const Projects = () => {
  let count = 0;

  return(
      <div className="container">
        <h1 className="center">My Projects</h1>
        <br/>
        <div className="row">
          {
            projectData.map((project) => {
              return(
                <ProjectCard project= {project}/>
                <div key={++count} className="col s12 m4 l4">
                  <div className="card">
                    <div className="card-image">
                      <img className="responsive" src={project.screen || 'http://lorempixel.com/400/200'} />
                      <span className="card-title">{project.title}</span>
                    </div>
                    <div className="card-content">
                      <p>{project.descripton}</p>
                    </div>
                    
                    <div className="card-action">
                      {
                        project.tech.map((item) => {
                          return <p key={item} className="chip">{item} &nbsp; &nbsp;</p>;
                        })
                      }
                    </div>
                    <div className="card-action">
                      {
                        (project.links.hosted) ? <a href={project.links.hosted}>Use App</a> : ''                      
                      }
                      {
                        (project.links.github) ? <a href={project.links.github}>Github</a> : 'Not Listed'
                      }
                    </div>
                  </div>
              )
            });
          }
        </div>
    </div>
    </div>
  );
}


export default Projects; 