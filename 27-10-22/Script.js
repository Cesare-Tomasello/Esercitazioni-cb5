// Esercizio 1

function calculator(value1, operator, value2) {
  switch (operator) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return "Seleziona un operatore valido!";
  }
}

console.log(calculator(100, "+", 50));

// Esercizio 2

const myHero = {
  primoNome: "Harry",
  secondoNome: "James",
  Cognome: "Potter",
  Anni: 42,
  Nato: "31/Luglio/1980",
  Genitori: {
    Padre: "James Potter",
    Madre: "Lili Potter",
  },
  superPoteri: "Mago",
  Titoli: ["Campione Tremaghi", "Cercatore", "Padrone della morte"],
  incantesimoPreferito: function () {
    console.log("Expecto... PATROOOONUUUUM!");
  },
};

console.log(myHero);
console.log(myHero.incantesimoPreferito);
console.log(myHero.Titoli[2]);

myHero.incantesimoPreferito = function () {
  console.log("Lumos!");
};

console.log(myHero.incantesimoPreferito);

const { secondoNome, Anni } = myHero;
console.log(secondoNome);

const myHeroKeys = Object.keys(myHero);
const myHeroValues = Object.values(myHero);
console.log(myHeroKeys);

console.log(myHeroValues[7][1]);

console.log(myHeroValues[5]["Padre"]);
