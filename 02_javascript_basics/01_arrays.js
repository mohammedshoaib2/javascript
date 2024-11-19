const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array);

array.push(10);
array.push(11);
array.push(12);
console.log(array);

array.pop();
array.pop();
array.pop();
console.log(array);

array.unshift(100);
console.log(array);

array.shift();
console.log(array);

array.slice(0, 6); //returns new array, doesn't change the original array
console.log(array);

array.splice(0, 6); //changes the original array
console.log(array);
