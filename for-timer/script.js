const christmasLights = document.getElementsByClassName("light");
const backgroundColors = ["green", "blue", "red", "orange", "yellow", "purple", "grey"];


for (let lightOrder = 0; lightOrder <= christmasLights.length; lightOrder ++) {
    setTimeout(() => {       
            let randomColor = Math.floor(Math.random()*backgroundColors.length);

            christmasLights[lightOrder].setAttribute("fill", backgroundColors[randomColor]);
    }, lightOrder * 500);
}

