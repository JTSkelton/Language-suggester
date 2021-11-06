$(document).ready(function() {
  $("#userAnswers").submit(function(event) {
    event.preventDefault();
    let userAnswer1 = parseInt($("input:radio[name=question1]:checked").val());
    let userAnswer2 = parseInt($("input:radio[name=question2]:checked").val());
    let userAnswer3 = parseInt($("input:radio[name=question3]:checked").val());
    let userAnswer4 = parseInt($("input:radio[name=question4]:checked").val());
    let userAnswer5 = parseInt($("input:radio[name=question5]:checked").val());
    let userAnswerSum = userAnswer1 + userAnswer2 + userAnswer3 + userAnswer4 + userAnswer5;
    $(".result1, .result2, .result3").hide();
    if (userAnswerSum <= 5) {
      $(".result1").show();
    } else if (userAnswerSum >=6 && userAnswerSum <=10) {
      $(".result2").show();
    } else if (userAnswerSum >=11 && userAnswerSum <=14) {
      $(".result3").show();
    }
  });
});