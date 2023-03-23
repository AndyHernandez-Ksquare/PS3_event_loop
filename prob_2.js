// Seek & Destroy

// Define a function called destroyer that will receive as its first parameter an array with numbers,
// then it can receive 1 or more parameters that you need to search in the array and then delete it
// after you finish processing return the resulting array.

const SeekAndDestroy = (arr, ...targets) => {
  // The filter method drops an item if the callback function returns false
  return arr.filter((item) => {
    // Loop through the amount of targets
    for (let i = 0; i < targets.length; i++) {
      // If the element in the array is equal to to the target at index i, return false

      if (item === targets[i]) {
        return false;
      }
    }
    // Else, return true
    return true;
  });
};

console.log(SeekAndDestroy([1, 2, 3, 1, 2, 3], 1, 2));
