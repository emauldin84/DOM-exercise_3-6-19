const targetButton1 = document.querySelector("[data-button1]");
const targetButton2 = document.querySelector("[data-button2]");
const targetButton3 = document.querySelector("[data-button3]");

function respondToClick1(event) {
    event.target.classList.toggle('blue');
}

function respondToClick2(event) {
    event.target.classList.toggle('red');
}

function respondToClick3(event) {
    event.target.classList.toggle('yellow');
}


targetButton1.addEventListener('click', respondToClick1);
targetButton2.addEventListener('click', respondToClick2);
targetButton3.addEventListener('click', respondToClick3);