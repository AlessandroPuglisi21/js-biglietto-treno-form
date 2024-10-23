
//? ESERCIZIO CON FUNZIONI

//! FUNZIONE NOME E COGNOME

function stampaNomePasseggero() {
  let nome = document.getElementById("nome").value;
  if (nome === "") {
    console.error("Nessun nome inserito");
    return; // Esci dalla funzione se il nome è vuoto
  }
  document.getElementById("nomePasseggeroStamp").innerText = nome;
}

//! FUNZIONE GENERAZIONE CARROZZA

function generaCarrozza() {
  //Creo un let che generi un numero casuale da 1 a 10 quando viene cliccato il bottone
  let carrozza = Math.floor(Math.random() * 10) + 1;

  //Stampa del numero generato
  document.getElementById("carrozzaStamp").innerText = carrozza;
}

//! FUNZIONE GENERAZIONE CODICE CP
function generaCp() {
  //Creo un let che generi un numero casuale da 1 a 10000 quando viene cliccato il bottone

  let cpNumber = Math.floor(Math.random() * 10000) + 1;

  //Stampa del numero generato
  document.getElementById("cpStamp").innerText = cpNumber;
}

//! FUNZIONE GENERAZIONE SCONTO
function generazioneSconto() {
  let eta = document.getElementById("eta").value.toLowerCase();
  let offerta = "";

  //Decisione dello sconto
  if (eta.includes("minorenne")) {
    offerta = "Sconto del 20%";
  } else if (eta.includes("over 65")) {
    offerta = "Sconto del 30%";
  } else {
    offerta = "Biglietto Standard";
  }

  //Stampa
  document.getElementById("offertaStamp").innerText = offerta;
}

//! FUNZIONE COSTO DEL BIGLIETTO

function ticketPrice() {
  let eta = document.getElementById("eta").value.toLowerCase();
  let km = document.getElementById("km").value;
  const costoBase = km * 0.21;
  let price = "";

  if (eta.includes("minorenne")) {
    price = costoBase * 0.8;
  } else if (eta.includes("over 65")) {
    price = costoBase * 0.7;
  } else {
    price = costoBase;
  }

  document.getElementById("totalPrice").innerText = `€ ${price}`;
}

document.getElementById("btnGeneretion").addEventListener("click", function () {
  stampaNomePasseggero();
  generaCarrozza();
  generaCp();
  generazioneSconto();
  ticketPrice();
});
