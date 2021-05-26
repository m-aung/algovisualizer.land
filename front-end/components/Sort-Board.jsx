import React, {useState, useEffect, useRef} from 'react';

import BarChart from './BarChart';
// import { sort } from 'd3';
// import * as SORT from '../algorithms/sorts/SORTS'

const AlgoBoard = (props) => {
  let [data,setData] = useState([])
  let [randomClicks,setRandomClicks] = useState(0)
  let [sortTimes, setsortTimes] = useState(0)
  let [dataRequired,setDataRequired] = useState(null)
  let [err, setErr] = useState({message: "unknown"})

  let displayComponent = <BarChart data={data} randomClicks = {randomClicks} sortClicks = {sortTimes} /> 
  let noDataComponent = <div id="noData"> Click on the <strong>New Random Data</strong> to begin </div>
let errorComponent = <div id="error">{err}</div>
let timeComponent = <div id="time">{}</div>
  
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
    // Edge case
   if(!Array.isArray(input)) return input;
   // first loop from 0 to last element
   for (let first = 0; first < input.length; first++){
   // second loop from cur element of first loop to last element
     for(let second = first+1; second < input.length; second++){
       if(input[first]["sales"] > input[second]["sales"]){ // is the first element is greater than second
         // create a variable the first element by value
         const temp = input[first];
         // assign the first element to second one
         input[first] = input[second];
         // assign the second element to variable
         input[second] = temp;
         // increment the sort counter one
        //  setsortTimes(sortTimes+1)
       }
       setsortTimes(sortTimes+1)
     }
   }
   setDataRequired(true);
  return
}

    const insertionSort = (input = []) => {
      // starting from second element and insert to the previous index if the current element is lower than previous element
      // Edge case
      if(!Array.isArray(input)) return input;
      // first loop from second element to last element
      for(let curIndex = 1; curIndex < input.length; curIndex++){
        let curElement = input[curIndex]['sales']; // current Element
        let prevIndex= curIndex - 1; // previous Index
        // second loop (insertion loop)
       /* Move elements of input[0..curIndex-1], that are 
        greater than curElement, to one position ahead 
        of their current position */
        while(prevIndex >= 0 && input[prevIndex]['sales'] > curElement){ // second loop condition previous element is greater than current
          input[ prevIndex+1 ]['sales'] = input[prevIndex]['sales']; // swap current element to the previous element 
          prevIndex = prevIndex -1; // reduce the index of previous by one
          // setsortTimes(sortTimes+1)
        }
        input[prevIndex+1]['sales'] = curElement; // swaping the previous Index to current element
      }
      setsortTimes(sortTimes+1)
      setDataRequired(true);
      return
    }

    //helper function for merge
    const merge = (arr1,arr2)=> {
      const output = []
      // loop 1: arr1 and arr2 both have lengths
      while(arr1.length && arr2.length){
        // if first element of arr 1 is less than that of arr 2, push it into output and shift it out
        // else that of arr 2 into output and slice it(arr2[0]) shift out
        (arr1[0]["sales"] <= arr2[0]["sales"])? output.push(arr1.shift()): output.push(arr2.shift())
        setData(output)
      }
      // loop 2: for the remaining elements of arr1
      while(arr1.length){
        // push each element of arr1 into output and shift it out
        output.push(arr1.shift())
        setData(output)
      }
      while(arr2.length){
        // push each element of arr2 into output and shift it out
        output.push(arr2.shift())
        setData(output)
      }
      setsortTimes(sortTimes+1)
      setData(output)
      setDataRequired(true);
      return output
    }

    const mergeSort = (input = []) => {
      // divide and conquer method
      // divide the array into arrays with one element

      // edge case
      if(!Array.isArray(input)) return 
      // when array has less than 2 elements
      if(input.length < 2) return input

      // middle index, left and right arrays
      const midIndex = Math.floor(input.length/2)
      const left = input.slice(0, midIndex), right = input.slice(midIndex, input.length)
      setsortTimes(sortTimes+1)
      setDataRequired(true);
      return merge(mergeSort(left),mergeSort(right))
    }
      
    const selectionSort = (input = []) => {
      // find the minimum element and place it in the front using two pointers
      // loop 1: from 0 -> input.length
      for(let i = 0; i < input.length; i++){
          // loop 2: from next element of first loop -> input.length
          for(let j = i+1; j < input.length; j++){
          let curElement = input[i] 
          if (input[j]['sales'] < curElement['sales']) {
              let smaller = input[j] 
              // swap the smaller with current element
              input[i] = smaller; 
              input[j] = curElement;
              setsortTimes(sortTimes+1)
              setData(input)
          }
        }
      }
      setDataRequired(true);
      return input
    }
    const quickSort = (input = []) => {
      // use partition algorithm
      const swaper = (arr, leftIndex, rightIndex) => {
        // swaper function
        let temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
     };
     const partition = (arr, left, right) => {
       // creating pivot point
        let pivot = arr[Math.floor((right + left) / 2)]['sales'];
        while (left<= right) {
           while (arr[left]['sales'] < pivot) {
              left++;
           };
           while (arr[right]['sales'] > pivot) {
              right--;
           };
           if (left <= right) {
              swaper(arr, left, right); //sawpping two elements
              left++;
              right--;
           };
        };
        return left;
     }
     const sorter = (arr, left = 0, right = arr.length - 1) => {
        // let index;
        if (arr.length > 1) {
           let index = partition(arr, left, right);
           if (left < index - 1) {
              sorter(arr, left, index - 1);
           };
           if (index < right) {
              sorter(arr, index, right);
           };
        }
        setData(arr)
        setsortTimes(sortTimes+1)
        return arr;
     }
     setDataRequired(true);
     return sorter(input)
    }

    const heapSort = (input = []) => {
      console.log('heap');
    }
    // when randomClicks state is updated
    useEffect(()=>{
      setData(randomSales())
      return(()=> {setData(randomSales())
      setsortTimes(0)})
    },[randomClicks])
    useEffect(()=>{
      setErr({message: "Please generate new data to use sort algorithms again"})
      return(()=> {setDataRequired(null)})
    },[dataRequired])
    
    /*
    notes: 
    barChart component is not finalized yet. should not display the component when parent component was mounted.√
    figure out how to stop running random state, sortType state and data state not to run when the component was mounted. x
    add new something to handle the after sorted effect.
    add time consuming tracker
    */
   /*
   before changning the DOM

   */
    return (
        <div className="App">
          <input type ='button' value = 'Bubble Sort' onClick = {()=>{bubbleSort(data)}}/>
          <input type ='button' value = 'Insertion Sort' onClick = {()=>{insertionSort(data)}}/>
          <input type ='button' value = 'Merge Sort' onClick = {()=>{mergeSort(data)}}/>
          <input type ='button' value = 'Selection Sort' onClick = {()=>{selectionSort(data)}}/>
          <input type ='button' value = 'Quick Sort' onClick = {()=>{quickSort(data)}}/>
          <input type ='button' value = 'Heap Sort' onClick = {()=>{heapSort(data)}}/>
          {(randomClicks > 0) ? 
            displayComponent : 
            noDataComponent}
            {(dataRequired) ? errorComponent : timeComponent}
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