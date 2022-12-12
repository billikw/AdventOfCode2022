// Day 3 (part 1)
const input = Array.from(
  document.getElementsByTagName("pre")[0].innerHTML.split("\n")
);
input.pop();

const duplicatedItems = [];

function checkForDuplicates(bag) {
  const splitBag = [];
  const arr = Array.from(bag);

  arr.map((string) => {
    splitBag.push([
      string.slice(0, string.length / 2),
      string.slice(string.length / 2),
    ]);
  });

  splitBag.map((bag) => {
    getDuplicate(bag);
  });
}

function getDuplicate(bag) {
  const bagCompartmentLeft = Array.from(bag[0]);
  const bagCompartmentRight = Array.from(bag[1]);
  const match = [];

  bagCompartmentLeft.map((leftChar) => {
    if (match.length < 1) {
      if (bagCompartmentRight.some((rightChar) => leftChar === rightChar)) {
        match.push(leftChar);
      }
    }
  });
  duplicatedItems.push(match[0]);
}

function sumPriorities(items) {
  const priorityPoints = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let total = 0;
  items.map((item) => {
    item === item.toLowerCase()
      ? (total += priorityPoints[item])
      : (total += priorityPoints[item.toLowerCase()] + 26);
  });
  return total;
}

checkForDuplicates(input);
sumPriorities(duplicatedItems);

// Day 3 part 1 answer: 8243.
