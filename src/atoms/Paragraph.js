import React from 'react'

export default function Paragraph({paragraph, ParagraphClassName}) {
  return (
    <div>
        <p className={ParagraphClassName}>{paragraph}</p>
    </div>
  )
}
