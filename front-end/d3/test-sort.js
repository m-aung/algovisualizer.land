const getMergeSort = (array) => {
  // to store the pair to change the color in the DOM
  const animationArray = [];
  // when array has no length
  if (array.length <= 1) return array;
  // hard copy the array
  const cacheArray = array.slice();
  // console.log('cacheArray: ', cacheArray === array);
  mergeSortHelper(array, 0, array.length - 1, cacheArray, animationArray);
  return animationArray;
};

const mergeSortHelper = (dataArray, start, end, cacheArray, animationArray) => {
  if (start === end) return;
  const middleIdx = Math.floor((start + end) / 2);

  mergeSortHelper(cacheArray, start, middleIdx, dataArray, animationArray);
  mergeSortHelper(cacheArray, middleIdx + 1, end, dataArray, animationArray);
  merge(dataArray, start, middleIdx, end, cacheArray, animationArray);
};

const merge = (
  dataArray,
  start,
  middleIdx,
  end,
  cacheArray,
  animationArray
) => {
  let k = start;
  let i = start;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= end) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animationArray.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animationArray.push([i, j]);
    if (cacheArray[i] <= cacheArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animationArray.push([k, cacheArray[i]]);
      dataArray[k++] = cacheArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animationArray.push([k, cacheArray[j]]);
      dataArray[k++] = cacheArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animationArray.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animationArray.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animationArray.push([k, cacheArray[i]]);
    dataArray[k++] = cacheArray[i++];
  }
  while (j <= end) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animationArray.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animationArray.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animationArray.push([k, cacheArray[j]]);
    dataArray[k++] = cacheArray[j++];
  }
};

const getBubbleSort = (inputArray) => {
  // return array with pairs of indices
  const animationArray = [];
  const cacheArray = inputArray.slice();
  // first loop from 0 to last element
  for (let first = 0; first < cacheArray.length; first++) {
    // second loop from cur element of first loop to last element
    for (let second = first + 1; second < cacheArray.length; second++) {
      animationArray.push([first, second]);
      animationArray.push([first, second]);
      animationArray.push([first, cacheArray[first]]);

      if (cacheArray[first] > cacheArray[second]) {
        // is the first element is greater than second
        // create a variable the first element by value
        // animationArray.push([first, second]);
        // animationArray.push([first, second]);
        // animationArray.push([first, cacheArray[first]]);
        const temp = cacheArray[first];
        // assign the first element to second one
        cacheArray[first] = cacheArray[second];
        // assign the second element to variable
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

const doBubbleSort = () => {};

// const test_array = [3, 2, 55, 232, 11, 354, 22, 356, 223, 0, 1];
// getMergeSort(test_array);
// // console.log(getMergeSort(test_array));

export { getMergeSort, getBubbleSort };
