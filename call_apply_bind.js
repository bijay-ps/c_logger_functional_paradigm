// "use strict";

// function greet() {
//   console.log(this);
// }

// // greet();

// const afunc = () => {
//   console.log(this);
// };

// afunc();

// const obj = {
//   fName: "Rajesh",
//   friends: ["Sheldon", "Howard"],
//   test: function () {
//     console.log(this);
//     const anotherFunc = () => {
//       console.log(this);
//     };
//     anotherFunc();
//   },
// };

// obj.test();

const indigo = {
  airlines: "Indigo",
  flightCode: "6E",
  bookings: [],
  book: function (flightNum, pName) {
    const bookingObj = {
      flight: `${this.flightCode}-${flightNum}`, // 6E-748
      passengerName: pName,
    };
    this.bookings.push(bookingObj);
  },
};

indigo.book(748, "Bijay Singh");
// console.log(indigo.bookings);

const airIndia = {
  airlines: "Air India",
  flightCode: "AI",
  bookings: [],
};

const goAir = {
  airlines: "Go Air",
  flightCode: "GA",
  bookings: [],
};

const bookFunc = indigo.book;
// console.log(bookFunc);
// bookFunc()
// airIndia.bookFunc();

// call, apply and bind
// bookFunc.call(airIndia, 456, "Farhan Quershi");
// bookFunc.call(goAir, 456, "Mohit");

// bookFunc.apply(goAir, [743, "Gautam"]);

const newCopiedFunc = bookFunc.bind(goAir, 123, "Preeti Verma");

console.log(airIndia.bookings);
console.log(goAir.bookings);

newCopiedFunc();
console.log(goAir.bookings);
