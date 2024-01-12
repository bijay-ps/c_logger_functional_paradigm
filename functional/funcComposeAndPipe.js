const person = {
  name: "Saurav",
  age: 30,
};

const getName = (user) => user.name;
const captalizeName = (name) => name.toUpperCase();
const addSalutation = (name) => `Mr. ${name}`;

// const res1 = getName(person);
// console.log(res1);

// const res2 = captalizeName(res1);
// console.log(res2);

// const res3 = addSalutation(res2);
// console.log(res3);

const res = addSalutation(captalizeName(getName(person)));
// console.log(res);

// const composeFun =
//   (...funcs) =>
//   (x) =>
//     funcs.reduceRight((y, f) => f(y), x);

// const result = composeFun(addSalutation, captalizeName, getName)(person);
// console.log(result);

const pipeFunc =
  (...funcs) =>
  (x) =>
    funcs.reduce((v, f) => f(v), x);

const result = pipeFunc(getName, captalizeName, addSalutation)(person);
console.log(result);
