//Oppgave 1
/*
let penis = 0

while (penis <= 50) {
    if (penis % 2 == 0) {
        document.write(penis + "<br>")
    }
    penis++
}
*/

//Opgave 2
/*
let penis = 0

while (penis <= 50) {
    if (penis % 5 == 0) {
        document.write(penis + "<br>")
    }
    penis++
}
*/

//Oppgave 3
/*
let penis = 0

while (penis <= 100) {
    if (penis % 5 == 0 && penis % 3 == 0) {
        document.write(penis + "<br>")
    }
    penis++
}
*/

//Oppgave 4

/*
function erPerfektTall(tall) {
    let sum = 0;
    let i = 1;
  
    while (i <= tall / 2) {
      if (tall % i === 0) {
        sum += i;
      }
      i++;
    }
  
    return sum === tall;
  }
  
  const brukerTall = parseInt(prompt("Skriv inn et tall:"));
  
  if (erPerfektTall(brukerTall)) {
    console.log(brukerTall + " er et perfekt tall.");
  } else {
    console.log(brukerTall + " er ikke et perfekt tall.");
  }
*/
//Oppgave 5
/*
function skrivPaerOgOdde() {
    let startTall = 1;
    const sluttTall = 20; // Endre dette tallet til det ønskede maksimale tallet
  
    const outputElement = document.getElementById("output");
  
    while (startTall <= sluttTall) {
        let klassenavn = startTall % 2 === 0 ? "blue" : "red";
        let tekst = startTall + " ";

        let spanElement = document.createElement("span");
        spanElement.className = klassenavn;
        spanElement.textContent = tekst;
        outputElement.appendChild(spanElement);
  
        startTall++;
    }
}
*/

//Oppgave 6

let riktigPassord = "hemmelig";
let antallForsok = 0;

while (antallForsok < 3) {
  let brukerPassord = prompt("Skriv inn passord:");

  if (brukerPassord === riktigPassord) {
    alert("Velkommen!");
    break; // Avslutter løkken når passordet er riktig
  } else {
    alert("Brukernavn eller passord er feil.");
    antallForsok++;

    if (antallForsok === 3) {
      alert("Passordet ditt er feil, snakk med IKT.");
    }
  }
}
