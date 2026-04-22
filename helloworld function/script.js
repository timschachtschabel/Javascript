var message = "Hello world!"

// const myMessage = document.getElementById("message");
// myMessage.innerHTML = message;

function helloWorld() {
    const myMessage = document.getElementById("message");
    myMessage.innerHTML = message; 
}

// helloWorld(); call function

const displayButton = document.getElementById("messageButton");
displayButton.addEventListener("click", helloWorld);
