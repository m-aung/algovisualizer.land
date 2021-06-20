import React, {useState, useEffect, useReducer} from 'react';
import BarChart from './BarChart';
// import { sort } from 'd3';
import {getMergeSort, getBubbleSort, getSelectionSort} from '../d3/test-sort.js'

const randomNum =(min, max)=>{
  return Math.floor(Math.random()*(max-min +1)+ min)
}

const AlgoBoard = (props) => {
  // let sortCounter = 0
  let [windowWidth, setWindowWidth] = useState(window.innerWidth)
  let DATA_SIZE = 55
  const useD3 = false
  const PRIMARY_BAR_COLOR = 'steelblue';
  const COLOR_UPDATED_BAR = 'red';
  const TRANSFORMATION_SPEED = 10
  let [state,setState] = useState({data:null, body_width:document.body.clientWidth})
  let [data,setData] = useState([]) // data for d3
  // let [sortData, setSortData] = useState([])
  let [randomClicks,setRandomClicks] = useState(0) // randomClicks count
  let [sortTimes, setsortTimes] = useState(0) // sorting time
  let [dataRequired,setDataRequired] = useState(true) // new data requirement
  let [err, setErr] = useState({message: "unknown"}) // error state
  let [time, setTime] = useState(null) //


  let displayComponent = useD3 ? <BarChart {...props} data={data} randomClicks = {randomClicks} sortClicks = {sortTimes} sort={'bubble'}/> : data.map((value, idx) => (
    
    <div
      className="array-bar"
      key={idx}
      id ={value}
      style={{
        width: '4px',
        padding: '.125em',
        display: 'inline-block',
        margin: '1em .125em',
        backgroundColor: PRIMARY_BAR_COLOR,
        height: `${value}px`,
      }}/>

  ))


  let noDataComponent = <div id="noData"> Click on the <strong>New Random Data</strong> to begin </div>
  let messageComponent = <div id="message">{time}<br/>{err.message}</div> 

  // randomize the data
    const randomSales = (arr = [], arrSize = DATA_SIZE) => {
        let counter = 0;
        if(useD3){
          while(counter < arrSize){
            let curObj = {}
            curObj["id"] = counter
            curObj["efficiency"] = (Math.random()*(40-24)+24).toPrecision(3)
            curObj["efficiency"] = (randomNum(40,24)).toPrecision(3)
            curObj["sales"] = Math.floor(randomNum(99,2))*10000
            arr.push(curObj)
            counter++;
          }
        }
        else{
          while(counter < arrSize){
            let randomNumber = randomNum(5,380)
            arr.push(randomNumber)
            counter++;
          }
        }
        return arr;
    }
  
  const setTransformation = (sortType, animationSpeed = TRANSFORMATION_SPEED) => {
    // run the sort Algo to get the list of array for animation
    const barsToChange = sortType(data);
    // create loop to create animation
    for (let i = 0; i < barsToChange.length; i++) {
      // getting class name of the chart
      const bars = document.getElementsByClassName('array-bar');
      // change the color for the bar except 2nd index of each pair
      const requiredChange = i % 3 !== 2;
      if (requiredChange) {
        // destructing the indices
        const [index1, index2] = barsToChange[i];
        // style for each bar
        const styleForBar1 = bars[index1].style;
        const styleForBar2 = bars[index2].style;
        // change the color once it reaches all the bars of each pair
        const color = i % 3 === 0 ? COLOR_UPDATED_BAR : PRIMARY_BAR_COLOR;
        setTimeout(() => {
          // changing the color
          styleForBar1.backgroundColor = color;
          styleForBar2.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          // updated data for third of the pair
          const [index1, newHeight] = barsToChange[i];
          // changing style for the updated bar
          const styleForBar1 = bars[index1].style;
          // changing height of the updated bar
          styleForBar1.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }
    console.log('sorted data: ', data)
  };
  

  

 
  const heapSort = (input = []) => {
    setDataRequired(true)
    const timeStarted = Date.now()
  }
  useEffect(()=>{
    console.log(dataRequired)
  },[])

  // when randomClicks state is updated
  useEffect(()=>{
    // console.log('screenWidth:', screenWidth)
    // if(dataRequired){
    //   setData(randomSales(data,screenWidth))
    // }
    
    setTime('')
  },[randomClicks])
  useEffect(()=>{
    DATA_SIZE=Math.floor((windowWidth/4)/8)
  },[windowWidth])
  useEffect(()=>{
    setErr({message: "Please generate new data to use sort algorithms again"})
  },[dataRequired, time])

  // useEffect(()=> {
  //   if(sortTimes > 0){
  //     setInterval(()=>{
  //       // setData(sortData)
  //       console.log('from sortTime useEffect:', data[5]["sales"])
  //     },1000)
  //   }
  // },[sortTimes])
    
    /*
    notes: 
    barChart component is not finalized yet-should not display the component when parent component was mounted.√
    stop running random state, sortType state and data state not to run when the component was mounted. √
    add new something to handle the after sorted effect.√
    add time consuming tracker√
    need the data to be presistent 
    */
  return (
    <div className="App">
      <input type ='button' value = 'Bubble Sort' disabled={dataRequired} onClick = {()=>{setTransformation(getBubbleSort, 1)}}/>
      <input type ='button' value = 'Insertion Sort' disabled = {dataRequired} onClick = {()=>{alert('Under-construction')}}/>
      <input type ='button' value = 'Merge Sort' disabled = {dataRequired} onClick = {()=>{setTransformation(getMergeSort, 1)}}/>
      <input type ='button' value = 'Selection Sort' disabled = {dataRequired} onClick = {()=>{setTransformation(getSelectionSort)}}/>
      <input type ='button' value = 'Quick Sort' disabled = {dataRequired} onClick = {()=>{alert('Under-construction')}}/>
      <input type ='button' value = 'Heap Sort' disabled = {dataRequired} onClick = {()=>{alert('Under-construction')}}/>
      <div>
      {(randomClicks > 0 && data) ? 
        displayComponent : 
        noDataComponent}
        {(dataRequired) ? messageComponent : console.log('data: ', data)}
        </div>
      <input type ='button' value = 'New Random Data' onClick ={(e)=> {
        e.preventDefault()
        setDataRequired(false)
        setData(randomSales())
        setRandomClicks(randomClicks+1)
      }
      }/>
        <div className = 'algo'>
        </div>
    </div>
  );
}
export default AlgoBoard;