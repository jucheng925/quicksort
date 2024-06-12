function partition(array, low, high) {
  // type your code in here
  // use a while loop here - since dont know how many iternations there are
  let pivotIndex = high
  const pivot = array[high]
  for (let i = low; i > pivotIndex; i++) {
    if (array[i] > pivot) {

        [array[i], array[pivotIndex-1]] = [[array[pivotIndex-1]], array[i]]
        [array[pivotIndex-1], array[pivotIndex]] = [array[pivotIndex], array[pivotIndex-1]]
        --pivotIndex
      
    }
  }
  return pivotIndex
}

function quicksort(array, low = 0, high = array.length - 1) {
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log(quicksort([3, 2, 1, 4]));
  console.log(partition([3, 2, 1, 4], 0, 3))

  console.log("");

  console.log("Expecting: [1, 2, 2, 3, 4]");
  console.log(quicksort([1, 2, 2, 3, 4]));

  console.log("");
  console.log("Expecting: 3")
  console.log(partition([3, 2, 1, 4], 0, 3))

  console.log("");
  console.log("Expecting: 2")
  console.log(partition([3, 2, 1, 2], 0, 3))

  console.log("");
  console.log("Expecting: 4")
  console.log(partition([2, -10, 7, 0, 1, 3], 0, 5))

  console.log("");
  console.log("Expecting: 2")
  console.log(partition([2, -10, 7, 0, 1, 3], 1, 3))

}

module.exports = quicksort;

// Please add your pseudocode to this file
// And a written explanation of your solution
