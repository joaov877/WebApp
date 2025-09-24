document.getElementById("submitBtn").addEventListener("click", checkAnswers);

function checkAnswers() {
  const questions = document.querySelectorAll(".question");
  let score = 0;

  questions.forEach((question, index) => {
    const correctIndex = parseInt(question.dataset.correct);
    const inputs = question.querySelectorAll("input[type='radio']");
    inputs.forEach((input, i) => {
      const label = input.parentElement;
      label.style.color = "";
      if (input.checked) {
        if (i === correctIndex) {
          score++;
          label.style.color = "green";
          label.style.fontWeight = "bold";
        } else {
          label.style.color = "red";
        }
      }
    });
  });

  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `✅ You got ${score} out of ${questions.length} correct!`;

  // Barra de progresso
  const progress = document.querySelector("#progress-bar div");
  const percentage = (score / questions.length) * 100;
  progress.style.width = percentage + "%";
}
