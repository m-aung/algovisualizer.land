import React from 'react'

const getBubbleSort = (inputArray) => {
  // return array with pairs of indices
  const animationArray = [];
  const cacheArray = inputArray.slice();
  // first loop from 0 to last element
  for (let first = 0; first < cacheArray.length; first++) {
    // second loop from cur element of first loop to last element
    for (let second = first + 1; second < cacheArray.length; second++) {

      // [selection pair, selection pair, swap/notSwap pair]

      animationArray.push([first, second]);
      animationArray.push([first, second]);
      animationArray.push([first, cacheArray[first]]);

      if (cacheArray[first] > cacheArray[second]) {
        // swaping
        const temp = cacheArray[first];
        cacheArray[first] = cacheArray[second];
        cacheArray[second] = temp;

        animationArray.push([second, second]);
        animationArray.push([second, second]);
        animationArray.push([second, cacheArray[second]]);
      } else {
        animationArray.push([first, first]);
        animationArray.push([first, first]);
        animationArray.push([first, cacheArray[first]]);
      }
    }
  }
  console.log('sorted data: ', cacheArray);
  return animationArray;
};

const Modes = ({method, type, dataList, sortFunc}) => {
  return (
        <button 
          style={{marginTop: 5+'em'}}
          onClick={(e)=>{
            e.preventDefault()
            const sortedData = getBubbleSort(dataList)
            sortFunc(sortedData)
          }}
        >
          {type}
        </button>
  )
}

export default Modes
