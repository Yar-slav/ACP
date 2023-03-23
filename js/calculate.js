const squareInput = document.querySelector('#square-input');
const inputs = document.querySelectorAll('input');
const totalPriseElement = document.querySelector('#total-prise');
const form = document.querySelector('form');

// checkbox
const currentState = document.querySelector('#calc-current-state');
const draw = document.querySelector('#calc-draw');


calculate();

form.addEventListener('submit', function(event) {
    event.preventDefault(); // перешкоджає стандартній поведінці оновлення сторінки при відправці форми
    calculate();
    squareInput.blur();
});

for (const input of inputs) {
    input.addEventListener('input', function () {
        calculate();
    })
}

function calculate() {
    let square = parseInt(squareInput.value);
    let totalPrise = 0;
    let startConceptPrice = 80;
    let conceptPrise = 0;
    let currentStatePrice = 0;
    let drawPrise = 0;

    // square.style.width = square.offsetWidth + "px";

    if (square < 30) {
        // squareInput.value = 30;
        if(currentState.checked) {
            currentStatePrice = 50;
        }
        if(draw.checked) {
            drawPrise = 20;
        }
        conceptPrise = startConceptPrice;
    } else if (square >= 30 && square < 100) {
        conceptPrise = startConceptPrice + (square - 30) * 1;
        if(currentState.checked) {
            currentStatePrice = 50;
        }
        if(draw.checked) {
            drawPrise = 25;
        }
    } else if (square >= 100) {
        startConceptPrice = 150;
        conceptPrise = startConceptPrice + (square - 100) * 0.8;
        if(currentState.checked) {
            currentStatePrice = 70;
        }
        if(draw.checked) {
            drawPrise = 30;
        }
    }

    totalPrise = conceptPrise + currentStatePrice + drawPrise;
    totalPriseElement.innerText = totalPrise;
}


