// for sort algorithms
const bubbleSort = (input = []) => {
   // Edge case
  if(!Array.isArray(input)) return input;
//   setTime(Date.now())
   const startTime = Date.now()
   console.log('Started at: ', startTime)
  // first loop from 0 to last element
  for (let first = 0; first < input.length; first++){
  // second loop from cur element of first loop to last element
    for(let second = first+1; second < input.length; second++){
      // if(input[first]["sales"] > input[second]["sales"]){ // is the first element is greater than second
      
        // create a variable the first element by value
        const temp = input[first];
        // assign the first element to second one
        input[first] = input[second];
        // assign the second element to variable
        input[second] = temp;
        // increment the sort counter one
       //  setsortTimes(sortTimes+1)
      }
      // setsortTimes(sortTimes+1)
    }
  }
//   setDataRequired(true);
//   setTime(Date.now())
  const endTime = Date.now()
//   console.log(endTime)
  console.log('time elapsed: ', (endTime-startTime)/1000, 's')
//  return 
  return input
}

// const swaper = (arr, leftIndex, rightIndex) => {
//     let temp = arr[leftIndex];
//     arr[leftIndex] = arr[rightIndex];
//     arr[rightIndex] = temp;
//  };
//  const partition = (arr, left, right) => {
//     let pivot = arr[Math.floor((right + left) / 2)];
//     // let i = left;
//     // let j = right;
//     while (left<= right) {
//        while (arr[left] < pivot) {
//           left++;
//        };
//        while (arr[right] > pivot) {
//           right--;
//        };
//        if (left <= right) {
//           swaper(arr, left, right); //sawpping two elements
//           left++;
//           right--;
//        };
//     };
//     return left;
//  }
//  const quickSort = (arr, left = 0, right = arr.length - 1) => {
//     // let index;
//     if (arr.length > 1) {
//        let index = partition(arr, left, right);
//        if (left < index - 1) {
//           quickSort(arr, left, index - 1);
//        };
//        if (index < right) {
//           quickSort(arr, index, right);
//        };
//     }
//     return arr;
//  }
  const test1 = [70,9,30,21,32,67,43,3216,283,1,5,69] 
  const test2 = [9,5,3,1,7,3]
  const test3 = [1]
//   const answer = quickSort(test2)
const func1 = bubbleSort(test1);
console.log('bubble: ',func1)
//   console.log(test2.arr.length , '-->',answer.length)
//   console.log('final: ',answer)
//   console.log(test1.shift())
//   const arr = test3.unshift(5)
//   console.log(test3)