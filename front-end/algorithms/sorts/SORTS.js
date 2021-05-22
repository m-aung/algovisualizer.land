export const bubbleSort = (input, callback) => {
    //Bubble sort
    console.log('Bubble sort triggered!', typeof callback, callback)
   // if input is not array return
  if(!Array.isArray(input)) return input;
//   const output = []
  // first loop
  for (let first = 0; first < input.length; first++){
  // second loop
    for(let second = first+1; second < input.length; second++){
      if(input[first]["sales"] > input[second]["sales"]){
        const temp = input[first];
        input[first] = input[second];
        // console.log(temp);
        input[second] = temp;
        callback(input); // change the state
        // console.log(`${first}th time: `,input)
      }
    }
  }
  return input;
}
export const insertionSort= () => {
    //Bubble sort
    console.log('Insertion sort triggered!')
}
export const mergeSort= () => {
    //Bubble sort
    console.log('Merge sort triggered!')
}
export const selectionSort= () => {
    //Bubble sort
    console.log('Selection sort triggered!')
}
export const quickSort= () => {
    //Bubble sort
    console.log('Quick sort triggered!')
}
export const heapSort= () => {
    //Bubble sort
    console.log('Heap sort triggered!')
}