// Requirement 1: Arrow function 1 & Requirement 2: Spread operator on arrays
const combine = (arr1, arr2) => [...arr1, ...arr2];
// Requirement 1: Arrow function 2 & Requirement 3: Template literal 1
const format = (msg) => `Formatted: ${msg}`;

const a = [1, 2];
const b = [3, 4];
const combined = combine(a, b);

// Requirement 3: Template literal 2
console.log(`${format("Combined array length is " + combined.length)}`);
console.log(format("First item is " + combined[0]));