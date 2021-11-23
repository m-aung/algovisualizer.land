import {getMergeSort, getBubbleSort, getSelectionSort, getInsertionSort} from '../sorts/sorting.js'

const randomNum =(min, max)=>{
  return Math.floor(Math.random()*(max-min +1)+ min)
}
const buildDataArray =(range)=> {
  const dataArray = []
  while(dataArray.length < range){
    dataArray.push(randomNum(0,255))
  }
  return dataArray
}
const buildModeList = (...modes) => {
  const modeList = []
  const methodList = [getBubbleSort,getMergeSort,getSelectionSort,getInsertionSort]

  for(let i =0; i < modes.length; i++){
    modeList.push({
      type: modes[i],
      method: (arr)=>{methodList[i](arr)}
    })
  }
  console.log(modeList[0].method)
  return modeList
}

export {randomNum, buildDataArray, buildModeList}