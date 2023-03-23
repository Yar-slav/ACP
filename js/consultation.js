var screenHeight = window.innerHeight;
var circle;

window.addEventListener("DOMContentLoaded", function () {
    circle = document.querySelector(".consultation");
});

window.addEventListener("scroll", function () {
    if (window.innerWidth > 1439) {
        circleSizeFunction([180, 50, 125, 20], [75, 25, 100, 30]);
    }
    if (window.innerWidth > 1023 && window.innerWidth <= 1439) {
        circleSizeFunction([150, 50, 100, 18], [75, 25, 75, 30]);
    }
    if (window.innerWidth > 767 && window.innerWidth <= 1023) {
        circleSizeFunction([120, 50, 100, 16], [75, 25, 75, 30]);
    }
    if (window.innerWidth > 424 && window.innerWidth <= 767) {
        circleSizeFunction([75, 50, 65, 0], [50, 25, 40, 0]);
    }
    if (window.innerWidth <+ 424 ) {
        circleSizeFunction([50, 25, 25, 0], [50, 25, 25, 0]);
    }
});

function circleSize(size, bottom, right) {
    if (circle) {
        circle.style.width = size + "px";
        circle.style.height = size + "px";
        circle.style.bottom = bottom + "px";
        circle.style.right = right + "px";
    }
}

function circleSizeFunction(startSize, thanSize) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (circle) {
        if (scrollTop > screenHeight / 5) {
            circleSize(thanSize[0], thanSize[1], thanSize[2]);
            circle.innerText = 'К';
            circle.style.fontSize = thanSize[3] + "px";
        } else {
            circleSize(startSize[0], startSize[1], startSize[2]);
            circle.innerText = 'Консультація';
            circle.style.fontSize = startSize[3] + "px";
        }
    }
}

const contactSection = document.querySelector('.contact-section');

// Функція, яка перевіряє, чи перетинає елемент блок
function checkOverlap() {
    if (circle) {
        const consultationBounds = circle.getBoundingClientRect();
        const contactBounds = contactSection.getBoundingClientRect();
        circleBottom = consultationBounds.bottom;
        console.log(circleBottom);

        if (
            consultationBounds.top > contactBounds.top &&
            consultationBounds.right > contactBounds.left &&
            consultationBounds.left < contactBounds.right
        ) {
            circle.style.bottom = "-100px";
            circle.style.transition = "all 0s ease-in-out";
        } else {
            circle.style.bottom = circleBottom;
            // circle.style.display = 'flex';
            circle.style.transition = "all 1s ease-in-out";
        }
    }
}

window.addEventListener('scroll', checkOverlap);

