import regeneratorRuntime from "regenerator-runtime";
import axios from "axios";

import {
  button,
  quote,
  author,
  title,
  container,
  containerAPI
} from "./globals";

async function fetchAsyncAwait() {
  try {
    const req = await axios("/quotes");
    const res = req.data;

    const randomNum = Math.round(Math.random() * (res.length - 1));
    quote.textContent = res[randomNum].text;
    author.textContent = res[randomNum].from;
    setColors();
    // If for some reason fetch is unsuccessful, execute the following functions
  } catch (err) {
    console.log(err);
    quote.remove();
    button.remove();
    title.remove();
    author.remove();
    containerAPI.remove();
    loadError();
  }
}

function generateRandomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}

function setColors() {
  const randColor = generateRandomColor();
  quote.style.color = randColor;
  author.style.color = randColor;
  title.style.color = randColor;
  button.style.backgroundColor = randColor;
  container.style.borderColor = randColor;
}

function loadError() {
  const errorColor = "#D32F2F";
  const error = document.createElement("p");

  // Remove border from container
  container.style.border = "none";

  // Set up styles for error
  error.textContent = "Something went wrong...";
  error.style.color = errorColor;
  error.style.textAlign = "center";
  error.style.fontSize = "3.5rem";
  error.style.fontFamily = "fantasy";
  // Append error to container
  container.appendChild(error);
}

export default fetchAsyncAwait;
