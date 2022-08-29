import React from 'react'
import "./Switch.scss"
import cx from "classnames";

export const Switch = ({rounded = false}) => {

  const sliderCX = cx('slider',{
    'rounded':rounded
  })

  return (
    <label className='switch'>
        <input type="checkbox"/>
        <span className='sliderCX'/>
    </label>
  )
}
