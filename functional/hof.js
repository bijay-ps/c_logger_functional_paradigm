function add(x) {
  return function (y) {
    return x + y;
  };
}

const f = add(76.97);
console.log(f(85.32));
