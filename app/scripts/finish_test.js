function showAnswers() {
    $(document).ready(function () {
        $.getJSON('./resources/answers.json', function (data) {
            $.each(data, function (k, v) {
                var answers = document.getElementsByName(k);
                for (var i = 0, length = answers.length; i < length; i++) {
                    if (answers[i].value === v) {
                        answers[i].setAttribute("class", "right");
                    } else if (answers[i].checked) {
                        answers[i].setAttribute("class", "wrong");
                    }
                }
            });
        });
    });
    return 4;
}

function finishTest() {
    if (confirm("Сигурен ли сте, че искате да приключите теста?")) {
        stopTime();
        let testDiv = document.getElementById("testControl");
        testDiv.parentNode.removeChild(testDiv);
        var answersRevealed = showAnswers();
        console.log(answersRevealed);
        let rightAnswers = document.getElementsByClassName("right");
        for (let i = 0; i < rightAnswers.length; i++) {
            $(rightAnswers[i].className).append('<img src="../resources/ball.png" width="30" height="30"/>');
        }
        let wrongAnswers = document.getElementsByClassName("wrong");
        for (let i = 0; i < wrongAnswers.length; i++) {
            wrongAnswers[i].after('<img src="../resources/ball.png" width="30" height="30"/>');
        }
    }
}