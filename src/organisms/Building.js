import React from 'react'
import Text from '../atoms/Text';
import Title from '../atoms/Title';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';
import ButtonTwo from '../atoms/ButtonTwo';
import './Building.css';

export default function Building({text, textClassName, title, titleClassName, paragraph, ParagraphClassName, textBtn, btnTwoClassName, btnClassName, textBtnTwo}) {
  return (
    <div className='building'>
        <video autoPlay loop muted playsInline className="bg-video">
    <source src="https://video.wixstatic.com/video/515308_28ca547254b149149ce4f59e384384e4/720p/mp4/file.mp4" type="video/mp4" />
  </video>
       <div className='content'>
         <Text text={text} textClassName={textClassName}/>
        <Title title={title} titleClassName={titleClassName}/>
        <Paragraph paragraph={paragraph} ParagraphClassName={ParagraphClassName}/>
        <div className='twoBtn'>
            <Button textBtn={textBtn} btnClassName={btnClassName}/>
            <ButtonTwo textBtnTwo={textBtnTwo} btnTwoClassName={btnTwoClassName}/>
        </div>
        </div>
    </div>
  )
}
