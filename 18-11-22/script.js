import { c, q, GET, POST, DELETE, PATCH, createCard } from "./utils.js";

const url = "http://localhost:3000/pokemon";
const form = document.forms.pokemon;
const element = form.elements;
const ul = q(".cards__list");

const formPatch = document.forms.editPokemon;
const elementsFP = formPatch.elements;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: element.id,
    name: element.name.value,
    type: element.type.value,
  };

  POST(url, data)
    .then((response) => response.json())
    .then((res) => {
      console.log("Success:", res);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

formPatch.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = elementsFP.id.value;

  const data = {
    name: elementsFP.name.value,
    type: elementsFP.type.value,
  };

  PATCH(url, id, data)
    .then(() => location.reload())
    .catch((e) => console.log(e));
});

window.onload = GET(url).then((res) =>
  res.map((pkm) => {
    try {
      createCard(url, ul, pkm?.name, pkm?.type, pkm?.id);
    } catch (error) {
      console.log(error);
    }
  })
);
