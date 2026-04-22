//Change website body background to yellow when the change background button is pressed. Does not get a value from anywhere.

const siteBody = document.body;

function makeYellow() {
    const yellow = "#ffff00";

    siteBody.style.backgroundColor = yellow;
}

const backgroundButton = document.getElementById("changeBackground");

backgroundButton.addEventListener("click", makeYellow);

//Change background to a specific RGB given by the sliders inside of the form. Can be a value between 0 and 255.

let redSlider = document.getElementById("red");
let greenSlider = document.getElementById("green");
let blueSlider = document.getElementById("blue");
let submitButton = document.getElementById("submitRGB");

//function used for testing

function giveValues() {
    
    let redValue = redSlider.value;
    let greenValue = greenSlider.value;
    let blueValue = blueSlider.value;

     console.log(redValue);
     console.log(greenValue);
     console.log(blueValue);
}

//change body background to rgb colors given by slider.

function makeRGB() {
    let redValue = redSlider.value;
    let greenValue = greenSlider.value;
    let blueValue = blueSlider.value;

    siteBody.style.backgroundColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
}

//use makeRGB function when the form submit button is clicked
submitButton.addEventListener("click", makeRGB);