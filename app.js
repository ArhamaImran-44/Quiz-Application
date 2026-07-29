const questions = [
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    option1: "var",
    option2: "int",
    option3: "string",
    correctOption: "var",
  },
  {
    question: "Which method is used to display a message in the browser?",
    option1: "console.log()",
    option2: "alert()",
    option3: "print()",
    correctOption: "alert()",
  },
  {
    question: "How do you write a comment in JavaScript?",
    option1: "// This is a comment",
    option2: "<!-- This is a comment -->",
    option3: "** This is a comment **",
    correctOption: "// This is a comment",
  },
  {
    question: "Which symbol is used for strict equality in JavaScript?",
    option1: "==",
    option2: "===",
    option3: "=",
    correctOption: "===",
  },
  {
    question: "Which function is used to print output in the browser console?",
    option1: "console.log()",
    option2: "document.write()",
    option3: "alert()",
    correctOption: "console.log()",
  },
];

let num = 0;
let score = 0;

let nextBtn = document.querySelector("#nextQues");

function showQuestion() {

  if (num >= questions.length) {
    document.body.innerHTML = `
      <h1>Quiz Ended 🎉</h1>
      <h2>Your Score: ${score}/${questions.length}</h2>
    `;
    return;
  }

  document.querySelector("#question").innerHTML = questions[num].question;
  document.querySelector("#option1").innerHTML = questions[num].option1;
  document.querySelector("#option2").innerHTML = questions[num].option2;
  document.querySelector("#option3").innerHTML = questions[num].option3;

  if (num === questions.length - 1) {
    nextBtn.innerText = "Finish";
  } else {
    nextBtn.innerText = "Next";
  }
}

showQuestion();

function checkRight() {

  let options = document.getElementsByName("option");
  let selected = false;

  for (let option of options) {

    if (option.checked) {

      selected = true;

      let selectedOpt = option.nextElementSibling.innerText;

      if (selectedOpt === questions[num].correctOption) {
        score++;
      }
    }

    option.checked = false;
  }

  if (!selected) {
    alert("Please select an option!");
    return false;
  }

  return true;
}

// checking 

nextBtn.addEventListener("click", function () {

  let check = checkRight();

  if (check) {
    num++;
    showQuestion();
  }

});