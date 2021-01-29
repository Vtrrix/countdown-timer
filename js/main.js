var countDownDate = new Date("Feb 16, 2021 12:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("day").innerText = days;
  document.getElementById("hrs").innerText = hours;
  document.getElementById("mins").innerText = minutes;
  document.getElementById("sec").innerText = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("day").innerText = "00";
    document.getElementById("hrs").innerText = "00";
    document.getElementById("mins").innerText = "00";
    document.getElementById("sec").innerText = "00";
  }
}, 1000);
