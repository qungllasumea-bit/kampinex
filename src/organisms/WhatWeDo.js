import React from 'react'
import Text from '../atoms/Text'
import Title from '../atoms/Title'
import Paragraph from '../atoms/Paragraph'
import InfoCard from '../molecules/infoCard'
import '../organisms/WhatWeDo.css'

export default function WhatWeDo({ text, textClassName, title, titleClassName, paragraph, ParagraphClassName }) {
    const data = [
        {

            text: "99%",
            paragraph: "Buildings Control Approval Rate"
        },
        {
            text: "320+",
            paragraph: "Active Construction Management"
        },

        {
            text: "200+",
            paragraph: "Completed Projects Every Year"
        },
        {
            text: "4.253",
            paragraph: "Million Euros Turnover In The 2020"
        },
    ];
    return (
        <section className="what-we-do">
            <div className='container'>
                <div className='content'>
                    <Text text={text} textClassName={textClassName} />
                    <Title title={title} titleClassName={titleClassName} />
                    <Paragraph paragraph={paragraph} ParagraphClassName={ParagraphClassName} />
                </div>
                <div className='cards'>
                    {data.map((item, index) => (
                        <InfoCard
                            text={item.text}
                            paragraph={item.paragraph}
                            showIcon={false}
                        />
                    ))}

                </div>
            </div>
        </section>
    )
}