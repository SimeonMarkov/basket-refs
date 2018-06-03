function finishTest(test) {
    if (confirm("Приключване на теста?")) {
        stopTime();
        let testDiv = document.getElementById("testControl");
        testDiv.parentNode.removeChild(testDiv);
        showAnswers(test);
    }
}

function showAnswers(test) {
    var answers;
    var correctlyAnsweredCount = 0;
    var questionsNumber = 0;
    $(document).ready(function () {
        $.getJSON(test, function (data) {
            $.each(data, function (k, v) {
                answers = document.getElementsByName(k);
                questionsNumber++;
                for (var i = 0, length = answers.length; i < length; i++) {
                    if(answers[i].value === v) {
                        answers[i].nextSibling.nodeValue += (' \" <div id="right">Appended right</div>.\"');
                        if(answers[i].checked) {
                            correctlyAnsweredCount++;
                        }
                    } else if(answers[i].checked){
                        answers[i].nextSibling.nodeValue += (' \" <div id="wrong">Appended wrong</div>.\"');
                    }
                }
                if(correctlyAnsweredCount/questionsNumber >= 0.5) {
                    $('#test_result').css('color', 'mediumspringgreen');
                } else {
                    $('#test_result').css('color', 'red');
                }
                document.getElementById("test_result").innerText = "Оценка:" +  correctlyAnsweredCount + "/" + questionsNumber;
            })
        });
    });

}