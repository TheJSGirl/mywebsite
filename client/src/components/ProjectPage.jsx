import React from 'react';
import projectData from '../projects/data';
import ProjectCard from './ProjectCard.jsx'; 

const  imgArray = ['img1.png', 'img.jpg' ];

const Project = () => {
  let count = 0;

  return(
    <div className="container">  
       {/*heading for the project page*/}
        <div className="center">
          <h4>My Projects </h4>
          <p className="teal-text text-darken-2">Thats what I did till now. Visit soon to see more!</p>
        </div>
        
        
          {/*all the cards should be displayed in a row for large screens*/}
          <div className="row">
            {
              projectData.map((project) => {
                return(
                  <ProjectCard key={count++} project={project}/>
                );
              })
            }
          </div>
    </div>
  )
}

export default Project;