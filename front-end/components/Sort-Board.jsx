import React, {useState, useEffect, useRef} from 'react';

import BarChart from './BarChart';
// import { sort } from 'd3';
// import * as SORT from '../algorithms/sorts/SORTS'

const AlgoBoard = (props) => {
  let [data,setData] = useState()
  let [isClicked,setClicked] = useState(0)
  let [sortType, setSortType] = useState('')
  const dataRef = useRef(data);
  let curData;
  let [updateData, setUpdateData] = useState(0)
  
    const randomSales = (arr = []) => {
      // const array = []
        //36 years
        let year = 1980;
        let counter = 0;
        
        // console.log('initail data: ',arr)
        // arr = [];
        while(counter < 36){
          let curObj = {}
          curObj["year"] = year + (counter * 5 )
          curObj["efficiency"] = (Math.random()*(40-24)+24).toPrecision(3)
          curObj["sales"] = Math.floor(Math.random()*(99-2)+2)*10000
          arr.push(curObj)
          counter++;
        }
        curData = arr;
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
    console.log('bubble sort CurData: ', curData)
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
        //  setData(input); // change the state
        setData(randomSales());
        // setUpdateData(updateData+1)
        //  console.log(`${first}th time: `,input)
        // console.log('changing the data')
       }
      //  console.log('not changing the data')
      //  setData(input);
      // setUpdateData(updateData+1)
     }
   }
   console.log('current input: ', input)
   console.log('current data: ', data)
   console.log(input === data)
  //  return input;
  updateData = 0;
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
      // console.log('Current data: ',curData)
      setData([]) // set data to empty array 
    }, [])
    // when data state is updated
    useEffect(()=>{
      // console.log('dataRef.current: ',dataRef.current)
      // dataRef.current = data;
      // curData = dataRef.current;
      // dataRef.current = data
      console.log('data has changed!')
      // if(curData != data){
        curData = deepCopyObject(data);
      // }
      // console.log('curData from useEffect: ',curData)
      // return (()=>{dataRef.current = data})
    },[data])
    // when isClicked state is updated
    useEffect(()=>{
      if(isClicked > 0){
        setData(randomSales())
        // setData((prevData)=> {randomSales()
        // curData = prevData});
        // return () => {setClicked(false)
        //   curData = data}
        console.log('when isClicked is not equal to zero')
      }
      console.log('isClicked has changed to', isClicked);
      curData = deepCopyObject(dataRef.current)
      // console.log('after clicked: ' ,curData)
    //   return () => {setClicked(false)
    //   curData = data} // resetting the click cache
    },[isClicked])
    //when sortType state is updated
    useEffect(()=>{
      console.log(`Sort Type is changed to ${sortType}`)
      switch(sortType){
          case 'bubble':
            bubbleSort()
            console.log(`${sortType} sorting completed...`)
            break;
          case 'insertion':
            insertionSort()
            console.log(`${sortType} sorting completed...`)
            break; 
          case 'merge':
            mergeSort()
            console.log(`${sortType} sorting completed...`)
            break;  
          case 'selection':
            selectionSort()
            console.log(`${sortType} sorting completed...`)
            break;
          case 'quick':
            quickSort()
            console.log(`${sortType} sorting completed...`)
            break; 
          case 'heap':
            heapSort()
            console.log(`${sortType} sorting completed...`)
            break; 
          default:
            // console.log('Unknown Sort Type reciveved! Please try again later....');
            break;
        }
        return(()=>{
          setSortType('');
        })
    },[sortType])

    useEffect (()=> {
      if(updateData > 0){
        console.log('curData: ', curData);
        // console.log('from updateData data: ', data);
        // setData(curData);
        console.log('from update Effect')
      }
    })
    
    /*
    notes: 
    barChart component is not finalized yet. should not display the component when parent component was mounted.
    figure out how to stop running random state, sortType state and data state not to run when the component was mounted
    */
    return (
        <div className="App">
          <input type ='button' value = 'Bubble Sort' onClick = {()=>{bubbleSort(curData)}}/>
          <input type ='button' value = 'Insertion Sort' onClick = {()=>{insertionSort()}}/>
          <input type ='button' value = 'Merge Sort' onClick = {()=>{mergeSort()}}/>
          <input type ='button' value = 'Selection Sort' onClick = {()=>{selectionSort()}}/>
          <input type ='button' value = 'Quick Sort' onClick = {()=>{quickSort()}}/>
          <input type ='button' value = 'Heap Sort' onClick = {()=>{heapSort()}}/>
          {(isClicked > 0 || updateData > 0) ? 
            <BarChart data={data} isClicked = {isClicked} algorithm = {sortType} /> : 
            <div id="noData"> 
              Click on the <strong>New Random Data</strong> to begin
            </div>}
          <input type ='button' value = 'New Random Data' onClick ={()=> {
            setClicked(isClicked+1)
          }
          }/>
            <div className = 'algo'>
            </div>
        </div>
      );
}
export default AlgoBoard;