function startCountDown() { // Set the date we're counting down to
    document.getElementById("test-start-warning").style.display = 'none';
    document.getElementById("test").style.display = 'block';
    document.getElementById("finishTestButton").style.display = 'block';
    var countDownDate = new Date().getTime() + 602000;

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("countdown").innerHTML = minutes + "m " + seconds + "s ";

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "";
            alert("Expired");
        }
    }, 1000);
}