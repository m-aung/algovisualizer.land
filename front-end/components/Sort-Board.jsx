import React, {useState, useEffect, useRef} from 'react';

import BarChart from './BarChart';
// import { sort } from 'd3';
// import * as SORT from '../algorithms/sorts/SORTS'

const AlgoBoard = (props) => {
  let [data,setData] = useState([])
  let [test, setTest] = useState(0)
  let [isClicked,setClicked] = useState(0)
  let [sortTimes, setsortTimes] = useState(0)
  // const dataRef = useRef(data);
  let curData = [];
  let displayComponent = <BarChart data={data} isClicked = {isClicked} sortClicks = {sortTimes} /> 
  let noDataComponent = <div id="noData"> Click on the <strong>New Random Data</strong> to begin </div>;
  // let displayComponent = <div>data = {test}</div>
  // let [updateData, setUpdateData] = useState(0)
  
    const randomSales = (arr = []) => {
      // const array = []
        //36 years
        let year = 1980;
        let counter = 0;
        
        // console.log('initail data: ',arr)
        // arr = [];
        while(counter < 36){
          let curObj = {}
          curObj["id"] = counter
          curObj["efficiency"] = (Math.random()*(40-24)+24).toPrecision(3)
          curObj["sales"] = Math.floor(Math.random()*(99-2)+2)*10000
          arr.push(curObj)
          counter++;
        }
        curData = deepCopyObject(arr);
        // curData = arr
        return arr;
    }
    
  const deepCopyObject = (original) => {
      let cloned, value, key

  if (typeof original !== "object" || original === null) {
    return original // Return the value if original is not an object
  }

  // Create an array or object to hold the values
  cloned = Array.isArray(original) ? [] : {}

  for (key in original) {
    value = original[key]

    // Recursively (deep) copy for nested objects, including arrays
    cloned[key] = deepCopyObject(value)
  }

  return cloned
}
    // var clicked = false;
    // const newRandom = () => {
    //   // setData((prevData) =>{
    //   //   curData = prevData;
    //   //   randomSales()
    //   // }) // changing a new random set of data
    //   setData(randomSales())
    //   setClicked(true) // setting it to be true
    //   // dataRef.current = data
    //   // curData = dataRef.current;
    //   // clicked = true
    //   // console.log('data from newRandom: ', data)
    //   // console.log('new Random2: ', dataRef.current)
    //   // console.log('new Random2 curDATA: ', curData)
    // }
    const bubbleSort = (input = []) => {
      //Bubble sort
    console.log('bubble sort CurData: ', input)
    // console.log('data from bubble sort: ', data)
   if(!Array.isArray(input)) return input;
   // first loop
   for (let first = 0; first < input.length; first++){
   // second loop
     for(let second = first+1; second < input.length; second++){
       if(input[first]["sales"] > input[second]["sales"]){
         const temp = input[first];
         input[first] = input[second];
         // console.log(temp);
         input[second] = temp;
         setsortTimes(sortTimes+1)
        //  setData(input); // change the state
        // setData(randomSales());
        // setUpdateData(updateData+1)
        // displayComponent = <BarChart data={input} isClicked = {isClicked} algorithm = {sortType} />
        //  console.log(`${first}th time: `,input)
        // console.log('changing the data')
       }
      //  console.log('not changing the data')
      //  setData(input);
      // setUpdateData(updateData+1)
     }
   }
   console.log('current input: ', input[0])
   console.log('current data: ', data[0])
  //  console.log(input === data)
  //  return input;
  // updateData = 0;
  return
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
      console.log('Current data from component mounted: ',curData)
      // setData([]) // set data to empty array 
      setData(randomSales())
    }, [])
    // when data state is updated
    // useEffect(()=>{
    //   // console.log('dataRef.current: ',dataRef.current)
    //   // dataRef.current = data;
    //   // displayComponent = <BarChart data={data} isClicked = {isClicked} algorithm = {sortType} />  ;
    //   // curData = dataRef.current;
    //   // dataRef.current = data
    //   // setData(randomSales())
    //   // console.log('data from data: ', data)
    //   console.log('data has changed!')
    //   // curData = deepCopyObject(data);
    //   // if(data){
    //     // displayComponent = <BarChart data={curData} isClicked = {isClicked} algorithm = {sortType} /> 
    //   // }
    //   // if(curData != data){
    //   // }
    //   // console.log('curData from useEffect: ',curData)
    //   // return (()=>{dataRef.current = data})
    // },[data])
    // when isClicked state is updated
    useEffect(()=>{
      if(isClicked > 0){
        setData(randomSales())
        setTest(test+1)
        // curData = randomSales()
        console.log('data after clicked: ', data[0])
        console.log('first element: ', curData[0])
        // curData = dataRef.current
        // console.log(displayComponent)
        // displayComponent = <BarChart data ={data} isClicked = {isClicked} algorithm = {sortType} /> 
        console.log('when isClicked is not equal to zero')
        console.log('isClicked has changed to', isClicked);
        // curData = deepCopyObject(dataRef.current)
      }
      else{
        console.log('doing nothing...')
      }
    },[isClicked])
    

    // useEffect (()=> {
    //   if(updateData > 0){
    //     console.log('curData: ', curData)
    //     // console.log('from updateData data: ', data);
    //     // setData(curData);
    //     console.log('from update Effect')
    //   }
    // },[updateData])
    
    /*
    notes: 
    barChart component is not finalized yet. should not display the component when parent component was mounted.
    figure out how to stop running random state, sortType state and data state not to run when the component was mounted
    */
   /*
   before changning the DOM
   {(isClicked > 0 || updateData > 0) ? 
            <BarChart data={data} isClicked = {isClicked} algorithm = {sortType} /> : 
            <div id="noData"> 
              Click on the <strong>New Random Data</strong> to begin
            </div>}
          <input type ='button' value = 'New Random Data' onClick ={()=> {
            setClicked(isClicked+1)
          }
   */
    return (
        <div className="App">
          <input type ='button' value = 'Bubble Sort' onClick = {()=>{bubbleSort(data)}}/>
          <input type ='button' value = 'Insertion Sort' onClick = {()=>{insertionSort()}}/>
          <input type ='button' value = 'Merge Sort' onClick = {()=>{mergeSort()}}/>
          <input type ='button' value = 'Selection Sort' onClick = {()=>{selectionSort()}}/>
          <input type ='button' value = 'Quick Sort' onClick = {()=>{quickSort()}}/>
          <input type ='button' value = 'Heap Sort' onClick = {()=>{heapSort()}}/>
          {(isClicked > 0) ? 
            displayComponent : 
            noDataComponent}
          <input type ='button' value = 'New Random Data' onClick ={(e)=> {
            e.preventDefault()
            setClicked(isClicked+1)
          }
          }/>
            <div className = 'algo'>
            </div>
        </div>
      );
}
export default AlgoBoard;