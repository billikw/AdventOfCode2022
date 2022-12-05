// Day 2 (part 1)
const input = Array.from(
  document.getElementsByTagName("pre")[0].innerHTML.split("\n")
);
input.pop();

let inputWithDesiredOutcome = [];
/* Game Info */
const moves = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
  X: "Lose",
  Y: "Draw",
  Z: "Win",
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
const desiredGameResult = {
  Win: { Rock: "Paper", Scissors: "Rock", Paper: "Scissors" },
  Draw: { Rock: "Rock", Scissors: "Scissors", Paper: "Paper" },
  Lose: { Rock: "Scissors", Scissors: "Paper", Paper: "Rock" },
};
/* Player Info */
const scores = {
  elf: 0,
  human: 0,
};

setOutcome = (source) => {
  source.map((pair) => {
    inputWithDesiredOutcome.push(pair.split(" "));
  });

  for (let i = 0; i < inputWithDesiredOutcome.length; i++) {
    const elfMove = moves[inputWithDesiredOutcome[i][0]];
    const humanMove = moves[inputWithDesiredOutcome[i][1]];

    if (humanMove === "Lose") {
      elfMove === "Rock"
        ? (inputWithDesiredOutcome[i][1] = desiredGameResult.Lose.Rock)
        : elfMove === "Scissors"
        ? (inputWithDesiredOutcome[i][1] = desiredGameResult.Lose.Scissors)
        : (inputWithDesiredOutcome[i][1] = desiredGameResult.Lose.Paper);
    }
    if (humanMove === "Draw") {
      elfMove === "Rock"
        ? (inputWithDesiredOutcome[i][1] = desiredGameResult.Draw.Rock)
        : elfMove === "Scissors"
        ? (inputWithDesiredOutcome[i][1] = desiredGameResult.Draw.Scissors)
        : (inputWithDesiredOutcome[i][1] = desiredGameResult.Draw.Paper);
    }
    if (humanMove === "Win") {
      elfMove === "Rock"
        ? (inputWithDesiredOutcome[i][1] = desiredGameResult.Win.Rock)
        : elfMove === "Scissors"
        ? (inputWithDesiredOutcome[i][1] = desiredGameResult.Win.Scissors)
        : (inputWithDesiredOutcome[i][1] = desiredGameResult.Win.Paper);
    }
  }
};

playGame = (source) => {
  let elfPoints = 0;
  let humanPoints = 0;

  for (let i = 0; i < source.length; i++) {
    const elfMove = moves[source[i][0]];
    const humanMove = source[i][1];

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

setOutcome(input);
playGame(inputWithDesiredOutcome);
console.log(`The scores are - Elf: ${scores.elf} vs Human: ${scores.human}`);
// Day 2 (part 2) answer: 15422
