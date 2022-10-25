let operation = prompt("1=Somma, 2=Sottrai, 3=Moltiplica, 4=Dividi");
operation = parseInt(operation);
let first = prompt("Primo numero");
first = parseInt(first);
let second = prompt("secondo numero");
second = parseInt(second);
let sum = first + second;
let sub = first - second;
let times = first * second;
let div = first / second;

if (operation == 1) {
  alert("Il tuo numero è: " + sum);
} else if (operation == 2) {
  alert("Il tuo numero è: " + sub);
} else if (operation == 3) {
  alert("Il tuo numero è: " + times);
} else if (operation == 4) {
  alert("Il tuo numero è: " + div);
} else if (operation < 1) {
  alert("Il numero operatore " + operation + " è troppo piccolo!");
} else if (operation > 4) {
  alert("Il numero operatore " + operation + " è troppo grande!");
} else {
  alert("Non hai scelto un operatore!");
}

// Non riesco a replicare nello switch, l'alert che spunta
// in caso il numero operatore sia più grande o più piccolo del range da 1 a 4

// switch (operation) {
//   case 1:
//     alert("Il tuo numero è: " + sum);
//     break;
//   case 2:
//     alert("Il tuo numero è: " + sub);
//     break;
//   case 3:
//     alert("Il tuo numero è: " + times);
//     break;
//   case 4:
//     alert("Il tuo numero è: " + div);
//     break;
//   default:
//     alert("Non hai scelto un operatore!");
// }
