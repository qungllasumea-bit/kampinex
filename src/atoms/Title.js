import React from 'react'

export default function Title({title, titleClassName}) {
  return (
    <div>
        <h1 className={titleClassName}>{title}</h1>
    </div>
  )
}
