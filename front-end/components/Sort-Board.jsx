import React, {useState, useEffect} from 'react';

import BarChart from './BarChart';

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
    
    const bubbleSort = () => {
      
    }

    const insertionSort = () => {
      
    }

    const mergeSort = () => {
      
    }

    const selectionSort = () => {
      
    }
    const quickSort = () => {
      
    }

    const heapSort = () => {
      
    }

      useEffect(()=> {
        console.log('component is mounted!')
        //  props.history.push('/sorting')
    }, [])
      useEffect(()=>{
        console.log('data has changed!')
      },[data])
      useEffect(()=>{
        console.log('isClicked has changed!')
        return () => {setClicked(false)} // resetting the click cache
      },[isClicked])

    return (
        <div className="App">
          <input type ='button' value = 'Bubble Sort' onClick = {()=>{bubbleSort()}}/>
          <input type ='button' value = 'Insertion Sort' onClick = {()=>{insertionSort()}}/>
          <input type ='button' value = 'Merge Sort' onClick = {()=>{mergeSort()}}/>
          <input type ='button' value = 'Selection Sort' onClick = {()=>{selectionSort()}}/>
          <input type ='button' value = 'Quick Sort' onClick = {()=>{quickSort()}}/>
          <input type ='button' value = 'Heap Sort' onClick = {()=>{heapSort()}}/>
          {(!data && !isClicked) ? 
            <BarChart data={data} isClicked = {isClicked}/> : 
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