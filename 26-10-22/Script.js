const Arr = ["Cesare", "Tomasello", "27", "Diploma"];
console.log(Arr);

Arr.splice(2, 1);
console.log(Arr);

Arr.splice(2, 0, "06-11-1994");
console.log(Arr);

Arr[(0, 0)] = Arr[(0, 0)].toUpperCase();
console.log(Arr);

Arr[(0, 1)] = Arr[(0, 1)].toUpperCase();
console.log(Arr);

// Esercizio Piramide

let hash = "#######";

for (let x = 0; x < 7; x += 1) {
  console.log(hash.slice(x));
}
