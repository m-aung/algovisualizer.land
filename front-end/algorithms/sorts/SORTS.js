// for sort algorithms
const swaper = (arr, leftIndex, rightIndex) => {
    let temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
 };
 const partition = (arr, left, right) => {
    let pivot = arr[Math.floor((right + left) / 2)];
    // let i = left;
    // let j = right;
    while (left<= right) {
       while (arr[left] < pivot) {
          left++;
       };
       while (arr[right] > pivot) {
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
 const quickSort = (arr, left = 0, right = arr.length - 1) => {
    // let index;
    if (arr.length > 1) {
       let index = partition(arr, left, right);
       if (left < index - 1) {
          quickSort(arr, left, index - 1);
       };
       if (index < right) {
          quickSort(arr, index, right);
       };
    }
    return arr;
 }
  const test1 = [70,9,30,21,32,67,43,3216,283,1,5,69] 
  const test2 = [9,5,3,1,7,3]
  const test3 = [1]
  const answer = quickSort(test2)
//   console.log(test2.arr.length , '-->',answer.length)
  console.log('final: ',answer)
//   console.log(test1.shift())
//   const arr = test3.unshift(5)
//   console.log(test3)