// Day 1 (part 1)
const input = Array.from(
  document.getElementsByTagName("pre")[0].innerHTML.split("\n")
);
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

countCalories(input);
findLargest(elvesCalories);
// Day 1 (part 1) answer: 68292
