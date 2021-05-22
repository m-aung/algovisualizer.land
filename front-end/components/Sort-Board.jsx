import React, {useState, useEffect} from 'react';

import BarChart from './BarChart';
// import { sort } from 'd3';
import * as SORT from '../algorithms/sorts/SORTS'

const AlgoBoard = (props) => {
    const randomSales = (data = []) => {
      // const array = []
        //36 years
        let year = 1980;
        let counter = 0;
        
        console.log('data: ',data)
        
        while(counter < 36){
          let curObj = {}
          curObj["year"] = year + (counter * 5 )
          curObj["efficiency"] = (Math.random()*(40-24)+24).toPrecision(3)
          curObj["sales"] = Math.floor(Math.random()*1000)*100
          data.push(curObj)
          counter++;
        }
        return;
    }
    let [data,setData] = useState([])
    let [isClicked,setClicked] = useState(false)
    let [sortType, setSortType] = useState('')
    
    const bubbleSort = (arr) => {
      setSortType('bubble');
      SORT.bubbleSort(data,setGraph())
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

    // switch(algorithm){
    //   case 'bubble':
    //     SORT.bubbleSort(data,setGraph())
    //     console.log(`${algorithm} sorting completed...`)
    //     break;
    //   case 'insertion':
    //     SORT.insertionSort()
    //     console.log(`${algorithm} sorting completed...`)
    //     break; 
    //   case 'merge':
    //     SORT.mergeSort()
    //     console.log(`${algorithm} sorting completed...`)
    //     break;  
    //   case 'selection':
    //     SORT.selectionSort()
    //     console.log(`${algorithm} sorting completed...`)
    //     break;
    //   case 'quick':
    //     SORT.quickSort()
    //     console.log(`${algorithm} sorting completed...`)
    //     break; 
    //   case 'heap':
    //     SORT.heapSort()
    //     console.log(`${algorithm} sorting completed...`)
    //     break; 
    //   default:
    //     console.log('This is default');
    //     break;
    // }
    const [currentState, setCurrentState] = useState(data);

    // component did mounted!
    useEffect(()=> {
      console.log('component is mounted!')
      //  props.history.push('/sorting')
    }, [])
    // when data state is updated
    useEffect(()=>{
      console.log('data has changed!')
    },[data])
    // when isClicked state is updated
    useEffect(()=>{
      console.log('isClicked has changed!')
      return () => {setClicked(false)} // resetting the click cache
    },[isClicked])
    //when sortType state is updated
    useEffect(()=>{
      console.log(`Sort Type is changed to ${sortType.toUpperCase()}`)
    },[sortType])

    return (
        <div className="App">
          <input type ='button' value = 'Bubble Sort' onClick = {()=>{bubbleSort()}}/>
          <input type ='button' value = 'Insertion Sort' onClick = {()=>{insertionSort()}}/>
          <input type ='button' value = 'Merge Sort' onClick = {()=>{mergeSort()}}/>
          <input type ='button' value = 'Selection Sort' onClick = {()=>{selectionSort()}}/>
          <input type ='button' value = 'Quick Sort' onClick = {()=>{quickSort()}}/>
          <input type ='button' value = 'Heap Sort' onClick = {()=>{heapSort()}}/>
          {(!data && !isClicked) ? 
            <BarChart data={data} isClicked = {isClicked} algorithm = {sortType} /> : 
            <div id="noData"> 
              Click on the <strong>New Random Data</strong> to begin
            </div>}
          <input type ='button' value = 'New Random Data' onClick ={()=> {
            setData(randomSales(data)) // changing a new random set of data
            setClicked(true) // setting it to be true
          }
          }/>
            <div className = 'algo'>
            </div>
        </div>
      );
}
export default AlgoBoard;