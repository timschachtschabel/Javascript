const multipleMessages = ["Hello World", "How are you doing?", "Goodbye world"];

function showMessages() {
    console.log(multipleMessages);
}

function showIndividualMessages() {
    for (let i =0; i < multipleMessages.length; i++) {  
        console.log(multipleMessages[i]); 
    }
}

const displayMessages = document.getElementById("arrayButton");

// Show all messsages in multipleMessages array at once
//displayMessages.addEventListener("click", showMessages);

// Show messages in multipleMessages array one by one
displayMessages.addEventListener("click", showIndividualMessages);

