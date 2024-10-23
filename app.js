console.log('test')

//NOME DEL PASSEGGERO
document.getElementById('btnGeneration').addEventListener('click', function() {
    // Recupera il valore del campo nome
    const nomeInserito = document.getElementById('nome').value;
  
    // Aggiorna la tabella con il nome del passeggero
    document.getElementById('nomePasseggero').textContent = nomeInserito;
  });
  