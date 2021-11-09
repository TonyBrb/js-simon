/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

const numeri = document.querySelector('.numeriCasuali');
let contatore = 0;
const numeroCasuale = [];
const numeriInseriti = [];

for(let i=0; i<5; i++){
  numeroCasuale[i] = Math.floor((Math.random() * 10)+1);
  console.log(numeroCasuale[i]);
  numeri.innerHTML +=
  `
    ${numeroCasuale[i]}
  `;
}
setTimeout(inserisciNumeri, 3000);

function inserisciNumeri(){
  for(let i=0; i<5; i++){
  let numeroInserito = parseInt(prompt('Inserisci un numero che hai visto nella lista di numeri precedente'));
  if(numeroCasuale.includes(numeroInserito)){
    numeriInseriti.push(numeroInserito);
    contatore++;
  }
  }
  stampaMessaggio();
}
function stampaMessaggio(){
  if(contatore == 0){
    document.querySelector('.messaggio').innerHTML = 'Hai inserito 0 numeri presenti nella lista';
  }else{
    document.querySelector('.messaggio').innerHTML = `Hai inserito ${contatore} numeri presenti nella lista`;
    for(let numero of numeriInseriti){
      document.querySelector('.messaggio').innerHTML += `<br>${numero}`;
    }
  }
}

