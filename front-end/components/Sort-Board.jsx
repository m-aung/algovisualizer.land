import React, {useState, useEffect, useRef} from 'react';

import BarChart from './BarChart';
// import { sort } from 'd3';
// import * as SORT from '../algorithms/sorts/SORTS'

const AlgoBoard = (props) => {
  let [data,setData] = useState([])
  let [randomClicks,setRandomClicks] = useState(0)
  let [sortTimes, setsortTimes] = useState(0)

  let displayComponent = <BarChart data={data} randomClicks = {randomClicks} sortClicks = {sortTimes} /> 
  let noDataComponent = <div id="noData"> Click on the <strong>New Random Data</strong> to begin </div>;
  
    const randomSales = (arr = []) => {

        //36 years
        let counter = 0;
        
        while(counter < 36){
          let curObj = {}
          curObj["id"] = counter
          curObj["efficiency"] = (Math.random()*(40-24)+24).toPrecision(3)
          curObj["sales"] = Math.floor(Math.random()*(99-2)+2)*10000
          arr.push(curObj)
          counter++;
        }
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
    const bubbleSort = (input = []) => {
      //Bubble sort
   if(!Array.isArray(input)) return input;
   // first loop
   for (let first = 0; first < input.length; first++){
   // second loop
     for(let second = first+1; second < input.length; second++){
       if(input[first]["sales"] > input[second]["sales"]){
         const temp = input[first];
         input[first] = input[second];
         input[second] = temp;
         setsortTimes(sortTimes+1)
       }
       setsortTimes(sortTimes+1)
     }
   }
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
    // useEffect(()=> {
    //   console.log('component is mounted!')
    //   //  props.history.push('/sorting')
    //   // console.log('Current data from component mounted: ',curData)
    //   setData([]) // set data to empty array 
    //   setData(randomSales())
    // }, [])


    // when randomClicks state is updated
    useEffect(()=>{
      setData(randomSales())
      return(()=> {setData(randomSales())
      setsortTimes(0)})
    },[randomClicks])
    
    /*
    notes: 
    barChart component is not finalized yet. should not display the component when parent component was mounted.√
    figure out how to stop running random state, sortType state and data state not to run when the component was mounted. x
    */
   /*
   before changning the DOM

   */
    return (
        <div className="App">
          <input type ='button' value = 'Bubble Sort' onClick = {()=>{bubbleSort(data)}}/>
          <input type ='button' value = 'Insertion Sort' onClick = {()=>{insertionSort()}}/>
          <input type ='button' value = 'Merge Sort' onClick = {()=>{mergeSort()}}/>
          <input type ='button' value = 'Selection Sort' onClick = {()=>{selectionSort()}}/>
          <input type ='button' value = 'Quick Sort' onClick = {()=>{quickSort()}}/>
          <input type ='button' value = 'Heap Sort' onClick = {()=>{heapSort()}}/>
          {(randomClicks > 0) ? 
            displayComponent : 
            noDataComponent}
          <input type ='button' value = 'New Random Data' onClick ={(e)=> {
            e.preventDefault()
            setRandomClicks(randomClicks+1)
          }
          }/>
            <div className = 'algo'>
            </div>
        </div>
      );
}
export default AlgoBoard;