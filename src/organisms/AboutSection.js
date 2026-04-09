import React from 'react'
import Title from '../atoms/Title'
import Text from '../atoms/Text'
import Paragraph from '../atoms/Paragraph'
import Phone from '../assets/img/phone.png'
import Button from '../atoms/Button'
import './AboutSection.css'

export default function AboutSection() {
  return (
    <section className='about-section'>
      <div className='container'>
        <div className='image'>
          <img src='https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/about-us-img.png' alt='About Us' />
        </div>
        <div className='content'>
          <Text text='About Us' />
          <Title title='Crafting structures that last a lifetime' />
          <Paragraph paragraph='Crafting structures that last a lifetime requires a holistic approach that integrates advanced materials, resilient design, regular maintenance, and sustainability practices. By learning from historical examples and leveraging modern technology.' />
          <ul className='features'>
            <li>Comprehensive Services</li>
            <li>Advanced Technology</li>
            <li>Transparent Communication</li>
          </ul>
          <div className='quote'>
            <Button textBtn='Get Free Quote' />
            <div className='phoneIcon'>
              <img src={Phone} alt='Phone' className='phone-icon' />
              <div className='contact'>
                <p>+1 809 120 6705</p></div>


            </div></div>

        </div>
      </div>
    </section>
  )
}