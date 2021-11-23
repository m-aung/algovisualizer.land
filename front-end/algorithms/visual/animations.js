const setTransformation = (sortType, animationSpeed = TRANSFORMATION_SPEED) => {
  // run the sort Algo to get the list of array for animation
  const barsToChange = sortType(data);
  // create loop to create animation
  for (let i = 0; i < barsToChange.length; i++) {
    // getting class name of the chart
    const bars = document.getElementsByClassName('array-bar');
    // change the color for the bar except 2nd index of each pair
    const requiredChange = i % 3 !== 2;
    if (requiredChange) {
      // destructing the indices
      const [index1, index2] = barsToChange[i];
      // style for each bar
      const styleForBar1 = bars[index1].style;
      const styleForBar2 = bars[index2].style;
      // change the color once it reaches all the bars of each pair
      const color = i % 3 === 0 ? COLOR_UPDATED_BAR : PRIMARY_BAR_COLOR;
      setTimeout(() => {
        // changing the color
        styleForBar1.backgroundColor = color;
        styleForBar2.backgroundColor = color;
      }, i * animationSpeed);
    } 
    else if(i === barsToChange.length-1){
      setTimeout(() => {
        setResetData(false)
      }, i * animationSpeed);
    }
    else {
      setTimeout(() => {
        // updated data for third of the pair
        const [index1, newHeight] = barsToChange[i];
        // changing style for the updated bar
        const styleForBar1 = bars[index1].style;
        // changing height of the updated bar
        styleForBar1.height = `${newHeight}px`;
      }, i * animationSpeed);
    }
  }
  console.log('sorted data: ', data)
};