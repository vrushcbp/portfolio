import React from 'react'
import { useNavigate } from 'react-router-dom'
const ProjectCard = ({name, image, id}) => {
const navigate= useNavigate()
  return (
    <div className='projectCard' onClick={()=>{navigate('/project/' +id)}}>
        <div style={{backgroundImage:`url(${image})`}} className='backImage'/>
        <h1>{name}</h1>
    </div>
  )
}

export default ProjectCard