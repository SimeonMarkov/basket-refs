function finishTest() {
    if(confirm("Сигурен ли сте, че искате да приключите теста?")){
      stopTime();
      let testDiv = document.getElementById("testControl");
      testDiv.parentNode.removeChild(testDiv);
      showAnswers();
    }
}

function showAnswers() {
    //TODO show right answers and wrong(if selected)
}