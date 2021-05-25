// for sort algorithms
const selectionSort = (input = []) => {
    // find the minimum element and place it in the front using two pointers
    let minIndex;
    let arr = [];
    // loop 1: from 0 -> input.length
    for(let i = 0; i < input.length; i++){
        // loop 2: from next element of first loop -> input.length
        for(let j = i+1; j < input.length; j++){
        let curElement = input[i] 
        if (input[j] < curElement) {
            let smaller = input[j] 
            input[i] = smaller; // swap the smaller with cur element
            input[j] = curElement;

        }
        // setsortTimes(sortTimes+1)
        // setData(arr)
      }
    }
    return input
  }
  const test1 = [70,9,30,21,32,67,43,3216,283,1,5,69] 
  const test2 = [9,5,3,1,7,3]
  const test3 = [1]
  const answer = selectionSort(test2)
  console.log(test2.length , '-->',answer.length)
  console.log(answer)
//   console.log(test1.shift())
//   const arr = test3.unshift(5)
//   console.log(test3)