import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar({homeUrl, aboutUrl, departmentsUrl, projectsUrl, contactUrl}) {
  return (
    <div className='navBar'>
        <Link to={homeUrl}>Home</Link>
        <Link to={aboutUrl}>About</Link>
        <Link to={departmentsUrl}>Departments</Link>
        <Link to={projectsUrl}>Projects</Link>
        <Link to={contactUrl}>Contact</Link>
    </div>
  )
}
