import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../Helpers/ProjectList'
import { GitHub } from '@mui/icons-material'
import './ProjectDisplay.css'
const ProjectDisplay = () => {
  const { id } = useParams()
  const project = ProjectList[id]
  return (
    <div className='project'>
      <div className='project-container'>
        <h1>{project.name}</h1>
        <div className='project-class'>
          <img src={project.image} alt='No Connection' />
          <span className='skills'>
              Skills: {project.skills}
          </span>
          <GitHub />
        </div>
      </div>
    </div>
  )
}

export default ProjectDisplay