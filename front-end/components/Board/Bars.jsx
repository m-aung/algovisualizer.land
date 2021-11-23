import React from 'react'

const Bars = ({value,...args}) => {
  return (
    <div className="array-bar" style={{
      // get display screen size
      width: '30px',
      padding: '.125em',
      display: 'inline-block',
      margin: '1em .125em',
      backgroundColor: `rgb(${value}, 63, 255, 0.7)`,
      height: `${value}px`
    }} {...args}>
      {/* {value} */}
    </div>
  )
}

export default Bars
//       `background: ${value};height: ${value};width: 5em;`