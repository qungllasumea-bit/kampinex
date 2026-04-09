import React from 'react'
import Hero from '../organisms/Hero.js'
import AboutSection from '../organisms/AboutSection.js'
import History from '../organisms/History.js'
import ValuesSection from '../organisms/ValuesSection.js'
import Popup from '../organisms/Popup.js'
import WhatWeDo from '../organisms/WhatWeDo.js'

export default function About() {
  return (
    <div className='about'>
      <Hero title="About Us" />
      <AboutSection />
      <History

        text="Our History"
        title="Crafting structures that last a lifetime"
        paragraph="Das Unternehmen wurde 2001 in der Schweiz gegründet.Die Hauptgründer sind:
  Mentor Laci (aus dem Kosovo 🇽🇰)
  Mirco Bischoff Anfangs war das Unternehmen in mehreren Schweizer Städten tätig (z. B. Andwil, Oberbüren).
 2024 zog es nach Sirnach um. Es ist bis heute ein aktives Unternehmen."

      />
      <ValuesSection />
      
      <Popup />

      <WhatWeDo
        text='WHAT WE DO'
        title='Building the future on a foundation of excellence'
        paragraph='At Kampinex, we are dedicated to delivering top-notch construction services that exceed our clients’ expectations. With a commitment to quality, innovation, and sustainability, we strive to build structures that stand the test of time while fostering strong relationships with our clients and communities.'

      />
    </div>
  )
}