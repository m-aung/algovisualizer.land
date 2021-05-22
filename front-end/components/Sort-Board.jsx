import React, {useState, useEffect, useRef} from 'react';

import BarChart from './BarChart';
// import { sort } from 'd3';
// import * as SORT from '../algorithms/sorts/SORTS'

const AlgoBoard = (props) => {
  
    const randomSales = (arr = []) => {
      // const array = []
        //36 years
        let year = 1980;
        let counter = 0;
        
        // console.log('initail data: ',arr)
        arr = [];
        while(counter < 36){
          let curObj = {}
          curObj["year"] = year + (counter * 5 )
          curObj["efficiency"] = (Math.random()*(40-24)+24).toPrecision(3)
          curObj["sales"] = Math.floor(Math.random()*1000)*100
          arr.push(curObj)
          counter++;
        }
        // curData = arr;
        return;
    }
    var [data,setData] = useState([])
    var [isClicked,setClicked] = useState(false)
    var [sortType, setSortType] = useState('')
    // var [currentState, setCurrentState] = useState(data);
    const dataRef = useRef(data);
    var curData;
    // var clicked = false;
    const newRandom = () => {
      // setData(randomSales()) // changing a new random set of data
      setClicked(true) // setting it to be true
      // dataRef.current = data
      // curData = dataRef.current;
      // clicked = true
      console.log('data from newRandom: ', data)
      console.log('new Random2: ', dataRef.current)
      console.log('new Random2 curDATA: ', curData)
    }
    const bubbleSort = () => {
      //Bubble sort
      // setSortType('bubble');
    // if input is not array return
    console.log('current data: ', curData)
   if(!Array.isArray(curData)) return curData;
   // first loop
   for (let first = 0; first < curData.length; first++){
   // second loop
     for(let second = first+1; second < curData.length; second++){
       if(curData[first]["sales"] > curData[second]["sales"]){
         const temp = curData[first];
         curData[first] = curData[second];
         // console.log(temp);
         curData[second] = temp;
         setData(curData); // change the state
         console.log(`${first}th time: `,curData)
       }
     }
   }
   return curData;
    }

    const insertionSort = () => {
      setSortType('insertion');
    }

    const mergeSort = () => {
      setSortType('merge');
    }

    const selectionSort = () => {
      setSortType('selection');
    }
    const quickSort = () => {
      setSortType('quick');
    }

    const heapSort = () => {
      setSortType('heap');
    }

    

    // component did mounted!
    useEffect(()=> {
      console.log('component is mounted!')
      //  props.history.push('/sorting')
    }, [])
    // when data state is updated
    useEffect(()=>{
      console.log('dataRef.current: ',dataRef.current)
      // dataRef.current = data;
      curData = dataRef.current;
      dataRef.current = data
      console.log('data has changed!')
      // console.log('curData from useEffect: ',curData)
      // return (()=>{dataRef.current = data})
    },[data])
    // when isClicked state is updated
    useEffect(()=>{
      console.log('isClicked has changed!')
      setData(randomSales())
      return () => {setClicked(false)} // resetting the click cache
    },[isClicked])
    //when sortType state is updated
    useEffect(()=>{
      console.log(`Sort Type is changed to ${sortType.toUpperCase()}`)
    },[sortType])
    // useEffect(() => {
    //     console.log('state updated!')
    //   }, [currentState])

    return (
        <div className="App">
          <input type ='button' value = 'Bubble Sort' onClick = {()=>{bubbleSort()}}/>
          <input type ='button' value = 'Insertion Sort' onClick = {()=>{insertionSort()}}/>
          <input type ='button' value = 'Merge Sort' onClick = {()=>{mergeSort()}}/>
          <input type ='button' value = 'Selection Sort' onClick = {()=>{selectionSort()}}/>
          <input type ='button' value = 'Quick Sort' onClick = {()=>{quickSort()}}/>
          <input type ='button' value = 'Heap Sort' onClick = {()=>{heapSort()}}/>
          {(data && isClicked) ? 
            <BarChart data={data} isClicked = {isClicked} algorithm = {sortType} /> : 
            <div id="noData"> 
              Click on the <strong>New Random Data</strong> to begin
            </div>}
          <input type ='button' value = 'New Random Data' onClick ={()=> {
            newRandom()
          }
          }/>
            <div className = 'algo'>
            </div>
        </div>
      );
}
export default AlgoBoard;