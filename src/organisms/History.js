import React from 'react'
import Title from '../atoms/Title'
import Text from '../atoms/Text'
import Paragraph from '../atoms/Paragraph'
import './History.css'

export default function History({text, textClassName, title, titleClassName, paragraph, ParagraphClassName}) {
  return (
    <section className='history'>
      <div className='container'>
        <div className='image'>
          <img src='https://demo.awaikenthemes.com/builtup/wp-content/uploads/2024/06/company-history-img.jpg' alt='Company History' />
          <div className='counter'>
            <h2>25+</h2>
            <p>Years Of Experience</p>
          </div>
        </div>
        <div className='content'>
          <Text text={text} textClassName={textClassName}/>
          <Title title={title} titleClassName={titleClassName}/>
         <Paragraph paragraph={paragraph} ParagraphClassName={ParagraphClassName}/>
        </div>
      </div>
    </section>
  )
}