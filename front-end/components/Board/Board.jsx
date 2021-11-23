import React, {useState, useEffect} from 'react';

import Bars from './Bars'
import BarChart from './BarChart'
import Modes from './Modes'

const COLOR_UPDATED_BAR = 'rbg(255,0,255,0.6)'
const PRIMARY_BAR_COLOR = 'rgb(135,55,0,0.9)'

const Board = ({dataList , modeList, transformSpeed, ...args}) => {
  const [dataState,setDataState] = useState(dataList)
  const [sortedState,setSortedState] = useState(null)

  const setTransformation = (animationArr, animationSpeed = transformSpeed) => {
    // run the sort Algo to get the list of array for animation
    // const animationArr = sortType(data);
    // create loop to create animation
    for (let i = 0; i < animationArr.length; i++) {
      // getting class name of the chart
      const bars = document.getElementsByClassName('array-bar');
      // change the color for the bar except 2nd index of each pair
      const requiredChange = i % 3 !== 2;
      const curColor = bars[1].style.backgroundColor | 'rgb(0,83,255,0.2)'

      if (requiredChange) {
        // destructing the indices
        const [index1, index2] = animationArr[i];
        // style for each bar
        const styleForBar1 = bars[index1].style;
        const styleForBar2 = bars[index2].style;
        // change the color once it reaches all the bars of each pair
        const color = i % 3 === 0 ? styleForBar1.backgroundColor : curColor;
        const value = i % 3 === 0 ? styleForBar1.height : styleForBar2.height;
        setTimeout(() => {
          // changing the color
          styleForBar1.backgroundColor = color;
          styleForBar2.backgroundColor = color;
          styleForBar1.height = value;
          styleForBar2.height = value;
        }, i * animationSpeed);
      } 
      else if(i === animationArr.length){
        setTimeout(() => {
          // setResetData(false)
        }, i * animationSpeed);
      }
      else {
        setTimeout(() => {
          // updated data for third of the pair
          const [index1, newHeight] = animationArr[i];
          // changing style for the updated bar
          const styleForBar1 = bars[index1].style;
          styleForBar1.backgroundColor = curColor
          // changing height of the updated bar
          styleForBar1.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }
    // console.log('sorted data: ', data)
  };

  const handleBarAnimation = (origin, animationOrder) => {
    const bars = document.getElementsByClassName('array-bar');
    for(let i=0; i < animationOrder.length; i++){
      const changeRequired = i % 3 !== 2
      if(changeRequired){
        console.log('change is required at', i)
      }
      else{
        console.log('change is not required at', i)
      }

    }
  }

  useEffect(() => {
    if(sortedState !== null){ 
      console.log('transform func is called')
      setTransformation(sortedState)
    }
  }, [sortedState])
  

  return (
    <div className="board-container">
      <div className="flex-mid-nowarp-col">
      {modeList.map((data, idx)=> (
        <Modes 
        key = {'mode'+ idx} 
        method={data.method} 
        dataList={dataList} 
        type={data.type} 
        sortFunc={setSortedState}/>
      ))}
      </div>
      <BarChart {...args} >
        {dataList.map((data, idx) => (
          <Bars key={'bar'+idx} value={data}/>
        ))}
      </BarChart>
    </div>
  )
}

export default Board
