import products from "./Products.js";

const bodyEl = document.querySelector("body");
const lowerEl = document.querySelector(".lower_prices");
const bestEl = document.querySelector(".best_seller");

const cardsCreator = (data, parent) => {
  const cardEl = document.createElement("div");
  const titleEl = document.createElement("h1");
  const imgEl = document.createElement("img");
  const categoryEl = document.createElement("h3");
  const paragraphEl = document.createElement("p");
  const ratingEl = document.createElement("h4");
  const priceEl = document.createElement("h2");

  cardEl.className = "card";
  titleEl.textContent = data.title;
  imgEl.setAttribute("src", data.image);
  imgEl.setAttribute("alt", "Image");
  categoryEl.textContent = data.category;
  paragraphEl.textContent = data.description;
  ratingEl.textContent = "Rating: " + data.rating.rate + " out of 5";
  priceEl.textContent = "€ " + data.price;
  cardEl.append(titleEl, imgEl, categoryEl, paragraphEl, ratingEl, priceEl);
  parent.appendChild(cardEl);
  console.log(ratingEl);
};

products.filter((product) => {
  if (product.price <= 50) {
    cardsCreator(product, lowerEl);
  } else {
    cardsCreator(product, bestEl);
  }
});
