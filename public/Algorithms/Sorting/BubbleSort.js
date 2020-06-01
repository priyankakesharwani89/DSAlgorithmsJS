let bubbleSort = inputArr => {
  let len = inputArr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
  return inputArr;
};
document.getElementById("BubbleSort").innerHTML = bubbleSort([
  4,
  6,
  1,
  3,
  11,
  0,
  -2,
  2
]);