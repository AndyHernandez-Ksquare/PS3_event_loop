// Functions are first class

// Define a function that given an array “arr”, loop and deletes each element starting
//  from index 0 until the function passed as the second parameters returns true when we passed element to it.

// Then returns the array with the remaining elements once the condition has been met otherwise returns an empty array []
const firstClass = (arr, callback) => {
  let index = 0;
  // Increment index while it is less than the length of the array and...
  //   the callback function returns false for the current element
  while (index < arr.length && !callback(arr[index])) {
    index++;
  }
  //  If the end of the array is reached, return an empty array
  if (index === arr.length) {
    return [];
  }
  //   If the callback returns true, return a new array with all the values left
  else {
    return arr.slice(index);
  }
};

firstClass([1, 2, 3, 4], (n) => n > 3);
