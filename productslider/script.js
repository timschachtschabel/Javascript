let products = [
    {
        "id": 1,
        "image": "assets/products/product1.png"
    },
    {
        "id": 2,
        "image": "assets/products/product2.png"
    },
    {
        "id": 3,
        "image": "assets/products/product3.png"
    },
    {
        "id": 4,
        "image": "assets/products/product4.png"
    },
    {
        "id": 5,
        "image": "assets/products/product5.png"
    },
    {
        "id": 6,
        "image": "assets/products/product6.png"
    },        
    {
        "id": 7,
        "image": "assets/products/product7.png"
    },
    {
        "id": 8,
        "image": "assets/products/product8.png"
    },
    {
        "id": 9,
        "image": "assets/products/product9.png"
    },            
]

let productAmount = products.length;
let currentIndex = 0;
const visibleProducts = 3;


const productContainer = document.getElementById("products");

function showProducts() {
    productContainer.innerHTML = "";

    for (let i = 0; i < visibleProducts; i++) {
        const index = (currentIndex + i) % productAmount;
        const product = products[index];

        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = `product${product.id}`;

        productDiv.appendChild(img);
        productContainer.appendChild(productDiv);
    }
}

const previousButton = document.getElementById("previousSlide");
const nextButton = document.getElementById("nextSlide");

nextButton.addEventListener("click", nextSlide);
previousButton.addEventListener("click", previousSlide);

let slideInterval = setInterval(automaticSlide, 5000);
let slideTimeout;

function startInterval() {
    clearTimeout(slideTimeout);
    slideTimeout = setTimeout(() => {
        slideInterval = setInterval(automaticSlide, 5000);
    }, 4000);
}


function nextSlide() {
    currentIndex = (currentIndex + 3) % productAmount;
    showProducts()
    clearInterval(slideInterval)
    startInterval();
}

function previousSlide() {
    currentIndex = (currentIndex - 3 + productAmount) % productAmount;
    showProducts();
    clearInterval(slideInterval);
    startInterval();
}

function automaticSlide() {
    currentIndex = (currentIndex + 3) % productAmount;
    showProducts()
}

showProducts();
