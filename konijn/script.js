let deleteButton = document.getElementById('deleteButton');
let countResult = document.getElementById('countResult');

//defineer variabele count om later te tellen hoeveel zinnen er worden verwijderd
let count = 0;

function deleteText() {
    let allParagraphs = document.getElementsByClassName("konijnText");
    let result = document.getElementById('result');

    // check aantal paragrafen
    console.log(allParagraphs.length)

    //Zet de variabele count op 0 zodat deze niet hoger opgeteld gaat worden als de functie nog een keer word uitgevoerd.
    count = 0;
  
    //maak innerhtml van resultaat leeg zodat de zinnen niet meerdere keren onder elkaar komen te staan
    result.innerHTML = "";

    //Voer deze functie zo vaak uit als er paragrafen zijn met de class konijntext
    for (i = 0; i < allParagraphs.length; i++) {

        // Defineer elke opgehaalde paragraagf als paragraphText
        let paragraphText = allParagraphs[i];

        // Defineer de paragraphtext specifieker en in lowercase zodat het zometeen makkelijker is om te te checken
        let singleParagraph = paragraphText.innerHTML.toLowerCase();

        // Check eerst of konijn niet voorkomt in een paragraaf (alle paragrafen zonder het woord konijn moeten worden weergegeven)
        if (!singleParagraph.includes("konijn")) {
            const br = document.createElement("br");
            result.innerHTML += singleParagraph;
            result.appendChild(br); 
        } else {
            count++;
            console.log(count);
        }
    }   

    countResult.innerHTML = 'Er zijn: ' + count + ' paragrafen verwijderd.';
}

deleteButton.addEventListener('click', deleteText);

