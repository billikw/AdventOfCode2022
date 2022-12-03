// Day 1 (part 2)
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

findLargestX = (source, x) => {
  return source
    .sort((a, b) => {
      return a - b;
    })
    .slice(-x)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
};

countCalories(input);
findLargestX(elvesCalories, 3);
// Day 1 (part 2) answer: 203203
