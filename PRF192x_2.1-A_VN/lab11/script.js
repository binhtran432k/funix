const poll = {
  question: "What is your favourite programming language? ",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  numberOfVotes: new Array(4).fill(0),
};

function renderNumberOfVotes() {
  document.getElementById("vote").textContent = [
    "JavaScript",
    "Python",
    "Rust",
    "C++",
  ]
    .map((v, i) => `${v}: ${poll.numberOfVotes[i]}`)
    .join(" | ");
}

function displayResults(strOrArr) {
  if (typeof strOrArr === "string") {
    console.log(`Poll results are ${strOrArr}`);
  } else if (Array.isArray(strOrArr)) {
    console.log(strOrArr);
  }
}

function registerNewAnswer() {
  let answered = false;
  while (!answered) {
    const voteId = prompt(
      [poll.question, ...poll.options, "(Write option number)"].join("\n"),
    );
    if (isNaN(voteId) || voteId < 0 || voteId > 3) {
      alert("Answer must be from 0 to 3!");
    } else {
      answered = true;
      poll.numberOfVotes[voteId]++;
      renderNumberOfVotes();
      displayResults([5, 2, 3]);
      displayResults([5, 2, 3].join(", "));
      displayResults([1, 5, 3, 9, 6, 1]);
      displayResults([1, 5, 3, 9, 6, 1].join(", "));
    }
  }
}

renderNumberOfVotes();

document.getElementById("answer").addEventListener("click", registerNewAnswer);
