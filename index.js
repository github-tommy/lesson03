let arr = ['waffles', 'cheese', 'bacon', 'eggs', 'tomato'];
arr.push('avocado');
arr.splice(2, 1);

let str = arr.join(', ');

console.log(str);

//Assignment 1: 5 string array. add 6th avocado. removed 3rd bacon. separate them with comma. To replace bacon waffle with avocado.

let arr = ['The', 'html200', 'class', 'is', 'awesome','!'];
let str =(arr.join(' '));

console.log(str);
console.log(arr[2]);

//Ass2: To create 5words and period. Console.log 3rd element.

let arr = ['waffles', 'cheese', 'bacon', 'eggs', 'tomato'];

arr.forEach(function(item, index, array) {
  console.log(index+1, item);
});

//Ass3: 5 string array and indexed.
