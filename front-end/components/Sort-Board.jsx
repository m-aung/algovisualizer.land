import React, {useState, useEffect} from 'react';

import Board from '../components/Board'
import SliderBar from './Slider/SliderBar';

import {buildDataArray, buildModeList} from '../algorithms/others/logic'

const initialData = buildDataArray(10)

const AlgoBoard = (props) => {

  const [data, setData] = useState(initialData)
  const [sortedData, setSortedData] = useState(null)
  const [dataSize, setDataSize] = useState(10)
  const [transformSpeed, setTransformSpeed] = useState(10)

  const modeList = buildModeList('Bubble', 'Merge', 'Selection', 'Insetion')
  
  // handler functions
  const handleDataConfirmedChange = (size,event) => {
    const dataArray = buildDataArray(size)
    setData(dataArray)
  }
  const handleSpeedConfirmedChange = (speed,event) => {
    setTransformSpeed(speed)
  }

  return (
    <div>
    <Board dataList={data} modeList={modeList} transformSpeed={transformSpeed}/>
    <h3>Customize the data size here </h3>
    <SliderBar 
      labelName='data slider'
      sliderName='Size'
      defaultValue={dataSize}
      confirmedChange={handleDataConfirmedChange}/>
    <SliderBar 
      labelName='speed slider'
      sliderName='Speed'
      defaultValue={transformSpeed} 
      confirmedChange={handleSpeedConfirmedChange}/>

    </div>
  );
}
export default AlgoBoard;

