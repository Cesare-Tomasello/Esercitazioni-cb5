const c = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

const GET = async (BASE_URL) => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

const POST = async (BASE_URL, body) => {
  return await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

const DELETE = async (BASE_URL, id) => {
  return await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};

const PATCH = async (BASE_URL, id, body) => {
  return await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

const createCard = (url, parent, name, type, id) => {
  const wrapperEl = c("li");
  const fakeImg = c("div");
  const cardEl = c("div");
  const idEl = c("p");
  const nameEl = c("p");
  const typeEl = c("p");
  const btn = c("button");

  wrapperEl.className = "list__card";
  fakeImg.className = "fakeImg";

  idEl.textContent = "#" + id;
  nameEl.textContent = "Name: " + name;
  typeEl.textContent = "Type: " + type;
  btn.textContent = "Delete";

  btn.addEventListener("click", () => {
    DELETE(url, id).then(() => location.reload());
  });

  cardEl.append(idEl, fakeImg, nameEl, typeEl, btn);
  wrapperEl.append(cardEl);
  parent.appendChild(wrapperEl);
};

export { c, q, GET, POST, DELETE, PATCH, createCard };
