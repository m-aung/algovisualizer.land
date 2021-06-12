import React, {useState, useEffect, useRef} from 'react';

import BarChart from './BarChart';
// import { sort } from 'd3';

const AlgoBoard = (props) => {
  let [data,setData] = useState([]) // data for d3
  let [sortData, setSortData] = useState([])
  let [randomClicks,setRandomClicks] = useState(0) // randomClicks count
  let [sortTimes, setsortTimes] = useState(0) // sorting time
  let [dataRequired,setDataRequired] = useState(true) // new data requirement
  let [err, setErr] = useState({message: "unknown"}) // error state
  let [time, setTime] = useState(null) //


  let displayComponent = <BarChart data={data} randomClicks = {randomClicks} sortClicks = {sortTimes}/> 
  let noDataComponent = <div id="noData"> Click on the <strong>New Random Data</strong> to begin </div>
  let messageComponent = <div id="message">{time}<br/>{err.message}</div> 

  // randomize the data
    const randomSales = (arr = []) => {
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
  const bubbleSort = async (input = []) => {
    setDataRequired(true)
    // Edge case
    if(!Array.isArray(input)) return input;
    const timeStarted = Date.now()
    let counter = 1;
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
          setTimeout(()=>{
            setSortData(input)
            setsortTimes((prevState)=> {prevState+1})
          },second*3000)
          console.log('counter from inner loop: ', counter)
          // console.log('sortTime from inner loop: ', sortTimes)
        }
        counter++
      }
      counter++
      setTimeout(()=>{
        setSortData(input)
        setsortTimes((prevState)=> {prevState+1})
      },first*3000)
      // console.log('sortTime from outer loop: ', sortTimes)
    }
    console.log('counter end of the loop: ', counter)
    console.log('sortTimes from end of the loop: ', sortTimes)
    const timeEnded = Date.now()
    const timeElapsed = (timeEnded-timeStarted)
    // setsortTimes(sortTimes+1)
    setTime(`${timeElapsed} milliseconds`)
    return
  }

    const insertionSort = (input = []) => {
      setDataRequired(true)
      // starting from second element and insert to the previous index if the current element is lower than previous element
      // Edge case
      if(!Array.isArray(input)) return input;
      // time started
      const timeStarted = Date.now()
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
      const timeEnded = Date.now()
      const timeElapsed = (timeEnded-timeStarted)
      // setsortTimes(sortTimes+1)
      setTime(`${timeElapsed} milliseconds`)
      return
    }

  //helper function for merge
  const merge = (arr1,arr2) => {
    setDataRequired(true)
    const timeStarted = Date.now()
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
    // setsortTimes(sortTimes+1)
    setData(output)
    const timeEnded = Date.now()
    const timeElapsed = (timeEnded-timeStarted)
    // setsortTimes(sortTimes+1)
    setTime(`${timeElapsed} milliseconds`)
    return output
  }

    const mergeSort = (input = []) => {
      setDataRequired(true)
      // divide and conquer method
      // divide the array into arrays with one element
      // edge case
      if(!Array.isArray(input)) return 
      // when array has less than 2 elements
      if(input.length < 2) return input

      // middle index, left and right arrays
      const midIndex = Math.floor(input.length/2)
      const left = input.slice(0, midIndex), right = input.slice(midIndex, input.length)
      // setsortTimes(sortTimes+1)
      return merge(mergeSort(left),mergeSort(right))
    }
      
    const selectionSort = (input = []) => {
      setDataRequired(true)
      // find the minimum element and place it in the front using two pointers
      const timeStarted = Date.now()
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
              // setsortTimes(sortTimes+1)
              setData(input)
          }
        }
      }
      const timeEnded = Date.now()
      const timeElapsed = (timeEnded-timeStarted)
      // setsortTimes(sortTimes+1)
      setTime(`${timeElapsed} milliseconds`)
      return input
    }
    const quickSort = (input = []) => {
      setDataRequired(true)
      // use partition algorithm
      const timeStarted = Date.now()
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
    // setsortTimes(sortTimes+1)
    return arr;
    }

    const timeEnded = Date.now()
    const timeElapsed = (timeEnded-timeStarted)
    // setsortTimes(sortTimes+1)

    setTime(`${timeElapsed} milliseconds`)
    return sorter(input)
  }

  const heapSort = (input = []) => {
    setDataRequired(true)
    const timeStarted = Date.now()
  }
  useEffect(()=>{
    console.log(dataRequired)
  },[])

  // when randomClicks state is updated
  useEffect(()=>{
    setData(randomSales())
    setTime('')
  },[randomClicks])
  useEffect(()=>{
    setErr({message: "Please generate new data to use sort algorithms again"})
  },[dataRequired, time])

  useEffect(()=> {
    setData(sortData)
    console.log('from sortTime useEffect:', data)
  },[sortTimes])
    
    /*
    notes: 
    barChart component is not finalized yet-should not display the component when parent component was mounted.√
    stop running random state, sortType state and data state not to run when the component was mounted. √
    add new something to handle the after sorted effect.√
    add time consuming tracker√
    need the data to be presistent 
    */
   /*
   additional features:

   */
  return (
    <div className="App">
      <input type ='button' value = 'Bubble Sort' disabled={dataRequired} onClick = {()=>{bubbleSort(data)}}/>
      <input type ='button' value = 'Insertion Sort' disabled = {dataRequired} onClick = {()=>{insertionSort(data)}}/>
      <input type ='button' value = 'Merge Sort' disabled = {dataRequired} onClick = {()=>{mergeSort(data)}}/>
      <input type ='button' value = 'Selection Sort' disabled = {dataRequired} onClick = {()=>{selectionSort(data)}}/>
      <input type ='button' value = 'Quick Sort' disabled = {dataRequired} onClick = {()=>{quickSort(data)}}/>
      <input type ='button' value = 'Heap Sort' disabled = {dataRequired} onClick = {()=>{heapSort(data)}}/>
      {(randomClicks > 0 && data) ? 
        displayComponent : 
        noDataComponent}
        {(dataRequired) ? messageComponent : console.log('data is applied!')}
      <input type ='button' value = 'New Random Data' onClick ={(e)=> {
        e.preventDefault()
        setDataRequired(false)
        setRandomClicks(randomClicks+1)
      }
      }/>
        <div className = 'algo'>
        </div>
    </div>
  );
}
export default AlgoBoard;