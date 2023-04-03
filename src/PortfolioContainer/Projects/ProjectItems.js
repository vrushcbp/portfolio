import React from 'react'
import ProjectCard from './ProjectCard'
import './ProjectItems.css'
import { ProjectList } from '../Helpers/ProjectList'

const ProjectItems = () => {

  return (
    <div className='projectItems'>
      <h1>
        My projects
      </h1>
      <div className='projectList'>
        {
          ProjectList.map((project, idx) => {
            return <ProjectCard id={idx} name={project.name} image={project.image} />
          })
        }
      </div>
    </div>
  )
}

export default ProjectItems