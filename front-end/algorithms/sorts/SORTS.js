const bubbleSort = async (input = []) => {
  setDataRequired(true);

  // Edge case
  if (!Array.isArray(input)) return input;
  const timeStarted = Date.now();
  const output = deepCopyObject(input);
  let counter = 1;
  if (!input[0]['sales']) {
    console.log('sales is not defined');
    // first loop from 0 to last element
    for (let first = 0; first < output.length; first++) {
      // second loop from cur element of first loop to last element
      for (let second = first + 1; second < output.length; second++) {
        if (output[first] > output[second]) {
          // is the first element is greater than second
          // create a variable the first element by value
          const temp = output[first];
          // assign the first element to second one
          output[first] = output[second];
          // assign the second element to variable
          output[second] = temp;
          // increment the sort counter one
        }
        counter++;
      }
      counter++;
    }
    const timeEnded = Date.now();
    const timeElapsed = timeEnded - timeStarted;
    setData(output);
    setTime(`${timeElapsed} milliseconds`);
  } else {
    // first loop from 0 to last element
    for (let first = 0; first < output.length; first++) {
      // second loop from cur element of first loop to last element
      for (let second = first + 1; second < output.length; second++) {
        if (output[first]['sales'] > output[second]['sales']) {
          // is the first element is greater than second
          // create a variable the first element by value
          const temp = output[first];
          // assign the first element to second one
          output[first] = output[second];
          // assign the second element to variable
          output[second] = temp;
          // increment the sort counter one
          setsortTimes(counter);
          setTimeout(() => {
            setData(output);
            setsortTimes(counter);
          }, second * 10);
          // console.log('counter from inner loop: ', counter)
          // console.log('sortTime from inner loop: ', sortTimes)
        }
        counter++;
      }
      counter++;
      setTimeout(() => {
        setData(output);
        setsortTimes(counter);
      }, first * 10);
      console.log('sortTime from outer loop: ', sortTimes);
    }
    console.log('counter end of the loop: ', counter);
    // console.log('sortTimes from end of the loop: ', sortTimes)
    const timeEnded = Date.now();
    const timeElapsed = timeEnded - timeStarted;
    // setsortTimes(sortTimes+1)
    setData(output);
    console.log('output:', input);
    setTime(`${timeElapsed} milliseconds`);
  }
  return;
};

const merge = (arr1, arr2) => {
  const output = [];
  // loop 1: arr1 and arr2 both have lengths
  while (arr1.length && arr2.length) {
    // if first element of arr 1 is less than that of arr 2, push it into output and shift it out
    // else that of arr 2 into output and slice it(arr2[0]) shift out
    // arr1[0] <= arr2[0] ? output.push(arr1.shift()) : output.push(arr2.shift());
    arr1[0]['sales'] <= arr2[0]['sales']
      ? output.push(arr1.shift())
      : output.push(arr2.shift());
  }
  // loop 2: for the remaining elements of arr1
  while (arr1.length) {
    // push each element of arr1 into output and shift it out
    output.push(arr1.shift());
  }
  while (arr2.length) {
    // push each element of arr2 into output and shift it out
    output.push(arr2.shift());
  }
  return output;
};
export const mergeSort = (input = []) => {
  // divide and conquer method
  // divide the array into arrays with one element
  // edge case
  if (!Array.isArray(input)) return;
  // when array has less than 2 elements
  if (input.length < 2) return input;

  // middle index, left and right arrays
  const midIndex = Math.floor(input.length / 2);
  const left = input.slice(0, midIndex),
    right = input.slice(midIndex, input.length);
  // setsortTimes(sortTimes+1)
  return merge(mergeSort(left), mergeSort(right));
};

const insertionSort = (input = []) => {
  setDataRequired(true);
  // starting from second element and insert to the previous index if the current element is lower than previous element
  // Edge case
  if (!Array.isArray(input)) return input;
  // time started
  const timeStarted = Date.now();
  const output = deepCopyObject(input);
  let counter = 1;
  // first loop from second element to last element
  for (let curIndex = 1; curIndex < output.length; curIndex++) {
    let curElement = output[curIndex]['sales']; // current Element
    let prevIndex = curIndex - 1; // previous Index
    // second loop (insertion loop)
    /* Move elements of output[0..curIndex-1], that are 
    greater than curElement, to one position ahead 
    of their current position */
    while (prevIndex >= 0 && output[prevIndex]['sales'] > curElement) {
      // second loop condition previous element is greater than current
      output[prevIndex + 1]['sales'] = output[prevIndex]['sales']; // swap current element to the previous element
      prevIndex = prevIndex - 1; // reduce the index of previous by one
      // setsortTimes(sortTimes+1)
    }
    output[prevIndex + 1]['sales'] = curElement; // swaping the previous Index to current element
  }
  const timeEnded = Date.now();
  const timeElapsed = timeEnded - timeStarted;
  // setsortTimes(sortTimes+1)
  setData(output);
  setTime(`${timeElapsed} milliseconds`);
  return;
};

const mergeSort = (input = []) => {
  setDataRequired(true);
  // divide and conquer method
  // divide the array into arrays with one element
  // edge case
  if (!Array.isArray(input)) return;
  // when array has less than 2 elements
  if (input.length < 2) return input;

  // middle index, left and right arrays
  const midIndex = Math.floor(input.length / 2);
  const left = input.slice(0, midIndex),
    right = input.slice(midIndex, input.length);
  // setsortTimes(sortTimes+1)
  return merge(mergeSort(left), mergeSort(right));
};

const selectionSort = (input = []) => {
  setDataRequired(true);
  // find the minimum element and place it in the front using two pointers
  const timeStarted = Date.now();
  const output = deepCopyObject(input);
  // loop 1: from 0 -> input.length
  for (let i = 0; i < output.length; i++) {
    // loop 2: from next element of first loop -> output.length
    for (let j = i + 1; j < output.length; j++) {
      let curElement = output[i];
      if (output[j]['sales'] < curElement['sales']) {
        let smaller = output[j];
        // swap the smaller with current element
        output[i] = smaller;
        output[j] = curElement;
        // setsortTimes(sortTimes+1)
        setData(output);
      }
    }
  }
  const timeEnded = Date.now();
  const timeElapsed = timeEnded - timeStarted;
  // setsortTimes(sortTimes+1)
  setTime(`${timeElapsed} milliseconds`);
  return;
};
const quickSort = (input = []) => {
  setDataRequired(true);
  // use partition algorithm
  const timeStarted = Date.now();
  const output = deepCopyObject(input);
  const swaper = (arr, leftIndex, rightIndex) => {
    // swaper function
    let temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
  };
  const partition = (arr, left, right) => {
    // creating pivot point
    let pivot = arr[Math.floor((right + left) / 2)]['sales'];
    while (left <= right) {
      while (arr[left]['sales'] < pivot) {
        left++;
      }
      while (arr[right]['sales'] > pivot) {
        right--;
      }
      if (left <= right) {
        swaper(arr, left, right); //sawpping two elements
        left++;
        right--;
      }
    }
    return left;
  };
  const sorter = (arr, left = 0, right = arr.length - 1) => {
    // let index;
    if (arr.length > 1) {
      let index = partition(arr, left, right);
      if (left < index - 1) {
        sorter(arr, left, index - 1);
      }
      if (index < right) {
        sorter(arr, index, right);
      }
    }
    setData(arr);
    // setsortTimes(sortTimes+1)
    return arr;
  };

  const timeEnded = Date.now();
  const timeElapsed = timeEnded - timeStarted;
  // setsortTimes(sortTimes+1)

  setTime(`${timeElapsed} milliseconds`);
  return sorter(output);
};

// console.log(mergeSort([5, 3, 51, 2, 0, 15, 22]));

/* -------------------------------------------------------------------------- */
/*                               from algoExpert                              */
/* -------------------------------------------------------------------------- */
// function mergeSortHelper(
//   mainArray,
//   startIdx,
//   endIdx,
//   auxiliaryArray,
//   animations,
// ) {
//   if (startIdx === endIdx) return;
//   const middleIdx = Math.floor((startIdx + endIdx) / 2);
//   mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
//   mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
//   doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
// }

// function doMerge(
//   mainArray,
//   startIdx,
//   middleIdx,
//   endIdx,
//   auxiliaryArray,
//   animations,
// ) {
//   let k = startIdx;
//   let i = startIdx;
//   let j = middleIdx + 1;
//   while (i <= middleIdx && j <= endIdx) {
//     // These are the values that we're comparing; we push them once
//     // to change their color.
//     animations.push([i, j]);
//     // These are the values that we're comparing; we push them a second
//     // time to revert their color.
//     animations.push([i, j]);
//     if (auxiliaryArray[i] <= auxiliaryArray[j]) {
//       // We overwrite the value at index k in the original array with the
//       // value at index i in the auxiliary array.
//       animations.push([k, auxiliaryArray[i]]);
//       mainArray[k++] = auxiliaryArray[i++];
//     } else {
//       // We overwrite the value at index k in the original array with the
//       // value at index j in the auxiliary array.
//       animations.push([k, auxiliaryArray[j]]);
//       mainArray[k++] = auxiliaryArray[j++];
//     }
//   }
//   while (i <= middleIdx) {
//     // These are the values that we're comparing; we push them once
//     // to change their color.
//     animations.push([i, i]);
//     // These are the values that we're comparing; we push them a second
//     // time to revert their color.
//     animations.push([i, i]);
//     // We overwrite the value at index k in the original array with the
//     // value at index i in the auxiliary array.
//     animations.push([k, auxiliaryArray[i]]);
//     mainArray[k++] = auxiliaryArray[i++];
//   }
//   while (j <= endIdx) {
//     // These are the values that we're comparing; we push them once
//     // to change their color.
//     animations.push([j, j]);
//     // These are the values that we're comparing; we push them a second
//     // time to revert their color.
//     animations.push([j, j]);
//     // We overwrite the value at index k in the original array with the
//     // value at index j in the auxiliary array.
//     animations.push([k, auxiliaryArray[j]]);
//     mainArray[k++] = auxiliaryArray[j++];
//   }
// }
