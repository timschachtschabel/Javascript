class Item {
    constructor(color, shape, price) {
        this.color = color;
        this.shape = shape;
        this.price = price;
    }
}

const colors = ["purple", "orange", "blue", "green", "red"];
const prices = ["$0", "$20", "$40", "$60", "$80", "$100"];
const shapes = ["circle", "square"];
const checkboxes = document.getElementsByClassName("checkbox");
const objectsField = document.getElementById("objectsContent");
const resetFiltersButton = document.getElementById("resetFilterButton");

function getRandomArrayItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateItem() {
    const item = new Item(getRandomArrayItem(colors), getRandomArrayItem(shapes), getRandomArrayItem(prices));
    const el = document.createElement("div");
    const numericPrice = parseInt(item.price.replace('$', ''));
    el.className = `item ${item.shape} ${item.color}`;
    el.dataset.price = numericPrice; // needed for price range filtering
    el.style.backgroundColor = item.color;
    el.textContent = item.price;
    return el;
}

function getSelectedFilters() {
    const filters = [];
    const filtersContent = document.getElementById("filtersContent");
    const checkedBoxes = filtersContent.getElementsByTagName("INPUT");

    for (let i = 0; i < checkedBoxes.length; i++) {
        if (checkedBoxes[i].type === "checkbox" && checkedBoxes[i].checked) {
            filters.push(checkedBoxes[i].value);
        }
    }

    const minPrice = parseInt(document.getElementById("minprice").value);
    const maxPrice = parseInt(document.getElementById("maxprice").value);
    applyFilters(filters, minPrice, maxPrice);
}

function applyFilters(filters, minPrice, maxPrice) {
    const colorFilters = ["purple", "orange", "blue", "green", "red"].filter(c => filters.includes(c));
    const shapeFilters = ["circle", "square"].filter(s => filters.includes(s));
    const items = objectsField.getElementsByClassName("item");

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemPrice = parseInt(item.dataset.price);

        const colorMatch = colorFilters.length === 0 || colorFilters.some(f => item.classList.contains(f));
        const shapeMatch = shapeFilters.length === 0 || shapeFilters.some(f => item.classList.contains(f));
        const priceMatch = itemPrice >= minPrice && itemPrice <= maxPrice;

        item.style.display = (colorMatch && shapeMatch && priceMatch) ? "" : "none";
    }
}

resetFiltersButton.addEventListener("click", function() {
    applyFilters();
}) 

window.onload = function () {
    document.getElementById("maxprice").value = 100;

    for (let i = 0; i < 20; i++) {
        objectsField.appendChild(generateItem());
    }

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', () => getSelectedFilters());
    }

    document.getElementById("minprice").addEventListener('input', () => getSelectedFilters());
    document.getElementById("maxprice").addEventListener('input', () => getSelectedFilters());

    document.querySelector(".reset").addEventListener('click', () => {
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
        document.getElementById("minprice").value = 0;
        document.getElementById("maxprice").value = 100;
        getSelectedFilters();
    });
};