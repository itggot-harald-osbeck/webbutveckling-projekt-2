var countDownDate = new Date("Dec 24, 2019 00:00:00").getTime();

var x = setInterval(function() {


  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("dagar").innerHTML = days; //"<br>Dagar<br> ";
  document.getElementById("timmar").innerHTML = hours; //"<br>Timmar<br> ";
  document.getElementById("minuter").innerHTML = minutes;// + "<br>Minuter<br> ";
  document.getElementById("sekunder").innerHTML = seconds;// + "<br>Sekunder<br> ";
  document.getElementById("demo").innerHTML = days + " Dagar " + hours + " Timmar "
  + minutes + " Minuter " + seconds + " Sekunder ";
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function amenu(){
  let thing = document.querySelector(".amenu")
  thing.classList.toggle("amenuactivate")

}
function menu2(){
  let thing = document.querySelector(".menu22")
  thing.classList.toggle("menu2activate")

}