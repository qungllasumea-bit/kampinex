import React from 'react'
import Building from '../organisms/Building'

export default function Home() {
  return (
    <div className='home'>
      <Building
        text='Willkommen bei kampinex'
        title='Metall ist unsere Leidenschaft!'
        paragraph='Ihr Partner für Metallbau und Blechtechnik aus der Ostschweiz, welcher Ihr Projektvorhaben konzeptioniert und realisiert. '
        textBtn='Unsere Leistungen'
        textBtnTwo='Projekte ansehen'
      />
    </div>
  )
}
