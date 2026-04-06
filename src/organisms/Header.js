import React from 'react'
import Logo from '../atoms/Logo'
import NavBar from '../molecules/NavBar'
import './Header.css'

export default function Header({homeUrl, aboutUrl, departmentsUrl, projectsUrl, contactUrl, logoSrc}) {
  return (
    <div className='header'>
      <Logo src={logoSrc} />
      <NavBar 
        homeUrl={homeUrl} 
        aboutUrl={aboutUrl} 
        departmentsUrl={departmentsUrl} 
        projectsUrl={projectsUrl} 
        contactUrl={contactUrl} 
      />
    </div>
  )
}
