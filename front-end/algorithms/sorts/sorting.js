const deepCopyObject = (original) => {
  let cloned, value, key;

  if (typeof original !== 'object' || original === null) {
    return original; // Return the value if original is not an object
  }

  // Create an array or object to hold the values
  cloned = Array.isArray(original) ? [] : {};

  for (key in original) {
    value = original[key];

    // Recursively (deep) copy for nested objects, including arrays
    cloned[key] = deepCopyObject(value);
  }

  return cloned;
};

const getMergeSort = (input) => {
  // to store the pair to change the color in the DOM
  const animationArray = [];
  // when array has no length
  if (input.length <= 1) return input;
  // hard copy the array
  const cacheArray = input.slice();
  // console.log('cacheArray: ', cacheArray === array);
  mergeSortHelper(input, 0, input.length - 1, cacheArray, animationArray);
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
      dataArray[k++] = cacheArray[i++]; // increasing k and j inplace
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animationArray.push([k, cacheArray[j]]);
      dataArray[k++] = cacheArray[j++]; // increasing k and j inplace
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
    dataArray[k++] = cacheArray[i++]; // increasing k and i inplace
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
    dataArray[k++] = cacheArray[j++]; // increasing k and j inplace
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
  // console.log('sorted data: ', cacheArray);
  return animationArray;
};

const getSelectionSort = (input = []) => {
  // find the minimum element and place it in the front using two pointers
  const animationArray = [];
  const cacheArray = input.slice();
  // loop 1: from 0 -> input.length
  for (let i = 0; i < cacheArray.length; i++) {
    let j = i + 1;
    let smallestNumber = cacheArray[j];
    let indexToSwap;
    let curElement = cacheArray[i];
    // element to compare
    animationArray.push([i, i]);
    animationArray.push([i, i]);
    animationArray.push([i, cacheArray[i]]);
    while (j < cacheArray.length) {
      animationArray.push([j, j]);
      animationArray.push([j, j]);
      animationArray.push([j, cacheArray[j]]);
      if (smallestNumber >= cacheArray[j]) {
        indexToSwap = j;
        smallestNumber = Math.min(smallestNumber, cacheArray[j]);
      }
      j++;
    }
    if (smallestNumber <= curElement) {
      cacheArray[i] = smallestNumber;
      cacheArray[indexToSwap] = curElement;
      // animation swaping
      animationArray.push([i, indexToSwap]);
      animationArray.push([i, indexToSwap]);
      animationArray.push([i, smallestNumber]);
    }
  }
  console.log('Output : ', cacheArray);
  return animationArray;
};

const getInsertionSort = (input = []) => {
  const animationArray = [];

  if (!Array.isArray(input)) return input;

  const cacheArray = deepCopyObject(input);
  for (let i = 1; i < cacheArray.length; i++) {
    let curNum = cacheArray[i]; // 2
    let prevIndex = i - 1; // 0
    animationArray.push([i, i]);
    animationArray.push([i, i]);
    animationArray.push([i, curNum]);
    while (prevIndex >= 0 && cacheArray[prevIndex] > curNum) {
      animationArray.push([prevIndex, prevIndex]);
      animationArray.push([prevIndex, prevIndex]);
      animationArray.push([prevIndex, cacheArray[prevIndex]]);
      cacheArray[prevIndex + 1] = cacheArray[prevIndex];
      animationArray.push([prevIndex + 1, prevIndex + 1]);
      animationArray.push([prevIndex + 1, prevIndex + 1]);
      animationArray.push([prevIndex + 1, cacheArray[prevIndex + 1]]);
      prevIndex = prevIndex - 1;
    }
    cacheArray[prevIndex + 1] = curNum;
    animationArray.push([prevIndex + 1, prevIndex + 1]);
    animationArray.push([prevIndex + 1, prevIndex + 1]);
    animationArray.push([prevIndex + 1, cacheArray[prevIndex + 1]]);
  }

  // console.log('Result from Insertion Sort: ', cacheArray);
  return animationArray;
};

const test_array = [3, 2, 55, 232, 11, 354, 22, 356, 223, 0, 1];
// console.log('input Array: ', test_array);
// const result = getInsertionSort(test_array); // []
// console.log(
//   'test array:',
//   test_array.sort((a, b) => a - b)
// );
// let index = 3;
// console.log('origin: ', index);
// console.log('3rd element of the array: ', test_array[index++]);
// console.log('after using index++: ', index);
//{\displaystyle \alpha =-1+\sum _{k=0}^{\infty }{\frac {1}{2^{k}+1}}\approx 0.2645.}\alpha =-1+\sum _{k=0}^{\infty }{\frac {1}{2^{k}+1}}\approx 0.2645.

export { getMergeSort, getBubbleSort, getSelectionSort, getInsertionSort };