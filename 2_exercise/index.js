function createSetFromArray(arr) {
    // Create a Set from the array
    const uniqueSet = new Set(arr);
    console.log(uniqueSet, "this is the unique set")
    return uniqueSet;
}

// Example usage:
const inputArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueSet = createSetFromArray(inputArray);

console.log(uniqueSet); // Output: Set { 1, 2, 3, 4, 5 }


let test = new Set([8, 8, 8, 8, 8, 9, 9, 9, 0])

console.log(test, "This is the test data..")