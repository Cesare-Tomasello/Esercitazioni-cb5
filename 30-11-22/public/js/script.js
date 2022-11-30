const actorsUrl = "http://localhost:3000/attori/";
const actorUrl = "http://localhost:3000/attore/";
const containerEl = document.querySelector(".actors_gallery");
const createForm = document.forms.creation.elements;
const submit = createForm.createBtn;

const POST = async (BASE_URL, body) => {
  return await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ body }),
  });
};

const DELETE = async (BASE_URL, id) => {
  const res = await fetch(BASE_URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ id: id }),
  });
  return res.json();
};

// submit.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

const createCard = (items) => {
  for (let item of items) {
    const cardEl = document.createElement("div");
    const idEl = document.createElement("h1");
    const imgEl = document.createElement("div");
    const infoEl = document.createElement("div");
    const nameEl = document.createElement("h4");
    const surnameEl = document.createElement("h4");
    const birthEl = document.createElement("h5");
    const deleteBtn = document.createElement("button");

    deleteBtn.className = "deleteBtn";
    deleteBtn.textContent = "Delete";
    cardEl.className = "card";
    idEl.className = "card-id";
    imgEl.className = "card-img";
    infoEl.className = "card-info";
    nameEl.className = "card-name";
    surnameEl.className = "card-surname";
    birthEl.className = "card-birth";

    idEl.textContent = createId(item.id);
    nameEl.textContent = item.nome.toUpperCase();
    surnameEl.textContent = item.cognome.toUpperCase();
    birthEl.textContent = item.data;

    infoEl.append(nameEl, surnameEl, birthEl);
    cardEl.append(idEl, imgEl, infoEl, deleteBtn);
    containerEl.appendChild(cardEl);
    function createId(id) {
      if (!id) return null;
      if (id < 10) {
        return `0${id}`;
      } else if (id < 100) {
        return `00${id}`;
      }
      return id;
    }
    deleteBtn.addEventListener("click", () => {
      DELETE(actorUrl, item.id);
      location.reload();
    });
  }
};

fetch(actorsUrl)
  .then((res) => res.json())
  .then((res) => createCard(res));
