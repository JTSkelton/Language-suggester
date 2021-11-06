$(document).ready(function() {
  $("#userAnswers").submit(function() {
    // event.preventDefault();
    let userAnswer1 = parseInt($("input:radio[name=question1]:checked").val());
    let userAnswer2 = parseInt($("input:radio[name=question2]:checked").val());
    let userAnswer3 = parseInt($("input:radio[name=question3]:checked").val());
    let userAnswer4 = parseInt($("input:radio[name=question4]:checked").val());
    let userAnswer5 = parseInt($("input:radio[name=question5]:checked").val());
    let userAnswerSum = userAnswer1 + userAnswer2 + userAnswer3 + userAnswer4 + userAnswer5;

    if (userAnswerSum <= 5) {

    }
    $
  });
});