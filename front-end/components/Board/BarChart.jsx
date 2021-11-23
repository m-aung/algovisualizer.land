import React from 'react'

const BarChart = ({children,...args}) => {
  return (
    <div {...args} >
      {children}
    </div>
  )
}

export default BarChart
