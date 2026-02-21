const quiz = {
  question: "日本の首都はどこ？",
  correct: "B",
  choices: {
    A: "大阪",
    B: "東京",
    C: "名古屋"
  }
};

document.getElementById("question").textContent =
  quiz.question + "\nA:" + quiz.choices.A +
  " B:" + quiz.choices.B +
  " C:" + quiz.choices.C;

function answer(choice) {
  if (choice === quiz.correct) {
    document.getElementById("result").textContent = "正解！🎉";
  } else {
    document.getElementById("result").textContent = "不正解…😢";
  }
}
