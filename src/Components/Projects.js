import React, {useState} from 'react'
import projectList from '../Data/project.json';
import ProjectTile from './ProjectTile';

function Projects() {
  const [list, setList] = useState(projectList);
  
  return (
    <div className="jumbotron">
      <h1 className="display-4">Here are some of my Work!</h1>
      <hr className="my-4" />

      <div className='container'>
        <div className='row justify-content-between'>
          <div className='row'>
            {
              list.map(project => {
                return <ProjectTile src={project.src} alt={project.alt} link={project.link} text={project.text} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects