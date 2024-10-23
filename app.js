//!NOME DEL PASSEGGERO

//Qui Avvio l'Evento e la stampa con il click sul Bottone
document.getElementById("btnGeneretion").addEventListener("click", function () {
  //Da qui ottengo l'input del nome che andró a Stampare
  let nome = document.getElementById("nome").value;

  //Da qui parte la stampa
  document.getElementById("nomePasseggeroStamp").innerText = nome;
  //! CARROZZA
  //Creo un let che generi un numero casuale da 1 a 10 quando viene cliccato il bottone
  let carrozza = Math.floor(Math.random() * 10) + 1;

  //Stampa del numero generato
  document.getElementById("carrozzaStamp").innerText = carrozza;

  //!CODICE CP
  //Creo un let che generi un numero casuale da 1 a 10000 quando viene cliccato il bottone

  let cpNumber = Math.floor(Math.random() * 10000) + 1;

  //Stampa del numero generato
  document.getElementById("cpStamp").innerText = cpNumber;

  //! GENERAZIONE OFFERTA
  let eta = document.getElementById('eta').value.toLowerCase(); 
  let offerta = ''

  if (eta.includes('minorenne')){
    offerta = 'Sconto del 20%';
  } else if(eta.includes('over 65')){
    offerta = 'Sconto del 30%';
  }else {
    offerta = 'Biglietto Standard';
  }
  document.getElementById('offertaStamp').innerText = offerta;

  //! COSTO DEL BIGLIETTO 
  let km = document.getElementById('km').value
  const costoBase = km *0.21
  let price = ''

  if (eta.includes('minorenne')){
    price = costoBase * 0.80
   } else if(eta.includes('over 65')){
    price = costoBase * 0.70
   } else {
    price = costoBase
   }

   document.getElementById('totalPrice').innerText = `€ ${price}`;
});

//SCELTA CASUALE DELLA CARROZZA

// document.getElementById('btnGeneretion').addEventListener('click', function(){

//     //Creo un let che generi un numero casuale da 1 a 10 quando viene cliccato il bottone
//     let carrozza = Math.floor(Math.random() * 10) + 1;

//     //Stampa del numero generato
//     document.getElementById('carrozzaStamp').innerText = carrozza;
// })

// //CODICE CP
// document.getElementById("btnGeneretion").addEventListener("click", function () {
//   //Creo un let che generi un numero casuale da 1 a 10000 quando viene cliccato il bottone

//   let cpNumber = Math.floor(Math.random() * 10000) + 1;

//   //Stampa del numero generato
//   document.getElementById("cpStamp").innerText = cpNumber;
// });
