// Day 2 (part 1)
const input = Array.from(
  document.getElementsByTagName("pre")[0].innerHTML.split("\n")
);
input.pop();

/* Game Info */
const moves = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
};
const shapes = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
};
const result = {
  loss: 0,
  draw: 3,
  win: 6,
};

/* Player Info */
const scores = {
  elf: 0,
  human: 0,
};

playGame = (source) => {
  let elfPoints = 0;
  let humanPoints = 0;

  for (let i = 0; i < source.length; i++) {
    const elfMove = moves[source[i][0]];
    const humanMove = moves[source[i][2]];

    elfPoints += shapes[elfMove];
    humanPoints += shapes[humanMove];

    /* Game logic */
    /* Rock */
    if (elfMove === "Rock") {
      humanMove === "Scissors"
        ? (elfPoints += result.win)
        : humanMove === "Rock"
        ? ((elfPoints += result.draw), (humanPoints += result.draw))
        : (humanPoints += result.win);
    }
    /* Scissors */
    if (elfMove === "Scissors") {
      humanMove === "Paper"
        ? (elfPoints += result.win)
        : humanMove === "Scissors"
        ? ((elfPoints += result.draw), (humanPoints += result.draw))
        : (humanPoints += result.win);
    }
    /* Paper */
    if (elfMove === "Paper") {
      humanMove === "Rock"
        ? (elfPoints += result.win)
        : humanMove === "Paper"
        ? ((elfPoints += result.draw), (humanPoints += result.draw))
        : (humanPoints += result.win);
    }
  }
  scores.elf = elfPoints;
  scores.human = humanPoints;
};

playGame(input);
console.log(`The scores are - Elf: ${scores.elf} vs Human: ${scores.human}`);
// Day 2 (part 1) answer: 15422
