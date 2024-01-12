const arr = [11, 12, 13, 14, 15];

let newArr = [];

// Imperative Approach
for (let i = 0; i < arr.length; i++) {
  const elt = arr[i] * 2;
  newArr.push(elt);
}

console.log(newArr);

// Declarative Approach
newArr = arr.map((e) => 2 * e);
console.log(newArr);
