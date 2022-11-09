const urlArray = [];

for (let i = 1; i <= 150; i++) {
  urlArray.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
}

let request = urlArray.map((url) => fetch(url).then((res) => res.json()));

Promise.all(request).then((res) => res.map((r) => pokemonCardCreator(r)));

const bodyEl = document.querySelector("body");

const pokemonCardCreator = (data) => {
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  cardEl.classList.add(data.types[0].type.name);

  const cardImg = document.createElement("img");
  cardImg.setAttribute("src", data.sprites.other.dream_world.front_default);

  const cardId = document.createElement("p");
  cardId.className = "pokemon_id";
  cardId.textContent = "#" + data.id;

  const cardName = document.createElement("h1");
  cardName.textContent = data.name;

  const cardType = document.createElement("p");
  cardType.textContent = "Type: " + data.types[0].type.name;

  cardEl.append(cardImg, cardId, cardName, cardType);
  bodyEl.appendChild(cardEl);
};
