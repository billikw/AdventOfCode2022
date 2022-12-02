// Day 1 (part 1)
const input = []; // Array.from($0.innerHTML.split("\n"));
let elvesCalories = [];

countCalories = (source) => {
  let cals = 0;
  for (let i = 0; i < source.length; i++) {
    if (source[i] != "") {
      cals += Number(source[i]);
    } else {
      elvesCalories.push(cals);
      cals = 0;
    }
  }
};

findLargest = (source) => {
  let largest = 0;
  for (let i = 0; i < source.length; i++) {
    if (source[i] > largest) {
      largest = source[i];
    }
  }
  return largest;
};

// Day 1 (part 1) answer: 68292
