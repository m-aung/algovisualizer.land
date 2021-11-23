import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const MAX_DATA_SIZE = 20
const MIN_DATA_SIZE = 4

const MinLabel = styled.label`
  padding: 1rem 1rem;
`
const MaxLabel = styled.label`
  padding: 1rem 1rem;
`

const SliderBar = ({labelName, maximum, sliderName, defaultValue, confirmedChange}) => {
  const [dataState, setDataState] = useState(defaultValue)
  // const [state, setState] = useState({curVal: defaultValue})


  const handleChange = (event) => {
    setDataState(event.target.value)
    // setState({curVal: event.target.value})
  }
  return (
    <div className="flex-mid-nowrap-row" 
    ariel-label={labelName} 
    style={{textAlign:"right"}} >
      <label>{sliderName}</label>
    <MinLabel>{MIN_DATA_SIZE}</MinLabel>
      <input 
      type="range" 
      name="number of bars" 
      min={MIN_DATA_SIZE} 
      max={maximum | MAX_DATA_SIZE} 
      value={dataState}
      onChange={handleChange}
      />
      <MaxLabel>{dataState}</MaxLabel>
      <input 
      type="button"
      value="Click to Change" 
      onClick={(e)=>{
        e.preventDefault()
        confirmedChange(dataState)
      }
        }/>
    </div>
  )
}

export default SliderBar
