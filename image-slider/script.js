let slides = [
    { "image": "assets/image1.jpg" },
    { "image": "assets/image2.jpg" },
    { "image": "assets/image3.jpg" }
];

const sliderContainer = document.getElementById("sliderContainer");
const progressBar = document.querySelector(".progressbar");
let currentSlide = 0;
const slideDuration = 3000;

const barColors = ["#4caf50", "#2196f3"];

function showSlides(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    sliderContainer.innerHTML = `<img src="${slides[currentSlide].image}" alt="image${currentSlide + 1}">`;
    startProgressBar();
}

function startProgressBar() {
    const color = barColors[currentSlide % barColors.length];
    progressBar.style.setProperty('--bar-color', color);

    progressBar.classList.add('reset');
    progressBar.style.setProperty('--progress', '0%');
    progressBar.offsetHeight;
    progressBar.classList.remove('reset');
    progressBar.style.setProperty('--progress', '100%');
}

showSlides(0);
setInterval(() => showSlides(currentSlide + 1), slideDuration);