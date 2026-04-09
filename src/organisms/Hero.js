import React from 'react'
import Title from '../atoms/Title'
import './Hero.css'

export default function Hero({ title }) {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <Title title={title} titleClassName='white' />
        <div className='breadcrumb'>
          <a href='/'>Home</a> &gt; {title}
        </div>
      </div>
    </section>
  )
}