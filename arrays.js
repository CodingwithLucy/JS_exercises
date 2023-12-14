// Create an array containing the names of the days of the week:
let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Display the third element of the daysOfWeek array:
console.log(daysOfWeek[2]); // 'Wednesday'

// Add the name of the next day of the week to the daysOfWeek array, e.g. 'The eighth day'''
daysOfWeek.push('Eight');
console.log(daysOfWeek); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Eight']

// Remove the last element of the daysOfWeek array:
daysOfWeek.pop();
console.log(daysOfWeek); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// Reverse the order of the elements in the daysOfWeek array:
daysOfWeek.reverse();
console.log(daysOfWeek); // ['Sunday', 'Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday']

// Sort the daysOfWeek array alphabetically:
daysOfWeek.sort();
console.log(daysOfWeek); // ['Friday', 'Monday', 'Saturday', 'Sunday', 'Thursday', 'Tuesday', 'Wednesday']

// Find the index of 'Friday' in the daysOfWeek array:
let index = daysOfWeek.indexOf('Friday');
console.log(index); // 4

// Check if the daysOfWeek array contains a 'Sunday' element:
let containsSunday = daysOfWeek.includes('Sunday');
console.log(containsSunday); // true