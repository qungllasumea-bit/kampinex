import React from 'react'

export default function Text({ text, textClassName }) {
  return (
    <div>
      <h3 className={textClassName}>{text}</h3>
    </div>
  )
}