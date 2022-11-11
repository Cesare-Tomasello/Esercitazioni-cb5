const bodyEl = document.querySelector("body");

const buttonEl = document.createElement("div");
buttonEl.classList.add("buttonEl");

const leftButton = document.createElement("button");
leftButton.textContent = "Prev";
const rightButton = document.createElement("button");
rightButton.textContent = "Next";
buttonEl.append(leftButton, rightButton);

let i = 1;
let result = `https://pokeapi.co/api/v2/pokemon/${i}`;

fetch(result)
  .then((res) => res.json())
  .then((res) => createCard(res));

const cardEL = document.createElement("div");
const pokeImg = document.createElement("img");
const pokeId = document.createElement("h2");
const pokeName = document.createElement("h1");
const pokeType = document.createElement("h2");

const createCard = (res) => {
  cardEL.classList.add("card");
  cardEL.classList.add(res.types[0].type.name);

  pokeImg.setAttribute("src", res.sprites.other.dream_world.front_default);

  if (res.id < 10) {
    pokeId.textContent = "#00" + res.id;
  } else if (res.id < 100) {
    pokeId.textContent = "#0" + res.id;
  } else {
    pokeId.textContent = "#" + res.id;
  }

  pokeName.textContent = res.name;

  pokeType.textContent = res.types[0].type.name;

  cardEL.append(pokeImg, pokeId, pokeName, pokeType);

  bodyEl.append(cardEL, buttonEl);

  console.log(bodyEl);
};

rightButton.addEventListener("click", () => {
  i++;
  result = `https://pokeapi.co/api/v2/pokemon/${i}`;
  fetch(result)
    .then((res) => res.json())
    .then((res) => createCard(res));
  if (i >= 10) rightButton.disabled = true;
  if (i === 1) leftButton.disabled = true;
  else leftButton.disabled = false;
});

leftButton.addEventListener("click", () => {
  i--;
  result = `https://pokeapi.co/api/v2/pokemon/${i}`;
  fetch(result)
    .then((res) => res.json())
    .then((res) => createCard(res));
  if (i <= 1) leftButton.disabled = true;
  else rightButton.disabled = false;
});

window.onload = leftButton.disabled = true;
