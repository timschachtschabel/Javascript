const yourName = document.getElementById("yourName");
const nameForm = document.getElementById("nameForm");
const welcome = document.getElementById("nameString");
const nameInput = document.getElementById("nameInput");
const submitButton = document.getElementById("submitButton");

// localStorage.setItem("name", "Tim");

let existingName = localStorage.getItem("name");

nameForm.addEventListener('submit', function(event) {
    event.preventDefault();

    localStorage.setItem('name', nameInput.value);
    window.location.reload();
})

if (!existingName) {
    yourName.style.display = "none";
    welcome.style.display = "none";
} else {
    nameForm.style.display = "none";
    yourName.innerHTML = existingName;
}


console.log(localStorage);