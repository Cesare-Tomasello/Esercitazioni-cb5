const urlAdvice = `https://api.adviceslip.com/advice`;
const button = document.getElementById("btn");
const statement = document.getElementById("statement");
const id = document.getElementById("id");
/**
 * Get url to fetch
 *
 * @param {string}   " " <-Dal momento che non ho parametro nella funzione non so che scrivere
 */
const message = () => {
  fetch(urlAdvice)
    .then((res) => res.json())
    .then((res) => card(res))
    .catch((e) => console.log(e));
};

// Funzione che, applicata al fetch,
// modifica il contenuto testuale della card
const card = (res) => {
  id.textContent = `ADVICE # ${res.slip.id}`;
  statement.textContent = `"${res.slip.advice}"`;
};

// Funzione che attiva il processo scaturito dal fetch
// sia al load della pagina, sia al click del button
const firstLoad = () => {
  button.addEventListener("click", () => message());
  message();
};

// Automazione che avvia la precedente funzione
// al caricamento della pagina
window.onload = firstLoad;
