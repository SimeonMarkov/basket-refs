function finishTest() {
    if (confirm("Приключване на теста?")) {
        stopTime();
        let testDiv = document.getElementById("testControl");
        testDiv.parentNode.removeChild(testDiv);
        showAnswers();
    }
}

function showAnswers() {
    $(document).ready(function () {
        $.getJSON('./resources/answers.json', function (data) {
            $.each(data, function (k, v) {
                var answers = document.getElementsByName(k);
                for (var i = 0, length = answers.length; i < length; i++) {
                    if(answers[i].value === v) {
                        answers[i].nextSibling.nodeValue += (' \" <div id="wrong">Appended right</div>.\"');
                    } else if(answers[i].checked){
                        answers[i].nextSibling.nodeValue += (' \" <div id="wrong">Appended wrong</div>.\"');
                    }
                }
            });
        });
    });

}