const textContainer = document.querySelector(".starter_long");
const text = textContainer.textContent;

let index = 0;
let timerInterval = null;

function startTimer() {
    $('body').toggleClass('lock');
  timerInterval = setInterval(addLetter, 100);
}

function addLetter() {
    textContainer.textContent = text.substring(0, index + 1);
  index++;
  if (index >= text.length) {
    clearInterval(timerInterval);
    setTimeout(hideStarter, 1000);
  }
}

function hideStarter() {
  const starter = document.querySelector(".starter");
  starter.style.opacity = "0";
  setTimeout(function() {
    starter.style.display = "none";
  }, 0);
  $('body').removeClass('lock');
}

startTimer();
