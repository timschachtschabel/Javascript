class Beyblade {
    constructor(id, code, image, brand, name, price, stock) {
        this.id = id;
        this.code = code;
        this.image = image;
        this.brand = brand;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}

let Beyblade1 = new Beyblade(0, "bb1", "assets/bb1.png", "Beyblade Quad Drive", "StartPack: Cyclone Roktavor", 17.99, 8);

let Beyblade2 = new Beyblade(1, "bb2", "assets/bb2.png", "Beyblade Quad Drive", "StartPack: Destruction Belfyre", 17.99, 13);

let Beyblade3 = new Beyblade(2, "bb3", "assets/bb3.png", "Beyblade Quad Drive", "Cyclone Fury String Launcher", 30.99, 5);

let Beyblade4 = new Beyblade(3, "bb4", "assets/bb4.png", "Beyblade Quad Drive", "Duopack: Wrath Fafnir & Berserk Linwyrm", 28.99, 1);

let Beyblade5 = new Beyblade(4, "bb5", "assets/bb5.png", "Beyblade Quad Drive", "Duopack: Destruction Ifritor & Stone Nemesis", 28.99, 5);

let Beyblade6 = new Beyblade(5, "bb6", "assets/bb6.png", "Beyblade Quad Drive", "Duopack: Magma Roktavor & Gilded Balderov", 28.99, 9);

let Beyblade7 = new Beyblade(6, "bb7", "assets/bb7.png", "Beyblade Burst Surge", "Speedstorm World Spryzen", 21.39, 12);

let Beyblade8 = new Beyblade(7, "bb8", "assets/bb8.png", "Beyblade Burst Surge", "Speedstorm", 25.99, 12);

let Beyblade9 = new Beyblade(8, "bb9", "assets/bb9.png", "Beyblade Burst Surge", "Speedstorm Spark Power Set", 38.95, 3);


const beybladeList = [Beyblade1, Beyblade2, Beyblade3, Beyblade4, Beyblade5, Beyblade6, Beyblade7, Beyblade8, Beyblade9];

function saveCart() {
    localStorage.setItem('shoppingCartItems', JSON.stringify(shoppingCartItems));
}

window.addEventListener("load", (event) => {
    beybladeList.forEach(beyblade => beyblade.originalStock = beyblade.stock);

    const saved = localStorage.getItem('shoppingCartItems');
    if (saved) {
        const savedItems = JSON.parse(saved);
        savedItems.forEach(savedItem => {
            shoppingCartItems.push(savedItem);
            const beyblade = beybladeList.find(b => b.id === savedItem.id);
            if (beyblade) beyblade.stock -= savedItem.quantity; // restore stock deductions
        });
    }

    generateProducts();
    generateShoppingCart();
});

function generateProducts() {

    const productList = document.getElementById("allProducts");
    productList.innerHTML = "";


    beybladeList.forEach(beyblade => {
        const individualProduct = document.createElement('li');
        individualProduct.innerHTML = `
        
            <div class="product flex space-around">
                <div class="productImage">
                    <img src="${beyblade.image}" alt="${beyblade.code}">
                </div>
                <div class="productInfo">
                    <h3>${beyblade.brand}</h3>
                    <p>${beyblade.name}</p>
                    <p>€${beyblade.price}</p>
                    <p>In stock: ${beyblade.stock}</p>
                    <button class="orderButton" id="orderButton" data-id="${beyblade.id}">Order now</button>
                </div>
            </div>        
        `;
        productList.appendChild(individualProduct);
    });
}

document.getElementById("allProducts").addEventListener('click', (event) => {
    if (event.target.classList.contains('orderButton')) {
        const id = event.target.dataset.id;
        addToShoppingCart(id);
    }
});

const shoppingCartItems = [];

function addToShoppingCart(id) {
    const beyblade = beybladeList.find(b => b.id === Number(id));
    
    if (!beyblade || beyblade.stock <= 0) {
        alert("This item is out of stock!");
        return;
    }

    beyblade.stock--;
    const existing = shoppingCartItems.find(item => item.id === Number(id));
    if (existing) {
        existing.quantity++;
    } else {
        shoppingCartItems.push({ id: Number(id), quantity: 1 });
    }

    saveCart();
    generateShoppingCart();
    generateProducts();
}

function generateShoppingCart() {
    const allShoppingCartItems = document.getElementById("allShoppingCartItems");
    allShoppingCartItems.innerHTML = "";

    if (shoppingCartItems.length === 0) {
        allShoppingCartItems.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    shoppingCartItems.forEach(item => {
    const beyblade = beybladeList.find(b => b.id === item.id);
    if (!beyblade) return;

    const shoppingCartListItem = document.createElement('li');
    shoppingCartListItem.innerHTML = `
        <div class="shoppingCartItem flex space-around">
            <div class="shoppingCartImage">
                <img src="${beyblade.image}" alt="${beyblade.code}">
            </div>
            <div class="shoppingCartInfo">
                <h3>${beyblade.brand}</h3>
                <p>${beyblade.name}</p>
                <p>€${beyblade.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Stock left: ${beyblade.stock}</p>
                <button class="addQuantity" data-id="${beyblade.id}">+</button>
                <button class="deleteQuantity" data-id="${beyblade.id}">-</button>
            </div>
        </div>        
    `;
    allShoppingCartItems.appendChild(shoppingCartListItem);
    });

    const totalElement = document.createElement('p');
    totalElement.innerHTML = `Total: €${calculateTotal()}`;
    allShoppingCartItems.appendChild(totalElement);
}

function calculateTotal() {
    let total = 0;
    shoppingCartItems.forEach(item => {
        const beyblade = beybladeList.find(b => b.id === item.id);
        if (beyblade) total += beyblade.price * item.quantity;
    });
    return total.toFixed(2);
}

document.getElementById("allShoppingCartItems").addEventListener('click', (event) => {
    const id = event.target.dataset.id;
    if (!id) return;

    const beyblade = beybladeList.find(b => b.id === Number(id));
    const item = shoppingCartItems.find(i => i.id === Number(id));
    if (!beyblade || !item) return;

    if (event.target.classList.contains('addQuantity')) {
        if (beyblade.stock <= 0) {
            alert("No more stock available!");
            return;
        }
        beyblade.stock--;
        item.quantity++;

    } else if (event.target.classList.contains('deleteQuantity')) {
        beyblade.stock++;
        item.quantity--;
        if (item.quantity === 0) {
            shoppingCartItems.splice(shoppingCartItems.indexOf(item), 1);
        }
    }

    saveCart();
    generateShoppingCart();
    generateProducts();
});
