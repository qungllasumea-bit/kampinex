import React from 'react'

export default function Button({textBtn, btnClassName}) {
  return (
    <div>
        <button className={btnClassName}>{textBtn}</button>
    </div>
  )
}
