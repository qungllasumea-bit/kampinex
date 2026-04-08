import React from 'react'

export default function ButtonTwo({textBtnTwo, btnTwoClassName}) {
  return (
    <div>
        <button className={btnTwoClassName}>{textBtnTwo}</button>
    </div>
  )
}
