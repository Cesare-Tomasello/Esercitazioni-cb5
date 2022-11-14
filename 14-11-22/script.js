let index = 1;
let result = `https://jsonplaceholder.typicode.com/posts/${index}`;

const loader = document.getElementById("loader");

fetch(result)
  .then((res) => res.json())
  .then((res) => createCard(res))
  .finally(() => {
    loader.style = "display:none";
    // Non riesco ad implementare il loader!
  });

const bodyEl = document.querySelector("body");

const buttonEl = document.createElement("div");
buttonEl.classList.add("buttonEl");
const prevButton = document.createElement("button");
prevButton.textContent = "Prev";
const nextButton = document.createElement("button");
nextButton.textContent = "Next";
buttonEl.append(prevButton, nextButton);

const cardEL = document.createElement("div");
const idEL = document.createElement("p");
const titleEl = document.createElement("h1");
const paragraphEl = document.createElement("p");

const createCard = (res) => {
  cardEL.classList.add("card");

  idEL.textContent = "# " + res.id;

  titleEl.textContent = res.title;

  paragraphEl.textContent = res.body;
  cardEL.append(idEL, titleEl, paragraphEl);
  bodyEl.append(cardEL, buttonEl);
};

nextButton.addEventListener("click", () => {
  index += 1;
  result = `https://jsonplaceholder.typicode.com/posts/${index}`;
  fetch(result)
    .then((res) => res.json())
    .then((res) => createCard(res));
  if (index >= 10) nextButton.disabled = true;
  if (index === 1) prevButton.disabled = true;
  else prevButton.disabled = false;
});

prevButton.addEventListener("click", () => {
  index -= 1;
  result = `https://jsonplaceholder.typicode.com/posts/${index}`;
  fetch(result)
    .then((res) => res.json())
    .then((res) => createCard(res));
  if (index === 1) prevButton.disabled = true;
  else nextButton.disabled = false;
});

window.onload = prevButton.disabled = true;
