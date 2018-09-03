const button = document.querySelector(".btn");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const title = document.querySelector(".title");
const container = document.querySelector(".container");

const color = {
  red: null,
  green: null,
  blue: null
};

fetchAsyncAwait();

// Version 3 using Async Await:

async function fetchAsyncAwait() {
  try {
    const req = await fetch("quotes.json");
    const res = await req.json();
    const randomNum = Math.round(Math.random() * res.length - 1);
    quote.textContent = res[randomNum].text;
    author.textContent = res[randomNum].from;
    setColors();
    // If for some reason fetch is unsuccessful, execute the following functions
  } catch (err) {
    const error = err.name;
    quote.remove();
    button.remove();
    loadError(error);
  }
}

button.addEventListener("click", fetchAsyncAwait);

function generateRandomColor(colorObj) {
  colorObj.red = Math.round(Math.random() * 255);
  colorObj.green = Math.round(Math.random() * 255);
  colorObj.blue = Math.round(Math.random() * 255);
  return `rgb(${colorObj.red},${colorObj.green},${colorObj.blue})`;
}

function setColors() {
  const randColor = generateRandomColor(color);
  quote.style.color = randColor;
  author.style.color = randColor;
  title.style.color = randColor;
  button.style.backgroundColor = randColor;
  container.style.borderColor = randColor;
}

function loadError(err) {
  const errorColor = "#D32F2F";
  const error = document.createElement("p");

  // Remove border from container
  container.style.border = "none";

  // Set up styles for error
  error.textContent = `${err} encountered`;
  error.style.color = errorColor;
  error.style.textAlign = "center";
  error.style.fontSize = "3rem";
  // error.style.marginBottom = "1.8rem";
  // error.style.fontWeight = 00;

  // Set up styles for title
  title.textContent = "Error...";
  title.style.color = errorColor;
  title.style.fontSize = "6rem";

  // Append error to container
  container.appendChild(error);
}

//Version 1 using XMLHTttpRequest:

// function ajaxRequest() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "quotes.json", true);
//   // Can also use onreadyStateChange, but would need to include this.readyState === 4 in if statement
//   xhr.onload = function() {
//     if (this.status === 200) {
//       const parsedArr = JSON.parse(this.responseText);
//       const randomNum = Math.round(Math.random() * parsedArr.length - 1);
//       quote.textContent = parsedArr[randomNum].text;
//       author.textContent = parsedArr[randomNum].from;
//       setColors();
//     }
//   };
//   xhr.onerror = function(err) {
//     console.error(err);
//   };
//   xhr.send();
// }

// Version 2 using Fetch API:

// function ajaxRequest() {
//   fetch("quotes.json")
//     .then(req => req.json())
//     .then(res => {
//       const randomNum = Math.round(Math.random() * res.length - 1);
//       quote.textContent = res[randomNum].text;
//       author.textContent = res[randomNum].from;
//       setColors();
//       // Need to return response in case it has an error
//       return res;
//     })
//     .catch(err => console.error(err));
// }
