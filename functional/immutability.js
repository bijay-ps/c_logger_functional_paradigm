const fName = "Bijay";

fName[0] = "A";

// console.log(fName);

const candidate = {
  fName: "Samakisha",
  age: 26,
  isEmployed: false,
};

// function isInterviewed(flag) {
//   if (flag) {
//     candidate.isEmployed = true;
//   } else {
//     candidate.isEmployed = false;
//   }

//   return candidate;
// }

function isInterviewed(flag) {
  const copyObj = { ...candidate };
  if (flag) {
    copyObj.isEmployed = true;
  } else {
    copyObj.isEmployed = false;
  }

  return copyObj;
}

const res = isInterviewed(true);

console.log(candidate);
console.log(res);
