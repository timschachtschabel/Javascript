let count = document.getElementById('count');
let increaseButton = document.getElementById('increaseButton');
let resetButton = document.getElementById('resetButton');
let decreaseButton = document.getElementById('decreaseButton');
let countNumber = parseInt(count.innerHTML);

function changeCounter() {
    if (countNumber > 0) {
        count.style = "color: green;"
    } else if (countNumber == 0) {
        count.style = "color: navy;"
    } else {
        count.style = "color: red;"
    }
    count.innerHTML = countNumber;
}

function reset() {
    count.style = "color: navy;"
    countNumber = 0;
    count.innerHTML = countNumber;
}

function increase() {
    countNumber++;
    changeCounter(countNumber);
}

function decrease() {
    countNumber--;
    changeCounter(countNumber);
}



resetButton.addEventListener('click', reset)
increaseButton.addEventListener('click', increase);
decreaseButton.addEventListener('click', decrease);
