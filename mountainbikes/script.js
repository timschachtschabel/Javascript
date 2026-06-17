class Bike {
    constructor(id, name, color_name, button_color, window_color, dark_background, light_background, price, description, image) {
        this.id = id;
        this.name = name;
        this.color_name = color_name;
        this.button_color = button_color;
        this.window_color = window_color;
        this.dark_background = dark_background;
        this.light_background = light_background;
        this.price = price;
        this.description = description;
        this.image = image;   
    }
}

const bike1 = new Bike(
1, 'Marlin 5', 'Azure', '#3f5768', '#AD968C', '#415461', '#DAEDFA', 624,
'De Marlin 5 is alledaagse trailfiets die uitstekend geschikt is voor dagelijkse avonturen op verharde en onverharde wegen. Een geveerde voorvork, aandrijfsysteem met 2x8 versnellingen en bevestigingspunten voor een drager en fietsstandaard maken deze fiets tot de ideale keuze voor beginnende trailrijders en iedereen die op zoek is naar een comfortabele, stabiele forenzenfiets met de stevigheid van een echte mountainbike.',
'assets/bk1.png'
);

const bike2 = new Bike(
2, 'Marlin 6', 'Rage Red to Dnister Black Fade', '#A2041F', '#7EA45F', '#41010C', '#DA9AA5',  724,
'De Marlin 6 is een crosscountry-mountainbike die je offroad een efficiënt rijgedrag biedt dankzij een geveerde voorvork met lockout en een soepel schakelende 1x-aandrijving. Hij is ontworpen om te mountainbiken, maar is ook uitgerust met bevestigingspunten voor een drager en fietsstandaard waardoor het tevens een uitstekende keuze is voor avontuurlijke forenzen.',
'assets/bk2.png'
);

const bike3 = new Bike(
3, 'Marlin 7', 'Gloss Miami Green', '#95EFDE', '#E4AEA0', '#41615B', '#D9FAF4', 924,
'De Marlin 7 is het basismodel van een racewaardige mountainbike. Door de soepele, lichtgewicht RockShox voorvork en de betere afmontage is dit model de beste keuze voor beginnende rijders die een snelle crosscountry-hardtail willen die niet onderdoet voor onze meer hoogwaardige racebikes.',
'assets/bk3.png'
);

const bike4 = new Bike(
4, 'Marlin 8', 'Gloss Radioactive Red / Nautical', '#E50200',
'#86FEAE', '#400201', '#D99B9A', 1024,
'De Marlin 8 is een racewaardige mountainbike met een aangenaam prijskaartje. Door de soepele, lichtgewicht RockShox voorvork, tubeless-ready wielen en 1x-aandrijving met breed versnellingsbereik is dit model de beste keuze voor beginnende rijders die een snelle crosscountry-hardtail willen die niet onderdoet voor onze meer hoogwaardige racebikes.',
'assets/bk4.png'
);

const bikes = [bike1, bike2, bike3, bike4];
let currentId = 1;

// Bike details selectors
const bikeName = document.getElementById('bikeName');
const bikePrice = document.getElementById('bikePrice');
const bikeColor = document.getElementById('bikeColor');
const bikeDescription = document.getElementById('bikeDescription');
const bikeImage = document.getElementById('bikeImage');
const orderButton = document.getElementById('orderButton');
const bikeDetailsWindow = document.querySelector('.bikeDetails');

// Bike scrollwheel selectors
const bikeSelectorWheel = document.querySelector(".bikeSelector");
const pageBody = document.querySelector("body");

// Each wheel image keeps a permanent bike (via data-id) and only its
// position class changes, so CSS transitions can animate the move.
const wheelImages = document.querySelectorAll('.wheelImage');
const posClasses = ['pos-selected', 'pos-second', 'pos-third', 'pos-fourth'];

function updateWheel(selectedId) {
    wheelImages.forEach(img => {
        const bikeId = parseInt(img.dataset.id);
        const offset = (bikeId - selectedId + bikes.length) % bikes.length;
        posClasses.forEach(c => img.classList.remove(c));
        img.classList.add(posClasses[offset]);
    });
}

function showDetails(id) {
    let currentBike = bikes.find(bike => bike.id === id);

    // Bike details styling
    bikeName.innerHTML = currentBike.name;
    bikePrice.innerHTML = "Price:" + " " + currentBike.price;
    bikeColor.innerHTML = "Color:" + " " + currentBike.color_name;
    bikeImage.src = currentBike.image;
    bikeImage.alt = currentBike.name;

    orderButton.style = "background-color: " + currentBike.button_color;
    bikeDetailsWindow.style = "background-color: " + currentBike.window_color;


    //extra styling for bike wheel and page
    bikeSelectorWheel . style = "background-color: " + currentBike.window_color;

    pageBody.style = "background: linear-gradient(140deg, " + currentBike.light_background + ", " + currentBike.dark_background + ")";

    // animate the wheel images
    updateWheel(id);
}

document.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        if (currentId === 1) {
            currentId = 4;
            showDetails(currentId);
        } else {
            currentId -= 1;    
            showDetails(currentId);  
        }
    } 
    else {
        // scrolled up
        if (currentId == 4) {
            currentId = 1;
            showDetails(currentId);  
        } else {
            currentId += 1;
            showDetails(currentId);  
        }
    }
});

bikeSelectorWheel.addEventListener('click', function(event) {
    const img = event.target.closest('.wheelImage');
    if (img) {
        currentId = parseInt(img.dataset.id);
        showDetails(currentId);
    }
});

showDetails(1);